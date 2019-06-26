exports.up = function(knex, Promise) {
	return knex.schema.createTable('Tag', table => {
		table.increments();
		table.timestamp('createdAt').defaultTo(knex.fn.now());
		table.string('label').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('Tag');
};
