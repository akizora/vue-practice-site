<template>
  <div>
    <new-release/>
  </div>
</template>

<script>
import NewRelease from '~/components/NewRelease.vue'

export default {
  components: {
    NewRelease,
  },
  data () {
    return {
      story: { content: {} }
    }
  },
  mounted () {
  },
  async asyncData (context) {
    const data = await context.app.$axios.$get('http://localhost:8000/api/books')
      return {
        data
      }
    // Load the JSON from the API
  }
}
</script>
