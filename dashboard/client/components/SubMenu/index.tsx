import Router from 'next/router'
import React, { Fragment } from 'react'

import './styles.scss'

const SubMenu = ({ spaces, space }) => {
  const x = (id, name) => _ => Router.push({ pathname: '/tickets', query: { space: id } })

  return (
    <div className="sub-menu">
      <div className="sub-menu__header">Developer Relations Dashboard</div>
      <div className="sub-menu__wrapper">
        <div className={'sub-menu__title' + (space ? '' : '-selected')}>
          <div>All Spaces</div>
          <div>378</div>
        </div>
        {spaces &&
          spaces.map(({ id, name, totalCount }) => {
            if (name === 'Default' || name === 'Help') {
              return null
            }
            return (
              <Fragment key={id}>
                <div
                  onClick={x(id, name)}
                  className={'sub-menu__items' + (parseInt(space, 10) === id ? '-selected' : '')}
                  key={id}
                >
                  <div>{name}</div>
                  <div>{totalCount}</div>
                </div>
                <div className="test" />
              </Fragment>
            )
          })}
      </div>
      <div className="sub-menu__background" />
    </div>
  )
}

export default SubMenu
