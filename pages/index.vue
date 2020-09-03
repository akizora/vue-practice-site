<template>
  <section class="util__container">
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
  </section>
</template>

<script>

export default {
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
