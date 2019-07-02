import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/graphql' })

instance.interceptors.request.use(req => ({ ...req, method: 'post' }))
instance.interceptors.response.use(({ data }) => data)

export default instance
