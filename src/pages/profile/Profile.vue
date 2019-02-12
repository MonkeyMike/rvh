<template>
<div>
  <common-header></common-header>
  <common-swiper :list="swiperList" :swiperNavList="swiperNavList"></common-swiper>
  <common-footer></common-footer>
</div>
</template>

<script>
import CommonHeader from '../CommonHeader'
import CommonSwiper from '../CommonSwiper'
import CommonFooter from '../CommonFooter'
export default {
  name: 'Profile',
  data () {
    return {
      swiperList: [],
      swiperNavList: []
    }
  },
  components: {
    CommonHeader,
    CommonSwiper,
    CommonFooter
  },
  methods: {
    getProfileInfo () {
      this.$axios.get('/api/index.json')
        .then(this.getProfileInfoSucc)
    },
    getProfileInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.swiperNavList = data.swiperNavList
      }
    }
  },
  mounted () {
    this.getProfileInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
