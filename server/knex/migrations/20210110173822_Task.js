exports.up = function (knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments();
    table.integer('level');
    table.string('title', 100);
    table.text('description');
    table.datetime('deadline');
    table.datetime('created_at').defaultTo(new Date());
  });
};

// eslint-disable-next-line func-names
exports.down = function (knex) {
  return knex.schema.dropTable('tasks');
};
