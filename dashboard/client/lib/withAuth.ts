import { NextContext, NextFunctionComponent } from 'next'
// import Router from 'next/router'
// import * as jwt from 'jsonwebtoken'
import server from './gql/server'

import { isLoggedIn } from './gql/query'

// const redirect = (context: NextContext, target: string) => {
//   if (context.res) {
//     context.res.writeHead(303, { Location: target })
//     context.res.end()
//   } else {
//     Router.replace(target)
//   }
// }

const withAuth = (C: NextFunctionComponent) => {
  C.getInitialProps = async (context: NextContext) => {
    if (context.req && context.req.headers.cookie) {
      server.defaults.headers.common.cookie = context.req && context.req.headers.cookie
      // console.log(Object.keys(context))
      const { data } = await isLoggedIn()
      return data
    }
    return {}
    // const { pathname } = context

    // const isBrowser = typeof window !== 'undefined'

    //   if (isBrowser) {
    //     const token = /id_token=(.*)/.test(window.location.href)

    //     if (document.cookie) {
    //       const token = document.cookie.replace(/id_token=(.*)/, '$1')
    //       const decoded = await jwt.verify(token, process.env.JWT_SECRET || '')

    //       if (decoded !== null && typeof decoded === 'object') {
    //         return { ...decoded }
    //       }
    //     } else if (token) {
    //       console.info('💩', token)
    //       return {}
    //     }
    //   } else {
    //
    //     // To-do: Check server if logged in with isLoggedIn query
    //     // Maybe have to implement sessions
    //     console.info('💩', res)
    //     return {}
    //   }

    //   if (pathname !== '/login') {
    //     redirect(context, '/login')
    //   }
  }

  return C
}

export default withAuth
