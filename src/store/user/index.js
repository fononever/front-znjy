/*
 * @Author: tfq
 * @Date: 2018-08-01 10:40:23
 * @Last Modified by: tufengqun
 * @Last Modified time: 2020-05-17 12:09:21
 * @功能:
 * @简介: user相关的store
 * @RAP:
 */

import { mutationFactory } from '_UTILS_'
import { http } from '_PLUGINS_/http'
// import { userSer, storeSer } from '_SERVICE_'
// import { APPLICATION } from '_CONFIG_'

export default {
  namespaced: true,
  state: {
    pageData: {},
    imgDomain: window.location.origin + '/static/resource',
  },

  mutations: {
    ...mutationFactory([{ mutationName: 'setPageData', stateName: 'pageData' }]),
  },
  getters: {
    routationData(state) {
      return state.pageData.banner || []
    },
    prodNavData(state) {
      return state.pageData.prodNav || []
    },
  },
  actions: {
    getPageData({ commit }) {
      return new Promise((resolve, reject) => {
        http
          .get('/static/resource/index.json')
          .then(res => {
            commit('setPageData', res.data)
            resolve()
          })
          .catch(() => {
            resolve()
          })
      })
    },
    getJsonData({ state }, url) {
      return new Promise((resolve, reject) => {
        let getUrl = state.imgDomain + url
        http
          .get(getUrl)
          .then(res => {
            resolve(res.data)
          })
          .catch(() => {
            resolve({})
          })
      })
    },
  },
}
