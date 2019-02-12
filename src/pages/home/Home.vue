<template>
<div>
  <common-header></common-header>
  <common-swiper :list="swiperList" :swiperNavList="swiperNavList"></common-swiper>
  <home-about></home-about>
  <home-icons
    :list="iconList"
    :contentList="contentList"
  ></home-icons>
  <home-question
    :list="memberList"
    :questionList="questionList"
  ></home-question>
  <home-center
    :list="activeCenterList"
  ></home-center>
  <home-activity :list="activityList"></home-activity>
  <home-foot-banner :list="footBannerList"></home-foot-banner>
  <common-footer :list="footLinkList"></common-footer>
</div>
</template>

<script>
import CommonHeader from '@/common/header/CommonHeader'
import CommonSwiper from '@/common/header/CommonSwiper'
import HomeAbout from './components/About'
import HomeIcons from './components/Icons'
import HomeQuestion from './components/Question'
import HomeCenter from './components/Center'
import HomeActivity from './components/Activity'
import HomeFootBanner from './components/FootBanner'
import CommonFooter from '@/common/footer/CommonFooter'
export default {
  name: 'Home',
  components: {
    CommonHeader,
    CommonSwiper,
    HomeAbout,
    HomeIcons,
    HomeQuestion,
    HomeCenter,
    HomeActivity,
    HomeFootBanner,
    CommonFooter
  },
  data () {
    return {
      swiperList: [],
      swiperNavList: [],
      iconList: [],
      contentList: [],
      memberList: [],
      questionList: [],
      activeCenterList: [],
      activityList: [],
      footBannerList: [],
      footLinkList: []
    }
  },
  methods: {
    getHomeInfo () {
      this.$axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.swiperNavList = data.swiperNavList
        this.iconList = data.iconList
        this.contentList = data.contentList
        this.memberList = data.memberList
        this.questionList = data.questionList
        this.activeCenterList = data.activeCenterList
        this.activityList = data.activityList
        this.footBannerList = data.footBannerList
        this.footLinkList = data.footLinkList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    this.getRem(1366, 50)
  }
}
</script>

<style lang="stylus" scoped>

</style>
