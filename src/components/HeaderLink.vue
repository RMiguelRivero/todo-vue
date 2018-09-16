<template lang="pug">
router-link(
  v-bind="$attrs"
  v-on="listeners"
  exact-active-class="is-active"
  ref="self"
)
  slot
</template>

<script>
export default {
  name: 'headerLink',
  computed: {
    listeners() {
      return {
        ...this.$listeners
      };
    }
  },
};
</script>

<style lang="stylus" scoped>
@import "../css/variables.styl"

a
  outline: 0;
  box-sizing: border-box;
  cursor default
  text-decoration none
  color $grey-lighter-5
  cursor pointer
  position relative

  &.is-active
    color $terciary-color
    pointer-events none
    cursor default

    &:after
      background-color $terciary-color
      content ''
      position absolute
      display block
      bottom 0
      left 0
      height 4px
      width 100%

    &:hover
      border-bottom solid 2px $terciary-color
      color $terciary-color

  &:hover
    color $grey-lighter-3
    border none

  &:focus
    border none


</style>
