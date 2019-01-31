<template>
  <div class="about">
    <h4 class="about-title">{{ title }}</h4>
    <p class="about-details">{{ details }}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeAbout',
  data () {
    return {
      title: '关于我们',
      details: '51房车是武汉梦之旅途文化旅游公司旗下品牌，本着房车带给你美好生活的宗旨，以诚挚周全的服务，为每一位追求美好房车生活的你，提供一个远离喧嚣闹市，享受大自然乐趣的最佳去处。51自驾房车俱乐部成立于2012年，是华中地区专业的房车游俱乐部。五年来我们与全国各省市房车俱乐部建立了友好密切的合作关系,组织了大量的自驾游、户外以及水上运动等活动;建设了位于江城壹号武汉房车母港中的51房车超市。'
    }
  }
}
</script>

<style lang="stylus" scoped>
.about
  width 100%
  .about-title
    text-align center
    font-size .6rem
    font-weight bold
    margin-top .4rem
    letter-spacing .16rem
  .about-details
    text-indent .8rem
    font-size .4rem
    width 86.7%
    margin .24rem auto .6rem
    text-align justify
    letter-spacing .02rem
    line-height .6rem
</style>
