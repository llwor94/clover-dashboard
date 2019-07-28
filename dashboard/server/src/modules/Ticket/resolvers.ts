const { getTickets } = require('../../lib/db/helpers')
import community from '../../lib/community'
import { GraphQLResolveInfo } from 'graphql'

type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any

type Remapped<T> = {
  [P in keyof T]: (
    parent: null | undefined,
    args: FirstArgument<T[P]>,
    info?: GraphQLResolveInfo
  ) => any
}

const tickets: Remapped<{}> = async (_, { spaceId }) => {
  try {
    const { list, totalCount } = await community.getTickets(spaceId)

    const dbTickets = await getTickets()

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
            space: {
              id: curr.primaryContainerId
            },
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
}

export { tickets }
