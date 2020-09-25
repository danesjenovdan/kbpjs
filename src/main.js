import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import anime from 'animejs';
import App from './App.vue';
import router from './router';

Object.defineProperty(Vue.prototype, '$anime', { value: anime });

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
