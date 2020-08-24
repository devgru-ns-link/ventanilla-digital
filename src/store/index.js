import Vue from 'vue'
import Vuex from 'vuex'
import {
  getToken,
  setToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
  decodeToken,
  removeToken
} from '@/plugins/cookies'
import { login, getUserInfo, refreshToken, getNotifications } from '@/api/users'
import { getStudentInfo } from '../api/students'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogued: false,
    user: {},
    student: {},
    schoolRequest: {},
    notification: {
      length: 2
    },
    isComponentModalActive: false
  },
  mutations: {
    SET_LOGIN (state, value) {
      state.isLogued = value
    },
    SET_USER (state, value) {
      state.user = value
    },
    SET_STUDENT (state, value) {
      state.student = value
    },
    SET_STUDENT_ENROLLMENT (state) {
      state.student.enrollment = state.user.enrollment
    },
    SET_NOTIFICATION (state, value) {
      state.notification = value
    },
    SHOW_FORM (state, value) {
      state.isComponentModalActive = value
    }
  },
  actions: {
    login ({ commit }, data) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await login(data)
          setToken(res.access)
          setRefreshToken(res.refresh)
          commit('SET_LOGIN', true)
          resolve(res)
        } catch (error) {
          reject(error)
        }
      })
    },
    // user logout
    logout () {
      return new Promise((resolve, reject) => {
        removeToken()
        removeRefreshToken()
        resolve()
      })
    },
    verifyToken ({ commit }) {
      return new Promise(async (resolve, reject) => {
        let token = getToken()
        let refresh = getRefreshToken()
        if (token) {
          try {
            const data = await refreshToken(refresh)
            setToken(data.access)
            resolve()
          } catch (error) {
            reject()
          }
        } else {
          reject()
        }
      })
    },
    getUser ({ commit }) {
      return new Promise(async (resolve, reject) => {
        let token = getToken()
        token = decodeToken(token)
        if (token) {
          try {
            const user = await getUserInfo(token.id)
            commit('SET_LOGIN', true)
            commit('SET_USER', user)
            resolve()
          } catch (error) {
            reject()
          }
        }
      })
    },
    getStudent ({ commit, state }) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await getStudentInfo(state.user.enrollment)    
          commit('SET_STUDENT', data)
          console.log(data)
          resolve()
        } catch (error) {
          console.log('student', error)
          reject(error)
        }
      })
    },
    getNotification ({ commit, state }) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await getNotifications(state.user.id)    
          commit('SET_NOTIFICATION', data)
          console.log(data)
          resolve()
        } catch (error) {
          console.log('notification', error)
          reject(error)
        }
      })
    },
  },
  modules: {}
})
