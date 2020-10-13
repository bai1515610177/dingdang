import Vue from 'vue'
import App from './App.vue'

// elmui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入/router/index.js
import router from '@/router'

// 导入axios
import axios from '@/api'
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
