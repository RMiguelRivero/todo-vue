<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
module.exports = {
  name: 'App'
}
</script>

<style lang="stylus">
@import "./css/reset.css"

#app
  position fixed
  display flex
  justify-content center
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  top 0
  bottom 0
  left 0
  right 0

</style>
