import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

import { getTotalCount } from '../../lib/gql/query'

const Item = ({ goToSpace, id, name, space }) => {
  const [state, setState] = useState(null)
  useEffect(() => {
    let didCancel = false
    ;(async () => {
      const { data } = await getTotalCount(id)

      if (!didCancel && data && data.tickets) {
        setState(data.tickets.totalCount)
      }
    })()
    return () => {
      didCancel = true
    }
  })

  return (
    <>
      <div
        onClick={goToSpace(id)}
        className={clsx('sub-menu__items', parseInt(space, 10) === id && 'selected')}
        key={id}
      >
        <span>{name}</span>
        <span>{state}</span>
      </div>
      <div className="sub-menu__item-border" />
    </>
  )
}

export default Item
