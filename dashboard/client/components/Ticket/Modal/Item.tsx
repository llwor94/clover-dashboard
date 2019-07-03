import clsx from 'clsx'
import React from 'react'

import { useHover } from '../../../lib/hooks'

const Item = ({ children }) => {
  const { hovered, toggleHoverState } = useHover()

  return (
    <div
      className={clsx('modal-item', { hovered })}
      onMouseEnter={toggleHoverState(true)}
      onMouseLeave={toggleHoverState(false)}
    >
      {children}
    </div>
  )
}

export default Item
