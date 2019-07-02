import React, {
  Context,
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import Filter from '../components/Filter'
import Header from '../components/Header'
import Layout from '../components/Layout'
import SubMenu from '../components/SubMenu'
import Ticket from '../components/Ticket'

import { getSpaces, getTickets } from '../lib/gql/query'

interface TicketsProps {
  spaces: any[]
  tickets: any[]
  query: { space: string }
}

interface Topic {
  id: string
  name: string
}

interface Ticket {
  author: { username: string }
  createdAt: string
  id: string
  title: string
  topics: [Topic]
}

interface TicketsContext extends Context<any> {
  ticketsList?: Ticket[]
  toggleCheckbox?: Dispatch<SetStateAction<string>>
}

export const TicketsContext: TicketsContext = createContext({})

const Tickets = ({ spaces, tickets: initalTickets = [], query }: TicketsProps) => {
  const [ticketsList, setTickets] = useState(initalTickets)

  useEffect(() => {
    ;(async () => {
      if (query && query.space) {
        const { data } = await getTickets(query.space)

        if (data && data.tickets) {
          // Add `selected` field to each Ticket
          setTickets(data.tickets.map((ticket: Ticket) => ({ ...ticket, selected: false })))
        }
      }
    })()
  }, [query])

  const toggleCheckbox = (id: string) => () => {
    setTickets(
      ticketsList.map(ticket =>
        ticket.id === id ? { ...ticket, selected: !ticket.selected } : ticket
      )
    )
  }

  const space = spaces.find(({ id }) => id === parseInt(query.space, 10))

  const tickets = ticketsList.map((t: Ticket) => <Ticket key={t.id} ticket={t} />)

  const contextValue = useMemo(() => ({ ticketsList, toggleCheckbox }), [
    ticketsList,
    toggleCheckbox
  ])

  return (
    <TicketsContext.Provider value={contextValue}>
      <Layout>
        <SubMenu spaces={spaces} space={query && query.space} />
        <main className="main">
          <Header />
          <div className="tickets__heading">{space.name}</div>
          <Filter />
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
