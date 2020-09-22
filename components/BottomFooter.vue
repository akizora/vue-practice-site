<template>
  <div id="bottom-footer" class="mt-5 w-100">
    <!-- <div class="container">
      <div class="row"> -->
        <div class="text-center">
          <!-- <ul class="footer-payments h-100">
          </ul> -->
          <span class="copyright">
          </span>
        </div>
      <!-- </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
/*=========================================================
	11 -> FOOTER
===========================================================*/

#footer {
  background: #15161D;
  color: #B9BABC;
}

#bottom-footer {
  height: 100px;
  position: absolute;
  background: #1E1F29;
  bottom: 0;
}

.footer-links li+li {
  margin-top: 15px;
}

.footer-links li a {
  color: #B9BABC;
}

.footer-links li i {
  margin-right: 15px;
  color: #D10024;
  width: 14px;
  text-align: center;
}

.footer-links li a:hover {
  color: #D10024;
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