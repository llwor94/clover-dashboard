import React from 'react'

import css from '../styles/ticket.scss'

const Ticket = ({ ticket }) => {
  return <div className={css.ticket}>{ticket.title}</div>
}

export default Ticket
