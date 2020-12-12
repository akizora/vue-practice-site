<template>
  <div>
    <new-release />
    <!-- <popular-books /> -->
  </div>
</template>

<script>
import NewRelease from "~/components/NewRelease.vue"
// import PopularBooks from "~/components/PopularBooks.vue"

export default {
  components: {
    NewRelease,
    // PopularBooks,
  },
  async asyncData(context) {
    const data = await context.app.$axios.$get(
      "http://localhost:8000/api/books"
    )
    return {
      data,
    }
  },
  data() {
    return {
      story: { content: {} },
    }
  },
}
</script>
