exports.up = function(knex, Promise) {
  return knex.schema.table('Admin', table => {
    table.dropColumn('name')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('Admin')
}
