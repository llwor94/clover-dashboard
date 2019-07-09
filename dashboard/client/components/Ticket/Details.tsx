import moment from 'moment'
import React from 'react'

const TicketDetails = ({ author, createdAt, title, topics }) => {
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
    <div className="ticket__details">
      <span className="ticket__title">{title}</span>
      <span className="ticket__date">{TicketDate}</span>
      <span className="ticket__author">{author.username}</span>
      <div className="ticket__topics">{Topics}</div>
    </div>
  )
}

export default TicketDetails
