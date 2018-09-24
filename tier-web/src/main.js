import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMasonry from 'vue-masonry-css'
import vueVimeoPlayer from 'vue-vimeo-player'

import styles from './assets/styles/main.scss'

Vue.config.productionTip = true

Vue.use(VueMasonry)
Vue.use(vueVimeoPlayer)

new Vue({
  router,
  store,
  styles,
  render: h => h(App)
}).$mount('#app')
