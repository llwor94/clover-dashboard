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
      createdAt: String
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

  // const schemaExtensionResolvers = {
  //   Query: {
  //     tickets: {
  //       info: {
  //       resolve(parent, args, context, info) {
  //       try {
  //         const { list } = await communityServer.query.tickets(12)
  //         return list.map(item => ({ title: item.title, body: item.body, createdAt: item.creationDateFormatted }))
  //       } catch (e) {
  //         console.log(e)
  //       }
  //     },
  //   },
  //   },
  //     spaces: async (parent, args, context, info) => {
  //       try {
  //         const { list } = await communityServer.query.spaces()
  //         return list.map(item => ({ id: item.id, name: item.name }))
  //       } catch (e) {
  //         console.log(e)
  //       }
  //     }
  //   }
  // }

  const schemaExtensionResolvers = {
    ticket: {
      ref: {
        resolve(parent, args, context, info) {
          return info.mergeInfo.delegateToSchema({
            schema: getSchema,
            operation: 'query',
            fieldName: 'ticket_ref',
            args: {
              external_id: parent.id
            },
            context,
            info
          })
        }
      }
    }
  }

  // extend author to have city_weather data
  const linkHasuraTypeDefs = `
    extend type ticket {
      ref: ticket_ref
    }
  `

  try {
    const remoteSchema = await getSchema()
    const newSchema = mergeSchemas({
      schemas: [remoteSchema, communityServer, linkHasuraTypeDefs],
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
