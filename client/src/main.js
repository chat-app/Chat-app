import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import socket from './plugins/socket'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
	iconfont: 'md',
  theme: {
    primary: colors.indigo.base, 
    secondary: colors.red.lighten4,
  }
})

Vue.config.productionTip = false
 
Vue.use(socket)
Vue.use(VueAxios, axios)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
