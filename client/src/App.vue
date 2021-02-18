<template>
  <div>
    <sidebar />
    <div
      v-if="metadata && Object.keys(metadata).length !== 0"
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      style="
        background-image: url(http://nous-isits.asl.ma/argon/img/theme/profile-cover.jpg);
        background-size: cover;
        position: relative;
        background-position: center top;
        background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
      "
    >
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8" style="opacity: .8 !important;"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <h2 class="display-2 text-white">{{metadata.title}}</h2>
            <p class="text-white mt-0 mb-5">{{metadata.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title"></h1>
              <div class="card-text">
                <router-view @getMetaData="getMetaData"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/partials/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar
  },
  data() {
    return {
      metadata: {}
    }
  },
  methods: {
    getMetaData(metadata) {
      this.metadata = metadata;
    }
  }
};
</script>

<style>
.bg-gradient-default {
  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
}
</style>