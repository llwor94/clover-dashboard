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
    name: Name
    image_url: String
    google_id: String
    tickets: [Ticket]
  }

  type Name {
    firstName: String
    lastName: String
  }

  type Query {
    loggedInUser: Admin
    auth(idToken: String): Admin
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
