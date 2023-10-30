import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('USR_Id');
      table.string('USR_UserName');
      table.string('USR_Password');
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
