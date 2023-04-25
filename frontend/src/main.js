import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify'

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
