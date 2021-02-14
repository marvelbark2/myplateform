exports.up = (knex) => knex.schema.createTable('shows', (table) => {
  table.increments();
  table.text('name');
  table.text('type');
});

exports.down = (knex) => knex.schema.dropTable('shows');
