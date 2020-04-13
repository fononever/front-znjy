/*
 * @Author: tfq
 * @Date: 2018-08-01 10:40:23
 * @Last Modified by: tfq
 * @Last Modified time: 2020-04-13 21:43:07
 * @功能:
 * @简介: user相关的store
 * @RAP:
 */

import { mutationFactory } from '_UTILS_'
// import { userSer, storeSer } from '_SERVICE_'
// import { APPLICATION } from '_CONFIG_'

export default {
  namespaced: true,
  state: {
    userInfo: {},
  },

  mutations: {
    ...mutationFactory([{ mutationName: 'setUserInfo', stateName: 'userInfo' }]),
  },
  actions: {},
}
