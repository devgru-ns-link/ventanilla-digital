import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, decodeToken, removeToken } from '@/plugins/cookies'
import { login } from '@/api/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogued: false
  },
  mutations: {
    SET_LOGIN (state, value) {
      state.isLogued = value
    }
  },
  actions: {
    login ({ commit }, data) {
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
    logout () {
      return new Promise((resolve, reject) => {
        removeToken()
        resolve()
      })
    },
    verifyToken ({ commit }) {
      return new Promise(async (resolve, reject) => {
        let Token = getToken()
        Token = decodeToken(Token)
        console.log(Token)
        if (Token) commit('SET_LOGIN', true)
        resolve(Token)
      })
    }
  },
  modules: {}
})
