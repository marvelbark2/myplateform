exports.up = (knex) => knex.schema.createTable('actors', (table) => {
  table.increments();
  table.text('name');
});

exports.down = (knex) => knex.schema.dropTable('actors');
