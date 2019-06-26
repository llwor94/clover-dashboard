
exports.up = function(knex, Promise) {
	return knex.schema.createTable('Admin', table => {
		table.increments();
        table.string('name').notNullable();
        table.string('image_url');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('Admin');
};
