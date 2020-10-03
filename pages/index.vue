<template>
  <div>
    <new-release/>
    <popular-books/>
  </div>
</template>

<script>
import NewRelease from '~/components/NewRelease.vue'
import PopularBooks from '~/components/PopularBooks.vue'

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
    const data = await context.app.$axios.$get(process.env.BASE_URL + '/api/books')
      return {
        data
      }
    // Load the JSON from the API
  }
}
</script>
