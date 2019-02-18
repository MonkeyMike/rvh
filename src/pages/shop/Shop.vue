<template>
<div>
  <common-header></common-header>
  <common-swiper :list="swiperList" :swiperNavList="swiperNavList"></common-swiper>
  <shop-details :list="shopSellList"></shop-details>
  <common-footer :list="footLinkList"></common-footer>
</div>
</template>

<script>
import CommonHeader from '@/common/header/CommonHeader'
import CommonSwiper from '@/common/header/CommonSwiper'
import ShopDetails from './components/Details'
import CommonFooter from '@/common/footer/CommonFooter'
export default {
  name: 'Shop',
  data () {
    return {
      swiperList: [],
      swiperNavList: [],
      shopSellList: [],
      footLinkList: []
    }
  },
  components: {
    CommonHeader,
    CommonSwiper,
    ShopDetails,
    CommonFooter
  },
  methods: {
    getShopInfo () {
      this.$axios.get('/api/index.json')
        .then(this.getCommonInfoSucc)
      this.$axios.get('/api/shop.json')
        .then(this.getShopInfoSucc)
    },
    getShopInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.shopSellList = data.shopSellList
      }
    },
    getCommonInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.swiperNavList = data.swiperNavList
        this.footLinkList = data.footLinkList
      }
    }
  },
  mounted () {
    this.getShopInfo()
    this.getRem(1366, 50)
  }
}
</script>

<style lang="stylus" scoped>

</style>
