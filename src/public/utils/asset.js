/*
 * @Author: tfq
 * @Date: 2018-08-01 15:11:58
 * @Last Modified by: Wuxiaohong
 * @Last Modified time: 2019-10-22 11:19:04
 * @功能:
 * @简介:
 * @RAP:
 */
/**
 *判断是否为对象类型
 * @export
 * @param {*} obj
 * @returns {boolean}
 * @example
 * isObject({}) // true
 * isObject(null) // false
 */
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
/**
 * 判断是否未字符串类型
 * @export
 * @param {*} str
 * @returns {boolean}
 * @example
 *  isString('1') // true
 *  isString(1) // false
 */
export function isString(str) {
  return Object.prototype.toString.call(str) === '[object String]'
}
/**
 * 判断是否是数值类型
 * @param {*} value
 * @returns {boolean}
 * @example
 * isNumber(1) // true
 * isNumber('1') // false
 */
export const isNumber = value => Object.prototype.toString.call(value) === '[object Number]'
