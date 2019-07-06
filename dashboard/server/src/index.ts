import { config } from 'dotenv'
import * as cors from 'cors'
import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import playground from 'graphql-playground-middleware-express'

import community from './communityAPI'
import db from '../db/helpers'

config()
const app = express()

const schema = buildSchema(`
    type Admin {
        id: Int!
        name: String!
        image_url: String
        tickets: [Ticket]
    }
    type Ticket {
        id: Int!
        title: String!
        body: String!
        createdAt: String
        assignedTo: Admin
        author: User
        topics: [Topic]
    }
    type User {
        id: Int
        username: String
        reputation: Int
    }
    type Space {
        id: Int!
        name: String
    }
    type Topic {
        id: Int
        name: String
    }
    type TicketsResponse {
      tickets: [Ticket]
      totalCount: Int
    }
    type Query {
        hello: String
        tickets(spaceId: Int): TicketsResponse
        spaces: [Space]
    }
    type Mutation {
        createAdmin(name: String!, image_url: String): Admin
        assignAdmin(adminId: Int!, ticketId: Int!): String
    }
`)

const rootValue = {
  tickets: async ({ spaceId }) => {
    try {
      const { list, totalCount } = await community.getTickets(spaceId)
      const dbTickets = await db.getTickets()

      if (list && Array.isArray(list)) {
        const tickets = list
          .reduce((arr, curr) => {
            const dbTicket = dbTickets.find(t => t.external_id === curr.id)

            const ticket = {
              assignedTo: {},
              id: curr.id,
              title: curr.title,
              body: curr.body,
              createdAt: curr.creationDate,
              author: curr.author,
              topics: curr.topics.map(({ id, name }) => ({ id, name }))
            }
            if (dbTicket) {
              ticket.assignedTo = {
                id: dbTicket.assigned_to_id,
                name: dbTicket.name,
                image_url: dbTicket.image_url
              }
            }

            return [...arr, ticket]
          }, [])
          .reverse()
        return { tickets, totalCount }
      }
    } catch (e) {
      console.error(e)
    }
  },
  spaces: async () => {
    try {
      const data = await community.getSpaces()
      console.error(data)
      return data.map(({ id, name }) => ({ id, name }))
    } catch (e) {
      console.error(e)
    }
  },
  createAdmin: async ({ name, image_url }) => {
    const [admin] = await db.createAdmin(name, image_url)

    return { ...admin, tickets: [] }
  },
  assignAdmin: async ({ adminId, ticketId }) => {
    const [ticket] = await db.assignAdmin(adminId, ticketId)
    console.error(ticket)
    // do we want to return a ticket or wat, d00d?
    return 'yay'
  }
}

app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
)

app.get('/playground', playground({ endpoint: '/graphql' }))
app.listen(4000, () => console.error('Running at 4000 mon 🔥'))
