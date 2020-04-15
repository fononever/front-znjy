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

    .flex.flex-center
      .tab-item.font-16(:class="activeTab === 0 && 'active'", @click="activeTab = 0") 公司简介
      .tab-item.font-16(:class="activeTab === 1 && 'active'", @click="activeTab = 1") 企业历程
      .tab-item.font-16(:class="activeTab === 2 && 'active'", @click="activeTab = 2") 资质荣誉

    .small-layout-container
      .box(v-if="activeTab === 0")
        p.text-indent-25.mb20(v-for="item, index in CONFIG.introduction", :key="index") {{item}}
      .box(v-if="activeTab === 1")
        el-timeline(:reverse="true")
          el-timeline-item(v-for="(activity, index) in CONFIG.timeline",
            :key="index",
            :timestamp="activity.time")
              span.mr20(v-for="item, index2 in activity.event", :key="index2") {{item}}

      .box.zzFile.flex(v-if="activeTab === 2")
        .img-box.flex.mr10.ml10(v-for="item, index in CONFIG.zzFile", :key="index")
          el-image(:src="item.imgUrl", fit="contain", :preview-src-list="CONFIG.zzImg")
          span {{item.name}}


    Footer
</template>

<script>
import Header from '_COMPONENTS_/Header'
import Footer from '_COMPONENTS_/Footer'
import Rotation from '_COMPONENTS_/Rotation'
import { CONFIG } from '_CONFIG_'
// import { restSer } from '_SERVICE_'
export default {
  components: {
    Header,
    Footer,
    Rotation,
  },
  data() {
    return {
      activeTab: 0,
      CONFIG,
    }
  },
  created() {
    this.activeTab = parseInt(this.$route.query.tab) || 0
  },
}
</script>

<style lang="stylus" scoped>
@import '~_STYLUS_/variable'
@import '~_STYLUS_/mixins'

.tab-item
  margin 0 20px
  padding 0 40px
  line-height 42px
  border-radius 21px
  box-hover()
  cursor pointer

  &.active
    background color-blue
    color #fff

.small-layout-container
  padding-top 30px
  line-height 28px

  .el-timeline
    padding-left 110px

  .zzFile
    .img-box
      position relative
      box(0px, 5px)
      box-hover()
      color #fff
      font-weight 600
      overflow hidden
      cursor pointer

      span
        position absolute
        left 0
        right 0
        bottom 0
        height 38px
        line-height 38px
        text-align center
        background rgba(0, 0, 0, 0.4)
</style>
