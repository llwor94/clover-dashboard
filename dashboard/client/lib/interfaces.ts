import { Context, Dispatch, SetStateAction } from 'react'

export interface Spaces {
  id: number
  name: string
}

export interface TicketsProps {
  spaces: any[]
  tickets: any[]
  query: { space: string }
}

export interface Topic {
  id: string
  name: string
}

export interface ITicket {
  author: { username: string }
  createdAt: string
  id: string
  title: string
  topics: [Topic]
}

export interface ITicketsContext extends Context<any> {
  ticketsList?: ITicket[]
  toggleCheckbox?: Dispatch<SetStateAction<string>>
}
