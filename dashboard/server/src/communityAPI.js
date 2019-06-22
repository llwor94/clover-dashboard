const axios = require('axios')

const server = axios.create({
  baseURL: `https://community.clover.com/services/v2/`,
  headers: { Authorization: `Basic ${process.env.TEST_AUTH}` }
})

const query = {
  tickets: async spaceId => {
    try {
      let { data } = await server({
        method: 'get',
        url: '/question.json',
        query: { answered: false }
      })
      return data
    } catch (e) {
      console.log(e)
    }
  },
  spaces: async () => {
    try {
      let { data } = await server({ method: 'get', url: '/space.json' })
      return data
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = { query }
