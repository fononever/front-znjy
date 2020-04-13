/*
 * @Author: Wuxiaohong (wxh1220@gmail.com)
 * @Date: 2019-10-24 14:41:02
 * @Last Modified by: Wuxiaohong
 * @Last Modified time: 2019-10-24 17:05:34
 * @功能: 判断ie浏览器版本
 * @简介: 通过调用 IEVersion()可以获得返回值，值如下
 *  值	值类型	    值说明
    -1	Number	不是ie浏览器
    6	  Number	ie版本<=6
    7	  Number	ie7
    8	  Number	ie8
    9	  Number	ie9
    10	Number	ie10
    11	Number	ie11
    'edge'	String	ie的edge浏览器
 * @RAP:
 */
/**
 * 判断ie浏览器版本
 * @export
 * @returns ie版本值
 */
export function IEVersion() {
  /* eslint-disable */
  var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    var fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion == 7) {
      return 7
    } else if (fIEVersion == 8) {
      return 8
    } else if (fIEVersion == 9) {
      return 9
    } else if (fIEVersion == 10) {
      return 10
    } else {
      return 6 // IE版本<=7
    }
  } else if (isEdge) {
    return 'edge' // edge
  } else if (isIE11) {
    return 11 // IE11
  } else {
    return -1 // 不是ie浏览器
  }
}

/**
 *  设置hash
 * @param {string} hash 哈希值
 */
export function setHash(hashValue) {
  const ieV = IEVersion()
  if (Number(ieV) <= 9 || history.pushState === void 0) {
    const REG = /#\w+/g
    if (window.location.hash.match(REG)) {
      window.location.hash = window.location.hash.replace(REG, hashValue ? `#${hashValue}` : '')
    } else {
      window.location.hash += hashValue ? `#${hashValue}` : ''
    }
  } else {
    window.location.hash = hashValue || ''
  }
}
