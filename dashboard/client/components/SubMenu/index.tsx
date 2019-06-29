import Router from 'next/router'
import React, { Fragment } from 'react'

import './styles.scss'

const SubMenu = ({ spaces, space }) => {
  const goToSpace = id => _ => Router.push({ pathname: '/tickets', query: { space: id } })
  const ignoredSpaces = new Set([8, 9, 24])

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
            if (ignoredSpaces.has(id)) {
              return null
            }
            return (
              <Fragment key={id}>
                <div
                  onClick={goToSpace(id)}
                  className={'sub-menu__items' + (parseInt(space, 10) === id ? '-selected' : '')}
                  key={id}
                >
                  <div>{name}</div>
                  <div>{totalCount}</div>
                </div>
                <div className="sub-menu__item-border" />
              </Fragment>
            )
          })}
      </div>
      <div className="sub-menu__background" />
    </div>
  )
}

export default SubMenu
