import Vue from 'vue'
import App from './App.vue'
import router from './routes';
import store from './store';
import http from './http';

Vue.config.productionTip = false

new Vue({
  http,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
