<template lang="pug">
transition-group(
  name="list",
  tag="ul"
)
  TodoListItem(
    v-for="todo of todos"
    :key="todo.id"
    v-bind="todo"
  )
</template>

<script>
import { mapGetters } from 'vuex';
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  computed: mapGetters(['todos']),
  components: {
    TodoListItem
  }
}
</script>

<style lang="stylus" scoped>
ul
  margin 0 0 1rem 0

  .list-enter-active
  .list-leave-active
    transition all 0.5s

  .list-enter
    opacity 0
    transform translateY(20px)
  .list-leave-to
    opacity 0
    transform translateX(20px)

</style>

