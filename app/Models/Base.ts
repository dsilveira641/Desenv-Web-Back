
import Database from "@ioc:Adonis/Lucid/Database";

export default class Base {

    constructor(
        public table: string,
        public IdField: string
    ) {}
        
    async createItem(item) {
        let id;
        [id]= await Database.table(this.table).insert(item).returning(this.IdField);
        return this.getEntity(id[this.IdField]);
    }

    async updateItem(id, item) {
        return await Database.from(this.table).update(item).where(this.IdField, id);
    }

    async deleteItem(id) {
        return await Database.from(this.table).delete().where(this.IdField, id);
    }
    
    async listItem(id) {
        let list;
        if (id !== "all") {
            list = this.getEntity(id);
        }
        else {
            list = this.listScope();
        }
    
        return await list;
    }
 
    async getEntity(id: number) {
        return await Database.from(this.table).where(this.IdField, id).first();
    }

    async listScope() {
        return await Database.from(this.table);
    } 
}

