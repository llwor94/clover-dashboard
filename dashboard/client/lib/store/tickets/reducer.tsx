import { TicketsAction, TicketsState } from '../../typings'
import {
  GET_CURRENT_SPACE,
  GET_SPACES_START,
  GET_SPACES_SUCCESS,
  GET_TICKETS_START,
  GET_TICKETS_SUCCESS,
  TOGGLE_ALL_TICKETS,
  TOGGLE_TICKET
} from './'

export const initialState: TicketsState = {
  allSelected: false,
  currentSpace: { name: '' },
  currentTicket: {},
  someSelected: false,
  spaces: [],
  spacesLoading: false,
  tickets: [],
  ticketsLoading: false
}

export const ticketsReducer = (state = initialState, action: TicketsAction) => {
  switch (action.type) {
    case GET_CURRENT_SPACE:
      return { ...state, currentSpace: state.spaces.find(({ id }) => id === action.id) }
    case GET_SPACES_START:
      return { ...state, spacesLoading: true }
    case GET_SPACES_SUCCESS:
      return { ...state, spacesLoading: false, spaces: action.spaces }
    case GET_TICKETS_START:
      return { ...state, ticketsLoading: true }
    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        ticketsLoading: false,
        tickets: action.tickets,
        allSelected: false,
        someSelected: false
      }
    // case 'SET_TOTAL_COUNT':
    //   // 🚧 WIP
    //   return {
    //     ...state,
    //     spaces: state.spaces.map(space =>
    //       action.id === space.id ? { ...space, totalCount: action.totalCount } : space
    //     )
    //   }
    case TOGGLE_ALL_TICKETS:
      return {
        ...state,
        tickets: state.tickets.map(ticket => ({ ...ticket, selected: action.selected })),
        allSelected: action.selected,
        someSelected: action.selected
      }
    case TOGGLE_TICKET:
      let allSelected = false
      let someSelected = state.someSelected

      const tickets = state.tickets.map(ticket => {
        if (action.id === parseInt(ticket.id, 10)) {
          if (ticket.selected) {
            allSelected = false
          } else {
            someSelected = true
          }
          return { ...ticket, selected: !ticket.selected }
        }
        return ticket
      })

      return {
        ...state,
        tickets,
        allSelected,
        someSelected
      }
    default:
      return state
  }
}
