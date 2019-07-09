import * as React from 'react'

import Router from 'next/router'
import { auth } from '../lib/gql/query'

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
  
    return (
      <Layout user={user}>
        <main className="main" id="main__login">
          {user ? `Hi there little ${user.name.firstName} guy! u made it!` : 'pls wait' }
        </main>
      </Layout>
    )
}

Login.getInitialProps = async context => {
  const { query } = context
  return { query }
}

export default Login
