/*
 * @Author: tfq
 * @Date: 2018-12-28 17:10:06
 * @Last Modified by: tfq
 * @Last Modified time: 2020-02-27 13:50:51
 * @简介： axios和jsonp模块中的一些公共逻辑
 */

import Message from 'element-ui/packages/message'

/**
 * 响应数据适配器
 * @param {Object} res 响应数据
 */
export function handlerAdapter(res) {
  let code, data, message, time

  if (typeof res.STATUS !== 'undefined') {
    code = res.STATUS === 1 ? 0 : res.STATUS
    data = res.ENTITY
  } else if (typeof res.status !== 'undefined') {
    code = res.status === 1 ? 0 : res.status
    data = res.data
  } else {
    code = res.code
    data = res.data
  }

  // 部分旧接口无固定格式，这里手动包装一下
  // 通过判断有无data字段，来判断一个接口是否是旧接口
  if (typeof data === 'undefined') {
    data = res
    code = code || 0
  }

  message = res.ERROR_MSG || res.message || res.msg

  time = res.time

  return { code, data, message, time, _original: res }
}

/**
 * 请求错误处理器
 * @param {Object} error 错误对象
 */
export function handlerError(error) {
  let message = '请求错误，请重试！'

  if (typeof error.message === 'string' && error.message.search(/(t|T)imeout/) > -1) {
    message = '请求超时，请重试！'
  }

  Message({
    type: 'error',
    message: message,
  })
}
