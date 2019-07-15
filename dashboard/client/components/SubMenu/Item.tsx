import clsx from 'clsx'
import React from 'react'

// import { GET_CURRENT_SPACE, useUIState } from '../../lib/store'

const Item = ({ goToSpace, id, name, space }) => {
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
        onClick={goToSpace(id)}
        className={clsx('sub-menu__items', parseInt(space, 10) === id && 'selected')}
        key={id}
      >
        <span>{name}</span>
        {/* <span>{tickets.curretSpace}</span> */}
        {/* <span>{totalCount}</span> */}
      </div>
      <div className="sub-menu__item-border" />
    </>
  )
}

export default Item
