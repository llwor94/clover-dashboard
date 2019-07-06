import clsx from 'clsx'
import React from 'react'

import { useToggle } from '../../../lib/hooks'

const Item = ({ children }) => {
  const { state, toggleState } = useToggle()

  return (
    <div
      className={clsx('modal-item', { state })}
      onMouseEnter={toggleState(true)}
      onMouseLeave={toggleState(false)}
    >
      {children}
    </div>
  )
}

export default Item
