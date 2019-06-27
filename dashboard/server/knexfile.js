module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'lworthington',
      database: 'lworthington'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
}
