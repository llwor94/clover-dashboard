
exports.up = function(knex, Promise) {
	return knex.schema.createTable('Ticket', table => {
		table.increments();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.integer('external_id')
		table.integer('assigned_to_id').references('Admin.id');
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Ticket');
};
