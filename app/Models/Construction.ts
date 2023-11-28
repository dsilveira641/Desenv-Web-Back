import Database from "@ioc:Adonis/Lucid/Database";
import Base from "./Base";

export default class Construction extends Base {
    constructor() {
        super("constructions", "CTR_id"); 
    }

    async createItem(item: any): Promise<any[]> {
        let obraSaved = await super.createItem(item.obra);

        return obraSaved;
    
        for (let maaterial of item.materiais) {
            await Database.table("constructon_materials").insert({
                CTMR_ConstructionId:  obraSaved.CTR_id,
                CTRM_MaterialsId: maaterial.MTR_id
            })
        }
        return obraSaved;
    }
}