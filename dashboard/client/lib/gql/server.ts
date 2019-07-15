import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:4000/graphql', withCredentials: true })

instance.interceptors.request.use(req => ({ ...req, method: 'post', withCredentials: true }))
instance.interceptors.response.use(({ data }) => data)

export default instance
