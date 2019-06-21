const { makeExecutableSchema, introspectSchema } = require('graphql-tools')
const { HttpLink } = require('apollo-link-http')
const fetch = require('node-fetch')

module.exports = async () => {
  const link = new HttpLink({
    uri: process.env.GRAPHQL_ENDPOINT,
    fetch
  })
  try {
    const remoteSchema = await introspectSchema(link)
    const executableRemoteSchema = makeExecutableSchema({
      schema: remoteSchema,
      link
    })
    return executableRemoteSchema
  } catch (e) {
    return e
  }
}
