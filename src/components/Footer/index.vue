<!--
* @Name:header.vue
* @Author tufengqun
* @简介：
* @备注：
* @Date 2020/02/27
-->
<template lang="pug">
  section
    .footer
      .flex
        img(src="/static/images/logo.jpg")
        .right
          p.mb8 四川中安锦业机电工程有限公司 蜀ICP备10207363-1号
          p.mb8 公司电话：028-84544768  蜀ICP备10207363-1号
          p.mb8 公司邮箱：1052481000@qq.com
          p.mb8 公司地址：成都市锦江区二环路东五段239号华润广场B座507号
          p.mb8 公司邮编：610000
      div.fontBold Copyright &copy; 2015, 四川中安锦业机电工程有限公司所有, All Rights Reserved
</template>

<script>
export default {
  components: {},
  computed: {},
}
</script>

<style lang="stylus" scoped>
@import '~_STYLUS_/variable'
@import '~_STYLUS_/mixins'

.footer
  margin 40px auto
  color #999999
  width 600px
  font-size 12px

  .flex
    align-items center

  .left
    width 400px

  .right
    padding-left 24px

.fontBold
  margin-top 20px
  font-weight 700
  text-align center
</style>
