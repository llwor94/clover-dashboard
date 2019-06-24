import App, { Container } from 'next/app'
import React from 'react'

import '../styles/reset.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
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
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
