<template lang="pug">
svg(
  viewBox="0 0 720 720",
  :class="svgClasses",
  :fill="color",
  @click.stop="clicked()",
)
  use(
    :xlink:href="href"
  )

</template>

<script>
import { iconTypeValidator, iconSizeValidator } from '../constants/validators.js';

export default {
  name: 'Icon',
  props: {
    size: {
      type:Number,
      default: 16,
      validator: iconSizeValidator
    },
    icon: {
      type: String,
      validator: iconTypeValidator
    },
    color: {
      type: String,
      default: '#000000'
    },
    spin: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clicked: function() {
      if (this.clickable){
        this.$emit('click');
      }
    }
  },
  computed: {
    href(){
      return `../../static/svg/iconsheet.svg#${this.icon}`;
    },
    svgClasses() {
      return `icon-${this.size} ${this.spin ? 'spinning': ''} ${this.clickable ? 'pointer': ''}`;
    }
  },
}
</script>

<style lang="stylus" scoped>

svg

  for num in 10 12 14 16 20 24 64 128 256
    &.icon-{num}
      width 1px * num
      height 1px * num

  &.pointer
    cursor pointer


  &.spinning
    animation spinner 0.8s infinite ease


@keyframes spinner
  from
    transform: rotate(0deg);

  to
    transform: rotate(360deg);


</style>
