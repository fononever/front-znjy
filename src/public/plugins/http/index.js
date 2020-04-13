import axios from './axios'
import jsonp from './jsonp'
import event from './event'

const defaultOptions = {
  timeout: 60000, // 超时时间

  disabledErrorHandler: false, // 是否禁用请求错误处理器
  disabledAdaptiveResponseData: false, // 是否禁用响应数据适配器

  headers: {}, // 是否自定义headers，仅axios有效
  putOnToken: true, // 是否携带cookie，仅axios有效
  convertToFormData: false, // 是否以表单的形式提交数据，仅axios.post有效

  onSuccess() {}, // 请求成功后的统一回调
  onError() {}, // 请求失败后的统一回调
}

const http = {
  get(url, data, options = {}) {
    return axios.get(url, {
      params: data,
      headers: {
        _options: JSON.stringify(Object.assign({}, defaultOptions, options)),
      },
    })
  },

  post(url, data, options = {}) {
    return axios.post(url, data, {
      headers: {
        _options: JSON.stringify(Object.assign({}, defaultOptions, options)),
      },
    })
  },

  put(url, data, options = {}) {
    return axios.put(url, data, {
      headers: {
        _options: JSON.stringify(Object.assign({}, defaultOptions, options)),
      },
    })
  },

  delete(url, data, options = {}) {
    return axios.delete(url, {
      data,
      headers: {
        _options: JSON.stringify(Object.assign({}, defaultOptions, options)),
      },
    })
  },

  jsonp(url, data, options = {}) {
    return jsonp(url, data, Object.assign({}, defaultOptions, options))
  },
}

export default {
  install(Vue, options) {
    Object.assign(defaultOptions, options)

    event.on('success', defaultOptions.onSuccess)
    event.on('error', defaultOptions.onError)

    Vue.prototype.$http = http
  },
}

export { http }
