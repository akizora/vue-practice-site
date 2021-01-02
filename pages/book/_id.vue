<template>
  <div>
    <div class="container pt-5">
      <div class="row">
        <div class="col-sm-6">
          <div id="product-main-img py-1">
            <img
              class="rounded mx-auto d-block book-img"
              border="0"
              :src="bookInfo.large_img_url"
            />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="product-details">
            <h2 class="product-name pt-3">
              {{ bookInfo.book_name }}
            </h2>
            <p class="my-3">この本を紹介している記事</p>
            <div v-for="item in relatePosts" :key="item.id" class="product">
              <a :href="item.rendered_body">{{ item.title }}</a>
            </div>
            <!-- <ul class="product-links">
              <li>この本を紹介している記事についているタグ</li>
              <li><a href="#">TEST</a></li>
            </ul> -->
          </div>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-sm-6 p-3 text-center">
          <a
            v-if="this.affiliateLink !== null"
            :href="this.affiliateLink"
            class="add-to-cart-btn p-2"
          >
            amazonで詳しくみる
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BookApi from "@/plugins/axios/modules/book"
import BookPostApi from "@/plugins/axios/modules/bookpost"

export default {
  data() {
    return {
      bookInfo: this.getBook(this.$route.params.id),
      relatePosts: this.getBookPost(this.$route.params.id),
      postInfo: null,
      affiliateLink: null,
    }
  },
  methods: {
    async getBook(id) {
      await BookApi.getBook(id)
        .then((res) => {
          this.bookInfo = res
          this.bookInfo.large_img_url =
            "https://images-na.ssl-images-amazon.com/images/P/" +
            res.asin +
            ".09.LZZZZZZZ.jpg"
          this.affiliateLink = res.affiliate_link
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getBookPost(asin) {
      await BookPostApi.getBookPost(asin)
        .then((res) => {
          this.relatePosts = res
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
}
.book-img {
  height: 300px;
}
.add-to-cart-btn {
  border: 2px solid transparent;
  height: 40px;
  padding: 0 10%;
  text-decoration: none;
  background-color: #ff9900;
  color: #fff;
  border-radius: 40px;
}
.add-to-cart-btn:hover {
  background-color: #fff;
  color: #ff9900;
  border-color: #ff9900;
  cursor: pointer;
}
/*----------------------------*\
	Product details
\*----------------------------*/
.product-details .product-name {
  font-size: 18px;
}

.product-details .product-price {
  display: inline-block;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #d10024;
}

.product-details .add-to-cart .add-to-cart-btn:hover > i {
  opacity: 1;
  visibility: visible;
}

.product-details .product-btns li {
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
}

.product-details .product-links li {
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
}
</style>
