import Vue from 'vue'
import Router from 'vue-router'
import { routesConfig } from './routesConfig'
import guardsMixin from './routesControl'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: routesConfig,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

guardsMixin(router)

export default router
