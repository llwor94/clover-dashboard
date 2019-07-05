const axios = require('axios')

const server = axios.create({
  baseURL: `https://community.clover.com/services/v2/`,
  headers: { Authorization: `Basic ${process.env.TEST_AUTH}` }
})

module.exports = {
  getTickets: async spaceId => {
    try {
      const { data } = await server({
        method: 'get',
        url: '/question.json',
        params: {
          pageSize: 75,
          sort: 'newest',
          spaceId,
          unanswered: true
        }
      })

      return data
    } catch (e) {
      console.log(e)
    }
  },
  getSpaces: async () => {
    try {
      const { data } = await server({ method: 'get', url: '/space.json' })
      return data.list
    } catch (e) {
      console.log(e)
    }
  }
}
