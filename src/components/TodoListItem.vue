<template lang="pug">
li.todo(
  :class="[completeClass]"
  :id="id"
)
  input.input(
    type="checkbox"
    :checked="completed"
    @click.prevent="handleToggleTodo(id)"
  )

  label.text {{ text }}

  Icon.icon(
    :icon="'close-x'"
    :clickable="true"
    @click="handleRemoveTodo(id)"
  )
</template>


<script>
import { TodoActions } from '../store/todo/actions';
import Icon from './Icon';

export default {
  name: 'TodoListItem',
  components: { Icon },
  props: {
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type:Boolean,
      required: true,
    },
    handleToggleTodo: {
      type: Function,
      required: true,
    },
    handleRemoveTodo: {
      type: Function,
      required: true,
    },
  },
  computed: {
    completeClass: function() {
      return {
        'todo-completed': this.completed,
      };
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../css/variables.styl";

.todo
  display flex
  justify-content space-between
  width 100%
  margin-bottom 0.5rem
  color $primary-color

  .text
    margin 0 1rem

  &-completed
    color $grey-lighter-5

    .text
      text-decoration line-through

</style>
