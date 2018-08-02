<template lang="pug">
.todo-app
  .title YOUR TODOS
  input.new-todo(
    type="text",
    placeholder="New todo",
    v-model="newTodo.text",
    @keyup.enter="addTodo()"
  )
  TodoList
  TodoListFilter
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import TodoListFilter from '@/components/TodoListFilter.vue';
import * as uuidv4 from 'uuid/v4';
import { TodoMutations } from '../store/mutations.js';

export default {
  name: 'TodoApp',
  components: { TodoList, TodoListFilter },
  data: function() {
    return {
      newTodo: {
        id: uuidv4(),
        text: '',
        completed: false
      }
    }
  },
  methods: {
    addTodo: function() {
      if (!this.newTodo.text.trim()) {
        return;
      }
      this.$store.commit(TodoMutations.ADD_TODO, { todo: this.newTodo});
      this.newTodo = {
        id: uuidv4(),
        text: '',
        completed: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../css/variables.styl"

.todo-app
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
    border solid 1px $grey-ligter-5

</style>
