import * as React from 'react'

import withAuth from '../lib/withAuth'

import Header from '../components/Header'
import Layout from '../components/Layout'

const Assigned: React.SFC = () => (
  <Layout>
    <main className="main">
      <Header />
    </main>
  </Layout>
)

export default withAuth(Assigned)
