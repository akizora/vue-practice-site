<template>
  <header>
    <div id="top-header">
      <div class="container">
        <ul class="header-links pull-left">
          <li><a href="#"><i class="fa fa-phone"></i> +021-95-51-84</a></li>
          <li><a href="#"><i class="fa fa-envelope-o"></i> email@email.com</a></li>
          <li><a href="#"><i class="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
        </ul>
        <ul class="header-links pull-right">
          <li><a href="#"><i class="fa fa-dollar"></i> USD</a></li>
          <li><a href="#"><i class="fa fa-user-o"></i> My Account</a></li>
        </ul>
      </div>
    </div>
    <!-- MAIN HEADER -->
    <div id="header">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">
          <!-- LOGO -->
          <div class="col-md-3">
            <div class="header-logo">
              <a href="#" class="logo">
                <!-- <img src="./img/logo.png" alt=""> -->
              </a>
            </div>
          </div>
          <!-- /LOGO -->

          <!-- SEARCH BAR -->
          <div class="col-md-6">
            <div class="header-search">
              <form>
                <select class="input-select">
                  <option value="0">All Categories</option>
                  <option value="1">Category 01</option>
                  <option value="1">Category 02</option>
                </select>
                <input class="input" placeholder="Search here">
                <button class="search-btn">Search</button>
              </form>
            </div>
          </div>
          <!-- /SEARCH BAR -->

          <!-- ACCOUNT -->
          <div class="col-md-3 clearfix">
            <div class="header-ctn">
              <!-- Wishlist -->
              <div>
                <a href="#">
                  <i class="fa fa-heart-o"></i>
                  <span>Your Wishlist</span>
                  <div class="qty">2</div>
                </a>
              </div>
              <!-- /Wishlist -->

              <!-- Cart -->
              <div class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                  <i class="fa fa-shopping-cart"></i>
                  <span>Your Cart</span>
                  <div class="qty">3</div>
                </a>
                <div class="cart-dropdown">
                  <div class="cart-list">
                    <div class="product-widget">
                      <div class="product-img">
                        <!-- <img src="./img/product01.png" alt=""> -->
                      </div>
                      <div class="product-body">
                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                        <h4 class="product-price"><span class="qty">1x</span>$980.00</h4>
                      </div>
                      <button class="delete"><i class="fa fa-close"></i></button>
                    </div>

                    <div class="product-widget">
                      <div class="product-img">
                        <!-- <img src="./img/product02.png" alt=""> -->
                      </div>
                      <div class="product-body">
                        <h3 class="product-name"><a href="#">product name goes here</a></h3>
                        <h4 class="product-price"><span class="qty">3x</span>$980.00</h4>
                      </div>
                      <button class="delete"><i class="fa fa-close"></i></button>
                    </div>
                  </div>
                  <div class="cart-summary">
                    <small>3 Item(s) selected</small>
                    <h5>SUBTOTAL: $2940.00</h5>
                  </div>
                  <div class="cart-btns">
                    <a href="#">View Cart</a>
                    <a href="#">Checkout  <i class="fa fa-arrow-circle-right"></i></a>
                  </div>
                </div>
              </div>
              <!-- /Cart -->
              <!-- Menu Toogle -->
              <div class="menu-toggle">
                <a href="#">
                  <i class="fa fa-bars"></i>
                  <span>Menu</span>
                </a>
              </div>
              <!-- /Menu Toogle -->
            </div>
          </div>
          <!-- /ACCOUNT -->
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- /MAIN HEADER -->
  </header>
</template>

<style lang="scss">
  #top-header {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #1E1F29;
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
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #15161D;
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

  /*----------------------------*\
    Cart
  \*----------------------------*/

  .header-ctn {
    float: right;
    padding: 15px 0px;
  }

  .header-ctn>div {
    display: inline-block;
  }

  .header-ctn>div+div {
    margin-left: 15px;
  }

  .header-ctn>div>a {
    display: block;
    position: relative;
    width: 90px;
    text-align: center;
    color: #FFF;
  }

  .header-ctn>div>a>i {
    display: block;
    font-size: 18px;
  }

  .header-ctn>div>a>span {
    font-size: 12px;
  }

  .header-ctn>div>a>.qty {
    position: absolute;
    right: 15px;
    top: -10px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    font-size: 10px;
    color: #FFF;
    background-color: #D10024;
  }

  .header-ctn .menu-toggle {
    display: none;
  }

  .cart-dropdown {
    position: absolute;
    width: 300px;
    background: #FFF;
    padding: 15px;
    -webkit-box-shadow: 0px 0px 0px 2px #E4E7ED;
    box-shadow: 0px 0px 0px 2px #E4E7ED;
    z-index: 99;
    right: 0;
    opacity: 0;
    visibility: hidden;
  }

  .dropdown.open>.cart-dropdown {
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
    color: #2B2D42;
  }

  .cart-dropdown .cart-btns {
    margin: 0px -17px -17px;
  }

  .cart-dropdown .cart-btns>a {
    display: inline-block;
    width: calc(50% - 0px);
    padding: 12px;
    background-color: #D10024;
    color: #FFF;
    text-align: center;
    font-weight: 700;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }

  .cart-dropdown .cart-btns>a:first-child {
    margin-right: -4px;
    background-color: #1e1f29;
  }

  .cart-dropdown .cart-btns>a:hover {
    opacity: 0.9;
  }

  .cart-dropdown .cart-summary {
    border-top: 1px solid #E4E7ED;
    padding-top: 15px;
    padding-bottom: 15px;
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
  width: 100px;
  background: #D10024;
  color: #FFF;
  font-weight: 700;
  border: none;
  border-radius: 0px 40px 40px 0px;
}

  .header-links li {
    display: inline-block;
    margin-right: 15px;
    font-size: 12px;
  }

  .header-links li:last-child {
    margin-right: 0px;
  }

  .header-links li a {
    color: #FFF;
  }

  .header-links li a:hover {
    color: #D10024;
  }

  .header-links li i {
    color: #D10024;
    margin-right: 5px;
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
    margin-top: 5px;
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