import React from 'react'

import css from '../../styles/layout.scss'

const SideNav = ({ spaces }) => {
  return (
    <div className={css.spacesNav}>{spaces && spaces.map(x => <div key={x.id}>{x.name}</div>)}</div>
  )
}

export default SideNav
