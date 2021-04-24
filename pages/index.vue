<template>
  <div>
    <new-release :newBooks="books" />
  </div>
</template>

<script>
import axios from "axios"
import NewRelease from "~/components/NewRelease.vue"

export default {
  components: {
    NewRelease,
  },
  async asyncData() {
    const requestUrl = process.env.BASE_URL + "/api/books"
    const books = await axios
      .get(requestUrl)
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.error(err)
      })
    return {
      books: books,
    }
  },
}
</script>
