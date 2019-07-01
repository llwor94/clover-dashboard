import React from 'react'

import Item from './Item'

import './styles.scss'

const ADMINS = ['Frank Faustino', 'Raymond Lee', 'Emily Lucek', 'Lauren Worthington', 'Nicholas Ho']
const CONFIRM_OPTIONS = ['👌', '🙅‍♀️']

const Modal = ({ cursorX, cursorY, modal }) => {
  const renderItems = (list: string[], offSet: number) => (
    <div className={modal} style={{ left: cursorX - offSet, top: cursorY }}>
      {list.map((item: string) => (
        <Item key={item}>{item}</Item>
      ))}
    </div>
  )

  switch (modal) {
    case 'modal__confirm':
      return renderItems(CONFIRM_OPTIONS, 50)
    case 'modal__multi':
      return renderItems(ADMINS, 120)
    case 'modal__full':
      return <></>
    default:
      return <></>
  }
}

export default Modal
