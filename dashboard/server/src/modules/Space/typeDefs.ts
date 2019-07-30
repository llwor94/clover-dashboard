const typeDefs = `
  type Space {
    id: Int!
    name: String
    totalCount: Int
  }

  extend type Query {
    spaces: [Space]
  }
`

export { typeDefs }
