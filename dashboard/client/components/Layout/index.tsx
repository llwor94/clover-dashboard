import React from 'react'

import Sidebar from '../Sidebar'

import './styles.scss'

const Layout = ({ children, user }) => (
  <div className="layout">
    <Sidebar user={user} />
    {children}
  </div>
)

export default Layout
