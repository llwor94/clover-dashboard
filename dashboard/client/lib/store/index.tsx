import React, { createContext, useContext, useReducer } from 'react'

import { GET_AUTH_START, GET_AUTH_SUCCESS, authReducer } from './auth'
import {
  GET_CURRENT_SPACE,
  GET_SPACES_START,
  GET_SPACES_SUCCESS,
  GET_TICKETS_START,
  GET_TICKETS_SUCCESS,
  TOGGLE_ALL_TICKETS,
  TOGGLE_TICKET,
  getSpaces,
  getTickets,
  initialState,
  ticketsReducer
} from './tickets'
import { COLLAPSE_SUBMENU, initialUIState, uiReducer } from './ui'

// Utility function that combines both auth and tickets reducers into one reducer
const combineReducers = reducer => (state = {}, action) =>
  Object.keys(reducer).reduce((a, key) => (a[key] = reducer[key](state[key], action)) && a, {})

const reducer = combineReducers({ auth: authReducer, tickets: ticketsReducer })

// const AppContext = createContext<[{}, Dispatch<any>]>(null as any)
const AppContext = createContext(null as any)
const UIContext = createContext(null as any)

const Provider = ({ children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    <UIContext.Provider value={useReducer(uiReducer, initialUIState)}>
      {children}
    </UIContext.Provider>
  </AppContext.Provider>
)

const useAppState = () => useContext(AppContext)
const useUIState = () => useContext(UIContext)

export {
  AppContext,
  COLLAPSE_SUBMENU,
  GET_CURRENT_SPACE,
  GET_AUTH_START,
  GET_AUTH_SUCCESS,
  GET_SPACES_START,
  GET_SPACES_SUCCESS,
  GET_TICKETS_START,
  GET_TICKETS_SUCCESS,
  TOGGLE_ALL_TICKETS,
  TOGGLE_TICKET,
  Provider,
  getSpaces,
  getTickets,
  initialState,
  useAppState,
  useUIState
}
