/*
 * @Author: tfq
 * @Date: 2018-07-25 11:04:16
 * @Last Modified by: tfq
 * @Last Modified time: 2019-04-23 17:10:48
 * @功能:
 * @简介:
 * @RAP:
 */

import VueProgressBar from 'vue-progressbar'

const OPTIONS = {
  color: '#66bb6a',
  failedColor: '#874b4b',
  thickness: '2px',
}

export default {
  install(vue) {
    VueProgressBar.install.call(null, vue, OPTIONS)
  },
}
