import React from 'react'

import './styles.scss'

const SubMenu = ({ spaces }) => (
  <div className="sub-menu">
    {spaces && spaces.map(({ id, name }) => <div key={id}>{name}</div>)}
  </div>
)

export default SubMenu
