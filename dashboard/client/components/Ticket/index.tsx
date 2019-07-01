import React from 'react'
import { Transition } from 'react-transition-group'

import CheckboxIcon from './CheckboxIcon'
import EmptyCheckboxIcon from './EmptyCheckboxIcon'
import Menu from './Menu'
import TicketDetails from './Details'

import { useHover } from '../../lib/hooks'
import './styles.scss'

const Ticket = ({ ticket }) => {
  const { hoverState, toggleState } = useHover()

  return (
    <Transition in={hoverState} timeout={150}>
      {(state: string) => (
        <div
          className={`ticket ticket${state ? '-' + state : ''}`}
          onMouseEnter={toggleState(true)}
          onMouseLeave={toggleState(false)}
        >
          {ticket.selected ? <CheckboxIcon id={ticket.id} /> : <EmptyCheckboxIcon id={ticket.id} />}
          {state !== 'entered' ? <TicketDetails {...ticket} /> : <Menu />}
        </div>
      )}
    </Transition>
  )
}

export default Ticket
