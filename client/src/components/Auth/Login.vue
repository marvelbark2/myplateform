<template>
  <div class="jumbotron">
    <h1 class="display-3">Login</h1>
    <p class="lead">Please authentify to access to protected pages.</p>
    <hr class="my-4">
    <p class="lead button-submit">
      <button type="button" class="btn btn-outline-danger" title="" data-container="body" data-toggle="popover" data-placement="top" data-content="Need to add it to backend" data-original-title="Coming Soon">Login with Google</button>
    </p>
    <hr class="my-4">
    <form @submit.prevent="loginHandle">
      <div class="form-group">
        <label for="">Email</label>
        <input v-model="email.value" type="text" name="email" class="form-control" v-bind:class="{'is-invalid': email.error.exist}" placeholder="" aria-describedby="helpId">
         <div v-if="email.error.exist" class="invalid-feedback">{{email.error.message}}</div>
        <small id="helpId" class="text-muted">Your email to authentificate</small>
      </div>
      <div class="form-group">
        <label for="">Password</label>
        <input v-model='password.value' type="password" name="password" v-bind:class="{'is-invalid': password.error.exist}" class="form-control" placeholder="" aria-describedby="helpId">
        <small id="helpId" class="text-muted">Your password code</small>
      </div>
      <p class="lead button-submit">
        <button v-bind:class="{'disabled' : password.error.exist , 'disabled': email.error.exist}" type="submit" class="btn btn-primary btn-lg">authentificate</button>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

import store from '../../store/';

export default {
  data() {
    return {
      email: {
        value: '',
        error: {
          exist: true,
          message: ''
        }
      },
      password: {
        value: '',
        error: {
          exist: false,
          message: ''
        }
      }
    }
  },
  watch : {
    'email.value': function(val) {
      if(val !== '') {
        if(!(val.includes('@'))) this.emailValidate("Wrong email syntaxe");
        else if (val.lenth < 8) this.emailValidate("Email too short");
      }
    }
  },
  methods: {
    emailValidate(message) {
      return (
        this.email.error['exist'] = true,
        this.email.error['message'] = message
      )
    },
    setUser(user) {
        store.dispatch('setting', user);
    },
    async loginHandle() {
      if(!(this.email.error.exist && this.password.error.exist)) {
        var email = this.email.value;
        var password = this.password.value;
        try {
          var auth = await axios.post('/api/auth/login', {
          email,
          password
        });


        if(auth.status === 200) {
          if(auth.data.info.success)
          {
            sessionStorage.setItem('token', auth.data.token);
            this.$store.dispatch('fetchProfil');
            this.$swal.fire({
              title: 'Success!',
              text: 'Access Granted',
              icon: 'success',
              confirmButtonText: 'Close'
            })
          } else {
            this.$swal.fire({
              title: 'Error!',
              text: auth.data.error,
              icon: 'error',
              confirmButtonText: 'Close'
            })
          }
          this.email.value = '';
          this.password.value = '';
          // this.$router.push('Hello');
        }
        } catch (error) {
          this.$swal.fire({
              title: 'Error!',
              text: error,
              icon: 'error',
              confirmButtonText: 'Close'
            })
        }
        
         
      } else {
        console.error("Error on form");
      }
    }
  }
}
</script>

<style>
.button-submit {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>