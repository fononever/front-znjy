/*
 * @Author: tfq
 * @Date: 2018-07-05 16:48:20
 * @Last Modified by: tfq
 * @Last Modified time: 2020-04-13 21:55:01
 * @功能:
 * @简介: Vuex入口文件
 * @RAP:
 */

// vuex 本地持久化
import createPersistedState from 'vuex-persistedstate'

// 引入依赖
import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'

// 装载Vuex
Vue.use(Vuex)

let modules = {
  User,
}
// 创建Vuex实例
export default new Vuex.Store({
  modules: modules,
  plugins: [createPersistedState()],
})
