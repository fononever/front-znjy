<!--
* @Name:index.vue
* @Author tufengqun
* @简介：
* @备注：
* @Date 2020/02/27
-->
<template lang="pug">
  .wrap
    p xxxx
</template>

<script>
// import { smartProcessUrl } from '_UTILS_'
import { restSer } from '_SERVICE_'
export default {
  components: {},
  computed: {},
  created() {
    this.getData()
  },
  methods: {
    getData() {
      restSer.getErpIdBySellerId()
    },
  },
}
</script>

<style lang="stylus" scoped></style>
