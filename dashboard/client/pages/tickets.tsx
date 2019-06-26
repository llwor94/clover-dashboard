// import axios from 'axios'
import { NextStatelessComponent } from 'next'
import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import Ticket from '../components/Ticket'

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
    <Layout spaces={spaces} query={query}>
      {tickets.map(t => (
        <Ticket key={t.id} ticket={t} />
      ))}
    </Layout>
  )
}

Tickets.defaultProps = {
  spaces: [],
  tickets: []
}

Tickets.getInitialProps = async ({ query }) => {
  try {
    const { data } = await getSpaces()
    const { spaces } = data

    // const [
    //   {
    //     data: { spaces }
    //   },
    //   {
    //     data: { tickets }
    //   }
    // ] = await axios.all([getSpaces(), getTickets()])

    // return { spaces, tickets, query }
    return { spaces, query }
  } catch (e) {
    console.error(e)
  }
}

export default Tickets
