<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 section-title mt-5">
          <h5 class="title">最近Qiitaで紹介された書籍</h5>
          <!-- <p>最終更新日時</p>pme -->
          <!-- <div class="section-nav">
            <ul class="section-tab-nav tab-nav"></ul>
          </div> -->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 div-slide w-100">
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in postData" :key="item.id" class="h-100">
              <div class="product mt-2 mb-5">
                <div class="product-body">
                  <nuxt-link :to="`/book/${item.id}`">
                    <img border="0" :src="item.img_url" />
                  </nuxt-link>
                  <h3 class="product-name">
                    <nuxt-link :to="`/book/${item.id}`">
                      {{ item.book_name }}
                    </nuxt-link>
                  </h3>
                </div>
                <div class="add-to-cart">
                  <nuxt-link class="add-to-cart-btn" :to="`/book/${item.id}`">
                    詳しくみる
                  </nuxt-link>
                </div>
              </div>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination" />
            <div slot="button-prev" class="swiper-button-prev" />
            <div slot="button-next" class="swiper-button-next" />
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookApi from "@/plugins/axios/modules/book"

export default {
  data() {
    return {
      postData: null,
      story: { content: {} },
      swiperOption: {
        // effect: "fade",
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".swiper-pagination",
          // clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
      },
    }
  },
  created() {
    this.getBooks()
  },
  methods: {
    getBooks() {
      BookApi.getBooks()
        .then((res) => {
          this.postData = res
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.div-slide {
  width: 500px;
}

/*----------------------------*\
	Section
\*----------------------------*/

.section {
  // padding-top: 30px;
  // padding-bottom: 30px;
}

.section-title {
  // position: relative;
  // margin-bottom: 30px;
  // margin-top: 15px;
}

.section-title .title {
  display: inline-block;
  // text-transform: uppercase;
  margin: 0px;
}

.section-title .section-nav {
  float: right;
}

.section-title .section-nav .section-tab-nav {
  display: inline-block;
}

.section-tab-nav li {
  display: inline-block;
  margin-right: 15px;
}

.section-tab-nav li:last-child {
  margin-right: 0px;
}

.section-tab-nav li a {
  font-weight: 700;
  color: #8d99ae;
}

.section-tab-nav li a:after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background-color: #d10024;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.section-tab-nav li.active a {
  color: #d10024;
}

.section-tab-nav li a:hover:after,
.section-tab-nav li a:focus:after,
.section-tab-nav li.active a:after {
  width: 100%;
}

.section-title .section-nav .products-slick-nav {
  top: 0px;
  right: 0px;
}

/*----------------------------*\
	Breadcrumb
\*----------------------------*/

#breadcrumb {
  padding: 30px 0px;
  background: #fbfbfc;
  border-bottom: 1px solid #e4e7ed;
  margin-bottom: 30px;
}

#breadcrumb .breadcrumb-header {
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 15px;
  // text-transform: uppercase;
}

#breadcrumb .breadcrumb-tree {
  display: inline-block;
}

#breadcrumb .breadcrumb-tree li {
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  // text-transform: uppercase;
}

#breadcrumb .breadcrumb-tree li + li {
  margin-left: 10px;
}

#breadcrumb .breadcrumb-tree li + li:before {
  content: "/";
  display: inline-block;
  color: #8d99ae;
  margin-right: 10px;
}

#breadcrumb .breadcrumb-tree li a {
  color: #8d99ae;
}

#breadcrumb .breadcrumb-tree li a:hover {
  color: #d10024;
}

@media only screen and (max-width: 767px) {
  .section-title .section-nav {
    float: none;
    margin-top: 10px;
  }
  .section-tab-nav li {
    margin-top: 10px;
  }
}

/*----------------------------*\
	product
\*----------------------------*/

.product {
  position: relative;
  margin: 15px 0px;
  -webkit-box-shadow: 0px 0px 0px 0px #e4e7ed, 0px 0px 0px 1px #e4e7ed;
  box-shadow: 0px 0px 0px 0px #e4e7ed, 0px 0px 0px 1px #e4e7ed;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  height: 280px;
}

.product:hover {
  // -webkit-box-shadow: 0px 0px 6px 0px #e4e7ed, 0px 0px 0px 2px #d10024;
  // box-shadow: 0px 0px 6px 0px #e4e7ed, 0px 0px 0px 2px #d10024;
}

.product .product-img {
  position: relative;
}

.product .product-img > img {
  width: 100%;
}

.product .product-img .product-label {
  position: absolute;
  top: 15px;
  right: 15px;
}

.product .product-img .product-label > span {
  border: 2px solid;
  padding: 2px 10px;
  font-size: 12px;
}

.product .product-img .product-label > span.sale {
  background-color: #fff;
  border-color: #d10024;
  color: #d10024;
}

.product .product-img .product-label > span.new {
  background-color: #d10024;
  border-color: #d10024;
  color: #fff;
}

.product .product-body {
  // position: relative;
  padding: 15px;
  background-color: #fff;
  text-align: center;
  z-index: 20;
}

.product .product-body > a :hover {
  cursor: pointer;
}

.product .product-body .product-category {
  // text-transform: uppercase;
  font-size: 12px;
  color: #8d99ae;
}

.product .product-body .product-name {
  // text-transform: uppercase;
  font-size: 14px;
  height: 25px;
}

.product .product-body .product-name > a {
  font-weight: 700;
}
.product-name:hover {
  cursor: pointer !important;
}

.product .add-to-cart {
  padding: 10px 0;
  background: #1e1f29;
  text-align: center;
  z-index: 2;
}

.product .add-to-cart .add-to-cart-btn {
  // position: relative;
  border: 0px solid transparent;
  height: 40px;
  padding: 0 7%;
  background-color: #ef233c;
  color: #fff;
  border-radius: 40px;
  // -webkit-transition: 0.2s all;
  // transition: 0.2s all;
  text-decoration: none;
}

.product .add-to-cart .add-to-cart-btn:hover {
  background-color: #fff;
  color: #d10024;
  border-color: #d10024;
  // padding: 0px 30px 0px 50px;
  cursor: pointer;
}
</style>
