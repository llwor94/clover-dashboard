import { Dispatch, MouseEvent } from 'react'

// Store
export interface Action {
  type: string
}

export interface AuthAction extends Action {
  payload: any
}

export interface AuthState {}

export interface TicketsAction extends Action {
  id?: number
  currentTicket?: {}
  selected: boolean
  spaces: ISpace[]
  tickets?: ITicket[]
  totalCount?: number
}

export interface TicketsState {
  allSelected: boolean
  currentSpace: { id?: number; name?: string }
  currentTicket: {}
  someSelected: boolean
  spaces: ISpace[]
  // spaces: { id?: { name?: string, tickets: ITicket[] } }
  spacesLoading: boolean
  tickets: ITicket[]
  ticketsLoading: boolean
}

export interface UIState {
  submenu: boolean
}

export interface UIAction extends Action {}

// Tickets
export interface ISpace {
  id: number
  name: string
  totalCount?: number
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

interface Admin {
  id: number
  image_url: string
  name: string
  tickets: ITicket[]
}

export interface ITicket {
  assignedTo: Admin
  author: { id: number; username: string }
  body: string
  createdAt: string
  id: string
  selected: boolean
  title: string
  topics: [Topic]
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
