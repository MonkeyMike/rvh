<template>
<div class="header-bg">
  <div class="header">
    <div class="header-left">
      <div>{{welcome}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CommonHeader',
  data () {
    return {
      welcome: '欢迎访问51房车超市'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-bg
  background black
  .header
    line-height $headerHeight
    color #fff
    font-size .32rem
    width 86.7%
    margin 0 auto
</style>
