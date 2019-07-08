import App, { Container } from 'next/app'
import React from 'react'

import '../lib/styles/global.scss'
import '../lib/styles/reset.scss'

class MyApp extends App {
  // Resolution order

  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render

  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render

  // On the client:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    try {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
      return { pageProps }
    } catch (e) {
      console.error(e)
      return { pageProps }
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
