/*
 * @Author: tfq
 * @Date: 2019-06-18 10:21:05
 * @Last Modified by: tfq
 * @Last Modified time: 2019-06-18 14:13:29
 * @功能:
 * @简介:
 * @RAP:
 */

/**
 * 页面跳转
 *
 * @export
 * @param {String} url
 */
/**
 * 手机号验证
 */
export function checkPhone(msg = []) {
  const DEFAULT_MSG = ['请输入手机号码', '请输入正确的手机号码']

  return (rule, value, callback) => {
    let regIdNo = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
    if (!value) {
      callback(new Error(msg[0] || DEFAULT_MSG[0]))
    } else if (!regIdNo.test(value)) {
      callback(new Error(msg[1] || DEFAULT_MSG[1]))
    } else {
      callback()
    }
  }
}
