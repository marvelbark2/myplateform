<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-left">
    <button class="btn btn-primary" id="menu-toggle">My Plateforme</button>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

   

    <div class="collapse navbar-collapse t-20" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
           <a class="nav-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              TEST
            </a>
            <div class="collapse collapse-bg" id="collapseExample">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a href="#" class="nav-link">T1</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">T2</a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">T3</a>
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
  methods: {
    authUser() {
      return (this.auth = sessionStorage.getItem("token") !== null);
    },
  },
  created() {
    this.authUser();
  },
};
</script>

<style>
.collapse-bg{
  background-color: #3d3d3d !important;
}
</style>