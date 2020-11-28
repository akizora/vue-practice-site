<template>
  <div>
    <new-release />
    <popular-books />
    <hexagon-loading />
  </div>
</template>

<script>
import NewRelease from "~/components/NewRelease.vue"
import PopularBooks from "~/components/PopularBooks.vue"
import HexagonLoading from "~/components/HexagonLoading.vue"

export default {
  components: {
    NewRelease,
    PopularBooks,
    HexagonLoading,
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
