// Update with your config settings.
require('dotenv').config({ path: '../.env' });

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DbName,
      user: process.env.DbUser,
      password: process.env.DbPass
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgresql://postgres:Aqwzsxedc-123@172.31.249.106:5432/myplate',
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './seeds'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
