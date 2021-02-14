exports.up = function (knex) {
  return knex.schema.createTable('ecue_coef', (table) => {
    table.increments();
    table.integer('coef');
    table.boolean('active');
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
  return knex.schema.dropTable('ecue_coef');
};
