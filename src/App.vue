<template lang="pug">
  #app
    Header

    transition(name="fade", mode="out-in")
      keep-alive
        router-view(v-if="$route.meta.keepAlive")
    transition(name="fade", mode="out-in")
      router-view(v-if="!$route.meta.keepAlive")

    Footer

    vue-progress-bar
    //- vue-debug-tools(v-if="env === 'development'")
</template>

<script>
import Header from '_COMPONENTS_/Header'
import Footer from '_COMPONENTS_/Footer'
const env = process.env.NODE_ENV
export default {
  name: 'App',
  data() {
    return {
      env,
    }
  },
  components: {
    Header,
    Footer,
  },
  created() {
    document.body.className = ''

    this.$Progress.start()

    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    })

    this.$router.afterEach(() => {
      this.$Progress.finish()
    })
  },
}
</script>

<style lang="stylus">
@import '~_STYLUS_/global'
</style>
