<template>
  <div>
    <top-header/>
    <!-- <top-nav/> -->
    <!-- <main id="main" role="main"> -->
    <nuxt/>
    <!-- </main> -->
    <bottom-footer/>
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
#__nuxt {
  // height: 100%
  min-height: 1200px;
  position: relative;
}
#__layout {
  height: 100%
}
</style>