<template>
	<div class="section">
		<div class="container">
				<div class="row">
					<div class="col-md-12 section-title mt-5">
						<h3 class="title">最近紹介された書籍</h3>
            <!-- <p>最終更新日時</p>pme -->
						<div class="section-nav">
							<ul class="section-tab-nav tab-nav">
							</ul>
						</div>
					</div>
				</div>
        <div class="row">
          <div class="col-sm-12 div-slide w-100">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in this.postData" :key="item.id" class="h-100">
                  <div class="product my-5">
                    <div class="product-body">
                      <nuxt-link :to="`/book/${item.id}`">
                      <!-- <a @click="$router.push({ path: 'book', query: { id : item.id }})"> -->
                        <img border="0" :src=item.img_url >
                      <!-- </a> -->
                      </nuxt-link>
                      <h3 class="product-name">
                        <!-- <a @click="$router.push({ path: 'book', query: { id : item.id }})">{{ item.book_name }}</a> -->
                        <nuxt-link :to="`/book/${item.id}`">{{ item.book_name }}
                        </nuxt-link>
                      </h3>
                    </div>
                    <div class="add-to-cart">
                      <nuxt-link class="add-to-cart-btn" :to="`/book/${item.id}`" >
                        詳しくみる
                      </nuxt-link>
                    </div>
                  </div>
                </swiper-slide>
                <div slot="pagination" class="swiper-pagination"/>
                <div slot="button-prev" class="swiper-button-prev"/>
                <div slot="button-next" class="swiper-button-next"/>
            </swiper>
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
      postData: null,
      story: { content: {} },
      swiperOption: {
        // effect: 'fade',
        loop: true,
        // autoplay: {
        //   delay: 5000,
        // },
        pagination: {
          el: '.swiper-pagination',
          // clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 5,
      },
    }
  },
  methods: {
    getBooks() {
      BookApi.getBooks().then(res => {
        // console.log(res)
        this.postData = res
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getBooks()
  },
  mounted () {
  }
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
  color: #8D99AE;
}

.section-tab-nav li a:after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background-color: #D10024;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.section-tab-nav li.active a {
  color: #D10024;
}

.section-tab-nav li a:hover:after, .section-tab-nav li a:focus:after, .section-tab-nav li.active a:after {
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
  background: #FBFBFC;
  border-bottom: 1px solid #E4E7ED;
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

#breadcrumb .breadcrumb-tree li+li {
  margin-left: 10px;
}

#breadcrumb .breadcrumb-tree li+li:before {
  content: '/';
  display: inline-block;
  color: #8D99AE;
  margin-right: 10px;
}

#breadcrumb .breadcrumb-tree li a {
  color: #8D99AE;
}

#breadcrumb .breadcrumb-tree li a:hover {
  color: #D10024;
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
  -webkit-box-shadow: 0px 0px 0px 0px #E4E7ED, 0px 0px 0px 1px #E4E7ED;
  box-shadow: 0px 0px 0px 0px #E4E7ED, 0px 0px 0px 1px #E4E7ED;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  height: 280px;
}

.product:hover {
  // -webkit-box-shadow: 0px 0px 6px 0px #E4E7ED, 0px 0px 0px 2px #D10024;
  // box-shadow: 0px 0px 6px 0px #E4E7ED, 0px 0px 0px 2px #D10024;
}

.product .product-img {
  position: relative;
}

.product .product-img>img {
  width: 100%;
}

.product .product-img .product-label {
  position: absolute;
  top: 15px;
  right: 15px;
}

.product .product-img .product-label>span {
  border: 2px solid;
  padding: 2px 10px;
  font-size: 12px;
}

.product .product-img .product-label>span.sale {
  background-color: #FFF;
  border-color: #D10024;
  color: #D10024;
}

.product .product-img .product-label>span.new {
  background-color: #D10024;
  border-color: #D10024;
  color: #FFF;
}

.product .product-body {
  // position: relative;
  padding: 15px;
  background-color: #FFF;
  text-align: center;
  z-index: 20;
}

.product .product-body > a :hover{
  cursor: pointer;
}

.product .product-body .product-category {
  // text-transform: uppercase;
  font-size: 12px;
  color: #8D99AE;
}

.product .product-body .product-name {
  // text-transform: uppercase;
  font-size: 14px;
  height: 25px;
}

.product .product-body .product-name>a {
  font-weight: 700;
}
.product-name:hover{
  cursor: pointer !important;
}

// .product .product-body .product-name>a:hover, .product .product-body .product-name>a:focus {
//   color: #D10024;
// }

// .product .product-body .product-price {
//   color: #D10024;
//   font-size: 18px;
// }

// .product .product-body .product-price .product-old-price {
//   font-size: 70%;
//   font-weight: 400;
//   color: #8D99AE;
// }

// .product .product-body .product-rating {
//   position: relative;
//   margin: 15px 0px 10px;
//   height: 20px;
// }

// .product .product-body .product-rating:after {
//   content: "";
//   position: absolute;
//   top: 50%;
//   left: 0;
//   right: 0;
//   -webkit-transform: translateY(-50%);
//   -ms-transform: translateY(-50%);
//   transform: translateY(-50%);
//   height: 1px;
//   background-color: #E4E7ED;
// }

// .product .product-body .product-btns>button {
//   position: relative;
//   width: 40px;
//   height: 40px;
//   line-height: 40px;
//   background: transparent;
//   border: none;
//   -webkit-transition: 0.2s all;
//   transition: 0.2s all;
// }

// .product .product-body .product-btns>button:hover {
//   background-color: #E4E7ED;
//   color: #D10024;
//   border-radius: 50%;
// }

// .product .product-body .product-btns>button .tooltipp {
//   position: absolute;
//   bottom: 100%;
//   left: 50%;
//   -webkit-transform: translate(-50%, -15px);
//   -ms-transform: translate(-50%, -15px);
//   transform: translate(-50%, -15px);
//   width: 150px;
//   padding: 10px;
//   font-size: 12px;
//   line-height: 10px;
//   background: #1e1f29;
//   color: #FFF;
//   text-transform: uppercase;
//   z-index: 10;
//   opacity: 0;
//   visibility: hidden;
//   -webkit-transition: 0.2s all;
//   transition: 0.2s all;
// }

// .product .product-body .product-btns>button:hover .tooltipp {
//   opacity: 1;
//   visibility: visible;
//   -webkit-transform: translate(-50%, -5px);
//   -ms-transform: translate(-50%, -5px);
//   transform: translate(-50%, -5px);
// }

.product .add-to-cart {
  // position: absolute;
  // left: 1px;
  // right: 1px;
  // bottom: 1px;
  padding: 10px 0;
  background: #1e1f29;
  text-align: center;
  // -webkit-transform: translateY(0%);
  // -ms-transform: translateY(0%);
  // transform: translateY(0%);
  // -webkit-transition: 0.2s all;
  // transition: 0.2s all;
  z-index: 2;
}

// .product:hover .add-to-cart {
//   -webkit-transform: translateY(100%);
//   -ms-transform: translateY(100%);
//   transform: translateY(100%);
// }

.product .add-to-cart .add-to-cart-btn {
  // position: relative;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 10%;
  background-color: #ef233c;
  color: #FFF;
  border-radius: 40px;
  // -webkit-transition: 0.2s all;
  // transition: 0.2s all;
  text-decoration: none;
}

// .product .add-to-cart .add-to-cart-btn>i {
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 40px;
//   height: 40px;
//   line-height: 38px;
//   color: #D10024;
//   opacity: 0;
//   visibility: hidden;
// }

.product .add-to-cart .add-to-cart-btn:hover {
  background-color: #FFF;
  color: #D10024;
  border-color: #D10024;
  // padding: 0px 30px 0px 50px;
  cursor: pointer;
}

// .product .add-to-cart .add-to-cart-btn:hover>i {
//   opacity: 1;
//   visibility: visible;
// }

</style>