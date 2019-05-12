import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMasonry from 'vue-masonry-css'
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)
Vue.use(VueAxios ,axios);
Vue.use(VueMasonry);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
