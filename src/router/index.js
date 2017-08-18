import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import profile from '@/components/profile.vue'
import portfolio from '@/components/portfolio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ]
})
