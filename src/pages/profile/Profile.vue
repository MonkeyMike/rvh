<template>
<div>
  <common-header></common-header>
  <common-swiper :list="swiperList" :swiperNavList="swiperNavList"></common-swiper>
  <profile-about :list="profileDescList" :profileImgsList="profileImgsList"></profile-about>
  <profile-core :list="profileCoreList"></profile-core>
  <common-footer :list="footLinkList"></common-footer>
</div>
</template>

<script>
import CommonHeader from '@/common/header/CommonHeader'
import CommonSwiper from '@/common/header/CommonSwiper'
import ProfileAbout from './components/About'
import ProfileCore from './components/Core'
import CommonFooter from '@/common/footer/CommonFooter'
export default {
  name: 'Profile',
  data () {
    return {
      swiperList: [],
      swiperNavList: [],
      profileDescList: [],
      profileImgsList: [],
      profileCoreList: [],
      footLinkList: []
    }
  },
  components: {
    CommonHeader,
    CommonSwiper,
    ProfileAbout,
    ProfileCore,
    CommonFooter
  },
  methods: {
    getProfileInfo () {
      this.$axios.get('/api/index.json')
        .then(this.getProfileInfoSucc)
      this.$axios.get('/api/profile.json')
        .then(this.getProfileAboutInfoSucc)
    },
    getProfileInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.swiperNavList = data.swiperNavList
        this.footLinkList = data.footLinkList
      }
    },
    getProfileAboutInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.profileDescList = data.profileDescList
        this.profileImgsList = data.profileImgsList
        this.profileCoreList = data.profileCoreList
      }
    }
  },
  mounted () {
    this.getProfileInfo()
    this.getRem(1366, 50)
  }
}
</script>

<style lang="stylus" scoped>

</style>
