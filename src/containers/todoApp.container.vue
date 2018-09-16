<template lang="pug">
  todo-app(
    :newTodo="newTodo"
    :handleAddTodo="addTodo"
    :restoreNewTodo="restoreNewTodo"
    :handleChangeNewTodo="changeNewTodo"
    :todos="todos"
    :handleToggleTodo="toggleComplete"
    :handleRemoveTodo="remove"
    :activeFilter="activeFilter"
    :handleChangeFilter="changeFilter"
  )
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import todoApp from '../components/TodoApp';
import { TodoActions } from '../store/todo/actions';
import { FilterActions } from '../store/filter/actions';
import { activeFilter } from '../store/selectors';
import * as uuidv4 from 'uuid/v4';

export default {
  name: 'todoAppContainer',
  components: {
    todoApp,
  },
  data() {
    return {
      newTodo: {
        id: uuidv4(),
        text: '',
        completed: false
      },
    };
  },
  computed: {
    ...mapGetters(['todos']),
    ...mapState({
      activeFilter,
    }),
  },
  methods: {
    addTodo(newTodo) {
      this.$store.commit(TodoActions.addTodo(newTodo));
    },
    remove(id) {
      this.$store.commit(TodoActions.removeTodo(id));
    },
    toggleComplete(id) {
      this.$store.commit(TodoActions.toggleTodo(id));
    },
    changeFilter(filter) {
      this.$store.commit(FilterActions.changeFilter(filter));
    },
    changeNewTodo(value) {
      // TODO: Modify the store
      console.group('Changed new todo');
      console.log(value);
      console.end();
    },
    restoreNewTodo() {
      this.newTodo = {
        id: uuidv4(),
        text: '',
        completed: false
      };
    },
  },
  created() {
    console.log(this.todos);
  }
};
</script>
