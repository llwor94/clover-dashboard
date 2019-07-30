import React, { createContext, useEffect, useState, Dispatch } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { GET_TICKET_QUERY } from '../lib/gql/query'
import { Filter, Header, Layout, SubMenu, Ticket, TicketsHeader } from '../components'
import { ITicket } from '../lib/typings'
import Spaces from '../lib/spaceCtx'
import clsx from 'clsx'

import withAuth from '../lib/withAuth'

type HoveredContextProps = {
  hoveredTicket?: any;
  setHoveredTicket?: Dispatch<any>
}

type SidebarContextProps = {
  sidebarShowing?: boolean;
  setSidebarShowing?: Dispatch<boolean>
}

export const HoveredCtx = createContext<HoveredContextProps>({})
export const SidebarCtx = createContext<SidebarContextProps>({})

type TicketsProps = {
  query?: { space?: string }
  user?: any
}

const Tickets = ({ query, user }: TicketsProps) => {
  const [tickets, setTickets] = useState([])
  const [hoveredTicket, setHoveredTicket] = useState()
  const [sidebarShowing, setSidebarShowing] = useState(true)

  const { data } = useQuery(GET_TICKET_QUERY, {
    variables: {
      spaceId: query && query.space && parseInt(query.space, 10)
    }
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
        <SidebarCtx.Provider value={{sidebarShowing, setSidebarShowing}}>
          <SubMenu space={query && query.space} />
          <main className={clsx('main', !sidebarShowing && 'collapsed')}>
            <Header />
            <Filter />
            <TicketsHeader />
            <HoveredCtx.Provider value={{hoveredTicket, setHoveredTicket}}>
              {ticketsList || <div className="content">{ticketsList}</div>}
            </HoveredCtx.Provider>
          </main>
        </SidebarCtx.Provider>
      </Spaces>
    </Layout>
  )
}

export default withAuth(Tickets)
