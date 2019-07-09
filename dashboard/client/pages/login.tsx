import * as React from 'react'

import Router from 'next/router'
import { auth } from '../lib/gql/query'

import redirect from '../lib/redirect'

// import GoogleButton from '../components/GoogleButton'
import Layout from '../components/Layout'

const Login = ({ query }) => {
  const [user, setUser] = React.useState()

  React.useEffect(() => {
    const isBrowser = typeof window !== undefined

    if (isBrowser) {
      ;(async () => {
        try {
          const { data } = await auth(query.id_token)
          setUser(data.auth)
        } catch (e) {
          console.error(e)
        }
      })()
    }
  }, [])

  React.useEffect(() => {
    if (user) Router.push('/tickets?space=12')
  }, [user])
  if (user) {
    return (
      <Layout>
        <main className="main" id="main__login">
          Hi there little {user.name.firstName} guy! u made it!
        </main>
      </Layout>
    )
  }
  return (
    <Layout>
      <main className="main" id="main__login">
        pls wait
      </main>
    </Layout>
  )
}

Login.getInitialProps = async context => {
  const { query } = context
  return { query }
  // if (query.id_token) {
  //   try {
  //   const data = await auth(query.id_token)
  //   console.log('data', data.headers)
  //   // if (data) {
  //   //   redirect(context, '/tickets')
  //   // }
  //   } catch (e) {
  //     console.log(e.response.data)
  //   }
  // }

  // const isBrowser = typeof window !== undefined;
  // if (isBrowser) {
  //   let data = await auth()
  //   console.log(data)
  // }
}

export default Login
