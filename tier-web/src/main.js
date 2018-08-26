import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueMasonryPlugin } from 'vue-masonry'
import VueParticles from 'vue-particles'

import styles from './assets/styles/main.scss'

Vue.config.productionTip = false

Vue.use(VueMasonryPlugin)
Vue.use(VueParticles)

new Vue({
  router,
  store,
  styles,
  render: h => h(App)
}).$mount('#app')
