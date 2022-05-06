/*
 * @Author: xu756
 * @Date: 2022-05-06 23:04:26
 * @LastEditTime: 2022-05-07 00:15:47
 * @LastEditors: xu756
 * @Description:  路由配置
 * @FilePath: \goweb\src\router\index.js
 */
import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  }
]

// 创建路由拦截器
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router