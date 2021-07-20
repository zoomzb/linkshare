import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Axios from 'axios';

Vue.config.productionTip = false


Axios.defaults.baseURL='https://api-proxy-lyart.vercel.app';

Vue.prototype.$axios = Axios

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
