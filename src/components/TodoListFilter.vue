<template lang="pug">
.filters(
  :class="activeClass"
)
  .filter.none(
    @click="handleChangeFilter('none')"
  ) All
  .filter.active(
    @click="handleChangeFilter('active')"
  ) Active
  .filter.completed(
    @click="handleChangeFilter('completed')"
  ) Completed
</template>

<script>
import { mapState } from 'vuex';
import { FilterActions } from '../store/filter/actions';
import { activeFilter } from '../store/selectors';

export default {
  name: 'TodoListFilter',
  props: {
    activeFilter: {
      type: String,
      required: true,
    },
    handleChangeFilter: {
      type: Function,
      required: true,
    },
  },
  computed: {
    activeClass() {
      return `filter-${this.activeFilter}`;
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

