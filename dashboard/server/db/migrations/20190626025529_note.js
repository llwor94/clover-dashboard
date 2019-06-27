exports.up = function(knex, Promise) {
  return knex.schema.createTable('Note', table => {
    table.increments()
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    table.text('text').notNullable()
    table.integer('author_id').references('Admin.id')
    table.integer('parent_id').references('Note.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Note')
}
