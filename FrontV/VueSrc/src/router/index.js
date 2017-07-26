import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Father from '@/components/Props/Father'
import Route from '@/components/Route/Route'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/father',
      name: 'Father',
      component: Father
    },
    {
      path:'/route/:params',
      name:'Route',
      component:Route
    }
  ]
})
