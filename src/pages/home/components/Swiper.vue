<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img :src="item.logoUrl" alt="" class="swiper-logo">
      <p class="swiper-title">{{item.slideTitle}}</p>
      <div class="swiper-nav">
        <router-link
          :to="items.linkUrl"
          v-for="items of swiperNavList"
          :key="items.id"
          :class="[swiperNavA, {acitvated: items.id === '0001'}]"
        >
          {{items.title}}
        </router-link>
      </div>
      <img :src="item.imgUrl" alt="" class="swiper-img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        // autoplay: 3000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true
      },
      swiperNavA: 'swiper-nav-a'
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  props: {
    list: Array,
    swiperNavList: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  position relative
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 41.37%
  background: #C6C4C5
  color #fff
  .swiper-logo
    position absolute
    width 13.19%
    top .4rem
    left 1.8rem
  .swiper-title
    position absolute
    font-size 1rem
    font-weight bold
    top 5.4rem
    left 5.4rem
  .swiper-img
    width: 100%
  .swiper-nav
    position absolute
    width 80%
    display flex
    justify-content space-around
    top 1rem
    right 0
    .swiper-nav-a
      color #fff
      display inline-block
      font-size .32rem
      overflow hidden
      white-space nowrap
      text-overflow clip
      margin-left .06rem
    .acitvated
      color $bgColor
</style>
