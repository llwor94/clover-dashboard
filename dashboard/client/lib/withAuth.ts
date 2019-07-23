import { NextContext, NextFunctionComponent } from 'next'

import server from './gql/server'

import { isLoggedIn } from './gql/query'

type Props = {
  query?: { space?: string }
  user?: any
}

type StatelessPage<T> = {
  getInitialProps?: (ctx: NextContext) => Promise<T>
}

type ExtendedPage = StatelessPage<Props> & NextFunctionComponent<Props>

const withAuth = (C: ExtendedPage) => {
  C.getInitialProps = async (context: NextContext) => {
    if (context.req && context.req.headers.cookie) {
      server.defaults.headers.common.cookie = context.req && context.req.headers.cookie

      const { data } = await isLoggedIn()
      return { user: data.loggedInUser, query: context.query }
    }
    return { query: context.query }
  }

  return C
}

export default withAuth
