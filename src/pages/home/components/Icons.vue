<template>
<div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img" @mouseover="handleChange(item.id)">
            <img
              :src="item.id === detailIndex ? bgChange : item.imgUrl"
              class="icon-img-content"
            >
            <p :class="[iconImgTitle,{activated:item.id === detailIndex}]">{{item.desc}}</p>
          </div>
      </div>
    </swiper-slide>
  </swiper>
  <div class="icons-details">
    <div class="icons-details-content"  v-for="item of detailPages[detailIndex]" :key="item.id">
      <div class="details-img">
        <img :src="item.imgUrl" class="details-img-content">
      </div>
      <div class="details-content">
        <div class="details-title">{{item.title}}</div>
        <div class="details-price">{{item.price}}</div>
      </div>
    </div>
  </div>
  <div class="icons-more">
    <router-link to="/" class="icons-more-a">查看更多</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      detailIndex: 0,
      iconImgTitle: 'icon-img-title',
      bgChange: 'static/img/index/sy_change.png'
    }
  },
  props: {
    list: Array,
    contentList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 5)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    detailPages () {
      const pages = []
      this.contentList.forEach((item, index) => {
        const page = Math.floor(index / 6)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {
    handleChange (index) {
      this.detailIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  width 86.7%
  height 0
  padding-bottom 17.34%
.icons
  margin-top .1rem
  padding-bottom .6rem
  background #f5f5f5
  .icon
    position relative
    top .1rem
    float left
    width 20%
    height 0
    padding-bottom 20%
    .icon-img
      height 100%
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      cursor pointer
      .icon-img-title
        position absolute
        left 0
        right 0
        bottom 1.2rem
        font-size .44rem
        font-weight 800
        color $darkTextColor
        text-align center
        letter-spacing .2rem
        text-indent .2rem
      .activated
        bottom 2rem
        transform scale(1.2)
        color #fff
      .icon-img-content
        height 90%
        width 90%
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        border-radius 50%
  .icons-details
    width 86.7%
    margin 0 auto
    display flex
    justify-content space-between
    flex-wrap wrap
    .icons-details-content
      position relative
      width 32%
      padding-bottom 18.7%
      margin-bottom .6rem
      .details-img
        position absolute
        .details-img-content
          width 100%
      .details-content
        position absolute
        bottom 0
        display flex
        width 100%
        font-size .32rem
        height 1rem
        line-height 1rem
        .details-title
          width 70%
          padding-left .2rem
          background rgba(0, 0, 0, .5)
          color #fff
          ellipsis()
        .details-price
          width 30%
          background $bgColor
          text-align center
          font-size .44rem
  .icons-more
    border .02rem solid #eee
    width 5rem
    border-radius .8rem .8rem .8rem .8rem
    height 1.2rem
    line-height 1.2rem
    font-size .6rem
    font-weight 800
    text-align center
    letter-spacing .4rem
    text-indent .4rem
    background #ff9300
    color #fff
    margin 0 auto
    .icons-more-a
      color #fff
</style>
