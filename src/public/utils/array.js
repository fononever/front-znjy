/*
 * @Author: tfq
 * @Date: 2019-04-23 10:52:55
 * @Last Modified by: Wuxiaohong
 * @Last Modified time: 2019-10-21 11:00:51
 * @功能:
 * @简介: 数组类型的工具方法
 * @RAP:
 */

export function keyBy(array, attr) {
  let obj = {}

  array.forEach &&
    array.forEach(item => {
      if (attr in item) {
        obj[item[attr]] = item
      }
    })

  return obj
}

/**
 * 重复数据多少份, 不处理引用类型
 * @param {any} original // 任意数据
 * @param {number} quantity 重复次数
 */
export const repeatObjectToArray = (original, quantity) => {
  let newArr = []
  newArr = Array.from(Array(quantity), _ => {
    return original
  })
  return newArr
}
