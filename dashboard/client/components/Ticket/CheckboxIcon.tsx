import React, { useContext } from 'react'

import { TicketsContext } from '../../pages/tickets'

const Checkbox = ({ id }) => {
  const { toggleCheckbox } = useContext(TicketsContext)

  return (
    <svg
      onClick={toggleCheckbox(id)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="
        M19 3
        H5
        c-1.11 0-2 .9-2 2
        v14
        c0 1.1.89 2 2 2
        h14
        c1.11 0 2-.9 2-2
        V5
        c0-1.1-.89-2-2-2
        zm-9 14
        l-5-5 1.41-1.41
        L10 14.17
        l7.59-7.59
        L19 8
        l-9 9
        z"
        fill="#999999"
      />
    </svg>
  )
}

export default Checkbox
