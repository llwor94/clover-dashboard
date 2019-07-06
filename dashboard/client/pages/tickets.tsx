import React, { createContext, useEffect, useMemo, useState } from 'react'

import Filter from '../components/Filter'
import Header from '../components/Header'
import Layout from '../components/Layout'
import SubMenu from '../components/SubMenu'
import TableHeader from '../components/TableHeader'
import Ticket from '../components/Ticket'

import { getSpaces, getTickets } from '../lib/gql/query'
import { ITicket, ITicketsContext, TicketsProps } from '../lib/interfaces'

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

const Tickets = ({ spaces, tickets: initalTickets = [], query }: TicketsProps) => {
  const [ticketsList, setTickets] = useState(initalTickets)

  useEffect(() => {
    let didCancel = false
    ;(async () => {
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
    setTickets(
      ticketsList.map(ticket =>
        ticket.id === id ? { ...ticket, selected: !ticket.selected } : ticket
      )
    )
  }

  const toggleAllCheckboxes = (bool: boolean) => () =>
    setTickets(ticketsList.map(ticket => ({ ...ticket, selected: bool })))

  const space = spaces.find(({ id }) => id === parseInt(query.space, 10))

  const tickets = ticketsList.map((t: ITicket) => <Ticket key={t.id} ticket={t} />)

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
          <Header name={space.name} />
          <Filter />
          <TableHeader />
          <div className="content">{tickets}</div>
        </main>
      </Layout>
    </TicketsContext.Provider>
  )
}

Tickets.getInitialProps = async ({ query }) => {
  try {
    const {
      data: { spaces }
    } = await getSpaces()

    return { spaces, query }
  } catch (e) {
    console.error(e.message)
  }
}

export default Tickets
