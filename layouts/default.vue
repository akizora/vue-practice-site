<template>
  <div>
    <top-header/>
    <top-nav/>
    <new-release/>
    <main id="main" role="main">
    <nuxt/>
    </main>
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader.vue'
import TopNav from '~/components/TopNav.vue'
import NewRelease from '~/components/NewRelease.vue'
import BottomFooter from '~/components/BottomFooter.vue'

export default {
  components: {
    TopNav,
    TopHeader,
    NewRelease,
    BottomFooter
  }
}
</script>

