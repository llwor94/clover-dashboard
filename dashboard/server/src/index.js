require('dotenv').config()
const { mergeSchemas } = require('graphql-tools')
const { ApolloServer } = require('apollo-server')

const getSchema = require('./schema')
const communityServer = require('./communityAPI')

const extendSchema = async () => {
  const typeExtensions = `
    type ticket {
      title: String
      body: String
    }

    type space {
      id: Int
      name: String
    }

    extend type Query {
      tickets: [ticket]
      spaces: [space]
    }
   `

  const schemaExtensionResolvers = {
    Query: {
      tickets: async (parent, args, context, info) => {
        try {
          const { list } = await communityServer.query.tickets()
          return list.map(item => ({ title: item.title, body: item.body }))
        } catch (e) {
          console.log(e)
        }
      },
      spaces: async (parent, args, context, info) => {
        try {
          const { list } = await communityServer.query.spaces()
          return list.map(item => ({ id: item.id, name: item.name }))
        } catch (e) {
          console.log(e)
        }
      }
    }
  }

  try {
    const remoteSchema = await getSchema()
    const newSchema = mergeSchemas({
      schemas: [remoteSchema, typeExtensions],
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
