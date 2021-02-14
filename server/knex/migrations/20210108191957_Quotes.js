exports.up = (knex) => knex.schema.createTable('quotes', (table) => {
  table.increments();
  table.text('quote');
  table
    .integer('actor_id')
    .unsigned()
    .index()
    .references('id')
    .inTable('actors')
    .onDelete('SET NULL');
  table
    .integer('show_id')
    .unsigned()
    .index()
    .references('id')
    .inTable('shows')
    .onDelete('SET NULL');
});

exports.down = (knex) => knex.schema.dropTable('actors');
