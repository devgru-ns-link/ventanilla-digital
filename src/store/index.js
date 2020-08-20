import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, decodeToken, removeToken } from '@/plugins/cookies'
import { login, getUserInfo } from '@/api/users'
import { getStudentInfo } from '../api/students'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogued: false,
    user: {},
    student: {}
  },
  mutations: {
    SET_LOGIN(state, value) {
      state.isLogued = value
    },
    SET_USER(state, value) {
      state.user = value
    },
    SET_STUDENT(state, value) {
      state.student = value
    }
  },
  actions: {
    login({ commit }, data) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await login(data)
          setToken(res.access)
          commit('SET_LOGIN', true)
          resolve(res)
        } catch (error) {
          reject(error)
        }
      })
    },
    // user logout
    logout() {
      return new Promise((resolve, reject) => {
        removeToken()
        resolve()
      })
    },
    verifyToken({ commit }) {
      return new Promise(async (resolve, reject) => {
        let Token = getToken()
        Token = decodeToken(Token)
        console.log(Token)
        if (Token) {
          const data = await getUserInfo(Token.id)
          console.log(data)
          commit('SET_LOGIN', true)
          commit('SET_USER', data)
        }
        resolve(Token)
      })
    },
    getStudent({ commit, state }) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await getStudentInfo(state.user.enrrollment)
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
