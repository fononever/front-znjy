<!--
* @Name:index.vue
* @Author tufengqun
* @简介：
* @备注：
* @Date 2020/02/27
-->
<template lang="pug">
  .wrap
    //- Header
    Rotation()
    .flex
      //- 左侧树形结构
      .tree-box
        .title 所有产品
        .tree-parent(v-for="item, index in prodNavData", :key="index")
          p(@click="collapseIndex(index)", :class="actived === index ? 'activeP' : ''") {{item.name}}
          el-collapse-transition
            .tree-child(v-show="actived === index")
              p(v-for="childItem, index2 in item.prod",
                :key="index2",
                :class="activeName === childItem.name ? 'activeP' : ''"
                @click="handleNodeClick(childItem)") {{childItem.name}}

      //- 产品列表
      .product_box.flex-1(v-if="showbox === 1")
        .product-item(v-for="item , index in prodNavData[actived].prod", :key="index")
          .img-box
            img(:src="`${imgDomain}${item.image}`")
          p.title {{item.name}}
          .btn(@click="handleNodeClick(item)") 查看详情

      //- 产品详情
      .product-details.flex-1(v-if="showbox === 2 && detailsList.length > 0")
        .doc-item(v-for="item, index in detailsList", :key="index")
          .img-box(v-if="item.type === 'img'")
            img(:src="`${imgDomain}${item.content}`")

          .text-box(v-if="item.type === 'text'")
            p {{item.content}}

          .h1-box.text-center(v-if="item.type === 'h1'")
            h1 {{item.content}}

          .h2-box.text-center(v-if="item.type === 'h2'")
            h2 {{item.content}}

          .h3-box.text-center(v-if="item.type === 'h3'")
            h3 {{item.content}}

          .h4-box.text-center(v-if="item.type === 'h4'")
            h4 {{item.content}}

          .h5-box.text-center(v-if="item.type === 'h5'")
            h5 {{item.content}}


    Footer


</template>

<script>
// import { smartProcessUrl } from '_UTILS_'
import Header from '_COMPONENTS_/Header'
import Footer from '_COMPONENTS_/Footer'
import Rotation from '_COMPONENTS_/Rotation'
import { mapGetters, mapActions, mapState } from 'vuex'
// import PageData from '_CONFIG_/pageData'
// import { restSer } from '_SERVICE_'
export default {
  components: {
    Header,
    Footer,
    Rotation,
  },
  data() {
    return {
      // 展开数据
      actived: -1,
      activeName: '',
      showbox: 0,
      detailsList: [],
    }
  },
  computed: {
    ...mapGetters('User', ['prodNavData']),
    ...mapState('User', ['imgDomain']),
  },
  created() {
    this.collapseIndex(0)
  },
  methods: {
    ...mapActions('User', ['getJsonData']),
    // 点击二级
    handleNodeClick(data) {
      this.activeName = data.name
      this.showbox = 2
      this.getDetails(data.data)
    },
    // 点击一级
    collapseIndex(index) {
      this.actived = index
      this.activeName = this.prodNavData[index].name
      this.showbox = 1
    },
    getDetails(data) {
      this.getJsonData(data).then(res => {
        this.detailsList = res || []
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~_STYLUS_/variable'
@import '~_STYLUS_/mixins'

.tree-box
  width 300px

  .title
    padding 0 15px 15px
    margin-bottom 24px
    font-weight bold
    font-size 16px
    border-bottom 1px solid #f5f5f5

.tree-parent
  p
    padding-left 15px
    line-height 30px
    cursor pointer

    &:hover
      background #f5f5f5

    &.activeP
      color color-theme !important

  .tree-child
    padding 5px 0 10px

    >p
      padding-left 30px
      color #666

.product_box
  padding-left 10px

  .product-item
    display inline-block
    padding 5px
    margin 0 15px 15px
    width 250px
    height 350px
    border 1px solid #f5f5f5
    border-radius 4px
    text-align center
    box-hover()
    vertical-align top

    .img-box
      width 100%
      height 238px

    p
      padding 0 10px

    .btn
      margin-top 12px
      btnInvert(98px, 34px, color-theme)
      cursor pointer
      border-radius 16px

.product-details
  padding 0 10px

  .text-box
    margin-bottom 8px

    p
      text-indent 30px

  .text-center, .img-box
    margin-bottom 15px
</style>
