/*
 * @Author: tfq
 * @Date: 2018-08-01 18:28:00
 * @Last Modified by: tfq
 * @Last Modified time: 2020-04-13 21:54:08
 * @功能: meta : requiresAuth 是否校验登录
 * @简介:
 * @RAP:
 */

import Cookies from 'js-cookie'
// import store from '_STORE_'
// import { smartProcessUrl } from '_UTILS_'

export default function (router) {
  /**
   * 开发环境下设定接口代理模式，有4个值，分别是cn,info,com,mock
   */
  if (process.env.NODE_ENV === 'development') {
    router.beforeEach((to, from, next) => {
      let key = process.env.REQUEST_MODEL

      if (to.query[key]) {
        Cookies.set(key, to.query[key])
      }

      next()
    })
  }

  /**
   * 每次路由变更时，更新埋点插件参数，并发送onload统计
   */
  router.beforeEach((to, from, next) => {
    // 埋点
    if (to.name !== from.name) {
      // 过滤掉hash变更触发的beforeEach事件
    }

    next()
  })

  /**
   * 动态更新页面title
   */
  router.afterEach((to) => {
    document.title = (to.meta.title && `${to.meta.title}-${process.env.TITLE}`) || process.env.TITLE
  })
}
