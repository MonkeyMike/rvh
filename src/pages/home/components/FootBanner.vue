<template>
<div>
  <div class="wrapper-title">
    <div
      v-for="(item, index) of titleList"
      :key="index"
      :class="[wrapperTitleContent, {titleActivated:index === detailIndex}]"
      @mouseover="handleChangeIndex(index)"
    >
      {{item}}
    </div>
  </div>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of list[detailIndex]" :key="index">
        <img :src="item.imgUrl" class="swiper-img">
        <div class="swiper-img-title">{{item.title}}</div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeFootBanner',
  props: {
    list: Array
  },
  data () {
    return {
      titleList: ['会员风采', '合作品牌'],
      detailIndex: 0,
      wrapperTitleContent: 'wrapper-title-content',
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        slidesPerView: 4,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      }
    }
  },
  methods: {
    handleChangeIndex (index) {
      this.detailIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.wrapper-title
  width 50%
  margin .24rem auto 0
  display flex
  justify-content space-around
  text-align center
  .wrapper-title-content
    width 3rem
    height 1rem
    line-height 1rem
    font-size .48rem
    cursor pointer
  .titleActivated
    border-bottom .08rem solid $bgColor
.wrapper
  width 86.7%
  margin 0 auto 1rem
  position relative
  .swiper-slide
    overflow hidden
    padding-bottom 20%
    position relative
    .swiper-img
      width 90%
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      border-radius .1rem
    .swiper-img-title
      width 80%
      font-size .36rem
      position absolute
      bottom 0
      left 0
      right 0
      margin auto
      text-align center
      ellipsis()
  .swiper-button-prev
    left -1.4rem
  .swiper-button-next
    right -1.4rem
</style>
