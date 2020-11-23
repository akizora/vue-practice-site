<template>
  <div class="container">
    <div class="border-bottom">検索結果</div>
    <div v-for="book in bookList" :key="book.id" class="row border-bottom">
      <!-- <div class="d-inline-flex"> -->
      <div class="col-sm-6 p-3 text-center">
        <nuxt-link :to="`/book/${book.id}`">
          <img :src="book.img_url" />
        </nuxt-link>
      </div>
      <div class="col-sm-6">
        {{ book.book_name }}
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import BookApi from "@/plugins/axios/modules/book"

export default {
  data() {
    return {
      query: "",
      bookList: [],
    }
  },
  created() {
    this.fetchBookList()
  },
  methods: {
    fetchBookList() {
      BookApi.searchBooks(this.query)
        .then((res) => {
          this.bookList = res.data
          console.log(this.bookList)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
