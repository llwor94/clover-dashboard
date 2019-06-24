import { NextStatelessComponent } from 'next'
import React from 'react'

import Ticket from '../components/tickets'

import axios from 'axios'
import Layout from '../components/layout'

import { getSpaces, getTickets } from '../gql/query'

interface IProps {
  spaces: any[]
  tickets: any[]
}

const HomePage: NextStatelessComponent<IProps> = props => {
  return (
    <Layout spaces={props.spaces}>
      {props.tickets.map(x => <Ticket key={x.title} ticket={x} />)}
    </Layout>
  )
}

export default HomePage

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
