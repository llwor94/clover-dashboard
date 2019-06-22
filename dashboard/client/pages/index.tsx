import { NextStatelessComponent } from 'next'
import React from 'react'

import Layout from '../components/layout'
import server from '../server'

interface IProps {
  spaces: any[]
}

const HomePage: NextStatelessComponent<IProps> = props => {
  return <Layout spaces={props.spaces}>Welcome to Next.js!</Layout>
}

export default HomePage

HomePage.getInitialProps = async () => {
  try {
    const { data } = await server({
      data: {
        query: `{
          spaces {
            id 
            name
          }
        }`
      }
    })

    return data
  } catch (e) {
    throw new Error(e)
  }

  return {}
}
