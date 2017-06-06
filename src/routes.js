import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hanz',
      name: 'hanz',
      component: require('./apps/common/application.vue'),
      redirect: '/hanz/hello',
      children: [
        {
          path: 'hello',
          name: 'hz-hello',
          component: require('./apps/home/home.vue')
        }
      ]
    }
  ]
})
