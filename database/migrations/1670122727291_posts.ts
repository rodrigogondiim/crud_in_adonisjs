import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .unique()
        .notNullable()
        .defaultTo(this.raw('uuid_generate_v4()'))
        .primary()
      table.string('title')
      table.string('description')
      table
        .uuid('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
