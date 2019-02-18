<template>
<div class="container">
  <div class="shop">
    <div class="shop-title">
      <div
        :class="[shopSubtitle, {activated: index == detailIndex}]"
        v-for="(item, index) of titleList"
        :key="index"
        @mouseover="handleChangeIndex(index)"
      >
        {{item}}
      </div>
    </div>
    <div class="shop-detail">
      <router-link
        v-for="item of list"
        :key="item.id"
        class="shop-details"
        :to="item.linkUrl"
      >
        <img :src="item.imgUrl" class="details-img">
        <p class="details-title">{{item.title}}</p>
        <p class="details-subtitle">{{item.subtitle}}万/辆</p>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ShopDetails',
  props: {
    list: Array
  },
  data () {
    return {
      titleList: ['房车出售', '房车租赁', '户外装备', '营地设计'],
      detailIndex: 0,
      shopSubtitle: 'shop-subtitle'
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
.container
  overflow hidden
  position relative
  padding-bottom 116%
  .shop
    center()
    position absolute
    top .8rem
    .shop-title
      display flex
      justify-content space-around
      .shop-subtitle
        width 23%
        height 1rem
        line-height 1rem
        text-align center
        font-size .4rem
        font-weight 700
        border-radius .5rem
      .activated
        background $bgColor
  .shop-detail
    margin-top .5rem
    display flex
    flex-wrap wrap
    .shop-details
      overflow hidden
      position relative
      padding-bottom 21.9%
      margin-bottom .6rem
      width 32%
      .details-img
        width 100%
        position absolute
      .details-title
        position absolute
        bottom 0
        left 0
        height 1rem
        width 100%
        line-height 1rem
        font-size .32rem
        font-weight 700
        text-indent .2rem
        color #fff
        background rgba(0, 0, 0, .5)
      .details-subtitle
        position absolute
        bottom 0
        right 0
        height 1rem
        line-height 1rem
        width 2.2rem
        background $bgColor
        text-align center
        font-size .36rem
        color black
    .shop-details:nth-child(3n+2)
      margin 0 .4rem .6rem
</style>
