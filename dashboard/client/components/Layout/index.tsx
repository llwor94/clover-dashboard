import React from 'react'

import RightPanel from '../RightPanel'
import Sidebar from '../Sidebar'
import SubMenu from '../SubMenu'

import './styles.scss'

const Layout = ({ children, spaces, query }) => (
  <div className="layout">
    <Sidebar />
    <SubMenu spaces={spaces} space={query.space} />
    <RightPanel>{children}</RightPanel>
  </div>
)

export default Layout
