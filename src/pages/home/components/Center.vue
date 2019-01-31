<template>
<div class="center">
  <div class="center-title">
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
  </div>
  <div class="center-content">
    <div class="center-content-link">
      <div
        v-for="(item, index) of centerTitleList"
        :key="index"
        :class="[link,{activated:index === detailIndex}]"
        @mouseover="handleChangeCenterIndex(index)"
      >
        {{item}}
      </div>
    </div>
    <div class="center-content-desc">
      <router-link to="/" class="desc" v-for="(item, index) of list[detailIndex]" :key="index">
        <img :src="item.imgUrl" class="desc-img">
        <div class="desc-subtitle">{{item.subtitle}}</div>
      </router-link>
    </div>
  </div>
  <router-link to="/" class="center-more">查看更多</router-link>
</div>
</template>

<script>
export default {
  name: 'HomeCenter',
  data () {
    return {
      title: '记录每天的点滴 掌握市场的趋势',
      subtitle: '我们一直走在时代的前沿，聚集行业实时动态，发布公司最新资讯，欢迎您的关注',
      centerTitleList: ['活动体验', '视频中心', '新闻资讯'],
      link: 'link',
      detailIndex: 0
    }
  },
  props: {
    list: Array
  },
  methods: {
    handleChangeCenterIndex (index) {
      this.detailIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.center
  background $bgColor
  padding-bottom .4rem
  .center-title
    width 86.7%
    margin 0 auto
    padding 1rem 0
    text-align center
    .title
      font-size .6rem
      font-weight 800
      margin-bottom .3rem
      indent()
    .subtitle
      font-size .36rem
      font-weight 600
      indent()
  .center-content
    width 86.7%
    margin 0 auto
    .center-content-link
      width 66%
      margin 0 auto
      display flex
      justify-content space-around
      .link
        width 26%
        height 1rem
        line-height 1rem
        font-size .36rem
        color $darkTextColor
        indent()
        text-align center
        background #eaeaea
        border-radius .1rem
        margin-bottom .5rem
        cursor pointer
      .activated
        font-weight 700
        background #fff
    .center-content-desc
      display flex
      flex-wrap wrap
      justify-content space-around
      .desc
        width 24%
        position relative
        overflow hidden
        padding-bottom 14%
        margin .5rem 0
        .desc-img
          position absolute
          height 100%
        .desc-subtitle
          width 100%
          height 1rem
          line-height 1rem
          font-size .36rem
          eillipsis()
          font-weight 500
          background rgba(0, 0, 0, .5)
          position absolute
          bottom 0
          color #fff
          text-align center
  .center-more
    width 20%
    display block
    height 1.2rem
    line-height 1.2rem
    border-radius .8rem
    font-size .54rem
    indent()
    text-align center
    margin .2rem auto
    background black
    color $bgColor
</style>
