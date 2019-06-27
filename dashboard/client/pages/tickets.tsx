import { NextStatelessComponent } from 'next'
import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import SubMenu from '../components/SubMenu'
import Ticket from '../components/Ticket'

import { getSpaces, getTickets } from '../gql/query'

interface IProps {
  spaces: any[]
  tickets: any[]
  query?: { space: string }
}

const Tickets: NextStatelessComponent<IProps> = ({
  spaces,
  tickets: initalTickets = [],
  query
}) => {
  const [tickets, setTickets] = useState(initalTickets)

  useEffect(() => {
    const fetchTickets = async () => {
      if (query && query.space) {
        const { data } = await getTickets(query.space)

        if (data && data.tickets) {
          setTickets(data.tickets)
        }
      }
    }
    fetchTickets()
  }, [query])

  return (
    <Layout>
      <SubMenu spaces={spaces} space={query && query.space} />
      <main className="main">
        <Header />
        <div className="content">
          {tickets && tickets.map(t => <Ticket key={t.id} ticket={t} />)}
        </div>
      </main>
    </Layout>
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
