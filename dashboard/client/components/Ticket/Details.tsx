import moment from 'moment'
import React from 'react'

const TicketDetails = ({ hoverState, author, createdAt, title, topics }) => {
  const TicketDate =
    createdAt &&
    moment(parseInt(createdAt, 10))
      .fromNow()
      .toUpperCase()
  const Topics = topics.map((t: { id: string; name: string }) => (
    <div key={t.id} className="ticket__topic">
      {t.name}
    </div>
  ))

  return (
    <div className={`ticket__title ${hoverState}`}>
      {title}
      <div className="ticket__info">
        <div className="ticket__date">{TicketDate}</div>
        <div className="ticket__author-wrapper">
          Question by <span className="ticket__author">{author.username}</span>
        </div>
        <div className="ticket__topics">{Topics}</div>
      </div>
    </div>
  )
}

export default TicketDetails
