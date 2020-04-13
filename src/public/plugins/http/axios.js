/*
 * @Author: tfq
 * @Date: 2018-12-28 16:47:53
 * @Last Modified by: tfq
 * @Last Modified time: 2019-01-21 14:12:14
 * @简介： 定义axios拦截器，实现一些自定义的效果，并暴露axios
 */
import axios from 'axios'
import qs from 'qs'
import { handlerAdapter, handlerError } from './handler'
import event from './event'

/**
 * axios 全局请求拦截
 */
axios.interceptors.request.use(
  config => {
    let requestOptions = JSON.parse(config.headers._options)

    // 设置超时时间
    config.timeout = requestOptions.timeout

    // 在url中添加disabledErrorHandler标识
    // 暂未找到更合理的方式将disabledErrorHandler传递至响应拦截器中
    // 2019/01/11 add by @dzq
    if (requestOptions.disabledErrorHandler) {
      config.url = config.url.indexOf('?') > -1 ? `${config.url}&disabledErrorHandler=1` : `${config.url}?disabledErrorHandler=1`
    }

    // 是否适配响应数据
    if (!requestOptions.disabledAdaptiveResponseData) {
      config.transformResponse = responseDataAdapter
    }

    // 设置请求头
    if (requestOptions.headers) {
      config.headers = Object.assign(config.headers, requestOptions.headers)
    }

    // 是否携带cookie
    if (requestOptions.putOnToken) {
      config.withCredentials = true
    }

    // 是否以表单的形式发送请求
    if (config.method === 'post' && requestOptions.convertToFormData) {
      config = convertToFormData(config)
    }

    // 删除请求头中的options
    delete config.headers._options

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

/**
 * axios 全局响应拦截
 */
axios.interceptors.response.use(
  response => {
    response.data._response = response
    event.emit('success', response.data)
    return response.data
  },
  error => {
    if (error.config.url.search('disabledErrorHandler=1') === -1) {
      handlerError(error)
    }
    event.emit('error', error)
    return Promise.reject(error)
  },
)

export default axios

function convertToFormData(config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  config.data = qs.stringify(config.data)
  return config
}

/**
 * 数据适配器
 */
function responseDataAdapter(res) {
  // parse json
  if (typeof res === 'string') {
    try {
      res = JSON.parse(res)
    } catch (e) {
      /* ignore */
    }
  }

  return handlerAdapter(res)
}
