import React from 'react'

import css from '../../styles/layout.scss'
import SideNav from './sidebar'

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <SideNav />
      <div>spaces</div>
      <div className={css.main}>{children}</div>
    </div>
  )
}

export default Layout
