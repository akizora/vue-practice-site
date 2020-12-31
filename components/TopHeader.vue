<template>
  <header>
    <div id="top-header">
      <div class="container d-flex">
        <ul class="header-links my-1">
          <li>
            <a href="/" class="btn"><i class="fa" />FastBook</a>
          </li>
        </ul>
      </div>
    </div>
    <search-form />
  </header>
</template>

<style lang="scss" scoped>
/*----------------------------*\
	Inputs
\*----------------------------*/

/*-- Text input --*/

.input {
  height: 40px;
  padding: 0px 15px;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  width: 100%;
}

textarea.input {
  padding: 15px;
  min-height: 90px;
}

/*----------------------------*\
	Top header
\*----------------------------*/

#top-header {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #1e1f29;
}

.top-header {
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
}

.top-header__logo {
  text-align: center;
  position: absolute;
  left: 50%;

  img {
    position: relative;
    max-height: 60px;
    left: -50%;
    top: -15px;
  }
}

/*----------------------------*\
  Logo
\*----------------------------*/

#header {
  // padding-top: 15px;
  // padding-bottom: 15px;
  background-color: #15161d;
}

.header-logo {
  float: left;
}

.header-logo .logo img {
  display: block;
}

/*----------------------------*\
  Search
\*----------------------------*/

.header-search {
  padding: 15px 0px;
}

.header-search form {
  position: relative;
}

.header-search form .input-select {
  margin-right: -4px;
  border-radius: 40px 0px 0px 40px;
}

.header-search form .input {
  width: calc(100% - 260px);
  margin-right: -4px;
}

.header-search form .search-btn {
  height: 40px;
  width: 90px;
  background: #d10024;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 0px 40px 40px 0px;
}

/*-- Select input --*/
.input-select {
  padding: 0px 15px;
  background: #fff;
  border: 1px solid #e4e7ed;
  height: 40px;
}

.product-details .product-options .input-select {
  width: 90px;
}

.header-search form .input-select {
  margin-right: -4px;
  border-radius: 40px 0px 0px 40px;
}

.header-search form .input {
  width: calc(100% - 260px);
  margin-right: -4px;
}

/*----------------------------*\
  Cart
\*----------------------------*/

.header-ctn {
  float: right;
  padding: 15px 0px;
}

.header-ctn > div {
  display: inline-block;
}

.header-ctn > div + div {
  margin-left: 15px;
}

.header-ctn > div > a {
  display: block;
  position: relative;
  width: 90px;
  text-align: center;
  color: #fff;
}

.header-ctn div a i {
  display: block;
  font-size: 18px;
}

.header-ctn div a span {
  font-size: 12px;
}

.header-ctn div a .qty {
  position: absolute;
  right: 15px;
  top: -10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  font-size: 10px;
  color: #fff;
  background-color: #d10024;
}

.header-ctn .menu-toggle {
  display: none;
}

.cart-dropdown {
  position: absolute;
  width: 300px;
  background: #fff;
  padding: 15px;
  -webkit-box-shadow: 0px 0px 0px 2px #e4e7ed;
  box-shadow: 0px 0px 0px 2px #e4e7ed;
  z-index: 99;
  right: 0;
  opacity: 0;
  visibility: hidden;
}

.dropdown.open > .cart-dropdown {
  opacity: 1;
  visibility: visible;
}

.cart-dropdown .cart-list {
  max-height: 180px;
  overflow-y: scroll;
  margin-bottom: 15px;
}

.cart-dropdown .cart-list .product-widget {
  padding: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.cart-dropdown .cart-list .product-widget:last-child {
  margin-bottom: 0px;
}

.cart-dropdown .cart-list .product-widget .product-img {
  left: 0px;
  top: 0px;
}

.cart-dropdown .cart-list .product-widget .product-body .product-price {
  color: #2b2d42;
}

.cart-dropdown .cart-btns {
  margin: 0px -17px -17px;
}

.cart-dropdown .cart-btns > a {
  display: inline-block;
  width: calc(50% - 0px);
  padding: 12px;
  background-color: #d10024;
  color: #fff;
  text-align: center;
  font-weight: 700;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.cart-dropdown .cart-btns > a:first-child {
  margin-right: -4px;
  background-color: #1e1f29;
}

.cart-dropdown .cart-btns > a:hover {
  opacity: 0.9;
}

.cart-dropdown .cart-summary {
  border-top: 1px solid #e4e7ed;
  padding-top: 15px;
  padding-bottom: 15px;
}

.header-links li {
  display: inline-block;
  // margin-right: 15px;
  font-size: 12px;
}

.header-links li:last-child {
  // margin-right: 0px;
}

.header-links li a {
  color: #fff;
}

.header-links li a:hover {
  color: #d10024;
}

.header-links li i {
  color: #d10024;
}

.top-header__second-navi {
  text-align: right;
}

@media only screen and (max-width: 991px) {
  #top-header .header-links.pull-left {
    float: none !important;
  }
  #top-header .header-links.pull-right {
    float: none !important;
    // margin-top: 5px;
  }
  .header-logo {
    float: none;
    text-align: center;
  }
  .header-logo .logo {
    display: inline-block;
  }
  #product-imgs {
    margin-bottom: 60px;
    margin-top: 15px;
  }
  #rating {
    text-align: center;
  }
  #reviews {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
