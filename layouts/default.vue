<template>
  <div>
    <top-header/>
      <main id="main" role="main">
      <nuxt/>
    </main>
    <bottom-footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import TopHeader from '~/components/TopHeader.vue'
import BottomFooter from '~/components/BottomFooter.vue'

export default {
  components: {
    Header,
    TopHeader,
    BottomFooter
  }
}
</script>

<style lang="scss">
@import '../assets/scss/styles.scss';
</style>