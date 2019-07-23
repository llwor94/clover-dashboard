import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'

import withData from '../lib/withData'
import { Provider } from '../lib/store'

import '../lib/styles/global.scss'
import '../lib/styles/reset.scss'

class MyApp extends App<any> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {} as any
    try {
      pageProps = Component.getInitialProps && (await Component.getInitialProps(ctx))
      // pageProps.query = ctx.query
      return { pageProps }
    } catch (e) {
      console.error(e)
      return { pageProps }
    }
  }

  render() {
    const { props } = this
    const { Component, pageProps, apollo } = props

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Provider>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(MyApp)
