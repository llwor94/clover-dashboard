const axios = require('axios')

const server = axios.create({
  baseURL: `https://community.clover.com/services/v2/`
})

module.exports = {
  getTickets: async ({ spaceId }) => {
    let tickets = await server({
      method: 'get',
      url: '/question.json',
      query: { answered: false, specialId }
    })
    console.log(tickets)
  }
}
