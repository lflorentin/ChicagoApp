import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import i18n from './i18n';
import * as VueGoogleMaps from "vue2-google-maps";
import 'chart.js'
import 'hchs-vue-charts'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'

Vue.use(window.VueCharts)
Vue.use(VueChartkick, { Chartkick })

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBOyhWjG3p943brkyS3JBLwiHYVtOiNWMI",
    libraries: "places" , // necessary for places input
  }
});

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
