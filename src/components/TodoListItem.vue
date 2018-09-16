<template lang="pug">
li.todo(
  :class="[completeClass]"
  :id="id"
)
  input.input(
    type="checkbox"
    :checked="completed"
    @click.prevent="toggleComplete()"
  )
  .text {{ text }}

  Icon.icon(
    :icon="'close-x'"
    :size="16",
    :color="'#663399'"
    :spin="false"
    :clickable="true"
    @click="remove()"
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
  },
  computed: {
    completeClass: function() {
      return {
        'todo-completed' :this.completed,
      };
    }
  },
  methods: {
    remove: function () {
      this.$store.commit(TodoActions.removeTodo(this.id));
    },
    toggleComplete: function(){
      this.$store.commit(TodoActions.toggleTodo(this.id));
    }
  }
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

  &-completed
    color $grey-lighter-5

    .text
      text-decoration line-through

</style>
