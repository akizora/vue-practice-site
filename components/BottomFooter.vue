<template>
  <!-- <div id="bottom-footer" class="mt-5 w-100">
    <div class="text-center">
      <span class="copyright" />
    </div>
  </div> -->
  <footer>
    <div class="footer-logo">
      <nuxt-link :to="`/`" class="btn text-white">FastBook</nuxt-link>
    </div>
    <div class="footer-siteinfo">
      <div class="row list-unstyled">
        <!-- <div class="col-sm-4">
          <nuxt-link :to="`/`" class="btn text-white">
            このサイトについて
          </nuxt-link>
        </div> -->
        <div class="col-sm-2">
          <nuxt-link :to="`/form`" class="btn text-white">
            お問い合わせ
          </nuxt-link>
        </div>
        <!-- <div class="col-sm-3">
          <nuxt-link :to="`/`" class="btn text-white">利用規約</nuxt-link>
        </div> -->
        <div class="col-sm-2">
          <nuxt-link :to="`/privacy-policy`" class="btn text-white">
            プライバシーポリシー
          </nuxt-link>
        </div>
      </div>
      <p class="text-center mt-3">© 2021 FastBook</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/*=========================================================
	11 -> FOOTER
===========================================================*/

footer {
  color: #fff;
  padding: 20px;
  background-color: #1e1f29;
}

#footer {
  background: #15161d;
  color: #b9babc;
}

#bottom-footer {
  // height: 100px;
  height: 100px;
  position: absolute;
  background: #1e1f29;
  bottom: 0;
}

.footer-links li + li {
  margin-top: 15px;
}

.footer-links li a {
  color: #b9babc;
}

.footer-links li i {
  margin-right: 15px;
  color: #d10024;
  width: 14px;
  text-align: center;
}

.footer-links li a:hover {
  color: #d10024;
}

// .copyright {
//   margin-top: 30px;
//   display: block;
//   font-size: 12px;
// }

// .footer-payments li {
//   display: inline-block;
//   margin-right: 5px;
// }

// .footer-payments li a {
//   color: #15161D;
//   font-size: 36px;
//   display: block;
// }
</style>
