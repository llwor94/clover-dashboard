const { makeRemoteExecutableSchema, introspectSchema } = require('graphql-tools')
const { HttpLink } = require('apollo-link-http')
const fetch = require('node-fetch')

const { GRAPHQL_ENDPOINT, HASURA_GRAPHQL_ADMIN_SECRET } = process.env

module.exports = async () => {
  const link = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    headers: {
      'X-Hasura-admin-secret': HASURA_GRAPHQL_ADMIN_SECRET
    },
    fetch
  })

  try {
    const remoteSchema = await introspectSchema(link)
    const executableRemoteSchema = makeRemoteExecutableSchema({
      schema: remoteSchema,
      link
    })
    return executableRemoteSchema
  } catch (e) {
    console.log('hi', e)
    return e
  }
}
