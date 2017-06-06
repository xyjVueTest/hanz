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
      redirect: '/hanz/home',
      children: [
        require('./apps/home/route').name,
        require('./apps/jd/route').name,
        require('./apps/jj/route').name,
        require('./apps/others/route').name,
        require('./apps/xc/route').name
      ]
    }
  ]
})
