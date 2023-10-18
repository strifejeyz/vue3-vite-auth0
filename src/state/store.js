// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    profile: {}
  },

  // Actions will call mutation
  actions: {
    SetProfile({ commit }, params) {
      console.log("ACTION: Mutation has been called", params);
      commit('SET_PROFILE', params);
    }
  },


  mutations: {
    SET_PROFILE(state, params) {
      console.log("MUTATION: Profile has been set", params);
      state.profile = params;
    }
  },

  getters: {
    doubleCount: state => state.count * 2
  }
});
