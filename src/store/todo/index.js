import Vue from 'vue';
import { TodoActions } from './actions';
import * as uuidv4 from 'uuid';

const id1 = uuidv4();
const id2 = uuidv4();

export default {
  state: {
    todosIndexedById: {
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
  },

  getters: {
    todosArray: (state) => Object.values(state.todosIndexedById),
  },

  mutations: {
    [TodoActions.ADD_TODO](state, { todo }) {
      state.todosIndexedById = {
        ...state.todosIndexedById,
        [todo.id]: todo
      };
    },
    [TodoActions.REMOVE_TODO](state, { id }) {
      Vue.delete(state.todosIndexedById, id);
    },
    [TodoActions.TOGGLE_TODO_COMPLETED](state, { id }) {
      const newCompleted = !state.todosIndexedById[id].completed;
      state.todosIndexedById[id].completed = newCompleted;
    },
  }
};
