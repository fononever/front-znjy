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
    //- Rotation
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
</style>
