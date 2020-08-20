import axios from 'axios'
import { getToken } from './cookies'

// create singleton for axios
const service = axios.create({
  baseURL: 'http://localhost:8000/api/v1', // URL
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 20000
})

service.interceptors.request.use(
  config => {
    // do something before request is sent
    // config.headers.post['Content-Type'] = 'application/json'
    // config.headers.put['Content-Type'] = 'application/json'
    // config.headers.patch['Content-Type'] = 'application/json'
    if (!config.public) {
      config.headers.Authorization = 'Bearer ' + getToken()
    }
    return config
  }
)


// response interceptor
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    console.log(error.response.data)
    return Promise.reject(error.response.data)
  }
)

export default service