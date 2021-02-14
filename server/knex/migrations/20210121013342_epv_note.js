exports.up = function (knex) {
  return knex.schema.createTable('epv_note', (table) => {
    table.increments();
    table.decimal('note');
    table.boolean('active');
    table
      .integer('ecue_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('ecues')
      .onDelete('SET NULL');
    table
      .integer('epv_type_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('epv_type')
      .onDelete('SET NULL');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('epv_note');
};
