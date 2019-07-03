import clsx from 'clsx'
import React from 'react'
import { Transition } from 'react-transition-group'

import CheckboxIcon from './CheckboxIcon'
import EmptyCheckboxIcon from './EmptyCheckboxIcon'
import Menu from './Menu'
import TicketDetails from './Details'

import { useHover } from '../../lib/hooks'
import './styles.scss'

const Ticket = ({ ticket }) => {
  const { hovered, toggleHoverState } = useHover()

  return (
    <Transition in={hovered} timeout={150}>
      {(state: string) => (
        <div
          className={clsx('ticket', state)}
          onMouseEnter={toggleHoverState(true)}
          onMouseLeave={toggleHoverState(false)}
        >
          {ticket.selected ? <CheckboxIcon id={ticket.id} /> : <EmptyCheckboxIcon id={ticket.id} />}
          {state !== 'entered' ? <TicketDetails {...ticket} /> : <Menu />}
        </div>
      )}
    </Transition>
  )
}

export default Ticket
