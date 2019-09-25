import Vue from 'vue'
/* eslint-disable import/first */
window.Vue = Vue
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})
