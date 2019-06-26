const knex = require('knex')
const dbEngine = 'development'
const knexConfig = require('../knexfile.js')[dbEngine]

module.exports = knex(knexConfig)
