// require('dotenv').config()
// const { mergeSchemas } = require('graphql-tools')
// const { ApolloServer } = require('apollo-server')

// const getSchema = require('./schema')
// //const communityServer = require('./communityAPI')

// const extendSchema = async () => {
  

//   // const schemaExtensionResolvers = {
//   //   Query: {
//   //     tickets: {
//   //       info: {
//   //       resolve(parent, args, context, info) {
//   //       try {
//   //         const { list } = await communityServer.query.tickets(12)
//   //         return list.map(item => ({ title: item.title, body: item.body, createdAt: item.creationDateFormatted }))
//   //       } catch (e) {
//   //         console.log(e)
//   //       }
//   //     },
//   //   },
//   //   },
//   //     spaces: async (parent, args, context, info) => {
//   //       try {
//   //         const { list } = await communityServer.query.spaces()
//   //         return list.map(item => ({ id: item.id, name: item.name }))
//   //       } catch (e) {
//   //         console.log(e)
//   //       }
//   //     }
//   //   }
//   // }

//   const schemaExtensionResolvers = {
//     Query: {
//       ticket:  async (parent, args, context, info) => {
//       console.log(info)
//           const schema = await getSchema()
//           return info.mergeInfo.delegateToSchema({
//             schema,
//             operation: 'query',
//             fieldName: 'ticket',
//             //args: {where: {external_id: parent.id}},
//             context,
//             info
//           })
        
//     }
//     }
//   }

//   // const linkHasuraTypeDefs = `
//   //   extend type ticket {
//   //     ref: ticket
//   //   }
//   // `

//   try {
//     const remoteSchema = await getSchema()
//     const newSchema = mergeSchemas({
//       schemas: [remoteSchema],
//       resolvers: schemaExtensionResolvers
//     })
//     return newSchema
//   } catch (e) {
//     console.error('👮‍', e)
//     return e
//   }
// }

// const startServer = async () => {
//   try {
//     const schema = await extendSchema()
//     const server = new ApolloServer({
//       schema
//     })

//     const { url } = await server.listen()
//     console.log(`🐒 Server running at ${url}`)
//   } catch (e) {
//     console.error('🙈', e)
//   }
// }

// try {
//   startServer()
// } catch (e) {
//   console.error('🧛‍♂️', e)
// }
