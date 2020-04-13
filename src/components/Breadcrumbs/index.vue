<!--
* @Name:header.vue
* @Author tufengqun
* @简介：
* @备注：
* @Date 2020/02/27
-->
<template lang="pug">
  .breadcrumbs
    template(v-for="item in data")
      router-link.breadcrumbs-item(v-if="item.to", :to="item.to") {{item.txt}}
      a.breadcrumbs-item(v-else-if="item.href", :href="smartProcessUrl(item.href)") {{item.txt}}
      span.breadcrumbs-item(v-else) {{item.txt}}
      i.breadcrumbs-icon  /&nbsp;
</template>

<script>
import { mapState } from 'vuex'
import { smartProcessUrl } from '_UTILS_'
export default {
  components: {},
  props: {
    /**
     * data {Array[Object]} 面包屑数据
     *  - txt {String} 展示的文字
     *  - to  {Object} router-link的to属性
     *  - href {String} a标签的href属性
     *
     * to和href传一即可，传to会用router-link渲染，传href会用a标签渲染
     * 两个都不传会被渲染成span标签
     */
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    ...mapState('User', ['theme']),
  },
  methods: {
    smartProcessUrl: smartProcessUrl,
  },
}
</script>
<style lang="stylus" scoped>
@import '~_STYLUS_/variable'
@import '~_STYLUS_/mixins'

.breadcrumbs
  padding 16px 0 24px
  font-size 14px
  color font-secondary-color

  span
    color font-primary-color

  &-icon
    &:last-child
      display none
</style>
