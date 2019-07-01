import App, { Container } from 'next/app'
import React from 'react'

import Sidebar from '../components/Sidebar'

import '../lib/styles/global.scss'
import '../lib/styles/reset.scss'

class MyApp extends App {
  async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    try {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }

      return { pageProps }
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { props } = this as any
    const { Component, pageProps } = props

    return (
      <Container>
        <Sidebar />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
