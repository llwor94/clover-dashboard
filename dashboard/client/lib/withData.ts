import withApollo, { InitApolloOptions } from 'next-with-apollo'
// import ApolloClient from 'apollo-boost';
// import DefaultClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'

function createClient({ headers }: InitApolloOptions<any>): ApolloClient<any> {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      credentials: 'include',
      uri: 'http://localhost:4000/graphql'
    })
  })
}

export default withApollo(createClient)
