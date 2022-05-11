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
    redirect: '/home',
    component: () => import('@/views/index.vue'),
    children: [{
      // 首页
      path: '/home',
      name: 'home',
      component: () => import('@/components/home.vue'),

    }, {
      //公众号
      path: '/gzh',
      name: 'gzh',
      redirect: '/gzh/menu',
    }, {
      //公众号菜单
      path: '/gzh/menu',
      name: 'gzh_menu',
      component: () => import('@/components/gzh/menu.vue'),
    }, {
      //公众号消息
      path: '/gzh/notice',
      name: 'gzh_notice',
      component: () => import('@/components/gzh/notice.vue'),
    }, {
      path: '/user/info',
      name: 'user_info',
      component: () => import('@/components/user/info.vue'),
    }]
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