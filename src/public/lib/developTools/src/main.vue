<!--
* @Name:index.vue
* @Author tfq
* @简介： 开发工具条
* @备注：
* @Date 2019/05/28
-->
<template lang="pug">
  section(v-if="visible")
    .develop-tool
      .develop-tool-btn(@click="showTools=!showTools") {{form.env}}
      .develop-tool-bd(v-show="showTools")
        .form
          el-form(:model="form", label-suffix=":", label-position="right", label-width="90px" ,size="small")
            el-form-item(label="环境切换")
              el-radio-group(v-model="form.env", @change="changeEnv")
                el-radio-button(label="mock") mock环境
                el-radio-button(label="cn") cn环境
                el-radio-button(label="info") info环境
                el-radio-button(label="com") com环境

            el-form-item(label="cookie设置")
                el-input.input(type="text", v-model="form.cookie", placeholder="无法自动读取cookie，请手动填写")
                el-button(type="primary", @click="setCookie") 确定
            el-form-item(label="快速导航")
                el-button(type="primary", @click="showNav=true, showTools=false") 打开导航页


    .router-list(v-if="showNav")
      .list
        el-button(v-for="item in routerList", style="margin-bottom: 10px", :key="item.name", type="infor", size="small", @click="$router.push({name: item.name}, showNav=false)") {{(item.meta && item.meta.title) || item.name}}

    .shadow(v-show="showTools || showNav", @click="showTools = false, showNav = false")

</template>

<script>
import Cookies from 'js-cookie'
import { routesConfig } from '@/router/routesConfig'

export default {
  name: 'DevelopTools',

  data() {
    return {
      visible: false,
      showTools: false,
      showNav: false,
      form: {
        env: 'mock',
        cookie: '',
      },
      routerList: [],
    }
  },
  methods: {
    changeEnv() {
      Cookies.set('requestModel', this.form.env)
      window.location.reload()
    },
    setCookie() {
      if (this.form.cookie === '') {
        this.$message({
          type: 'error',
          message: '请输入cookie',
        })
        return
      }
      Cookies.set('token', this.form.cookie)
      this.$message({
        type: 'success',
        message: '设置Cookie成功！',
      })
    },
  },
  created() {
    this.$set(this.form, 'env', Cookies.get('requestModel') || 'cn')
    this.visible = process.env.NODE_ENV === 'development'
    this.routerList = routesConfig
  },
}
</script>

<style lang="stylus" scoped>
.develop-tool
  .develop-tool-bd
    //display none
    position fixed
    top 100px
    left 50%
    margin-left -220px
    width 100%
    padding 20px
    width 450px
    background #fff
    z-index 100000

  .develop-tool-btn
    //display none
    position fixed
    right 10px
    bottom 10px
    width 40px
    height 40px
    line-height 40px
    text-align center
    background #409EFF
    border 1px solid #67C23A
    border-radius 100%
    box-shadow 0 0 3px rgba(0, 0, 0, 0.2)
    color #fff
    z-index 999
    cursor pointer

  .input
    margin-right 10px
    width 225px

.router-list
  position fixed
  padding 15px
  top 100px
  margin-left -250px
  width 500px
  height auto
  left 50%
  background #fff
  z-index 100001

.shadow
  //display none
  position fixed
  left 0
  top 0
  right 0
  bottom 0
  background rgba(0, 0, 0, 0.5)
  z-index 998
</style>
