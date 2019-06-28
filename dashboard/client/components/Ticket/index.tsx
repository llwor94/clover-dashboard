import moment from 'moment'
import React from 'react'

import EmptyCheckboxIcon from './EmptyCheckboxIcon'
import StarIcon from './StarIcon'

import './styles.scss'

const Ticket = ({ ticket }) => (
  <div className="ticket">
    {/* aSB0aGluayBpJ20ga2luZGEgaW4gbG92ZSB3aXRoIHU= */}
    {/* <div className="ticket__checkbox" /> */}
    <EmptyCheckboxIcon />
    <StarIcon />
    {/* {ticket.assignedTo ? (
      <img className="ticket__image" src={ticket.assignedTo.image_url} />
    ) : ( */}
    {/* <div className="ticket__add-button">+</div> */}
    {/* )} */}
    <div className="ticket__title">
      {ticket.title}
      <div className="ticket__info">
        <div className="ticket__date">
          {ticket &&
            ticket.createdAt &&
            moment(parseInt(ticket.createdAt, 10))
              .fromNow()
              .toUpperCase()}
        </div>
        <div className="ticket__author-wrapper">
          Question by <span className="ticket__author">{ticket.author.username}</span>
        </div>
        <div className="ticket__topics">
          {ticket.topics.map(t => (
            <div key={t.id} className="ticket__topic">
              {t.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Ticket
