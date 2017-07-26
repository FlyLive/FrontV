import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Father from '@/components/Props/Father'
import Route from '@/components/Route/Route'
import Head from '@/components/Head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[{
        path:'Home',
        component:Head
      }]
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
