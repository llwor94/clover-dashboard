import App, { Container } from 'next/app'
import React from 'react'

import Layout from '../components/layout'
import '../styles/reset.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { props } = this as any
    const { Component, pageProps } = props

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default MyApp
