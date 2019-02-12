// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import Axios from 'axios'
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

/**
 * 设置rem
 * @param pwidth
 * @param prem
 */
export function getRem (pwidth, prem) {
  var html = document.getElementsByTagName('html')[0]
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = oWidth / pwidth * prem + 'px'
  console.log(oWidth / pwidth * prem + 'px')
}

Vue.prototype.$axios = Axios
Vue.prototype.getRem = getRem
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
