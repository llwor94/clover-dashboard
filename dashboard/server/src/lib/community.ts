import axios from 'axios'

import env, { Env } from '../lib/config'

const server = axios.create({
  baseURL: (env as Env).ANSWERHUB_ENDPOINT,
  headers: { Authorization: `Basic ${(env as Env).TEST_AUTH}` }
})

export default {
  getTickets: async (spaceId: number) => {
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
