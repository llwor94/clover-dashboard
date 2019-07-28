import clsx from 'clsx'
import React, { useContext } from 'react'

import CheckboxIcon from './CheckboxIcon'
import Details from './Details'
import EmptyCheckboxIcon from './EmptyCheckboxIcon'
import Menu from './Menu'
import UserImage from './UserImage'

import { HoveredCtx } from '../../pages/tickets'
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
  const [hovering, setHovering] = useContext(HoveredCtx)

  return (
    <div
      className={clsx('ticket', hovering === ticket.id || ticket.selected)}
      onMouseEnter={() => setHovering && setHovering(ticket.id)}
      onMouseLeave={() => setHovering && setHovering(undefined)}
    >
      <CheckboxOrImg entered={hovering === ticket.id} ticket={ticket} />
      {hovering === ticket.id ? <Menu /> : <Details {...ticket} />}
    </div>
  )
}

export default Ticket
