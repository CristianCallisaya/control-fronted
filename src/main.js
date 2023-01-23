import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import "material-design-icons-iconfont";
import store from './store'
import Vuex from 'vuex';
import './axios'
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.use(Vuex);

window.Swal = Swal;
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
