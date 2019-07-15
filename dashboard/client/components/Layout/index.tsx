import React from 'react'

import Sidebar from '../Sidebar'

import './styles.scss'

const Layout = ({ children }) => (
  <div className="layout">
    <Sidebar />
    {children}
  </div>
)

export default Layout
