<template>
<div class="container">
  <div class="title-container">
    <div class="title">企业简介</div>
    <div class="subtitle">Company profile</div>
  </div>
  <div class="content">
    <div class="content-left">
      <span class="left-title">公司介绍</span>
      <div
        v-for="item of list"
        :key="item.id"
        :class="[leftSubtitle, {leftActivated: item.id == list.length}]"
      >
        {{item.title}}
      </div>
    </div>
    <div class="content-right">
      <img :src="profileImgsList[0]" class="content-right-img">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProfileAbout',
  data () {
    return {
      leftSubtitle: 'left-subtitle'
    }
  },
  props: {
    list: Array,
    profileImgsList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
.container
  overflow hidden
  padding-bottom 40%
  position relative
  text-align center
  .title-container
    position absolute
    width 87.8%
    top 1.2rem
    left 0
    right 0
    margin auto
    .title
      font-size .6rem
      font-weight 700
      text-indent .2rem
      letter-spacing .2rem
    .subtitle
      text-indent .2rem
      letter-spacing .2rem
      color #808080
      font-size .3rem
      padding .2rem 0 .5rem
      border-bottom 1px dotted #000
  .content
    position absolute
    width 87.8%
    top 3rem
    left 0
    right 0
    margin auto
    display flex
    .content-left
      flex .6
      padding-right .2rem
      text-align left
      .left-title
        display inline-block
        font-size .56rem
        font-weight 700
        margin .4rem 0
        padding-bottom .1rem
        border-bottom .1rem solid $bgColor
      .left-subtitle
        line-height 200%
      .leftActivated
        color #b22222
    .content-right
      flex .4
      .content-right-img
        margin-top .4rem
        width 100%
</style>
