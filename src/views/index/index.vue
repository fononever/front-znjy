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
      .bd.flex.module1
        a.left(href="/about")
          p.font-18.bold 四川中安锦业机电工程有限公司
          p 四川中安锦业机电工程有限公司成立于2010年，公司注册资本3010万元人民币，自2016年以来相继获得国家建设行政部门核发的建筑机电设备安装工程专业承包一级、消防设施设备工程专业承包一级、电子与智能化专业承包一级、建筑装饰装修工程专业承包一级、机电总承包三级、输变电工程三级、电力工程施工总承包三级的综合性公司；同时公司获得ISO9001管理体系认证。公司本着面向未来，创新务实的精神，从战略的高度将公司业务发展为：共享服务板块与工程项目板块。
            span.link 更多
              i.el-icon-arrow-right
        .right.flex-1
          a.box.block(href="/about?tab=2")
            p.font-18.bold.text-center 公司资质
            p.text-indent-25 公司始终以建优质工程为目的，以先进技术及优质设计施工团队为后盾，坚持把人才作为企业的核心竞争力，保持与世界最先进的施工技术同步，与国内高校建立了长期合作关系并吸收日本、美国等先进国家和台湾地区的优秀规划设计理念，拥有一批优质的设计团队和施工队伍；应用现代化的企业管理制度保障了每一个项目从设计到施工及售后的优良品质。

      .bd.module2
        p.font-22.text-center.mb20 工程案例
        .flex
          a.left.flex-1.mr20.block
            p.font-24 中央空调案例
          .right.flex-1
            a.right-item.mb20.block
              p.font-24 洁净空调工程案例
            a.right-item.block
              p.font-24 弱电及消防智能化工程案例

      .bd.module3
        p.font-22.text-center.mb20 合作机构
        .flex.flex-center
          .company-box(v-for="item, index in companyList", :key="index")
            img(:src="`/static/images/common/company${index + 1}.png`")

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
  data() {
    return {
      companyList: [
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' },
        { name: '', url: '' },
      ],
    }
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
    color #384868

  .module1
    margin-bottom 60px

    .left
      width 660px
      line-height 28px

      .font-18
        margin-bottom 18px

    .right
      .box
        box(20px, 5px)
        margin-left 30px
        box-hover()
        background rgba(255, 255, 255, 0.3)

  .module2
    margin-bottom 60px

    .left, .right-item
      box(20px, 5px)
      box-hover()
      text-align center
      align-items center
      color #fff
      font-weight 600

    .left
      height 300px
      line-height 260px
      background url('/static/images/common/anli1.png') center center no-repeat
      background-size cover

    .right-item
      height 140px
      line-height 100px
      background url('/static/images/common/anli3.png') center center no-repeat
      background-size cover

      &.mb20
        background url('/static/images/common/anli2.png') center center no-repeat
        background-size cover

  .module3
    .company-box
      box(0, 4px)
      margin 0 20px 20px 0
      width 135px
      height 82px
      line-height 80px
      text-align center
      background #fff
      box-hover()

      img
        max-width 135px
        max-height 82px
        vertical-align middle
</style>
