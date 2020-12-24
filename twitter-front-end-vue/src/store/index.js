import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      email: '',
      password: '',
      name: '',
      avatar: '',
      introduction: '',
      account: '',
      cover: '',
      role: '',
      createdAt: '',
      updatedAt: ''
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true

    }
  },
  actions: {
  },
  modules: {
  }
})
