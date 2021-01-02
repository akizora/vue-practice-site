<template>
  <div>
    <!-- <featured-tags /> -->
    <new-release />
  </div>
</template>

<script>
// import FeaturedTags from "~/components/FeaturedTags.vue"
import NewRelease from "~/components/NewRelease.vue"

export default {
  components: {
    NewRelease,
    // FeaturedTags,
  },
  async asyncData(context) {
    const data = await context.app.$axios.$get(
      process.env.BASE_URL + "/api/books"
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
