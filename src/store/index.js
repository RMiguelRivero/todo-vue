import Vue from 'vue';
import Vuex from 'vuex';
import * as uuidv4 from 'uuid/v4';
import { TodoMutations, FilterMutations } from './mutations.js';

Vue.use(Vuex)
const id1 = uuidv4();
const id2 = uuidv4();
const todosEntities = {
  [id1]: {
    id: id1,
    text: 'Learn Vue',
    completed: true
  },
  [id2]: {
    id: id2,
    text: 'Learn VueX',
    completed: false
  },
}

export const store = new Vuex.Store({
  state: {
    entities: {
      todos: todosEntities
    },
    todosFilter: 'none'
  },
  getters: {
    todosArray: state => Object.values(state.entities.todos),
    todos: (state, getters) => {
      let ar = getters.todosArray;
      if (state.todosFilter === 'completed') {
        ar = ar.filter(todo => todo.completed)
      } else if (state.todosFilter === 'active') {
        ar = ar.filter(todo => !todo.completed)
      }
      return ar;
    }
  },
  mutations: {
    [TodoMutations.ADD_TODO](state, { todo }) {
      Vue.set(state.entities.todos, todo.id, todo);
    },
    [TodoMutations.REMOVE_TODO](state, { todo }) {
      Vue.delete(state.entities.todos, todo.id);
    },
    [TodoMutations.TOGGLE_TODO_COMPLETED](state, { todo }) {
      Vue.set(state.entities.todos, todo.id, todo);
    },
    [FilterMutations.FILTER_TODOS](state, { filter }) {
      Vue.set(state, 'todosFilter', filter)
    }
  }
})
