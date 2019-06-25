import React from 'react'

import './styles.scss'

const SubMenu = ({ spaces }) => (
  <div className="sub-menu">
    <div className="sub-menu__header">Developer Relations Dashboard</div>
    <div className="sub-menu__items">
      {spaces && spaces.map(({ id, name }) => <div key={id}>{name}</div>)}
    </div>
    <div className="sub-menu__background">asdfasfsd</div>
  </div>
)

export default SubMenu
