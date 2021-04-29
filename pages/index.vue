<template>
  <div>
    <first-view />
    <new-release :new-books="books" />
  </div>
</template>

<script>
import axios from "axios"
import NewRelease from "~/components/NewRelease.vue"
import FirstView from "~/components/FirstView.vue"

export default {
  components: {
    NewRelease,
    FirstView,
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
