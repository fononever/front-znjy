import DevelopTools from './src/main'

export default {
  install(Vue) {
    Vue.component(DevelopTools.name, DevelopTools)
  },
}
