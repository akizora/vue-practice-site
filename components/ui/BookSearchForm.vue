<template>
  <div>
    <v-form @submit.prevent="submit">
      <v-text-field
        ref="searchForm"
        v-model="query"
        hide-details
        placeholder="キーワードを入力"
        dense
      />
    </v-form>
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
