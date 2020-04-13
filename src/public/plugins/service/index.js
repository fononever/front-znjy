/*
 * @Author: tfq
 * @Date: 2018-07-20 15:58:07
 * @Last Modified by: tfq
 * @Last Modified time: 2020-04-13 22:08:35
 * @功能:
 * @简介: vue-http Vue项目接口管理类
 * @RAP:
 */

const defaultOptions = {
  httpPlugin: null, // http插件，必填
  host: '', // 接口host，必填
  useProxy: false, // 是否开启代理
  requestModel: 'info', // 接口实际请求的环境
  mockBaseUrl: '', // Easy Mock项目的baseUrl，requestModel=mock时会用到
  httpsSuffixe: { com: 1 }, // 哪些环境用上了https协议，替换接口协议时会用到
}

export default class Service {
  constructor(options) {
    // 参数检测
    if (Object.prototype.toString.call(options) !== '[object Object]') return new Error('options must is Object')
    if (!options.host) return new Error('options.host is required')
    if (!options.httpPlugin) return new Error('options.httpPlugin is required')

    this.$options = Object.assign({}, defaultOptions, options)
    this.$api = {}
  }

  add(...params) {
    this.generateApi.apply(this, params)
  }

  addRestful(...params) {
    params.push(true) // 添加restful标识
    this.generateApi.apply(this, params)
  }

  /**
   * generateApi 生成一个封装好的接口服务
   */
  generateApi() {
    let apiOptions = {
      name: '', // 接口名称
      methods: '', // 接口方法
      url: '', // 接口完整地址
      host: this.$options.host, // 接口host
      path: '', // 接口path
      isRestful: false, // 接口类型
    }
    let firstArguments = arguments[0]

    // 参数解析
    if (Object.prototype.toString.call(firstArguments) === '[object Object]') {
      // Object类型参数
      Object.assign(apiOptions, firstArguments)
      apiOptions.isRestful = arguments[1]
    } else {
      apiOptions.name = arguments[0]
      apiOptions.methods = arguments[1]
      apiOptions.path = arguments[2]
      apiOptions.isRestful = arguments[3]
    }

    /**
     * 创建接口函数
     * @param {Object} formData // 接口数据
     * @param {Object} requestOptions // 接口请求配置项
     */
    let api = (formData = {}, requestOptions = {}) => {
      // 合并请求配置项
      requestOptions = Object.assign({}, this.$options, requestOptions)

      // 读取接口请求地址
      let url
      if (apiOptions.url) {
        let a
        url = apiOptions.url
        a = document.createElement('a')
        a.href = url
        apiOptions.host = a.hostname
        apiOptions.path = a.pathname
      } else {
        url = `${apiOptions.host}${apiOptions.path}`
      }

      // 转换url
      url = this.transformUrl(url, requestOptions, apiOptions)

      // 处理restful接口
      if (apiOptions.isRestful) {
        url = this.parseRestful(url, requestOptions)
      }

      // 判断请求方法
      let methods
      if (apiOptions.methods === 'jsonp' && requestOptions.requestModel === 'mock') {
        // jsonp的mock模式要改用get方法去请求
        methods = 'get'
      } else {
        methods = apiOptions.methods
      }

      return requestOptions.httpPlugin[methods](url, formData, requestOptions)
    }

    // 将接口配置项挂载在接口函数上
    api._options = apiOptions

    // 接接口函数挂载在Service实例上
    this.$api[apiOptions.name] = api

    // 暴露接口函数，并设置不允许重写
    Object.defineProperty(this, apiOptions.name, {
      value: api,
      enumerable: false,
      writable: false,
      configurable: false,
    })
  }

  /**
   * 根据传入的参数，将url转换成最终的url并返回
   * @param {String} url
   * @param {Object} requestOptions
   */
  transformUrl(url, requestOptions, apiOptions) {
    let { requestModel, mockBaseUrl, useProxy } = requestOptions
    let { path } = apiOptions

    if (requestModel === 'mock') {
      url = `${mockBaseUrl}${path}`
    } else if (useProxy) {
      let hostName = url.match(/\/\/([-\w]+)\./)[1]
      url = `/${hostName}${requestModel}${path}`
    } else {
      url = this.replaceSuffixAndProtocol(url, requestModel, requestOptions)
    }

    return url
  }

  replaceSuffixAndProtocol(url, suffix, requestOptions) {
    let protocol = suffix in requestOptions.httpsSuffixe ? 'https' : 'http'
    url = url.replace('https', protocol).replace('.com', `.${suffix}`)
    return url
  }

  parseRestful(url, params) {
    return url.replace(/{(\w+)}/g, (match, $1) => params[$1])
  }
}
