import React from 'react'

import MenuIcons from './MenuIcons/'

import './styles.scss'

const SideBar = () => (
  <div className="sidebar">
    <div className="logo__wrapper">
      <img className="logo" src="/static/clover-logo.png" />
    </div>
    <div className="sidebar__menu">
      <MenuIcons />
    </div>
  </div>
)

export default SideBar
