import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Father from '@/components/Props/Father'
import Route from '@/components/Route/Route'
import Head from '@/components/Head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[{
        path:'',
        component:Head
      }]
    },
    {
      path: '/father',
      name: 'Father',
      component: Father
    },
    {
      path:'/route/:id',
      name:'Route',
      component:Route,
    }
  ]
})
