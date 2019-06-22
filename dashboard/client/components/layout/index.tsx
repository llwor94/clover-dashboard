import React from 'react'

import css from '../../styles/layout.scss'
import SideNav from './sidebar'
import SpacesNav from './spacesnav'

const Layout = ({ children, spaces }) => {
  return (
    <div className={css.layout}>
      <SideNav />
      <SpacesNav spaces={spaces} />
      <div className={css.main}>{children}</div>
    </div>
  )
}

export default Layout
