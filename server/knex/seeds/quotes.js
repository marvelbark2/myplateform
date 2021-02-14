exports.seed = (knex) =>
  // Deletes ALL existing entries
  // eslint-disable-next-line implicit-arrow-linebreak
  knex('quotes').truncate()
    .then(() => knex('quotes').insert([
      {
        id: 1,
        actor_id: 1,
        show_id: 1,
        quote: 'Those who go beneath the surface, do so at their peril'
      },
      {
        id: 2,
        actor_id: 2,
        show_id: 2,
        quote: 'Only the paranoid survive.'
      },
      {
        id: 3,
        actor_id: 3,
        show_id: 3,
        quote: 'Discipline always comes with a price.'
      },
      {
        id: 4,
        actor_id: 3,
        show_id: 3,
        quote: 'The human mind is amazingly powerful. It can do things for real that sometimes feel like magic.'
      },
      {
        id: 5,
        actor_id: 3,
        show_id: 3,
        quote: 'Every good plan needs a little bit of luck.'
      }
    ]));
