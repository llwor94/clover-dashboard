import clsx from 'clsx'
import React from 'react'

import Modal from '../Modal'
import { useHover, useModal } from '../../../lib/hooks'

const Icon: React.FC = ({ children, modal }) => {
  const { hovered, toggleState } = useHover()
  const { state, toggleModal } = useModal()

  return (
    <>
      <div
        className={clsx('ticket__menu-item', { hovered })}
        onClick={toggleModal()}
        onMouseEnter={toggleState(true)}
        onMouseLeave={toggleState(false)}
      >
        {children}
      </div>
      {state.open && <Modal {...state} modal={modal} />}
    </>
  )
}

export default Icon
