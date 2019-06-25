import React from 'react'

import SideNav from '../Sidebar'
import SubMenu from '../SubMenu'

import './styles.scss'

const Layout = ({ children, spaces }) => (
  <div className="layout">
    <SideNav />
    <SubMenu spaces={spaces} />
    <main className="main">{children}</main>
  </div>
)

export default Layout
