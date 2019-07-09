import server from './server'

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
                  name
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

export const getTotalCount = (spaceId: string) =>
  server({
    data: {
      query: `{
        tickets(spaceId: ${spaceId}) {
          totalCount
        }
      }`
    }
  })

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
