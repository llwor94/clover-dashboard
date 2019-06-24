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

export function getTickets() {
  return server({
    data: {
      query: `{
            tickets {
              title
              body
            }
          }`
    }
  })
}
