import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/home/Home'
import Profile from 'pages/profile/Profile'
import Shop from 'pages/shop/Shop'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }, {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ],
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})
