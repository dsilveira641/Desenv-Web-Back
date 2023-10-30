import Base from "./Base";
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends Base {
    constructor() {
        super("users", "USR_Id"); 
    }

    async createItem(item): Promise<any> {
        item.USR_Password = Hash.make(item.USR_Password);
        return await super.createItem(item);
    }
}