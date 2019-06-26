require('dotenv').config()
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const playground = require('graphql-playground-middleware-express').default

const community = require('./communityAPI')
const db = require('../db/helpers')

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
        assignedTo: Admin
    }
    type Space {
        id: Int!
        name: String
    }
    type Query {
        hello: String
        tickets: [Ticket]
        spaces: [Space]
    }
    type Mutation {
        createAdmin(name: String!, image_url: String): Admin
        assignAdmin(adminId: Int!, ticketId: Int!): String
    }
`)

const root = {
    tickets: async (spaceId) => {
        let data = await community.getTickets(spaceId);
        let internalTickets = await db.getTickets();

        return data.reduce((arr, curr) => {
           let internal_ticket = internalTickets.find(t => t.external_id === curr.id)
           
            let ticket = {id: curr.id, title: curr.title, body: curr.body}
            if (internal_ticket) {
                ticket.assignedTo = {id: internal_ticket.assigned_to_id, name: internal_ticket.name, image_url: internal_ticket.image_url}
            }
          arr = [...arr, ticket]
           return arr;
        }, [])  
    },
    spaces: async () => {
        let data = await community.getSpaces();
        return data.map(({id, name}) => ({id, name}))
    },
    createAdmin: async ({name, image_url}) => {
        let [admin] = await db.createAdmin(name, image_url)

        return {...admin, tickets: []}
    },
    assignAdmin: async ({adminId, ticketId}) => {
        let [ticket] = await db.assignAdmin(adminId, ticketId)
        console.log(ticket)
        return 'yay'
    }
}

const app = express()
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))
app.get('/playground', playground({ endpoint: '/graphql' }))
app.listen(4000)
console.log('Running at 4000 mon')