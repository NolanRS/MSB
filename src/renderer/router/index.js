import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mixed',
      name: 'mixed-set-page',
      component: require('@/components/MixedSetPage').default
    },
      {
        path: '/home',
          name:'landing-page',
          component: require('@/components/LandingPage').default
      },
      {
        path: '/auto',
          name:'auto-page',
          component: require('@/components/AutoSetPage').default
      },
      {
        path: '*',
          name:'landing-page'
      }
  ]
})
