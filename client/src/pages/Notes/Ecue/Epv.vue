<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row"></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td scope="row"></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from '../../../config/axios';
export default {
    data() {
        return {
            data: [],
        }
    },
    methods: {
        async fetchdata() {
            try {
                const fetching = await axios.get('/api/v1/univ/note/epv/form/2');
                const res = fetching.data.data;
                console.log(res);
            } catch (error) {
                
            }
        }
    },
    mounted() {
        this.fetchSemstre();
    }
}
</script>

<style>

</style>