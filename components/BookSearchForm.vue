<template>
  <div>
    <form @submit.prevent="submit">
      <input v-model="query" placeholder="キーワードを入力" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    }
  },
  methods: {
    submit() {
      this.$router.push({ path: "/search", query: { q: this.query } })
      this.query = ""
      this.$refs.searchForm.blur()
    },
  },
}
</script>

<style scoped></style>
