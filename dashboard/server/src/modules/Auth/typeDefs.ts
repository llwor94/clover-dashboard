const typeDefs = `
  type AuthResponse {
    token: String
    name: String
  }

  input AuthInput {
    accessToken: String!
  }

  type Admin {
    id: Int
    name: String!
    image_url: String
    tickets: [Ticket]
  }

  type Query {
    isLoggedIn: Admin
  }

  type Mutation {
    authGoogle(input: AuthInput!): AuthResponse
    createAdmin(name: String!, image_url: String): Admin
    assignAdmin(adminId: Int!, ticketId: Int!): String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

export { typeDefs }
