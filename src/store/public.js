/*
 * @Author: tfq
 * @Date: 2018-07-23 15:04:38
 * @Last Modified by: tfq
 * @Last Modified time: 2018-07-23 15:37:15
 * @功能:
 * @简介: store依赖的一些公共方法
 * @RAP:
 */

/**
 * mutationFactory 用来辅助创建mutation，避免重复代码过多
 * @param {Array[Object]} params
 * @param {String} params.mutationName
 * @param {String} params.stateName
 * @param {All} params.val
 */
export function mutationFactory(params) {
  let obj = {}

  params.forEach(param => {
    obj[param.mutationName] = (state, data) => {
      state[param.stateName] = typeof param.val === 'undefined' ? data : param.val
    }
  })

  return obj
}
