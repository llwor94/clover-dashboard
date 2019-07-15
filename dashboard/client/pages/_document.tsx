import Document, { Head, Main, NextScript } from 'next/document'
import * as React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <div id="__next-modal" />
          <NextScript />
        </body>
      </html>
    )
  }
}
