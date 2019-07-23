import React, { createContext, useEffect, useState } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { GET_TICKET_QUERY } from '../lib/gql/query'
import { Filter, Header, Layout, SubMenu, Ticket, TicketsHeader } from '../components'
import { ITicket } from '../lib/typings'
import Spaces from '../lib/spaceCtx'
import clsx from 'clsx'

import withAuth from '../lib/withAuth'

export const HoveredCtx = createContext([undefined, (hover: number | undefined) => {}])
export const SidebarCtx = createContext([true, (showing: boolean) => {}])

type TicketsProps = {
  query?: { space?: string }
  user?: any
}

const Tickets = ({ query, user }: TicketsProps) => {
  const [tickets, setTickets] = useState([])
  const [hoveredTicket, setHoveredTicket] = useState()
  const [sidebarShowing, setSidebarShowing] = useState(true)

  const { data } = useQuery(GET_TICKET_QUERY, {
    variables: { spaceId: query && query.space && parseInt(query.space) }
  })

  useEffect(() => {
    if (data && data.tickets) {
      setTickets(data.tickets.tickets)
    }
  }, [data])

  const ticketsList =
    tickets.length && tickets.map((t: ITicket) => <Ticket key={t.id} ticket={t} />)

  return (
    <Layout user={user}>
      <Spaces>
        <SidebarCtx.Provider value={[sidebarShowing, setSidebarShowing]}>
          <SubMenu space={query && query.space} />
          <main className={clsx('main', !sidebarShowing && 'collapsed')}>
            <Header />
            <Filter />
            <TicketsHeader />
            <HoveredCtx.Provider value={[hoveredTicket, setHoveredTicket]}>
              {ticketsList || <div className="content">{ticketsList}</div>}
            </HoveredCtx.Provider>
          </main>
        </SidebarCtx.Provider>
      </Spaces>
    </Layout>
  )
}

export default withAuth(Tickets)
