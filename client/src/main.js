import { createApp } from 'vue';
import App from './App.vue';
import router from './config/router';
import store from './store';

import 'bootstrap';
import 'jquery';
import 'popper.js';
import "../node_modules/bootswatch/dist/lux/bootstrap.min.css";
import "./assets/style.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



const app = createApp(App);

const opt_sweet = {
    buttonsStyling: false,
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger'
    }
}
app.use(store).use(router).use(VueSweetalert2,opt_sweet).mount('#app');
