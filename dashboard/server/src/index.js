require('dotenv').config()
const { mergeSchemas } = require('graphql-tools')
const { ApolloServer } = require('apollo-server')

const getSchema = require('./schema')

const extendSchema = async () => {
  const typeExtensions = ``
  /* 
     to do --> 
        extend admin, tickets w/ answerhub data
        create types-
            ◦ spaces
            ◦ user
    */

  const schemaExtensionResolvers = {
    /*
    to do -->
  */
  }
  const remoteSchema = await getSchema()
  const newSchema = mergeSchemas({
    schemas: [remoteSchema, typeExtensions],
    resolvers: schemaExtensionResolvers
  })
  return newSchema
}

const startServer = async () => {
  const schema = await extendSchema()
  const server = new ApolloServer({
    schema
  })
  server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`)
  })
}

try {
  startServer()
} catch (e) {
  console.error(e)
}
