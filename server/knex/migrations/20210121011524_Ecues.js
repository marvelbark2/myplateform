exports.up = function (knex) {
  return knex.schema.createTable('ecues', (table) => {
    table.increments();
    table.string('abbrevation');
    table.string('designation');
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
  knex.schema.dropTable('ecues');
};
