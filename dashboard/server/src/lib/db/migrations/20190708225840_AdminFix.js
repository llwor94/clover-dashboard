exports.up = function(knex, Promise) {
  return knex.schema.table('Admin', table => {
    table.string('google_id')
    table.string('community_username')
    table.string('community_password')
    table.dropColumn('image_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('Admin', table => {
    table.dropColumn('google_id')
    table.dropColumn('community_username')
    table.dropColumn('community_password')
  })
}
