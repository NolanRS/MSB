import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mixed-set-page',
      component: require('@/components/MixedSetPage').default
    },{
        path: '/',
          name:'landing-page',
          component: require('@/components/LandingPage').default
      },
    {
      path: '*',
      redirect: '/mixed-set-page'
    }
  ]
})
