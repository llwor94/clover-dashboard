import React, { useState } from 'react'
import { Transition } from 'react-transition-group'

import CheckboxIcon from './CheckboxIcon'
import EmptyCheckboxIcon from './EmptyCheckboxIcon'
import Menu from './Menu'
import TicketDetails from './Details'

import './styles.scss'

const Ticket = ({ hoverState, ticket, toggleState }) => (
  <div
    className={`ticket ticket${hoverState ? '-' + hoverState : ''}`}
    onMouseEnter={toggleState(true)}
    onMouseLeave={toggleState(false)}
  >
    {ticket.selected ? <CheckboxIcon id={ticket.id} /> : <EmptyCheckboxIcon id={ticket.id} />}
    <>{hoverState !== 'entered' ? <TicketDetails {...ticket} /> : <Menu />}</>
  </div>
)

const TicketTransition = ({ ticket }) => {
  const [state, setState] = useState(false)

  const toggleState = (val: boolean) => (_: Event) => setState(val)

  return (
    <Transition in={state} timeout={150}>
      {(state: string) => <Ticket hoverState={state} ticket={ticket} toggleState={toggleState} />}
    </Transition>
  )
}

export default TicketTransition
