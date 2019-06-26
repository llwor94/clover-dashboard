const axios = require('axios')
const { ApolloServer, gql } = require('apollo-server')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = gql`
  type ticket {
    id: String
    title: String
    body: String
    createdAt: String
  }
  type space {
    id: String
    name: String
  }
  type Query {
    tickets(spaceId: Int): [ticket]
    spaces: [space]
  }
`
const server = axios.create({
  baseURL: `https://community.clover.com/services/v2/`,
  headers: { Authorization: `Basic ${process.env.TEST_AUTH}` }
})

const resolvers = {
  Query: {
    tickets: async (_, { spaceId }) => {
      try {
        let { data } = await server({
          method: 'get',
          url: '/question.json',
          params: { answered: false, spaceId, sort: 'newest' }
        })

        return data.list.map(item => ({
          title: item.title,
          body: item.body,
          createdAt: item.creationDateFormatted,
          id: item.id
        }))
      } catch (e) {
        console.log(e)
      }
    },
    spaces: async () => {
      try {
        let { data } = await server({ method: 'get', url: '/space.json' })
        return data.list.map(({ id, name }) => ({ id, name }))
      } catch (e) {
        console.log(e)
      }
    }
  }
}

module.exports = makeExecutableSchema({ typeDefs, resolvers })

// const query = {
//   tickets: async spaceId => {
//     try {
//       let { data } = await server({
//         method: 'get',
//         url: '/question.json',
//         query: { answered: false, spaceId, sort: "newest" }
//       })
//       return data
//     } catch (e) {
//       console.log(e)
//     }
//   },
//   spaces: async () => {
//     try {
//       let { data } = await server({ method: 'get', url: '/space.json' })
//       return data
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }

// module.exports = { query }
