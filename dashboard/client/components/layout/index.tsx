import React from 'react'

import css from '../../styles/layout.scss'
import SideNav from './sidebar'

const Layout = ({ children, spaces }) => {
  return (
    <div className={css.layout}>
      <SideNav />
      <div>{spaces && spaces.map(x => <div key={x.id}>{x.name}</div>)}</div>
      <div className={css.main}>{children}</div>
    </div>
  )
}

export default Layout
