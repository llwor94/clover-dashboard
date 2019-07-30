import clsx from 'clsx'
import React from 'react'

// import { GET_CURRENT_SPACE, useUIState } from '../../lib/store'

const Item = ({ goToSpace, currentSpace, space }) => {
  // const [{ tickets }, dispatch] = useUIState()

  // useEffect(() => {
  //   dispatch({ type: GET_CURRENT_SPACE, id })
  // }, [])
  // console.log(tickets)

  // const [totalCount, setState] = useState(null)
  // useEffect(() => {
  //   let didCancel = false
  //   ;(async () => {
  //     const { data } = await getTotalCount(id)
  //     if (!didCancel && data && data.tickets) {
  //       setState(data.tickets.totalCount)
  //     }
  //   })()
  //   return () => {
  //     didCancel = true
  //   }
  // })

  return (
    <>
      <div
        onClick={goToSpace(space.id)}
        className={clsx('sub-menu__items', parseInt(currentSpace, 10) === space.id && 'selected')}
        key={space.id}
      >
        <span>{space.name}</span>
        {/* <span>{tickets.curretSpace}</span> */}
        <span>{space.totalCount}</span>
      </div>
      <div className="sub-menu__item-border" />
    </>
  )
}

export default Item
