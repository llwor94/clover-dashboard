import Router from 'next/router'
import React, { MouseEvent } from 'react'

import Item from './Item'
import { ISpace } from '../../lib/typings'
import './styles.scss'

const SubMenu = ({ spaces, space }) => {
  const goToSpace = (id: string) => (_: MouseEvent) =>
    Router.push({ pathname: '/tickets', query: { space: id } })

  if (typeof window !== 'undefined') Router.prefetch('/tickets?space=' + space)

  const ignoredSpaces = new Set([8, 9, 24]) // { 8: Default, 9: Help, 24: Ideas & Feedback }
  const spacesList =
    spaces &&
    spaces.map(
      (sp: ISpace) =>
        !ignoredSpaces.has(sp.id) && (
          <Item {...sp} goToSpace={goToSpace} key={sp.id} space={space} />
        )
    )

  return (
    <div className="sub-menu">
      <div className="sub-menu__title">Spaces</div>
      <div className="sub-menu__wrapper">{spacesList}</div>
      <div className="sub-menu__background" />
    </div>
  )
}

export default SubMenu
