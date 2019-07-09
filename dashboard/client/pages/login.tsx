import * as React from 'react'

import GoogleButton from '../components/GoogleButton'
import Layout from '../components/Layout'

const Login: React.SFC = () => (
  <Layout>
    <main className="main" id="main__login">
      <GoogleButton />
    </main>
  </Layout>
)

export default Login
