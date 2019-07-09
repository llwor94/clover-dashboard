const { resolve } = require('path')

require('dotenv').config({ path: resolve(__dirname, '../../../.env') })

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
      directory: resolve(__dirname, './migrations'),
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
      directory: resolve(__dirname, './migrations'),
      tableName: 'dbmigrations'
    }
  }
}
