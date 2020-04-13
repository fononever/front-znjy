/*
 * @Author: tfq
 * @Date: 2019-01-07 15:09:03
 * @Last Modified by: tufengqun
 * @Last Modified time: 2020-02-05 18:44:00
 * @功能:
 * @简介: vuex相关工具方法
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

export function processResource(source, code) {
  let data = (source || []).filter(item => item.fieldCode === code)
  return (data[0] && data[0].entity) || []
}
