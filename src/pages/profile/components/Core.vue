<template>
<div class="container">
  <span class="title">核心理念</span>
  <div class="content">
    <img src="static/img/profile/profile_bg.jpg" class="content-img">
    <div
      v-for="item of list"
      :key="item.id"
      class="content-title"
    >
      {{item.title}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProfileCore',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.container
  overflow hidden
  padding-bottom 40%
  position relative
  background #f5f5f5
  .title
    position absolute
    left 1.4rem
    top 1.4rem
    font-size .6rem
    font-weight 700
    padding-bottom .1rem
    border-bottom .1rem solid $bgColor
  .content
    position relative
    top 3rem
    left 0
    right 0
    margin auto
    width 87.8%
    .content-img
      position absolute
      width 100%
    div
      position absolute
      width 6rem
      text-align justify
      font-size .36rem
      line-height 140%
      color #646464
    div:nth-child(2)
      top 1rem
      left 2rem
    div:nth-child(3)
      top 1rem
      right 2rem
    div:nth-child(4)
      top 4rem
      left 2rem
    div:nth-child(5)
      top 4rem
      right 2rem
</style>
