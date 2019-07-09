exports.up = function(knex, Promise) {
  return knex.schema.createTable('Ticket_Tag', table => {
    table.increments()
    table.integer('ticket_id').references('Ticket.id')
    table.integer('tag_id').references('Tag.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Ticket_Tag')
}
