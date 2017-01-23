module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'lunar_dev'
    }
  },

  testing: {
    client: 'postgresql',
    connection: { database: 'lunar_test' }
  },

  circle: {
    client:'postgresql',
    connection: {
      database: 'circle_test'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
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
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
