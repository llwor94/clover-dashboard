import Router from 'next/router'
import React, { MouseEvent } from 'react'

import Item from './Item'

import { Spaces } from '../../lib/typings/interfaces'

import './styles.scss'

const SubMenu = ({ spaces, space }) => {
  const goToSpace = (id: string) => (_: MouseEvent) =>
    Router.push({ pathname: '/tickets', query: { space: id } })
  // ignoredSpaces { 8: Default, 9: Help, 24: Ideas & Feedback }
  const ignoredSpaces = new Set([8, 9, 24])

  return (
    <div className="sub-menu">
      <div className="sub-menu__title">Spaces</div>
      <div className="sub-menu__wrapper">
        {spaces &&
          spaces.map((sp: Spaces) =>
            ignoredSpaces.has(sp.id) ? null : (
              <Item {...sp} goToSpace={goToSpace} key={sp.id} space={space} />
            )
          )}
      </div>
      <div className="sub-menu__background" />
    </div>
  )
}

export default SubMenu
