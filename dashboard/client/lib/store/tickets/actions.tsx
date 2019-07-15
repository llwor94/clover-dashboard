import {
  GET_CURRENT_SPACE,
  GET_SPACES_FAIL,
  GET_SPACES_START,
  GET_SPACES_SUCCESS,
  GET_TICKETS_FAIL,
  GET_TICKETS_START,
  GET_TICKETS_SUCCESS
} from './'
import { getSpaces as getSpacesQry, getTickets as getTicketsQry } from '../../gql/query'
import { TEMP_ADMINS } from '../../temp'
import { ITicket } from '../../typings'

export const getSpaces = async dispatch => {
  dispatch({ type: GET_SPACES_START })
  try {
    const {
      data: { spaces }
    } = await getSpacesQry()
    // console.log(spaces)
    dispatch({
      type: GET_SPACES_SUCCESS,
      spaces
    })
    return spaces
  } catch (e) {
    dispatch({ type: GET_SPACES_FAIL, e })
  }
}

export const getTickets = async (dispatch, spaceId) => {
  dispatch({ type: GET_TICKETS_START })
  try {
    const {
      data: {
        tickets: { tickets, totalCount }
      }
    } = await getTicketsQry(spaceId)
    // console.log(tickets)
    const id = parseInt(spaceId, 10)
    getCurrentSpace(dispatch, id)

    dispatch({
      type: GET_TICKETS_SUCCESS,
      // Replace this after implementing ticket assignment
      tickets: tickets.map((ticket: ITicket) => ({
        ...ticket,
        assignedTo: {
          ...TEMP_ADMINS[Math.round(Math.random() * 4)],
          tickets: [ticket.id]
        },
        selected: false
      }))
    })
    // setTotalCount(dispatch, id, totalCount)
    return tickets
  } catch (e) {
    dispatch({ type: GET_TICKETS_FAIL, e })
    return
  }
}

// const setTotalCount = (dispatch, id, totalCount) =>
//   dispatch({ type: 'SET_TOTAL_COUNT', id, totalCount })

// export const getAllTickets = (dispatch, spaces) => {
//   dispatch({ type: 'GET_ALL_TICKETS' })
//   try {
//     sp
//     dispatch({ type: 'GET_ALL_TICKETS_SUCCESS', })
//   } catch (e) {
//     dispatch({ type: 'GET_ALL_TICKETS_FAIL', e })
//   }
// }

const getCurrentSpace = (dispatch, id) => dispatch({ type: GET_CURRENT_SPACE, id })
