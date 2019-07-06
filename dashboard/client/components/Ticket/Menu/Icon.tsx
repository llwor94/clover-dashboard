import clsx from 'clsx'
import React, { ReactElement } from 'react'

import Modal from '../Modal'
import { useModal, useToggle } from '../../../lib/hooks'

interface IconProps {
  children: ReactElement
  type: string
}

type Icon = (args: IconProps) => ReactElement

const Icon: Icon = ({ children, type }) => {
  const { state, toggleState } = useToggle()
  const { modalState, setModalState, toggleModalState } = useModal()

  const handleClickOutside = (_: MouseEvent) =>
    setModalState({ cursorX: 0, cursorY: 0, open: false })

  return (
    <>
      <div
        className={clsx('ticket__menu-item', state && 'hovered')}
        onClick={toggleModalState}
        onMouseEnter={toggleState(true)}
        onMouseLeave={toggleState(false)}
      >
        {children}
      </div>
      {modalState.open && (
        <Modal {...modalState} handleClickOutside={handleClickOutside} type={type} />
      )}
    </>
  )
}

export default Icon
