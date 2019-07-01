import moment from 'moment'
import React, { useState } from 'react'
import { Transition } from 'react-transition-group'

import CheckboxIcon from './CheckboxIcon'
import EmptyCheckboxIcon from './EmptyCheckboxIcon'
import StarIcon from './StarIcon'

import './styles.scss'

const Ticket = ({
  state,
  ticket: { author, createdAt, id, selected, title, topics },
  toggleState
}) => (
  <div
    className={`ticket ticket${state ? '-' + state : ''}`}
    onMouseEnter={toggleState(true)}
    onMouseLeave={toggleState(false)}
  >
    {selected ? <CheckboxIcon id={id} /> : <EmptyCheckboxIcon id={id} />}
    <>
      {state !== 'entered' ? (
        <div className={`ticket__title ${state}`}>
          {title}
          <div className="ticket__info">
            <div className="ticket__date">
              {createdAt &&
                moment(parseInt(createdAt, 10))
                  .fromNow()
                  .toUpperCase()}
            </div>
            <div className="ticket__author-wrapper">
              Question by <span className="ticket__author">{author.username}</span>
            </div>
            <div className="ticket__topics">
              {topics.map(t => (
                <div key={t.id} className="ticket__topic">
                  {t.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <StarIcon />
      )}
    </>
  </div>
)

const Fade = ({ ticket }) => {
  const [state, setState] = useState(false)

  const toggleState = (val: boolean) => _ => setState(val)

  return (
    <Transition in={state} timeout={150}>
      {(state: string) => <Ticket state={state} ticket={ticket} toggleState={toggleState} />}
    </Transition>
  )
}

export default Fade
