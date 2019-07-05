import React, { useEffect } from 'react'

import MenuIcons from './MenuIcons/'

import { useToggle } from '../../lib/hooks'
import './styles.scss'

const SideBar = () => {
  const { state, toggleState } = useToggle(false)

  useEffect(() => {
    document.documentElement.classList.add('theme-transition')
    document.documentElement.setAttribute('data-theme', state ? 'light' : 'dark')
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 1000)
    return () => {
      document.documentElement.classList.remove('theme-transition')
      document.documentElement.removeAttribute('data-theme')
    }
  }, [state])

  return (
    <div className="sidebar">
      <div className="logo__wrapper">
        <img className="logo" onClick={toggleState(!state)} src="/static/clover-logo.png" />
      </div>
      <div className="sidebar__menu">
        <MenuIcons />
      </div>
    </div>
  )
}

export default SideBar
