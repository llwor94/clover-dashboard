import axios from 'axios'

import env from '../lib/config'

const server = axios.create({
  baseURL: env.ANSWERHUB_ENDPOINT,
  headers: { Authorization: `Basic ${env.TEST_AUTH}` }
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
      return Promise.all(
        data.list.map(async space => {
          const { data } = await server({
            method: 'get',
            url: '/question.json',
            params: {
              sort: 'newest',
              spaceId: space.id,
              unanswered: true
            }
          })
          return { id: space.id, name: space.name, totalCount: data.totalCount }
        })
      )
    } catch (e) {
      console.error(e.message, '\n🤬 something went wrong getting spaces')
    }
  }
}
