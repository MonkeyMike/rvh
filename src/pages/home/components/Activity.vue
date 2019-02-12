<template>
<div class="activity">
  <div class="activity-content">
    <div class="activity-left">
      <div class="left-title">最新活动</div>
      <div class="left-content">
        <div class="left-content-img">
          <img src="static/img/index/activity_01.jpg" class="left-content-image">
        </div>
        <div class="left-content-desc">
          <div class="desc-title">幸福到飞起来 ~ !</div>
          <div class="desc-subtitle">今天已经初六</div>
          <div class="desc-subtitle">放假的最后一天了</div>
          <div class="desc-subtitle">明天又要开始一年的工作了</div>
          <div class="desc-subtitle">然而······</div>
          <div class="desc-subtitle">我们的福建行仍在继续中...</div>
          <div class="desc-more">
            <router-link to="/" class="desc-more-left">报名参加</router-link>
            <router-link to="/" class="desc-more-right">查看更多</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="activity-right">
      <div class="right-title">历史活动</div>
      <div class="right-content" v-for="(item, index) of list" :key="index" @mouseover="handleIndexChange(index)">
        <div class="right-content-time" v-show="index !== detailIndex">{{item.time}}</div>
        <img :src="item.imgUrl" class="right-content-img" v-show="index === detailIndex">
        <div :class="[rightContentTitle,{activated:index === detailIndex}]">{{item.title}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeActivity',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      detailIndex: 0,
      rightContentTitle: 'right-content-title'
    }
  },
  methods: {
    handleIndexChange (index) {
      this.detailIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.activity
  position relative
  overflow hidden
  padding-bottom: 50%
  background url('http://www.51rvh.com/templets/wangzhan/images/indexbg.jpg') no-repeat center
  .activity-content
    position absolute
    width 86.7%
    left 0
    right 0
    top .8rem
    bottom 0
    margin auto
    display flex
    .activity-left
      flex 1
    .activity-right
      flex .7
    .left-title, .right-title
      border-bottom .1rem solid $bgColor
      margin-bottom .6rem
      width 3rem
      height 1rem
      line-height 1rem
      color #fff
      font-size .6rem
      font-weight 500
      text-align center
    .left-content
      display flex
      .left-content-img
        display block
        flex 1
        .left-content-image
          width 100%
      .left-content-desc
        flex .8
        color #fff
        .desc-title
          font-size .46rem
          text-align center
          margin .4rem 0
        .desc-subtitle
          text-indent .4rem
          margin .3rem 0
        .desc-more
          display flex
          justify-content space-around
          margin-top .6rem
          .desc-more-left, .desc-more-right
            color #fff
            padding .1rem .2rem
          .desc-more-left
            border-radius .1rem
            background $bgColor
    .right-content
      color #fff
      display flex
      font-size .32rem
      margin .32rem 0
      cursor pointer
      .right-content-img
        width 40%
        height 100%
      .right-content-title
        text-indent .4rem
      .activated
        font-size .34rem
</style>
