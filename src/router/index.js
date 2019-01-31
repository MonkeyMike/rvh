import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    /*, {
      path: '/details/:id',
      name: 'Details',
      component: Details
    }, {
      path: '/pro',
      name: 'Pro',
      component: Pro
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/bbs',
      name: 'Bbs',
      component: Bbs
    }, {
      path: '/suggest',
      name: 'Suggest',
      component: Suggest
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }
    */
  ],
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})
