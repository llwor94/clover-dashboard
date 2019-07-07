const typeDefs = `
  type Admin {
    id: Int!
    name: String!
    image_url: String
    tickets: [Ticket]
  }

  type Mutation {
    createAdmin(name: String!, image_url: String): Admin
    assignAdmin(adminId: Int!, ticketId: Int!): String
  }
`

export { typeDefs }
