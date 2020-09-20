<template>
	<div class="section">
		<div class="container">
				<div class="col-md-12">
					<div class="section-title">
						<h3 class="title">最近紹介された書籍</h3>
						<div class="section-nav">
							<ul class="section-tab-nav tab-nav">
								<!-- <li class="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
								<li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
								<li><a data-toggle="tab" href="#tab1">Cameras</a></li> -->
							</ul>
						</div>
					</div>
				</div>
        <div class="products-slick row" data-nav="#slick-nav-1">
          <!-- product -->
          <div class="product col" v-for="item in this.postData" :key="item.book_name">
            <div class="product-img">
              <div class="product-label">
                <!-- <span class="new">NEW</span> -->
              </div>
            </div>
            <div class="product-body">
              <a target="_blank" ><img border="0" :src=item.img_url ></a><img src="https://images-na.ssl-images-amazon.com/images/P/4295009792.09.TZZZZZZZ.jpg" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
              <h3 class="product-name"><a href="#">{{ item.book_name }}</a></h3>
              <div class="product-rating">
              </div>
              <div class="product-btns">
                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
                <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
                <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
              </div>
            </div>
            <div class="add-to-cart">
              <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>amazonでみる</button>
            </div>
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
      story: { content: {} }
    }
  },
  methods: {
    getBooks() {
      console.log(8)
      BookApi.getBooks().then(res => {
        console.log(55)
        console.log(res)
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

/*----------------------------*\
	Section
\*----------------------------*/

.section {
  padding-top: 30px;
  padding-bottom: 30px;
}

.section-title {
  position: relative;
  margin-bottom: 30px;
  margin-top: 15px;
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
}

.product:hover {
  -webkit-box-shadow: 0px 0px 6px 0px #E4E7ED, 0px 0px 0px 2px #D10024;
  box-shadow: 0px 0px 6px 0px #E4E7ED, 0px 0px 0px 2px #D10024;
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

.product .product-body .product-category {
  // text-transform: uppercase;
  font-size: 12px;
  color: #8D99AE;
}

.product .product-body .product-name {
  // text-transform: uppercase;
  font-size: 14px;
}

.product .product-body .product-name>a {
  font-weight: 700;
}

.product .product-body .product-name>a:hover, .product .product-body .product-name>a:focus {
  color: #D10024;
}

.product .product-body .product-price {
  color: #D10024;
  font-size: 18px;
}

.product .product-body .product-price .product-old-price {
  font-size: 70%;
  font-weight: 400;
  color: #8D99AE;
}

.product .product-body .product-rating {
  position: relative;
  margin: 15px 0px 10px;
  height: 20px;
}

.product .product-body .product-rating>i {
  position: relative;
  width: 14px;
  margin-right: -4px;
  background: #FFF;
  color: #E4E7ED;
  z-index: 10;
}

.product .product-body .product-rating>i.fa-star {
  color: #ef233c;
}

.product .product-body .product-rating:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 1px;
  background-color: #E4E7ED;
}

.product .product-body .product-btns>button {
  position: relative;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: transparent;
  border: none;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.product .product-body .product-btns>button:hover {
  background-color: #E4E7ED;
  color: #D10024;
  border-radius: 50%;
}

.product .product-body .product-btns>button .tooltipp {
  position: absolute;
  bottom: 100%;
  left: 50%;
  -webkit-transform: translate(-50%, -15px);
  -ms-transform: translate(-50%, -15px);
  transform: translate(-50%, -15px);
  width: 150px;
  padding: 10px;
  font-size: 12px;
  line-height: 10px;
  background: #1e1f29;
  color: #FFF;
  text-transform: uppercase;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.product .product-body .product-btns>button:hover .tooltipp {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translate(-50%, -5px);
  -ms-transform: translate(-50%, -5px);
  transform: translate(-50%, -5px);
}

.product .add-to-cart {
  position: absolute;
  left: 1px;
  right: 1px;
  bottom: 1px;
  padding: 15px;
  background: #1e1f29;
  text-align: center;
  -webkit-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  z-index: 2;
}

// .product:hover .add-to-cart {
//   -webkit-transform: translateY(100%);
//   -ms-transform: translateY(100%);
//   transform: translateY(100%);
// }

.product .add-to-cart .add-to-cart-btn {
  position: relative;
  border: 2px solid transparent;
  height: 40px;
  padding: 0 10%;
  background-color: #ef233c;
  color: #FFF;
  // text-transform: uppercase;
  // font-weight: 700;
  border-radius: 40px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.product .add-to-cart .add-to-cart-btn>i {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  line-height: 38px;
  color: #D10024;
  opacity: 0;
  visibility: hidden;
}

.product .add-to-cart .add-to-cart-btn:hover {
  background-color: #FFF;
  color: #D10024;
  border-color: #D10024;
  // padding: 0px 30px 0px 50px;
  cursor: pointer;
}

.product .add-to-cart .add-to-cart-btn:hover>i {
  opacity: 1;
  visibility: visible;
}


/*----------------------------*\
	Products slick
\*----------------------------*/
.products-slick {
  display: flex;
}

.products-slick .slick-list {
  padding-bottom: 60px;
  margin-bottom: -60px;
  z-index: 2;
}

.products-slick .product.slick-slide {
  margin: 15px;
}

.products-tabs>.tab-pane {
  display: block;
  height: 0;
  opacity: 0;
  visibility: hidden;
  overflow-y: hidden;
  padding-bottom: 60px;
  margin-bottom: -60px;
}

.products-tabs>.tab-pane.active {
  opacity: 1;
  visibility: visible;
  height: auto;
}

.products-slick-nav {
  position: absolute;
  right: 15px;
  z-index: 10;
}

.products-slick-nav .slick-prev, .products-slick-nav .slick-next {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  width: 20px;
  height: 20px;
  display: inline-block !important;
  margin: 0px 2px;
}

.products-slick-nav .slick-prev:before, .products-slick-nav .slick-next:before {
  font-size: 14px;
}

</style>