import React from 'react'
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
  const renderItems = (list: string[], offSet: number) => (
    <OutsideClickHandler onClickOutside={handleClickOutside}>
      <div className={type} style={{ left: cursorX - offSet, top: cursorY - 10 }}>
        {list.map((item: string) => (
          <Item key={item}>{item}</Item>
        ))}
      </div>
    </OutsideClickHandler>
  )

  switch (type) {
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
