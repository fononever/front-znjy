import Vue from 'vue'
import 'babel-polyfill'
import '_UTILS_/rAF'
import 'normalize.css'
import '_PLUGINS_/element'

import App from './App'
import router from './router'
import store from './store'

import Http from '_PLUGINS_/http'
import VueProgressBar from '_PLUGINS_/progressbar'
import eventBus from '_UTILS_/eventBus'

import {
  Button,
  Loading,
  Input,
  Checkbox,
  checkboxGroup,
  Form,
  FormItem,
  Icon,
  Message,
  MessageBox,
  Table,
  TableColumn,
  Pagination,
  Cascader,
} from 'element-ui'

Vue.prototype.$eventBus = eventBus

Vue.use(Http, {
  disabledErrorHandler: true,
})
Vue.use(VueProgressBar)

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Loading)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(checkboxGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Icon)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Cascader)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
