import clsx from 'clsx'
import React, { useContext } from 'react'

import ArrowLeft from './ArrowLeft'
import { SidebarCtx } from '../../pages/tickets'
import { SpacesCtx } from '../../lib/spaceCtx'
import './styles.scss'

const Header = () => {
  const {sidebarShowing, setSidebarShowing} = useContext(SidebarCtx)
  const { currentSpace } = useContext(SpacesCtx)

  return (
    <header>
      <div
        className={clsx('arrows', !sidebarShowing && 'collapsed')}
        onClick={() => typeof setSidebarShowing === 'function' && setSidebarShowing(!sidebarShowing)}
      >
        <ArrowLeft />
        <ArrowLeft />
        <ArrowLeft />
      </div>
      <div className="tickets__heading">{currentSpace && currentSpace.name}</div>
    </header>
  )
}

export default Header
