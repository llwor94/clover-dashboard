import React from 'react'

import moment from 'moment';

import css from '../styles/ticket.scss'

const Ticket = ({ ticket }) => {
  return <div className={css.ticket}><h3>{ticket.title}</h3><div>{moment(ticket.createdAt).subtract(6, 'hours').fromNow()}</div></div>
}

export default Ticket
