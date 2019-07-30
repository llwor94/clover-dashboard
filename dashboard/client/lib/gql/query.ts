import server from './server'
import gql from 'graphql-tag'

export function getSpaces() {
  return server({
    data: {
      query: `{
            spaces {
              id
              name
            }
          }`
    }
  })
}

export const GET_SPACES_QUERY = gql`
  query {
    spaces {
      id
      name
      totalCount
    }
  }
`

export const GET_TICKET_QUERY = gql`
  query GET_TICKET_QUERY($spaceId: Int) {
    tickets(spaceId: $spaceId) {
      totalCount
      tickets {
        id
        title
        body
        createdAt
        space {
          id
        }
        assignedTo {
          id
          name {
            firstName
          }
          image_url
        }
        author {
          id
          username
        }
        topics {
          id
          name
        }
      }
    }
  }
`

export function getTickets(spaceId: string) {
  return server({
    data: {
      query: `{
            tickets(spaceId: ${spaceId}) {
              totalCount
              tickets {
                id
                title
                body
                createdAt
                assignedTo {
                  id
                  name {
                    firstName
                  }
                  image_url
                }
                author {
                  id
                  username
                }
                topics {
                  id
                  name
                }
              }
            }
          }`
    }
  })
}

export const isLoggedIn = () =>
  server({
    data: {
      query: `{
        loggedInUser {
          id
          name {
            firstName
            lastName
          }
          image_url
        }
      }`
    }
  })

export function auth(token: string) {
  return server({
    data: {
      query: `{
        auth(idToken: \"${token}\") {
          id
          google_id
          name {
            firstName
            lastName
          }
          image_url
        }
      }`
    }
  })
}
