import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, decodeToken } from '@/plugins/cookies'
import { login } from "@/api/users";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogued: false
  },
  mutations: {
    SET_LOGIN(state, value){
      state.isLogued = value
    }
  },
  actions: {
    login({ commit }, data) {
      return new Promise(async (resolve, reject) => {
        const res = await login(data);
        console.log(res);
        setToken(res.access)
        commit('SET_LOGIN', true)
        resolve(res)
      })
    },
    verifyToken({ commit }) {
      return new Promise(async (resolve, reject) => {
        let Token = getToken()
        Token = decodeToken(Token)
        console.log(Token)
        if (Token) 
          commit('SET_LOGIN', true)
        resolve(Token)
      })
    }
  },
  modules: {
  }
})
