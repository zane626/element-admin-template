/**
 * Created by zane on 2021/4/17 上午11:19
 * @description .
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'views/layout'
import order from 'router/order'

Vue.use(Router)
export const routerConfig = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/project',
      name: 'project',
      component: Layout,
      meta: { title: '首页' },
      children: [
        order
      ]
    },
    {
      path: '*',
      redirect: '/project'
    }
  ]
}
const router = new Router(routerConfig)
router.beforeEach((to, from, next) => {
  /**
   * localStorage没有用户信息跳转到登录界面
   */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
