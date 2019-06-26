import axios from 'axios'
import { NextStatelessComponent } from 'next'
import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import Ticket from '../components/Ticket'

import Header from '../components/Header'
import SubMenu from '../components/SubMenu'

import { getSpaces, getTickets } from '../gql/query'

interface IProps {
  spaces: any[]
  tickets: any[]
}

const Tickets: NextStatelessComponent<IProps> = ({ spaces, tickets: initalTickets, query }) => {
  const [tickets, setTickets] = useState(initalTickets)

  useEffect(() => {
    const fetchTickets = async () => {
      if (query && query.space) {
        const { data } = await getTickets(query.space)
        setTickets(data.tickets)
      }
    }
    fetchTickets()
  }, [query])

  return (
    <Layout >
      {spaces && <SubMenu spaces={spaces} space={query && query.space} />}
    <main className="main">
      <Header />
      <div className="content">{tickets.map(t => (
        <Ticket key={t.id} ticket={t} />
      ))}</div>
    </main>
      
    </Layout>
  )
}

Tickets.defaultProps = {
  spaces: [],
  tickets: []
}

Tickets.getInitialProps = async ({ query }) => {
  try {
    
    const [
      {
        data: { spaces }
      },
      {
        data: { tickets }
      }
    ] = await axios.all([getSpaces(), getTickets(query.space)])

    return { spaces, tickets, query }
    //return { spaces, query }
  } catch (e) {
    console.error(e.message)
  }
}

export default Tickets
