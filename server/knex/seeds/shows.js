exports.seed = (knex) => {
  // Deletes ALL existing entries
 return  knex('shows').del()
    .then(() => {
      // Inserts seed entries
     return knex('shows').insert([
        {
          id: 1,
          name: 'Ezel',
          type: 'Tv Show'
        },
        {
          id: 2,
          name: 'Person Of Interest',
          type: 'Tv Show'
        },
        {
          id: 3,
          name: 'The Mentalist',
          type: 'Tv Show'
        }
      ]);
    });
};
