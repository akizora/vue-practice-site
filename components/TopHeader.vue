<template>
  <header>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">FastBook</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <!-- <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li> -->
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li> -->
            <!-- <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li> -->
            <li class="nav-item">
              <!-- <a class="nav-link disabled" href="#">Disabled</a> -->
            </li>
          </ul>
        </div>
      </nav>
      <!-- プログラミング言語の一覧 -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto text-center">
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- <search-form /> -->
  </header>
</template>

<style lang="scss" scoped>
header {
  nav {
    background-color: #1e1f29 !important;
  }
  .navbar-light {
    background-color: #fff !important;
  }
  .nav-link {
    margin-right: 3rem;
  }
}
</style>
