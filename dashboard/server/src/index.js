require('dotenv').config()
const { mergeSchemas } = require('graphql-tools')
const { ApolloServer } = require('apollo-server')

const getSchema = require('./schema')

const extendSchema = async () => {
  const typeExtensions = `
    extend type Ticket {
        
    }
  `
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
  try {
    const remoteSchema = await getSchema()
    const newSchema = mergeSchemas({
      //schemas: [remoteSchema, typeExtensions],
      schemas: remoteSchema,
      resolvers: schemaExtensionResolvers
    })
    return newSchema
  } catch (e) {
    console.error('👮‍', e)
    return e
  }
}

const startServer = async () => {
  try {
    const schema = await extendSchema()
    const server = new ApolloServer({
      schema
    })

    const { url } = await server.listen()
    console.log(`🐒 Server running at ${url}`)
  } catch (e) {
    console.error('🙈', e)
  }
}

try {
  startServer()
} catch (e) {
  console.error('🧛‍♂️', e)
}
