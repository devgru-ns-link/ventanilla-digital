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
import { login, getUserInfo, refreshToken } from '@/api/users'
import { getStudentInfo } from '../api/students'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogued: false,
    user: {},
    student: {},
    schoolRequest: {},
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
          console.log(data)
          commit('SET_STUDENT', data)
          resolve()
        } catch (error) {
          reject(error)
        }
      })
    }
  },
  modules: {}
})
