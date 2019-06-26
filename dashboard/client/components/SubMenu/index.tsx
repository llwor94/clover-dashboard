import React, { Fragment, useState } from 'react'

import './styles.scss'

const SubMenu = ({ spaces }) => {
  const [selected, setSelected] = useState()

  const x = t => _ => setSelected(t)

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
            <Fragment key={id}>
              <div
                onClick={x(name)}
                className={'sub-menu__items' + (selected === name ? '-selected' : '')}
              >
                <div>{name}</div>
                <div>{Math.round(Math.random() * 100)}</div>
              </div>
              <div className="test" />
            </Fragment>
          ))}
      </div>
      <div className="sub-menu__background" />
    </div>
  )
}
export default SubMenu
