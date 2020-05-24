import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    days: []
  },
  mutations: {
    updateDays (state, payload) {
      state.days = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
