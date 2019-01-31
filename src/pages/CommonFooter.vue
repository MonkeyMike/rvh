<template>
<div class="footer">
  <div class="footer-content">
    <div class="footer-address">
      <div class="address-left">
        <img src="static/img/index/logo.png" alt="" class="address-logo">
        <div class="address-title">{{title}}</div>
      </div>
      <div class="address-right">
        <div class="address-right-content">
          <img src="static/img/index/index07.png" alt="">
          <div class="address-subtitle">地址：武汉市古田四路江城壹号51房车</div>
        </div>
      </div>
    </div>
    <div class="footer-position">
      <div class="position-map" id="allmap"></div>
      <div class="position-wx">
        <img src="static/img/index/51wx.png" alt="">
      </div>
      <div class="position-desc">
        <div class="position-desc-title">官方微信</div>
        <div class="position-desc-subtitle">{{title}}</div>
        <div class="position-desc-subtitle">微信号：wyzyx1</div>
      </div>
    </div>
  </div>
  <div class="footer-link">
    <div class="link">
      <div class="link-title">友情链接：</div>
      <div v-for="item of list" :key="item.id">
        <router-link :to="item.linkUrl" class="link-subtitle">{{item.title}}</router-link>
      </div>
    </div>
    <div class="desc">版权所有： 武汉路客宝文化旅游有限公司  鄂ICP备18023746号-1</div>
  </div>
</div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'CommonFooter',
  data () {
    return {
      title: '51房车超市',
      map: null
    }
  },
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    init () {
      this.map = new BMap.Map('allmap')
      var point = new BMap.Point(114.216753, 30.602689)
      this.map.centerAndZoom(point, 14)
      var marker = new BMap.Marker(point)
      this.map.addOverlay(marker)
      var opts = {
        width: 100,
        height: 50,
        title: '51房车'
      }
      var infoWindow = new BMap.InfoWindow('地址：武汉市古田四路江城壹号51房车', opts)
      this.map.openInfoWindow(infoWindow, this.map.getCenter())
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.footer
  margin-top 1rem
  position relative
  min-height 6.8rem
  background #212121
  color #fff
  box-sizing border-box
  .footer-content
    position absolute
    width 86.7%
    left 0
    right 0
    margin auto
    display flex
    padding .8rem 0 .6rem
    .footer-address
      flex 0.8
      display flex
      .address-left
        flex 0.6
        text-align center
        .address-title
          font-size .48rem
          font-weight 500
          color $bgColor
          indent()
          margin .24rem 0
      .address-right
        flex 1
        padding-top .4rem
        .address-right-content
          display flex
          .address-subtitle
            text-indent .1rem
            line-height .6rem
    .footer-position
      flex 1
      display flex
      .position-map
        flex 1.5
      .position-wx
        flex 1
        margin-left .2rem
        img
          width 100%
      .position-desc
        margin-left .2rem
        flex 1
        display flex
        flex-direction column
        justify-content center
        .position-desc-title, .position-desc-subtitle
          padding .2rem 0
        .position-desc-title
          color $bgColor
  .footer-link
    background #333
    position absolute
    bottom 0
    left 0
    right 0
    margin auto
    .link
      width 40%
      margin 0 auto
      padding .24rem 0
      display flex
      justify-content space-around
      .link-subtitle
        color #fff
    .desc
      width 80%
      margin 0 auto
      padding-bottom .24rem
      text-align center
      color #999
</style>
