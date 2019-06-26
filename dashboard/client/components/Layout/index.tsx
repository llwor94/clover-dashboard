import React from 'react'

import RightPanel from '../RightPanel'
import SubMenu from '../SubMenu'

import './styles.scss'

const Layout = ({ children, spaces }) => (
  <div className="layout">
    <SubMenu spaces={spaces} />
    <RightPanel>{children}</RightPanel>
  </div>
)

export default Layout
