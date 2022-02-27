import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [{ path: '', component: () => import('pages/Index.vue') }]
    },
    {
      path:'/users',
      component:()=> import('layouts/SecondLayout.vue'),
      children:[{path:'',component:()=>import('pages/feature.vue')}]
    },
    {
      path: '*',
      component: () => import('pages/Error404.vue')
    },

  ],
  mode: 'history'
})
