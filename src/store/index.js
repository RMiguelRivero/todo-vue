import Vue from 'vue';
import Vuex from 'vuex';
import todos from './todo';
import filter from './filter';

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    todos,
    filter,
  },

  getters: {
    todos: (state, getters) => {
      let ar = getters.todosArray;
      if (state.filter.activeFilter === 'completed') {
        ar = ar.filter(todo => todo.completed)
      } else if (state.filter.activeFilter === 'active') {
        ar = ar.filter(todo => !todo.completed)
      }
      return ar;
    }
  }
});
