/*
 * @Author: tfq
 * @Date: 2018-12-04 10:35:38
 * @Last Modified by: tufengqun
 * @Last Modified time: 2020-04-16 10:48:23
 * @功能:
 * @简介: 封装element，做一些个人化的配置
 * @RAP:
 */

import ElementUI from 'element-ui'
import './index.scss'

export default {
  install(Vue) {
    ElementUI.install.call(null, Vue)
  },
}
