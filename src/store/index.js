// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    }
  },
  modules: {}
});
