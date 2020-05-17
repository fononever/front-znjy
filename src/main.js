import Vue from 'vue'
import 'babel-polyfill'
import '_UTILS_/rAF'
import 'normalize.css'
import 'viewerjs/dist/viewer.css'

import App from './App'
import router from './router'
import store from './store'
import Viewer from 'v-viewer'

import ElementUI from '_PLUGINS_/element'
import Http from '_PLUGINS_/http'
import VueProgressBar from '_PLUGINS_/progressbar'
import eventBus from '_UTILS_/eventBus'

Vue.prototype.$eventBus = eventBus

Vue.use(Http, {
  disabledErrorHandler: true,
})
Vue.use(VueProgressBar)

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Viewer)

store.dispatch('User/getPageData')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
