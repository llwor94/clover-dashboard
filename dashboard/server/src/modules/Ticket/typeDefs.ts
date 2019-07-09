const typeDefs = `
  type Ticket {
    id: Int!
    title: String!
    body: String!
    createdAt: String
    assignedTo: Admin
    author: User
    topics: [Topic]
  }

  type TicketsResponse {
    tickets: [Ticket]
    totalCount: Int
  }

  extend type Query {
    tickets(spaceId: Int): TicketsResponse
  }
`

export { typeDefs }
