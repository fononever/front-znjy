<!--
* @Name:header.vue
* @Author tufengqun
* @简介：
* @备注：
* @Date 2020/02/27
-->
<template lang="pug">
  section.footer
    p.mb8 电话：028-84544768  蜀ICP备10207363-1号
    p.mb8 四川中安锦业机电工程有限公司 邮箱：1052481000@qq.com
    p.mb8 地址：成都市锦江区二环路东五段239号华润广场B座507号 邮编：610000
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
  text-align center
  color #999999
  font-size 12px

.fontBold
  font-weight 700
</style>
