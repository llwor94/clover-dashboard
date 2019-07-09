import { NextContext, NextFunctionComponent } from 'next'

import server from './gql/server'

import { isLoggedIn } from './gql/query'

const withAuth = (C: NextFunctionComponent) => {
  C.getInitialProps = async (context: NextContext) => {
    if (context.req && context.req.headers.cookie) {
      server.defaults.headers.common.cookie = context.req && context.req.headers.cookie

      const { data } = await isLoggedIn()
      return {data, query: context.query}
    }
    return {query: context.query}
  }

  return C
}

export default withAuth
