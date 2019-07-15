import clsx from 'clsx'
import React from 'react'

import ArrowLeft from './ArrowLeft'
import { COLLAPSE_SUBMENU, useUIState } from '../../lib/store'
import './styles.scss'

const Header = ({ name }: { name?: string }) => {
  const [{ submenu }, dispatch] = useUIState()

  const collapseSubMenu = () => dispatch({ type: COLLAPSE_SUBMENU })

  return (
    <header>
      <div className={clsx('arrows', submenu && 'collapsed')} onClick={collapseSubMenu}>
        <ArrowLeft />
        <ArrowLeft />
        <ArrowLeft />
      </div>
      <div className="tickets__heading">{name}</div>
    </header>
  )
}

export default Header
