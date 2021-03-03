import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import roters from './aside'
const routes: RouteRecordRaw[] = [
  ...roters,
  {
    path: '/Login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
