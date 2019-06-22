require('dotenv').config()
const { mergeSchemas } = require('graphql-tools')
const { ApolloServer } = require('apollo-server')

const getSchema = require('./schema')
const communityServer = require('./communityAPI')

const extendSchema = async () => {
  const typeExtensions = `
    extend type tickets {
        createdAt: Int
        title: String
        body: String
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
    //hi: async (parent, args, context, info) => context
    tickets: async (parent, args, context, info) => {
      
      console.log(context)
    }
    /*
    to do -->
    */
  }
  try {
    const remoteSchema = await getSchema()
    const newSchema = mergeSchemas({
      schemas: [remoteSchema, typeExtensions],
      //schemas: [getSchema, typeExtensions],
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
    const response = await communityServer.getTickets();
    //console.log(response)
    const schema = await extendSchema()
    //const schema = await getSchema()
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
