<template lang="pug">
  .about
    p This project has been built using the following tech stack:
    ul
      li Node: v6.8.0
      li Webpack: 3.6.0
      li vue-cli: 3.0.0-rc.10
      li Vue: 2.5.2
      li Vuex: 3.0.1
      li Vue-router: 3.0.1
      li @storybook/vue: 3.4.8
      li stylus: 0.54.5
      li pug: 2.0.3

    p
      | If you want to have a look at the source code. You can download it from a github repository&nbsp;
      a(href="") miguelrivero/learning-vue

    p You can clone the repository and run it locally:
    ul
      li
        | Install all dependencies
        pre yarn

      li
        | Run the server
        pre yarn dev

      li
        | In order to build for production, execute
        pre yarn build
</template>

<script>
export default {
  name: "about"
};
</script>

<style lang="stylus" scoped>
  .about
    display block
    width 100%
    text-align start

  ul
    list-style-type disc
    list-style-position inside
    margin 0.5rem 0 1rem 1rem

  li
    margin-bottom 0.3rem

  pre
    display: block;
    padding: 0.7rem;
    margin: 10px 0 10px 10px;
    font-size: 13px;
    line-height: 1;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
</style>
