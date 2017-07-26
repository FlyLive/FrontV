// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iView'
import App from './App'//路由挂载
import router from './router'//路由列表
import 'iview/dist/styles/iview.css'//引用css

Vue.config.productionTip = false

Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
