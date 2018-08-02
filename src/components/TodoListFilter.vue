<template lang="pug">
.filters(
  :class="activeClass"
)
  .filter.none(
    @click="filter('none')"
  ) All
  .filter.active(
    @click="filter('active')"
  ) Left
  .filter.completed(
    @click="filter('completed')"
  ) Completed
</template>

<script>
import { mapState } from 'vuex';
import { FilterMutations } from '../store/mutations'

export default {
  name: 'TodoListFilter',
  methods: {
    filter: function(value) {
      if (this.todosFilter === value) return;
      this.$store.commit(FilterMutations.FILTER_TODOS, { filter: value });
    }
  },
  computed: {
    ...mapState(['todosFilter']),
    activeClass: function() {
      return `filter-${this.todosFilter}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.filters
  display flex
  justify-content space-around

  .filter
    border solid 1px rgba(0, 0, 0, 0)
    padding 0.5rem
    cursor default

  &.filter-none .none
  &.filter-active .active
  &.filter-completed .completed
    border solid 1px #c1c1c1
    border-radius 3px

  &.filter-none .filter:hover:not(.none)
  &.filter-active .filter:hover:not(.active)
  &.filter-completed .filter:hover:not(.completed)
    border-bottom dotted 1px #c1c1c1
    cursor pointer

</style>

