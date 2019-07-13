import moment from 'moment'
import React from 'react'

const Details = ticket => {
  const { author, createdAt, title, topics } = ticket
  const ticketDate =
    createdAt &&
    moment(parseInt(createdAt, 10))
      .fromNow()
      .toUpperCase()
  const topicsList = topics.map((t: { id: string; name: string }) => (
    <div key={t.id} className="ticket__topic">
      {t.name}
    </div>
  ))
  // console.log(ticket)
  return (
    <div className="ticket__details">
      <span className="ticket__title">{title}</span>
      <span className="ticket__date">{ticketDate}</span>
      <span className="ticket__author">{author.username}</span>
      <div className="ticket__topics">{topicsList}</div>
    </div>
  )
}

export default Details
