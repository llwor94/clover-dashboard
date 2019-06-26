import axios from 'axios'
import { NextStatelessComponent } from 'next'
import React from 'react'

import Layout from '../components/Layout'
import Ticket from '../components/Ticket'

import { getSpaces, getTickets } from '../gql/query'

interface IProps {
  spaces: any[]
  tickets: any[]
}

const HomePage: NextStatelessComponent<IProps> = ({ spaces, tickets }) => (
  <Layout spaces={spaces}>
    {tickets.map(t => (
      <Ticket key={t.title} ticket={t} />
    ))}
  </Layout>
)

HomePage.defaultProps = {
  spaces: [],
  tickets: []
}

HomePage.getInitialProps = async () => {
  try {
    const [
      {
        data: { spaces }
      },
      {
        data: { tickets }
      }
    ] = await axios.all([getSpaces(), getTickets()])

    return { spaces, tickets }
  } catch (e) {
    console.error(e)
  }
}

export default HomePage
