exports.up = function (knex) {
  return knex.schema.createTable('ue_coef', (table) => {
    table.increments();
    table.decimal('coef');
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
  return knex.schema.dropTable('ue_coef');
};
