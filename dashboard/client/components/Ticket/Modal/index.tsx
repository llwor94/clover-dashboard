import React from 'react'
import { createPortal } from 'react-dom'
import onClickOutside, { WrapperClass } from 'react-onclickoutside'

import Item from './Item'

import './styles.scss'

interface OnClickOutsideProps {
  onClickOutside: (e: MouseEvent) => void
}

export class XOutsideClickHandler extends React.Component<OnClickOutsideProps> {
  handleClickOutside = (e: MouseEvent) => this.props.onClickOutside(e)
  render = () => this.props.children
}

export const OutsideClickHandler: WrapperClass<
  OnClickOutsideProps,
  typeof XOutsideClickHandler
> = onClickOutside(XOutsideClickHandler)

const ADMINS = ['Frank Faustino', 'Raymond Lee', 'Emily Lucek', 'Lauren Worthington', 'Nicholas Ho']
const CONFIRM_OPTIONS = ['👌 OK', '🙅‍♀️ Cancel']

const Modal = ({ cursorX, cursorY, handleClickOutside, type }) => {
  const modalRoot: any = document.getElementById('__next-modal')

  const renderItems = (list: string[]) => {
    const modal = (
      <OutsideClickHandler onClickOutside={handleClickOutside}>
        <div className={`modal ${type}`} style={{ left: cursorX, top: cursorY - 10 }}>
          {list.map((item: string) => (
            <Item key={item}>{item}</Item>
          ))}
        </div>
      </OutsideClickHandler>
    )
    createPortal(modal, modalRoot)
  }

  switch (type) {
    case 'confirm':
      return renderItems(CONFIRM_OPTIONS)
    case 'multi':
      return renderItems(ADMINS)
    case 'full':
      return <></>
    default:
      return <></>
  }
}

export default Modal
