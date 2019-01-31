<template>
<div>
  <common-header></common-header>
  <home-swiper :list="swiperList"></home-swiper>
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
import CommonHeader from '../CommonHeader'
import HomeSwiper from './components/Swiper'
import HomeAbout from './components/About'
import HomeIcons from './components/Icons'
import HomeQuestion from './components/Question'
import HomeCenter from './components/Center'
import HomeActivity from './components/Activity'
import HomeFootBanner from './components/FootBanner'
import CommonFooter from '../CommonFooter'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    CommonHeader,
    HomeSwiper,
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
      lastCity: '',
      swiperList: [],
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
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      this.$axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
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
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
