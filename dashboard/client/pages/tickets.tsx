import React, { createContext, useEffect, useMemo, useState } from 'react'

import Filter from '../components/Filter'
import Header from '../components/Header'
import Layout from '../components/Layout'
import SubMenu from '../components/SubMenu'
import TableHeader from '../components/TableHeader'
import Ticket from '../components/Ticket'

import withAuth from '../lib/withAuth'
import { getSpaces, getTickets } from '../lib/gql/query'
import { ITicket, ITicketsContext, TicketsProps } from '../lib/typings/interfaces'

export const TicketsContext: ITicketsContext = createContext({})

const TEMP_ADMINS = [
  {
    id: 0,
    name: 'frank',
    image_url: 'frank.png',
    tickets: []
  },
  {
    id: 1,
    name: 'raymond',
    image_url: 'raymond.png',
    tickets: []
  },
  {
    id: 2,
    name: 'emily',
    image_url: 'emily.png',
    tickets: []
  },
  {
    id: 3,
    name: 'lauren',
    image_url: 'lauren.png',
    tickets: []
  },
  {
    id: 4,
    name: 'other',
    image_url: 'circle.svg',
    tickets: []
  }
]

const Tickets = props => {
  const { query } = props
  const [ticketsList, setTickets] = useState()
  const [spaces, setSpaces] = useState()

  useEffect(() => {
    let didCancel = false
    ;(async () => {
      try {
        const {
          data: { spaces }
        } = await getSpaces()

        setSpaces(spaces)
      } catch (e) {
        console.error(e.message)
      }

      if (query && query.space) {
        const { data } = await getTickets(query.space)

        if (!didCancel && data && data.tickets) {
          // Add `selected` field to each Ticket
          setTickets(
            data.tickets.tickets.map((ticket: ITicket) => ({
              ...ticket,
              assignedTo: {
                ...TEMP_ADMINS[Math.round(Math.random() * 4)],
                tickets: [ticket.id]
              },
              selected: false
            }))
          )
        }
      }
    })()
    return () => {
      didCancel = true
    }
  }, [query])

  const toggleCheckbox = (id: string) => () => {
    const newTickets = ticketsList.map(ticket =>
      ticket.id === id ? { ...ticket, selected: !ticket.selected } : ticket
    )
    setTickets(newTickets)
  }

  const space =
    Array.isArray(spaces) && query
      ? spaces.find(({ id }) => id === parseInt(query.space, 10))
      : undefined

  const tickets = ticketsList && ticketsList.map((t: ITicket) => <Ticket key={t.id} ticket={t} />)

  const toggleAllCheckboxes = (bool: boolean) => () =>
    setTickets(ticketsList.map(ticket => ({ ...ticket, selected: bool })))

  const contextValue = useMemo(() => ({ ticketsList, toggleCheckbox, toggleAllCheckboxes }), [
    ticketsList,
    toggleCheckbox,
    toggleAllCheckboxes
  ])

  return (
    <TicketsContext.Provider value={contextValue}>
      <Layout>
        <SubMenu spaces={spaces} space={query && query.space} />
        <main className="main">
          <Header name={space ? space.name : ''} />
          <Filter />
          <TableHeader />
          <div className="content">{ticketsList && tickets}</div>
        </main>
      </Layout>
    </TicketsContext.Provider>
  )
}

// Tickets.getInitialProps = async ({ query }) => {
//   try {
//     const {
//       data: { spaces }
//     } = await getSpaces()

//     return { spaces, query }
//   } catch (e) {
//     console.error(e.message)
//   }
// }

export default withAuth(Tickets)
