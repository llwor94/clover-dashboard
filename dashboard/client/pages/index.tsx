import axios from 'axios'
import { NextStatelessComponent } from 'next'
import React, {useEffect, useState} from 'react'

import Layout from '../components/Layout'
import Ticket from '../components/Ticket'

import { getSpaces, getTickets } from '../gql/query'

interface IProps {
  spaces: any[]
  tickets: any[]
}

const HomePage: NextStatelessComponent<IProps> = ({ spaces, tickets: initalTickets, query }) => {
  const [tickets, setTickets] = useState(initalTickets)

  useEffect(() => {
    console.log(query)
    const fetchTickets = async () => {
      const {data} = await getTickets(query.space)
      setTickets(data.tickets)
    }
    fetchTickets()
  }, [query])

  return (
  <Layout spaces={spaces} query={query}>
    {tickets.map(t => (
      <Ticket key={t.id} ticket={t} />
    ))}
  </Layout>
)}

HomePage.defaultProps = {
  spaces: [],
  tickets: []
}

HomePage.getInitialProps = async ({query}) => {
  try {
    const [
      {
        data: { spaces }
      },
      {
        data: { tickets }
      }
    ] = await axios.all([getSpaces(), getTickets(12)])
    
    return { spaces, tickets, query }
  } catch (e) {
    console.error(e)
  }
}

export default HomePage
