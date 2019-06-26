import React from 'react'

import Header from '../Header'
import SubMenu from '../SubMenu'

import './styles.scss'

const Layout = ({ children, spaces, query }) => (
  <div className="layout">
    {spaces && <SubMenu spaces={spaces} space={query && query.space} />}
    <main className="main">
      <Header />
      <div className="content">{children}</div>
    </main>
  </div>
)

export default Layout
