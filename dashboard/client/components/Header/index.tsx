import clsx from 'clsx'
import React, { useContext } from 'react'

import ArrowLeft from './ArrowLeft'
import { SidebarCtx } from '../../pages/tickets'
import { SpacesCtx } from '../../lib/spaceCtx'
import './styles.scss'

const Header = () => {
  const [showing, setShowing] = useContext(SidebarCtx)
  const { currentSpace } = useContext(SpacesCtx)

  return (
    <header>
      <div
        className={clsx('arrows', !showing && 'collapsed')}
        onClick={() => typeof setShowing === 'function' && setShowing(!showing)}
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
