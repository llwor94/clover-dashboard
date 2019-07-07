import { makeExecutableSchema } from 'graphql-tools'

import { adminTypeDefs } from './Admin/'
import { spaceTypeDefs, spaces } from './Space/'
import { userTypeDefs } from './User/'
import { ticketTypeDefs, tickets } from './Ticket/'
import { topicTypeDefs } from './Topic/'

const typeDefs = [adminTypeDefs, spaceTypeDefs, ticketTypeDefs, topicTypeDefs, userTypeDefs]

const resolvers = {
  Query: {
    tickets,
    spaces
  }
}

export default makeExecutableSchema({ typeDefs, resolvers })
