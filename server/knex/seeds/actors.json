exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('actors').del()
    .then(() => {
      // Inserts seed entries
     return knex('actors').insert([
        {
          id: 1,
          name: 'Ezel Burakdar'
        },
        {
          id: 2,
          name: 'Harold Finch'
        },
        {
          id: 3,
          name: 'Patrick Jane'
        }
      ]);
    });
};
