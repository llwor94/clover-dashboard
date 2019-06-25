import React, { useState } from 'react'

import './styles.scss'

const SubMenu = ({ spaces }) => {
  const [state, setState] = useState()

  const x = t => _ => setState(t)

  return (
    <div className="sub-menu">
      <div className="sub-menu__header">Developer Relations Dashboard</div>
      <div className="sub-menu__wrapper">
        <div className="sub-menu__title">
          <div>All Spaces</div>
          <div>378</div>
        </div>
        {spaces &&
          spaces.map(({ id, name }) => (
            <div
              onClick={x(name)}
              className={'sub-menu__items' + (state === name ? '-selected' : '')}
              key={id}
            >
              {name}
            </div>
          ))}
      </div>
      <div className="sub-menu__background" />
    </div>
  )
}
export default SubMenu
