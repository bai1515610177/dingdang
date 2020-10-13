import Vue from 'vue'
import VueRouter from 'vue-router'

import local from '@/utils/local'
import login from '@/views/login'
import home from '@/views/home'
import welcome from '@/views/welcome'
import NotFound from '@/views/404'
import content from '@/views/content'
import material from '@/views/material'
import publish from '@/views/publish'
import comment from '@/views/comment'
import fans from '@/views/fans'
import setting from '@/views/setting'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    // /login     登录          一级路由
    // /          首页          一级路由
    // /          欢迎组件       二级路由
    // /article   内容管理组件   二级路由
    // /image     素材管理组件   二级路由
    // /publish   发布文章组件   二级路由
    // /comment   评论管理组件   二级路由
    // /fans      粉丝管理组件   二级路由
    // /setting   欢迎组件       二级路由
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/',
          component: welcome
        },
        {
          path: '/content',
          component: content
        },
        {
          path: '/material',
          component: material
        },
        {
          path: '/publish',
          component: publish
        },
        {
          path: '/comment',
          component: comment
        },
        {
          path: '/fans',
          component: fans
        },
        {
          path: '/setting',
          component: setting
        }

      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 获取用户信息
  const user = local.getUser()
  if (to.path !== '/login' && !user) return next('/login')
  next()
})

export default router
