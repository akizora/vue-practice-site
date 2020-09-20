<template>
    <div classw="container">
        <div class="row">
            <div class="col-sm-6">
                <div id="product-main-img">
                     <!-- {{ $route.query.id }} -->
                     <img class="rounded mx-auto d-block" border="0" :src=this.bookInfo.img_url >
                </div>
            </div>
            <div class="col-sm-6">
                <div class="product-details">
                    <h2 class="product-name">{{ this.bookInfo.book_name }}</h2>
                    <div>
                        <!-- <h3 class="product-price">title</h3> -->
                    </div>
                    <p>この本を紹介している記事</p>
                    <ul class="product-btns">
                        <li><a href="#">add to wishlist</a></li>
                        <li><a href="#">add to compare</a></li>
                    </ul>
                    <ul class="product-links">
                        <li>この本を紹介している記事についているタグ</li>
                        <li><a href="#">TEST</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BookApi from '@/plugins/axios/modules/book'

export default {

  data () {
    return {
      // bookInfo: []
      bookInfo: this.getBook(this.$route.query.id),
    }
  },
  methods: {
    async getBook(id) {
        await BookApi.getBook(id).then(res => {
        // console.log(res)
        this.bookInfo = res
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
