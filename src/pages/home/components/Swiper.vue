<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img :src="item.logoUrl" alt="" class="swiper-logo">
      <p class="swiper-title">{{item.slideTitle}}</p>
      <ul class="swiper-nav">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/">企业简介</router-link>
        </li>
        <li>
          <router-link to="/">房车超市</router-link>
        </li>
        <li>
          <router-link to="/">自驾路线</router-link>
        </li>
        <li>
          <router-link to="/">活动体验</router-link>
        </li>
        <li>
          <router-link to="/">活动中心</router-link>
        </li>
        <li>
          <router-link to="/">新闻资讯</router-link>
        </li>
        <li>
          <router-link to="/">联系我们</router-link>
        </li>
      </ul>
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
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
a
  color #fff
  font-size .32rem
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
    display flex
    top 1rem
    right 2rem
  .swiper-nav>li
    display inline-block
    width 2rem
    text-align center
</style>
