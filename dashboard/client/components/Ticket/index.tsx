import React from 'react'

import moment from 'moment'

import './styles.scss'

const Ticket = ({ ticket }) => (
  <div className="ticket">
    {ticket.title}{' '}
    <div>
      {moment(ticket.createdAt)
        .subtract(6, 'hours')
        .fromNow()}
    </div>
  </div>
)

export default Ticket
