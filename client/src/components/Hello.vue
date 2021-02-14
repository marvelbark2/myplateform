<template>
  <div class="">
    <h1> ID {{user}} </h1>
    <span v-on:click="fetchProfil" class="badge badge-pill badge-primary">Fetch</span>
  </div>
</template>

<script>
 import {
    mapState
  } from "vuex";
import axios from '../config/axios';
export default {
  name: 'hello',
  methods: {
    fetchProfil(){
      this.$store.dispatch('fetchProfil');
    },
    async fetchTask() {
      const f = await axios.get('/api/v1/tasks');
      console.log(f);
    }
  },
  computed: mapState({
    user: state => state.user
  }),
  created() {
    this.fetchProfil();
  }
}
</script>

<style>

</style>