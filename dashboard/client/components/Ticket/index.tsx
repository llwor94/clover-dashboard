import clsx from 'clsx'
import React, { useContext, useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'

import CheckboxIcon from './CheckboxIcon'
import Details from './Details'
import EmptyCheckboxIcon from './EmptyCheckboxIcon'
import Menu from './Menu'
import UserImage from './UserImage'

import { useToggle } from '../../lib/hooks'
import { TicketsContext } from '../../pages/tickets'
import './styles.scss'

const Ticket = ({ ticket }) => {
  const [someSelected, setSomeSelected] = useState(false)
  const { state, toggleState } = useToggle()
  const { ticketsList, toggleCheckbox } = useContext(TicketsContext)

  useEffect(() => {
    if (ticketsList.length) {
      setSomeSelected(ticketsList.some(({ selected }) => selected))
    }
  }, [ticketsList])

  const Checkbox = ticket.selected ? (
    <CheckboxIcon handleClick={toggleCheckbox(ticket.id)} />
  ) : (
    <EmptyCheckboxIcon handleClick={toggleCheckbox(ticket.id)} />
  )

  return (
    <Transition in={state} timeout={150}>
      {(state: string) => (
        <div
          className={clsx('ticket', state || ticket.selected)}
          onMouseEnter={toggleState(true)}
          onMouseLeave={toggleState(false)}
        >
          {someSelected ? (
            Checkbox
          ) : (
            <UserImage {...ticket} handleClick={toggleCheckbox(ticket.id)} />
          )}
          {state !== 'entered' ? <Details {...ticket} /> : <Menu />}
        </div>
      )}
    </Transition>
  )
}

export default Ticket
