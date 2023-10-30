import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'constructions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CTR_id')
      table.string('CTR_Name')
      table.dateTime('CTR_DeliveryForecast')
      table.integer('CTR_AddedValue')
      table.integer('CTR_AuthorizedBudget')
      table.boolean('CTR_Status')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
