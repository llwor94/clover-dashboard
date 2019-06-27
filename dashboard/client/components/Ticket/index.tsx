import React from 'react'

import moment from 'moment'

import './styles.scss'

const Ticket = ({ ticket }) => (
  <div className="ticket">
    <div className="checkbox" />
    {ticket.assignedTo ? (
      <img className="image" src={ticket.assignedTo.image_url} />
    ) : (
      <div className="addButton">+</div>
    )}
    <div className="text">
      {ticket.title}
      <div className="info">
      <div >
        {moment(ticket.createdAt)
          .subtract(6, 'hours')
          .fromNow().toUpperCase()}
      </div>
      <div className='largeMargin'>Question by <span className='username'>{ticket.author.username}</span></div>
      <div className='topics'>{ticket.topics.map(t => <div key={t.id} className='topic'>{t.name}</div>)}</div>
      </div>
    </div>
  </div>
)

export default Ticket
