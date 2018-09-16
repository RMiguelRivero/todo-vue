<template lang="pug">
.todo-app
  .wrapper
    .title YOUR TODOS
    input.new-todo(
      type="text"
      placeholder="New todo"
      v-model="newTodo.text"
      @keyup.enter="addTodo()"
    )
    TodoList(
      :todos="todos"
      :handleToggleTodo="handleToggleTodo"
      :handleRemoveTodo="handleRemoveTodo"
    )
    TodoListFilter(
      :activeFilter="activeFilter"
      :handleChangeFilter="handleChangeFilter"
    )
</template>

<script>
import TodoList from '../components/TodoList.vue';
import TodoListFilter from '../components/TodoListFilter.vue';
import { TodoActions } from '../store/todo/actions';

export default {
  name: 'TodoApp',
  components: { TodoList, TodoListFilter },
  props: {
    todos: {
      type: Array,
      required: true,
    },
    newTodo: {
      type: Object,
      required: true
    },
    activeFilter: {
      type: String,
      required: true,
    },
    handleAddTodo: {
      type: Function,
      required: true,
    },
    restoreNewTodo: {
      type: Function,
      required: true,
    },
    handleChangeFilter: {
      type: Function,
      required: true,
    },
    handleChangeNewTodo: {
      type: Function,
      required: true,
    },
    handleToggleTodo: {
      type: Function,
      required: true,
    },
    handleRemoveTodo: {
      type: Function,
      required: true,
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo.text.trim()) {
        return;
      }
      this.handleAddTodo(this.newTodo);
      this.restoreNewTodo();
    },
  }
}
</script>

<style lang="stylus" scoped>
@import "../css/variables.styl"

.todo-app
  width 100%
  display flex
  justify-content center
  flex-direction row

  .wrapper
    max-width 600px
    display flex
    flex-direction column
    margin-top 2rem

    .title
      color $primary-color
      font-size 2rem
      margin 0 0 1rem 0

    .new-todo
      margin 0 0 1rem 0
      padding 0.5rem
      border-radius 3px
      border solid 1px $grey-lighter-5

</style>
