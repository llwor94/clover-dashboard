import React, { useState } from 'react'

import MenuIcons from './MenuIcons/'

import './styles.scss'

const SideBar = () => {
  const [selected, setSelected] = useState('/')

  const toggleSelected = t => _ => setSelected(t)

  return (
    <div className="sidebar">
      <div className="logo__wrapper">
        <img className="logo" src="/static/clover-logo.png" />
      </div>
      <div className="sidebar__menu">
        <MenuIcons selected={selected} toggleSelected={toggleSelected} />
      </div>
    </div>
  )
}

export default SideBar
