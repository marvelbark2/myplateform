exports.up = function (knex) {
  return knex.schema.createTable('epv_coef', (table) => {
    table.increments();
    table.integer('coef');
    table.boolean('active');
    table
      .integer('epv_type_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('epv_type')
      .onDelete('SET NULL');
    table
      .integer('ecue_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('ecues')
      .onDelete('SET NULL');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('epv_coef');
};
