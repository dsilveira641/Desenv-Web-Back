import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'material'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('MTR_id')
      table.string('MTR_Name')
      table.integer('MTR_Unit')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
