<template>
  <div>
    <div class="container py-3">
      <div class="row">
          <div class="col-md-6">
            <div id="product-main-img py-1">
              <!-- {{ this.bookInfo }} -->
              <!-- {{ this.relatePosts }} -->
              <img class="rounded mx-auto d-block" border="0" :src=this.bookInfo.img_url >
            </div>
          </div>
          <div class="col-md-6">
            <div class="product-details">
              <h2 class="product-name">{{ this.bookInfo.book_name }}</h2>
              <p>この本を紹介している記事</p>
              <div class="product col" v-for="item in this.relatePosts" :key="item.id">
                <a :href=item.rendered_body >{{ item.title }}</a>
              </div>
              <ul class="product-btns">
                <!-- <li><a href="#">add to wishlist</a></li> -->
                <!-- <li><a href="#">add to compare</a></li> -->
              </ul>
              <!-- <ul class="product-links">
                <li>この本を紹介している記事についているタグ</li>
                <li><a href="#">TEST</a></li>
              </ul> -->
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import BookApi from '@/plugins/axios/modules/book'
import BookPostApi from '@/plugins/axios/modules/bookpost'

export default {

  data () {
    return {
      // bookInfo: []
      bookInfo: this.getBook(this.$route.query.id),
      relatePosts: this.getBookPost(this.$route.query.id),
      postInfo: null,
    }
  },
  methods: {
    async getBook(id) {
        await BookApi.getBook(id).then(res => {
        // console.log(res)
        this.bookInfo = res
        // const idLists = res.qiita_posts
        // idLists.forEach(postid => {
        //   this.relatePosts = 'https://qiita.com/items/' + postid
        // });
      }).catch(err => {
        console.log(err)
      })
    },
    async getBookPost(asin) {
      await BookPostApi.getBookPost(asin).then(res => {
        this.relatePosts = res
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    // const bookId = this.$route.query.id
    // this.getBook(bookId)
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.section {
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
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
  color: #D10024;
}

.product-details .add-to-cart .add-to-cart-btn:hover>i {
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
