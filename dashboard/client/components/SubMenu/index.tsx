import React from 'react'

import './styles.scss'

const SubMenu = ({ spaces }) => (
  <div className="sub-menu">
    <div className="sub-menu__header">Developer Relations Dashboard</div>
    <div className="sub-menu__wrapper">
      <div className="sub-menu__title">
        <div>All Spaces</div>
        <div>378</div>
      </div>
      {spaces && spaces.map(({ id, name }) => <div className="sub-menu__items" key={id}>{name}</div>)}
    </div>
    <div className="sub-menu__background"></div>
  </div>
)

export default SubMenu
