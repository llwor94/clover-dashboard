import clsx from 'clsx'
import React, { ReactElement } from 'react'

import Modal from '../Modal'
import { useHover, useModal } from '../../../lib/hooks'

interface IconProps {
  children: ReactElement
  type: string
}

type Icon = (args: IconProps) => ReactElement

const Icon: Icon = ({ children, type }) => {
  const { hovered, toggleHoverState } = useHover()
  const { modalState, setModalState, toggleModalState } = useModal()

  const handleClickOutside = (_: MouseEvent) =>
    setModalState({ cursorX: 0, cursorY: 0, open: false })

  return (
    <>
      <div
        className={clsx('ticket__menu-item', { hovered })}
        onClick={toggleModalState}
        onMouseEnter={toggleHoverState(true)}
        onMouseLeave={toggleHoverState(false)}
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
