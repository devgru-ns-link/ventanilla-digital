import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { getToken, decodeToken } from './cookies'
import { SnackbarProgrammatic as Snackbar } from 'buefy'
import { NotificationProgrammatic as Notification } from 'buefy'
import { ToastProgrammatic as Toast } from 'buefy'
import { DialogProgrammatic as Dialog } from 'buefy'

// create singleton for axios
const service = axios.create({
  baseURL: 'https://digital-window.herokuapp.com/api/v1', // URL
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 20000
})

service.interceptors.request.use(async config => {
  // do something before request is sent
  // config.headers.post['Content-Type'] = 'application/json'
  // config.headers.put['Content-Type'] = 'application/json'
  // config.headers.patch['Content-Type'] = 'application/json'
  if (!config.public) {
    config.headers.Authorization = 'Bearer ' + getToken()
  }
  return config
})

// response interceptor
service.interceptors.response.use(
  res => {
    return res.data
  },
  async error => {
    console.log(error)
    // Snackbar.open('Look at me!')
    // Notification.open('Notify!')
    // Toast.open('Toasty!')

    if (!error.response) {
      Dialog.confirm({
        title: 'Algo salio mal :(',
        message:
          'El servicio <b>no esta disponible</b> en estos momentos. Revise su conexion a internet o intente más tarde',
        confirmText: 'Ir al inicio',
        type: 'is-warning',
        hasIcon: true,
        ariaRole: 'alertdialog',
        ariaModal: true,
        onConfirm: () => router.push('/')
      })
    }
    return Promise.reject(error.response.data)
  }
)

export default service
