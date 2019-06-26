import server from '../server'

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

export function getTickets(spaceId = 12) {
  return server({
    data: {
      query: `{
            tickets(spaceId: ${spaceId}) {
              id
              title
              body
              createdAt
            }
          }`
    }
  })
}
