import { Context, Dispatch, MouseEvent, SetStateAction } from 'react'

// Tickets
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

// Hooks
export type UseToggle = (s?: boolean) => { state: boolean; toggleState: ToggleState }

export type ToggleState = (s?: boolean) => (e: MouseEvent<HTMLDivElement>) => void

export interface ModalState {
  cursorX: number
  cursorY: number
  open: boolean
}

export type UseModal = () => {
  modalState: ModalState
  setModalState: Dispatch<ModalState>
  toggleModalState: ToggleModalState
}

export type ToggleModalState = (e: MouseEvent<HTMLDivElement>) => void
