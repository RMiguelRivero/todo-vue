<template lang="pug">
.filters(
  :class="activeClass"
)
  .filter.none(
    @click="filter('none')"
  ) All
  .filter.active(
    @click="filter('active')"
  ) Active
  .filter.completed(
    @click="filter('completed')"
  ) Completed
</template>

<script>
import { mapState } from 'vuex';
import { FilterActions } from '../store/filter/actions';
import { activeFilter } from '../store/selectors';

export default {
  name: 'TodoListFilter',
  computed: {
    ...mapState({
      activeFilter,
    }),
    activeClass() {
      return `filter-${this.activeFilter}`;
    },
  },
  methods: {
    filter(value) {
      this.$store.commit(FilterActions.FILTER_TODOS, { filter: value });
    },
  },
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
    pointer-events none

  &.filter-none .filter:hover:not(.none)
  &.filter-active .filter:hover:not(.active)
  &.filter-completed .filter:hover:not(.completed)
    border-bottom dotted 1px #c1c1c1
    cursor pointer

</style>

