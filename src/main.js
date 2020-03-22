// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import ElementUI from 'element-ui'
import axios from 'axios';
import VueResource from 'vue-resource';
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import './icons'
// import 'element-ui/lib/theme-default/index.css'

// import global_ from '../config/global.js'
// Vue.prototype.GLOBAL = global_;
Vue.prototype.staticURL = process.env.STATIC_URL
Vue.prototype.$axios=axios;
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.prototype.SERVER_BASE_URL = 'http://localhost:8083/dmorder'
Vue.prototype.HOST = '/dmorder'


// 引入全部组件 

Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})