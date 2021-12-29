import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/LoginRegister.vue')
  },
   {
    path: '/:catchAll(.*)',
    name: '404',
    component: ()=> import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
