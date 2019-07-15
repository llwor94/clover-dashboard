import { AuthAction, AuthState } from '../../typings'

export const GET_AUTH_START = 'GET_AUTH_START'
export const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS'

const initialState: AuthState = {}

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case GET_AUTH_START:
      return state
    case GET_AUTH_SUCCESS:
      return state
    default:
      return state
  }
}
