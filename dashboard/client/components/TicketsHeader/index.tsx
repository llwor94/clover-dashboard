import React from 'react'

import EmptyCheckboxIcon from '../Ticket/EmptyCheckboxIcon'
import CheckboxIcon from '../Ticket/CheckboxIcon'
import { TOGGLE_ALL_TICKETS, useAppState } from '../../lib/store'
import './styles.scss'

const TicketsHeader = () => {
  const [
    {
      tickets: { allSelected }
    },
    dispatch
  ] = useAppState()

  const toggleAllCheckboxes = (selected: boolean) => () =>
    dispatch({ selected, type: TOGGLE_ALL_TICKETS })

  const renderCheckboxes = allSelected ? (
    <CheckboxIcon handleClick={toggleAllCheckboxes(false)} />
  ) : (
    <EmptyCheckboxIcon handleClick={toggleAllCheckboxes(true)} />
  )

  return (
    <div className="table-header">
      {renderCheckboxes}
      <span>Title</span>
      <span>Date Posted</span>
      <span>Author</span>
      <span>Topics</span>
    </div>
  )
}

export default TicketsHeader
