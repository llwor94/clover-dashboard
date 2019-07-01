import clsx from 'clsx'
import React from 'react'

import { useHover } from '../../../lib/hooks'

const Item = ({ children }) => {
  const { hovered, toggleState } = useHover()

  return (
    <div
      className={clsx('modal-item', { hovered })}
      onMouseEnter={toggleState(true)}
      onMouseLeave={toggleState(false)}
    >
      {children}
    </div>
  )
}

export default Item
