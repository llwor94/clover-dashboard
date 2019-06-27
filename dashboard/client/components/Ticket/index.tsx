import React from 'react'

import moment from 'moment'

import './styles.scss'

const Ticket = ({ ticket }) => (
  <div className="ticket">
      <div className='checkbox'/>
      {ticket.assignedTo ? <img className='image' src={ticket.assignedTo.image_url}/>: <div className='addButton'>+</div>}
      <div className='text'>
    {ticket.title}
    <div >
      {moment(ticket.createdAt)
        .subtract(6, 'hours')
        .fromNow()}
    </div>
    </div>
  </div>
)

export default Ticket
