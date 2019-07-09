const { resolve } = require('path')

require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
      tableName: 'dbmigrations'
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
      directory: './migrations',
      tableName: 'dbmigrations'
    }
  }
}
