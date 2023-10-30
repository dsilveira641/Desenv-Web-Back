import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'constructon_materials'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer("CTMR_ConstructionId")
           .unsigned()
           .notNullable()
           .references("CTR_id")
           .inTable("constructions")
           .onUpdate('CASCADE')
           .onDelete('CASCADE')

      table.integer("CTRM_MaterialsId")
           .unsigned()
           .notNullable()
           .references("MTR_id")
           .inTable("material")
           .onUpdate('CASCADE')
           .onDelete('CASCADE')
    })
  }
    

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
