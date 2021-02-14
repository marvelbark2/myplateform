exports.up = function (knex) {
  return knex.schema.alterTable('ues', (table) => {
    table
      .integer('semestre_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('semestre')
      .onDelete('SET NULL');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('ues', (t) => {
    t.integer('semestre_id').nullable().alter();
  });
};
