import clsx from 'clsx'
import React, { useContext } from 'react'
import { Transition } from 'react-transition-group'

import CheckboxIcon from './CheckboxIcon'
import EmptyCheckboxIcon from './EmptyCheckboxIcon'
import Menu from './Menu'
import TicketDetails from './Details'

import { useToggle } from '../../lib/hooks'
import { TicketsContext } from '../../pages/tickets'
import './styles.scss'

const Ticket = ({ ticket }) => {
  const { state, toggleState } = useToggle()
  const { toggleCheckbox } = useContext(TicketsContext)

  const Checkbox = ticket.selected ? (
    <CheckboxIcon handleClick={toggleCheckbox(ticket.id)} />
  ) : (
    <EmptyCheckboxIcon handleClick={toggleCheckbox(ticket.id)} />
  )

  return (
    <Transition in={state} timeout={150}>
      {(state: string) => (
        <div
          className={clsx('ticket', state)}
          onMouseEnter={toggleState(true)}
          onMouseLeave={toggleState(false)}
        >
          {Checkbox}
          {state !== 'entered' ? <TicketDetails {...ticket} /> : <Menu />}
        </div>
      )}
    </Transition>
  )
}

export default Ticket
