<template>
  <div class="container-fluid h-100">
    <div class="row">
      <div class="col-md-auto h-100">
        <navbar/>
      </div>
      <div class="col col-lg-10">
        <Nav/>
        <br/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/partials/Sidebar';
import Nav from './components/partials/Nav';

export default {
  name: 'App',
  components: {
    Navbar,
    Nav
  },
 
  methods: {
    
  },
  mounted() {
  }
}
</script>

<style>

</style>
