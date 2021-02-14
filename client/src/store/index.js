import { createStore } from 'vuex'
import axios from '../config/axios';
export default createStore({
  state: {
    user: {}
  },
  actions: {
    async fetchProfil({commit}) {
      
      var profil = await axios.get('/api/v1/user/profil');
      const user = profil.data;
      console.log("Action Called !");
      commit('setUser', user);
    }
  },
  mutations: {
    setUser: (state, user) => {
      return state.user = user;
    }
  },

  getters: {
    getUser : state => state.user
  },

  modules: {
  }
})
