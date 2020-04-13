/*
 * @Author: tfq
 * @Date: 2018-07-20 15:58:07
 * @Last Modified by: tfq
 * @Last Modified time: 2020-04-13 22:11:35
 * @功能:
 * @简介: api依赖的公共逻辑
 * @RAP:
 */
import Cookies from 'js-cookie'
import Service from '_PLUGINS_/service'
import { http } from '_PLUGINS_/http'
import hosts from './hosts.json'
import { getHostSuffix } from '_UTILS_'

const defaultOptions = {
  httpPlugin: http,
  host: hosts.ywapi,
  requestModel: Cookies.get('requestModel') || getHostSuffix(),
  mockBaseUrl: process.env.MOCK_BASEURL,
  disabledErrorHandler: false,
  useProxy: process.env.NODE_ENV === 'development',
}

function serviceFactory(options = {}) {
  return new Service(Object.assign({}, defaultOptions, options))
}

export default serviceFactory
