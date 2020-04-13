/*
 * @Author: tfq
 * @Date: 2018-07-11 16:21:05
 * @Last Modified by: tfq
 * @Last Modified time: 2018-07-11 16:35:17
 * @功能:
 * @简介: 提供与jQuery相似的方法，截取自http://youmightnotneedjquery.com/
 * @RAP:
 */

export function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className)
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)
  }
}

export function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className)
  } else {
    el.className += ' ' + className
  }
}

export function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className)
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
  }
}
