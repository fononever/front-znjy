/* * @Author: tfq * @Date: 2018-07-25 09:29:28 * @Last Modified by: tfq * @Last Modified time: 2018-09-14 18:14:45 * @功能: * @简介: 404页面
* @RAP: */
<template lang="pug">
  .layout-container
    .wrap
      .wrap-left
        img.pic.pic-404(src="./images/404.png")
        img.pic.pic-cloud.pic-cloud-1(src="./images/cloud.png")
        img.pic.pic-cloud.pic-cloud-2(src="./images/cloud.png")
        img.pic.pic-cloud.pic-cloud-3(src="./images/cloud.png")
      .wrap-right
        .title 页面不存在！
        .title-sub 让我开飞船去火星把它找回来...
        .descript 请检查您输入的网址是否正确，请点击以下按钮返回<br/>主页或者发送错误报告
        a.btn(:href="homeUrl") 返回首页
</template>

<script>
import { smartProcessUrl } from '_UTILS_'

export default {
  data() {
    return {
      homeUrl: smartProcessUrl(process.env.HOME_URL),
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~_STYLUS_/mixins'

color-blue = #1482f0

.wrap
  twoColumnsLayout(600px, 0)
  width 1000px
  margin 0 auto
  padding-top 150px

  &-left
    position relative

  &-right
    line-height 1.25

.pic
  max-width 100%

  &-cloud
    position absolute
    opacity 0
    animation float 2.6s linear forwards infinite

    &-1
      top -130px
      left 220px
      width 80px
      animation-delay 1s

    &-2
      top -140px
      left 420px
      width 46px
      animation-delay 1.2s

    &-3
      top -50px
      left 500px
      width 62px
      animation-delay 1s

.title
  font-size 32px
  font-weight bold
  color color-blue
  margin-top 50px
  margin-bottom 20px

  &-sub
    font-size 20px
    margin-bottom 10px
    color color-blue

.descript
  line-height 21px
  color grey
  margin-bottom 30px

.btn
  btn(110px, 36px, color-blue)
  font-size 14px
  border-radius 2em

@keyframes float
  0%
    transform translate(0px, 0px)
    opacity 0

  20%
    transform translate(-40px, 20px)
    opacity 1

  80%
    transform translate(-160px, 80px)
    opacity 1

  100%
    transform translate(-200px, 100px)
    opacity 0
</style>
