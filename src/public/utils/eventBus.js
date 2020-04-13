/*
 * @Author: tfq
 * @Date: 2019-04-11 19:33:31
 * @Last Modified by: tfq
 * @Last Modified time: 2019-04-11 19:43:57
 * @功能: eventBus
 * @简介:
 * @RAP:
 */

import Vue from 'vue'

const eventBus = new Vue({})
let _on = eventBus.$on
let _emit = eventBus.$emit
let _off = eventBus.$off
eventBus.$on = (name, fn) => {
  if (eventBus._events[name]) {
    eventBus.$off(name)
  }
  _on.call(eventBus, name, fn)
}
eventBus.$off = name => {
  if (name && eventBus._events[name]) {
    _off.call(eventBus, name)
  }
}
eventBus.$emit = (name, params) => {
  if (!params || !params.from) {
    console.warn && console.warn('The paramter(from) is null')
  }
  _emit.call(eventBus, name, params)
}
export default eventBus
