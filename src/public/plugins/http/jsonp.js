import jsonp from 'jsonp'
import { handlerAdapter, handlerError } from './handler'
import event from './event'

export default function (url, data, requestOptions) {
  return new Promise((resolve, reject) => {
    // 拼接url
    url = joinParams(url, data)

    // 发送请求
    jsonp(url, {
      timeout: requestOptions.timeout // 设置超时时间
    }, (error, res) => {
      if (error) {
        // 全局错误处理逻辑
        if(!requestOptions.disabledErrorHandler) handlerError(error)
        event.emit('error', error)
        reject(error)
      } else {
        // 适配数据
        if (!requestOptions.disabledAdaptiveResponseData) res = handlerAdapter(res)
        event.emit('success', res)
        resolve(res)
      }
    })
  })
}

function joinParams(url, params) {
  if (!params) {
    return url
  }

  if (url.search(/\?/) === -1) {
    url += '?'
  }

  for (let key in params) {
    if (params[key] === null || params[key] === undefined) {
      params[key] = ''
    }
    url += `&${key}=${encodeURIComponent(params[key])}`
  }

  return url
}
