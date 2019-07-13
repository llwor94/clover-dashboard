import clsx from 'clsx'
import React from 'react'

import CheckboxIcon from './CheckboxIcon'
import Details from './Details'
import EmptyCheckboxIcon from './EmptyCheckboxIcon'
import Menu from './Menu'
import UserImage from './UserImage'

import { useToggle } from '../../lib/hooks'
import { TOGGLE_TICKET, useAppState } from '../../lib/store'

import './styles.scss'

const CheckboxOrImg = ({ entered, ticket }) => {
  const [
    {
      tickets: { allSelected, someSelected }
    },
    dispatch
  ] = useAppState()

  const toggleCheckbox = id => () => {
    dispatch({ type: TOGGLE_TICKET, id })
  }

  const Checkbox = ticket.selected ? (
    <CheckboxIcon handleClick={toggleCheckbox(ticket.id)} />
  ) : (
    <EmptyCheckboxIcon handleClick={toggleCheckbox(ticket.id)} />
  )

  return entered || (allSelected || someSelected) ? (
    Checkbox
  ) : (
    <UserImage {...ticket} handleClick={toggleCheckbox(ticket.id)} />
  )
}

const Ticket = ({ ticket }) => {
  const { state, toggleState } = useToggle()

  return (
    <div
      className={clsx('ticket', state || ticket.selected)}
      onMouseEnter={toggleState(true)}
      onMouseLeave={toggleState(false)}
    >
      <CheckboxOrImg entered={state} ticket={ticket} />
      {!state ? <Details {...ticket} /> : <Menu />}
    </div>
  )
}

export default Ticket
