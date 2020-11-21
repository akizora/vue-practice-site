<template>
  <div id="header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="header-search text-center">
            <input v-model="searchText" class="input-select w-50" placeholder="書籍名を入力">
            <button class="search-btn" v-on:click="searchBooks">さがす</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookApi from '@/plugins/axios/modules/book'

export default {
  data() {
    return {
      searchText:'',
      query: '',
    }
  },
  created() {
    this.setQuery()
  },
  methods: {
    setQuery: function() {
      this.query = this.$route.query.id || ''
    },
    searchBooks: function() {
      BookApi.searchBooks(this.searchText).then(res => {
        console.log(res)
        console.log(888)
        this.$router.push('/aaa')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

</script>

<style lang="scss" scoped>
  /*----------------------------*\
    Logo
  \*----------------------------*/
  #header {
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #15161D;
  }

  /*----------------------------*\
    Search
  \*----------------------------*/

  .header-search {
    padding: 15px 0px;
  }

  .header-search {
    position: relative;
  }

  .header-search .input-select {
    margin-right: -4px;
    border-radius: 40px 0px 0px 40px;
  }

  .header-search .input {
    width: calc(100% - 260px);
    margin-right: -4px;
  }

  .header-search .search-btn {
    height: 40px;
    width: 90px;
    background: #D10024;
    color: #FFF;
    font-weight: 700;
    border: none;
    border-radius: 0px 40px 40px 0px;
  }

  /*-- Select input --*/
  .input-select {
    padding: 0px 15px;
    background: #FFF;
    border: 1px solid #E4E7ED;
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

  @media only screen and (max-width: 991px) {
  #top-header .header-links.pull-left {
    float: none !important;
  }
  #top-header .header-links.pull-right {
    float: none !important;
    // margin-top: 5px;
  }
}
</style>