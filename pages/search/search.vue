<template>
  <div>
    <v-container fluid>
      <v-form @submit.prevent="getBooks">
        <v-row align="center">
          <v-col cols="12" sm="10" md="8">
            <v-text-field
              v-model="query"
              outlined
              hide-details
              placeholder="キーワードを入力"
              autofocus
            />
          </v-col>
          <v-col cols="12" sm="2" md="4">
            <v-btn class="primary" @click="getBooks">検索</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      books: [],
    }
  },
  watch: {
    "$route.query.q": {
      handler(newVal) {
        this.query = newVal
        this.getBooks()
      },
      immediate: true,
    },
  },
  methods: {
    getBooks() {},
  },
}
</script>
