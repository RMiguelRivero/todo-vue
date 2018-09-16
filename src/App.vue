<template lang="pug">
#app
  the-header-container
  main
    router-view
</template>

<script>
import theHeaderContainer from './containers/header.container';

export default {
  name: 'App',
  components: {
    theHeaderContainer,
  },
};
</script>

<style lang="stylus">
@import "./css/reset.css"

#app
  position relative
  display flex
  flex-direction column
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

  main
    display flex
    flex-direction row
    justify-content stretch
    align-items stretch
    height calc(100vh - 3rem)
    padding 1rem

</style>
