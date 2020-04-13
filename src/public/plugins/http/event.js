/*
 * @Author: tfq
 * @Date: 2019-01-21 13:26:08
 * @Last Modified by: tfq
 * @Last Modified time: 2019-01-21 14:06:15
 * @功能:
 * @简介: 自定义事件单例
 * @RAP:
 */

const event = {
  on(eventName, handler) {
    if (eventName in this) {
      this[eventName].push(handler)
    } else {
      this[eventName] = [handler]
    }
  },

  emit(eventName, ...arguemnts) {
    if (eventName in this) {
      let handlers = this[eventName]
      handlers.forEach(handler => {
        handler.apply(null, arguemnts)
      })
    }
  },
}

export default event
