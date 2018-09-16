import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

Vue.use(Vuex);

import TodoListItem from '../src/components/TodoListItem';
import { TodoActions } from '../src/store/todo/actions';

storiesOf('TodoListItem', module)
  .add('List Item Active', () => ({
    data() {
      return {
        todo: {
          id: '1000',
          completed: false,
          text: 'learn storybook'
        }
      };
    },
    components: {
      TodoListItem,
    },
    store: new Vuex.Store({
      state: {},
      mutations: {
        [TodoActions.REMOVE_TODO](_, {todo}) {
          action('Remove Todo')(todo);
        },
        [TodoActions.TOGGLE_TODO_COMPLETED](_, { todo }) {
          action('Toggle Todo')(todo);
        },
      },
    }),
    template: `<TodoListItem v-bind="todo" :key="todo.id" />`,
  }))
  .add('List Item completed', () => ({
    data() {
      return {
        todo: {
          id: '1000',
          completed: true,
          text: 'learn storybook'
        }
      }
    },
    components: {
      TodoListItem,
    },
    store: new Vuex.Store({
      state: {},
      mutations: {
        [TodoActions.REMOVE_TODO](_, {todo}) {
          action('Remove Todo')(todo);
        },
        [TodoActions.TOGGLE_TODO_COMPLETED](_, { todo }) {
          action('Toggle Todo')(todo);
        },
      },
    }),
    template: `<TodoListItem v-bind="todo" :key="todo.id" />`,
  }));
