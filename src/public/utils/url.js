/*
 * @Author: tfq
 * @Date: 2018-07-05 16:35:27
 * @Last Modified by: Wuxiaohong
 * @Last Modified time: 2019-12-10 19:16:19
 * @功能:
 * @简介: url相关工具方法
 * @RAP:
 */

import Cookies from 'js-cookie'

export function getHostSuffix() {
  let match = location.href.match(new RegExp(process.env.DOMAIN + '\\.(\\w+)'))

  return match ? match[1] : process.env.REQUEST_MODEL_DEFAULT
}

/**
 * replaceSuffixAndProtocol
 * 根据域名后缀，替换目标url的后缀和协议。在请求拦截逻辑中，有用到此方法。
 * @param {String} url
 * @param {String} suffix
 */
export function replaceSuffixAndProtocol(url, suffix) {
  suffix = suffix || getHostSuffix()

  if (suffix !== 'com') {
    url = url.replace('https://', 'http://')
    url = url.replace('.com', `.${suffix}`)
  }

  return url
}

/**
 * smartProcessUrl
 * 根据接口代理模式（开发环境下）和执行环境后缀（非开发环境）, 替换url的后缀和协议
 * @param {String} url
 */
export function smartProcessUrl(url) {
  if (process.env.NODE_ENV === 'development') {
    let env = Cookies.get(process.env.REQUEST_MODEL)

    if (!env || env === 'mock') {
      env = process.env.REQUEST_MODEL_DEFAULT
    }

    url = replaceSuffixAndProtocol(url, env)
  } else {
    url = replaceSuffixAndProtocol(url)
  }

  return url
}

/**
 * 将接口参数拼接成字符串
 * @param {Object} params
 *
 * @eg：formatParams({a: 1, b: 2}}) => 'a=1&b=2'
 */
export function formatParams(params) {
  let url = ''

  for (let key in params) {
    url += `${key}=${params[key]}&`
  }

  return url.slice(0, -1)
}

/**
 * 读取url参数的值
 * @param {String} key
 *
 * @eg: 'http://localhost:8001/member/business?memberCount=123'
 * getUrlVal('memberCount') => '123'
 * getUrlVal('params1') => null
 */
export function getUrlVal(key) {
  let match = location.href.match(new RegExp(`${key}=([^&]+)`))
  return match && match[1]
}

/**
 * 把url中的查询参数转换为对象形式
 * @param {String} url
 * @example
 *  getQueryObject('http://baidu.com?a=1&b=2)
 *  // {a:1,b:2}
 */
export function getQueryObject(url = '') {
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}
