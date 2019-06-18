import Vue from 'vue'
import App from './App'
import Request from './utils/util'
Vue.config.productionTip = false
Vue.prototype.$Req = Request
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
