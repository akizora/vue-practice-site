<template>
  <div class="container-fluid hero-banner">
    <div class="row h-100">
      <div class="col-6 left-banner d-flex align-items-center">
        <div class="mx-auto">
          <div class="banner">
            <h1>Fast look for a tech book.</h1>
            <p>
              Qiitaで紹介された書籍を紹介します。<br />毎日ラインナップを更新しています。
            </p>
          </div>
        </div>
      </div>
      <div class="col-6 right-banner d-flex align-items-center">
        <div class="right mx-auto">
          <div class="img-banner">
            <!-- <img src="../assets/img/readable_code.jpeg" alt="New" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 200;
}
.hero-banner {
  height: 500px;
}
.left-banner {
  background: #98dbc6;
}
.right-banner {
  // background: #e6d720;
  background-image: url("../assets/img/code2.jpg");
  background-size: cover;
}
</style>
