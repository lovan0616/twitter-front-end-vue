import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'

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
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫 usersAPI.getCurrentUser() 方法，並將 response 顯示出來
        const { data } = await usersAPI.getCurrentUser()
        const { id, email, name, avatar, introduction, account, cover, role } = data
        commit('setCurrentUser', {
          id,
          email,
          name,
          avatar,
          introduction,
          account,
          cover,
          role
        })
      } catch (error) {
        console.log('error', error)
        console.error('can not fetch user information')
      }
    }
  },
  modules: {
  }
})
