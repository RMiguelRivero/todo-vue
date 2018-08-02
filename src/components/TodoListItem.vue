<template lang="pug">
li.todo(
  :class="completeClass",
  :id="todo.id",
)
  input.input(
    type="checkbox"
    v-model="todo.completed",
    @click="toggleComplete()",
  )
  .text {{todo.text}}

  Icon(
    :icon="'close-x'",
    :size="16",
    :color="'#663399'",
    :spin='false',
    :clickable="false",
    @click="remove()",
  )
</template>


<script>
import { TodoMutations } from '@/store/mutations.js';
import Icon from './Icon.vue';

export default {
  name: 'TodoListItem',
  components: { Icon },
  props: ['todo'],
  computed: {
    completeClass: function() {
      return this.todo.completed ? 'todo-completed' : '';
    }
  },
  methods: {
    remove: function () {
      this.$store.commit(TodoMutations.REMOVE_TODO, { todo: this.todo });
    },
    toggleComplete: function(){
      this.$store.commit(TodoMutations.TOGGLE_TODO_COMPLETED, { todo: this.todo });
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../css/variables.styl";

.todo
  display flex
  justify-content center
  width 100%
  margin-bottom 0.5rem
  // background-color black
  color $primary-color

  &-completed
    color $grey-ligter-5

    .text
      text-decoration line-through

  .text
    flex-grow 1
    flex-basis auto

</style>
