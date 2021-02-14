exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name');
    table.string('email');
    table.string('password');
    table.boolean('active');
    table.datetime('createdAt');
    table.datetime('updatedAt');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
