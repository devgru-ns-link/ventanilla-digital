import axios from 'axios'

// create singleton for axios
const service = axios.create({
  baseURL: 'http://localhost:8000/api/v1', // URL
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 20000
})

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