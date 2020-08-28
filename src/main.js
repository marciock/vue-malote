import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'

import router from './routes';
import store from './store';
import http from './http';

Vue.use(VueMask)
Vue.config.productionTip = false

new Vue({
  http,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
