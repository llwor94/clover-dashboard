import * as React from 'react'

import withAuth from '../lib/withAuth'

import GoogleButton from '../components/GoogleButton'
import Header from '../components/Header'
import Layout from '../components/Layout'

const Login: React.SFC = () => (
  <Layout>
    <main className="main">
      <Header />
      <GoogleButton />
    </main>
  </Layout>
)

export default Login
