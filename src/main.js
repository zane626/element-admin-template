/**
 * Created by zane on 2021/4/17 上午10:28
 * @description .
 */
import Vue from 'vue'
import Element from 'element-ui'
import './assets/scss/main.scss'
import App from './App.vue'
import router from './router'

Vue.use(Element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
