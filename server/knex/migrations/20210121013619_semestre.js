exports.up = function (knex) {
  return knex.schema.createTable('semestre', (table) => {
    table.increments();
    table.string('abbrevation');
    table.string('designation');
    table.boolean('active');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('semestre');
};
