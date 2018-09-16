<template lang="pug">
header
  .title(
    @click="goHome()"
  ) Learning Vue
  .links
    header-link(
      to="/about"
    ) About
</template>

<script>
import headerLink from './HeaderLink';
export default {
  name: 'theHeader',
  components: {
    headerLink
  },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="stylus" scoped>
@import "../css/variables.styl"

header
  padding 0 1rem
  height 3rem
  background-color $primary-color
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  padding 0 1rem
  align-items stretch

  .title
    color $grey-lighter-5
    font-weight bold
    cursor pointer
    display flex
    flex-direction row
    align-items center

  .links
    display flex
    flex-direction row

    & > *
      display flex
      align-items center
      justify-content center
      padding: 0 0.5rem;


</style>
