/*
 * @Author: tfq
 * @Date: 2019-06-12 21:46:22
 * @Last Modified by: tfq
 * @Last Modified time: 2019-06-12 21:49:13
 * @功能: 本地缓存
 * @简介:
 * @RAP:
 */

export let storage = {
  set(key, value) {
    window.localStorage.setItem(key, value)
  },
  get(key) {
    return window.localStorage.getItem(key)
  },
  remove(key) {
    window.localStorage.removeItem(key)
  },
}
