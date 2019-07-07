const typeDefs = `
  type Space {
    id: Int!
    name: String
  }

  type Query {
    spaces: [Space]
  }
`

export { typeDefs }
