const axios = require('axios')

const server = axios.create({
  baseURL: `https://community.clover.com/services/v2/`,
  headers: { Authorization: 'Basic bGF1cmVud29ydGhpbmd0b246cGVyY3kxMjM=' }
})

module.exports = {
  getTickets: async spaceId => {
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
  }
}
