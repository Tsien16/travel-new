import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './assets/css/border.css';
import fastClick from 'fastclick';
import './assets/css/iconfont.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper /* { default global options } */);
fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
