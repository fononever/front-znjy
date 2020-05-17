<template lang="pug">
  .banner-box
    el-carousel(trigger="click", :height="`348px`", :arrow="arrow")
      el-carousel-item(v-for="(item, index) in routationData", :key="index")
        .preview(:style="`background: url('${imgDomain}${item}') top center no-repeat;background-size:cover`")
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('User', ['imgDomain']),
    ...mapGetters('User', ['routationData']),
    arrow() {
      return this.routationData.length > 1 ? 'hover' : 'never'
    },
  },
}
</script>
<style lang="stylus" scoped>
@import '~_STYLUS_/mixins'
@import '~_STYLUS_/variable'

.banner-box
  margin-bottom module-bottom

.el-carousel
  width 100%

  >>>.el-carousel__container
    .el-carousel__arrow
      &.el-carousel__arrow--left, &.el-carousel__arrow--right
        width 64px
        height 64px

        i
          display none

      &.el-carousel__arrow--left
        left 50px
        background url('./images/banner-prev.png') center center no-repeat

      &.el-carousel__arrow--right
        right 50px
        background url('./images/banner-next.png') center center no-repeat

.preview
  display inline-block
  width 100%
  height 348px
  // &.bg0
  // background url('./images/rotation1.jpg') top center no-repeat
  // background-size cover
</style>
