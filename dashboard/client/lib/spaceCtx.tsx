import React, { createContext, useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import { useQuery } from 'react-apollo-hooks'

import { ISpace } from './typings'
import { GET_SPACES_QUERY } from './gql/query'

// type Space = {
//     id?: number,
//     name?: string
//   }

type SpaceContextProps = {
  spaces?: ISpace[]
  currentSpace?: ISpace
}

export const SpacesCtx = createContext<SpaceContextProps>({})

const SpacesContext = ({ children, router }) => {
  const [spaces, setSpaces] = useState()
  const [currentSpace, setCurrentSpace] = useState()
  const { data } = useQuery(GET_SPACES_QUERY)

  useEffect(() => {
    if (data && data.spaces) {
      setSpaces(data.spaces)
    }
  }, [data])

  useEffect(() => {
    if (router.query.space && spaces) {
      setCurrentSpace(spaces.find(x => x.id === parseInt(router.query.space, 10)))
    }
  }, [router.query, spaces])

  return <SpacesCtx.Provider value={{ spaces, currentSpace }}>{children}</SpacesCtx.Provider>
}

export default withRouter(SpacesContext)
