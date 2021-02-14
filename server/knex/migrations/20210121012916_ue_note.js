exports.up = function (knex) {
  return knex.schema.createTable('ue_note', (table) => {
    table.increments();
    table.decimal('note');
    table.boolean('active');
    table
      .integer('ue_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('ues')
      .onDelete('SET NULL');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('ue_note');
};
