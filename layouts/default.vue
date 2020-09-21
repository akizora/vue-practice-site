<template>
  <div class="h-100">
    <top-header/>
    <top-nav/>
    <main id="main" role="main">
      <nuxt/>
      <bottom-footer/>
    </main>
  </div>
</template>
<script>
import TopHeader from '~/components/TopHeader.vue'
import TopNav from '~/components/TopNav.vue'
import BottomFooter from '~/components/BottomFooter.vue'

export default {
  components: {
    TopNav,
    TopHeader,
    BottomFooter,
  },
  head: {
    htmlAttrs: {
      class: 'html-class'
    },
    bodyAttrs: {
      class: 'body-class'
    }
  }
}
</script>

<style lang="scss">
.html-class {
  height: 100%;
}
.body-class {
  height: 100%;
}
</style>