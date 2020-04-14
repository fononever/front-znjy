<!--
* @Name:index.vue
* @Author tufengqun
* @简介：
* @备注：
* @Date 2020/02/27
-->
<template lang="pug">
  .wrap
    Header
    Rotation
    .small-layout-container
      .bd
        .left
          p.font-18.bold 四川中安锦业机电工程有限公司
          p 四川中安锦业机电工程有限公司成立于2010年，公司注册资本3010万元人民币，自2016年以来相继获得国家建设行政部门核发的建筑机电设备安装工程专业承包一级、消防设施设备工程专业承包一级、电子与智能化专业承包一级、建筑装饰装修工程专业承包一级、机电总承包三级、输变电工程三级、电力工程施工总承包三级的综合性公司；同时公司获得ISO9001管理体系认证。公司本着面向未来，创新务实的精神，从战略的高度将公司业务发展为：共享服务板块与工程项目板块。
        .right
    Footer

</template>

<script>
// import { smartProcessUrl } from '_UTILS_'
import Header from '_COMPONENTS_/Header'
import Footer from '_COMPONENTS_/Footer'
import Rotation from '_COMPONENTS_/Rotation'
// import { restSer } from '_SERVICE_'
export default {
  components: {
    Header,
    Footer,
    Rotation,
  },
  computed: {},
  created() {
    this.getData()
  },
  methods: {
    getData() {
      // restSer.getErpIdBySellerId()
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~_STYLUS_/variable'
@import '~_STYLUS_/mixins'

.small-layout-container
  .bd
    display flex

  .left
    width 660px
    color #384868
    line-height 28px

    .font-18
      margin-bottom 18px
</style>
