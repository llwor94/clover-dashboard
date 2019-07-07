import axios from 'axios'
import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(__dirname, '../../.env') })

const server = axios.create({
  baseURL: `https://community.clover.com/services/v2/`,
  headers: { Authorization: `Basic ${process.env.TEST_AUTH}` }
})

export default {
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
      console.error(e.message, '\n🤬 something went wrong getting tickets')
    }
  },
  getSpaces: async () => {
    try {
      const { data } = await server({ method: 'get', url: '/space.json' })

      return data && Array.isArray(data.list) ? data.list : []
    } catch (e) {
      console.error(e.message, '\n🤬 something went wrong getting spaces')
    }
  }
}
