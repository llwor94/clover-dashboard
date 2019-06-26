import Router from 'next/router'
import React from 'react'


import './styles.scss'

const SubMenu = ({ spaces, space }) => {
  const x = (id, name) => _ => Router.push({ pathname: '/home', query: { space: id } })

  return (
    <div className="sub-menu">
      <div className="sub-menu__header">Developer Relations Dashboard</div>
      <div className="sub-menu__wrapper">
        <div className={"sub-menu__title" + (!space ? '-selected' : '')}>
          <div>All Spaces</div>
          <div>378</div>
        </div>
        {spaces &&
          spaces.map(({ id, name }) => (
            <>
              <div
                onClick={x(id, name)}
                className={'sub-menu__items' + (space === id ? '-selected' : '')}
                key={id}
              >
                <div>{name}</div>
                <div>{Math.round(Math.random() * 100)}</div>
              </div>
              <div className="test" />
            </>
          ))}
      </div>
      <div className="sub-menu__background" />
    </div>
  )
}
export default SubMenu
