const knex = require('knex')
const knexfile = require('./knexfile')

const exportConfig = () => {
  const env = process.env.NODE_ENV || 'development'
  const knexConfig = knexfile[env]

  return knexConfig
}

module.exports = knex(exportConfig())
