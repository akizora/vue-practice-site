<template>
  <div class="default">
    <div class="wrapper">
      <top-header />
      <nuxt />
    </div>
    <bottom-footer />
  </div>
</template>
<script>
import TopHeader from "~/components/TopHeader.vue"
// import TopNav from "~/components/TopNav.vue"
import BottomFooter from "~/components/BottomFooter.vue"

export default {
  components: {
    // TopNav,
    TopHeader,
    BottomFooter,
  },
  head: {
    htmlAttrs: {
      class: "html-class",
    },
    bodyAttrs: {
      class: "body-class",
    },
  },
}
</script>

<style lang="scss">
.html-class {
  height: 100%;
}
.body-class {
  height: 100%;
}
.wrapper {
  min-height: 100%;
}
#__nuxt {
  height: 100%;
  // min-height: 120%;
  // position: relative;
}
#__layout {
  height: 100%;
}
.default {
  height: 100%;
}
</style>
