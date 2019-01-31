<template>
  <div class="question">
    <div class="question-content">
      <div class="content-left">
        <h3 class="title-left">专家顾问</h3>
        <div class="left-content" v-for="item of memberList[questionIndex]" :key="item.id">
          <img :src="item.imgUrl" alt="" class="left-content-img">
          <div class="left-content-desc">
            <p class="left-content-title">{{item.title}}</p>
            <p class="left-content-subtitle">{{item.subtitle}}</p>
          </div>
        </div>
      </div>
      <div class="content-right">
        <h3 class="title-right">常见问题</h3>
        <router-link to="/" class="title-right-more">
          更多<span>&gt;</span>
        </router-link>
        <div class="right-content">
          <div class="right-content-title">
            <div
              v-for="(item, index) of titleList"
              :key="index"
              :class="[contentSubtitle,{activated: index === questionIndex}]"
              @mouseover="handleChangQuestion(index)"
            >
              {{ item }}
            </div>
          </div>
          <div class="right-content-desc">
            <div
              class="content-desc"
              v-for="(item, index) of questionList[questionIndex]"
              :key="index"
            >
              <img src="static/img/index/wh.png" alt="">
              <span class="content-desc-subtitle">{{item.subtitle}}</span>
              <span class="content-desc-time">{{item.time}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeQuestion',
  data () {
    return {
      titleList: ['房车销售', '房车改装售后', '营地设计'],
      contentSubtitle: 'content-subtitle',
      questionIndex: 0
    }
  },
  props: {
    list: Array,
    questionList: Array
  },
  computed: {
    memberList () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 2)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  methods: {
    handleChangQuestion (index) {
      this.questionIndex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.question
  width 86.7%
  margin .46rem auto
  min-height 10.5rem
  .question-content
    display flex
    .content-left, .content-right
      width 50%
      .title-left, .title-right
        font-size .6rem
        border-bottom .08rem solid $bgColor
        width 3rem
        text-align center
        letter-spacing .02rem
        padding-bottom .2rem
        color $darkTextColor
      .left-content
        border .04rem dashed $bgColor
        border-radius 2rem
        display flex
        padding .6rem .8rem
        margin .8rem .6rem 1rem 0
        align-items center
        .left-content-img
          display block
          border-radius 50%
          height 2.3rem
        .left-content-desc
          font-size .36rem
          font-weight 700
          margin-left .2rem
          .left-content-title
            margin-bottom .24rem
          .left-content-subtitle
            font-size .32rem
            text-indent .66rem
            line-height 120%
    .title-right
      margin-bottom .14rem
    .title-right-more
      color $darkTextColor
      font-size .38rem
      display block
      float right
      letter-spacing .1rem
    .title-right-more span
      margin-left .2rem
    .right-content
      margin-top .8rem
      display flex
      .right-content-title
        width 30%
        border 1px solid #eaeaea
        div
          ellipsis()
        .content-subtitle
          height 2.4rem
          text-align center
          line-height 2.4rem
          font-size .4rem
        .activated
          background $bgColor
          color #fff
      .right-content-desc
        width 100%
        border 1px solid #eaeaea
        .content-desc
          margin .2rem .24rem
          padding-bottom .2rem
          display flex
          align-items center
          justify-content space-between
          .content-desc-subtitle
            ellipsis()
            text-indent .2rem
            flex 1
</style>
