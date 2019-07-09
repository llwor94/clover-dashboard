const typeDefs = `
  type Space {
    id: Int!
    name: String
  }

  extend type Query {
    spaces: [Space]
  }
`

export { typeDefs }
