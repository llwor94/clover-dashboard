import React, { useContext, useEffect, useState } from 'react'

import EmptyCheckboxIcon from '../../components/Ticket/EmptyCheckboxIcon'
import CheckboxIcon from '../../components/Ticket/CheckboxIcon'
import { TicketsContext } from '../../pages/tickets'

import './styles.scss'

const TableHeader = () => {
  const { ticketsList, toggleAllCheckboxes } = useContext(TicketsContext)
  const [state, setState] = useState(false)

  useEffect(() => {
    if (ticketsList && ticketsList.length) {
      setState(ticketsList.every(({ selected }) => selected))
    }
  }, [ticketsList])

  return (
    <div className="table-header">
      {state ? (
        <CheckboxIcon handleClick={toggleAllCheckboxes(false)} />
      ) : (
        <EmptyCheckboxIcon handleClick={toggleAllCheckboxes(true)} />
      )}
      <span>Title</span>
      <span>Date Posted</span>
      <span>Author</span>
      <span>Topics</span>
    </div>
  )
}

export default TableHeader
