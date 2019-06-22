import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:4000'
})

instance.interceptors.request.use(req => {
  return { ...req, method: 'post' }
})

instance.interceptors.response.use(({ data }) => data)

export default instance
