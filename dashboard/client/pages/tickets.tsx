import React, { useEffect } from 'react'

import { Filter, Header, Layout, SubMenu, Ticket, TicketsHeader } from '../components'
import { getSpaces, getTickets, useAppState, useUIState } from '../lib/store'
import { ITicket } from '../lib/typings'
import clsx from 'clsx'

const Tickets = ({ query }) => {
  const [
    {
      tickets: { spaces, spacesLoading, tickets, ticketsLoading }
    },
    dispatch
  ] = useAppState()
  const [{ submenu }, _] = useUIState()

  useEffect(() => {
    getSpaces(dispatch)
  }, [])

  useEffect(() => {
    if (query.space) getTickets(dispatch, query.space)
  }, [query.space])

  const ticketsList = tickets && tickets.map((t: ITicket) => <Ticket key={t.id} ticket={t} />)

  if (tickets) {
    return (
      <Layout>
        {spacesLoading || <SubMenu spaces={spaces} space={query.space} />}
        <main className={clsx('main', submenu && 'collapsed')}>
          <Header name={'none'} />
          <Filter />
          <TicketsHeader />
          {ticketsLoading || <div className="content">{ticketsList}</div>}
        </main>
      </Layout>
    )
  } else {
    return null
  }
}

Tickets.getInitialProps = ({ query }) => ({ query })

export default Tickets
