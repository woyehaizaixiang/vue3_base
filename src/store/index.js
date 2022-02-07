import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {
      name: 'woyehaizaixiang'
    }
  },
  mutations: {
    SET_userInfo (state, val) {
      state.userInfo = val
    }
  },
  actions: {
  },
  modules: {
  }
})
