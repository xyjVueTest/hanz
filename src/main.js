// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import _ from 'lodash/core'
import router from './routes'
import MyChart from 'chart.js'

window.MyChart = MyChart

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<div id="app"><router-view></router-view></div>'
})
