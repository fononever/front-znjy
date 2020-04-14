<!--
* @Name:header.vue
* @Author tufengqun
* @简介：
* @备注：
* @Date 2020/02/27
-->
<template lang="pug">
  section.header-box
    .bd
      .left
        img(src="/static/images/logo.jpg")
      .right
        router-link(v-for="item, index in list", :key="index",
          :class="isActive(item)",
          :to="{name: item.to}") {{item.name}}
</template>

<script>
// import { mapState } from 'vuex'

export default {
  data() {
    return {
      list: [
        {
          name: '首页',
          to: 'index',
        },
        {
          name: '关于我们',
          to: 'aboutUs',
        },
        {
          name: '经营模块',
          to: 'jyModule',
        },
        {
          name: '工程案例',
          to: 'project',
        },
        {
          name: '新闻动态',
          to: 'newMessage',
        },
        {
          name: '招贤纳士',
          to: 'recruit',
        },
        {
          name: '联系我们',
          to: 'linkUs',
        },
      ],
    }
  },
  components: {},
  computed: {},
  methods: {
    isActive(item) {
      return this.$route.name === item.to && 'active'
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~_STYLUS_/variable'
@import '~_STYLUS_/mixins'

.header-box
  height 80px
  background #fff
  box-shadow 0 0 20px 2px rgba(0, 0, 0, 0.08)

  .bd
    padding 0 30px
    margin 0 auto
    width layout-width
    display flex
    // justify-content space-between
    align-items center

  .left
    height 80px
    line-height 80px

    img
      vertical-align middle

  .right
    padding-left 40px

    a
      display inline-block
      padding 10px 30px

      &.active
        color color-blue
</style>
