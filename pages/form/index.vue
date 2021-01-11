<template>
  <form name="contact" method="POST" netlify>
    <div class="container mt-3">
      <div id="form-parts">
        <div class="row element">
          <div class="col-md-12 col-xs-12">
            <div class="panel-group">
              <label class="txt-larger3 mrt5 must-value">
                お名前
                <span class="label_require">*</span>
              </label>
              <input
                name="name"
                type="text"
                class="form-control"
                placeholder="お名前を入力してください"
                value=""
              />
            </div>
          </div>
        </div>
        <div class="row element">
          <div class="col-md-12 col-xs-12">
            <div class="panel-group">
              <label class="txt-larger3 mrt5 must-value">
                メールアドレス
                <span class="label_require">*</span>
              </label>
              <input
                name="email"
                type="email"
                class="form-control"
                placeholder="メールアドレスを入力してください"
                value=""
              />
              <p class="control-label" style="display: none" />
            </div>
          </div>
        </div>
        <div id="fa99581e5e86c0dc9c5fcaa445d0ab48ddae5876" class="row element">
          <div class="col-md-12 col-xs-12">
            <div class="panel-group">
              <label class="txt-larger3 mrt5 must-value">
                お問い合わせ内容
                <span class="label_require">*</span>
              </label>
              <textarea
                name="textarea"
                id="1f4428e12df9de76f8f2065f9f04ec30aa50607e"
                class="form-control"
                rows="3"
                placeholder="お問い合わせ内容を入力してください"
              />
              <p class="control-label" style="display: none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script></script>

<style lang="scss" scoped></style>
