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
import Vuex from 'vuex'
Vue.use(Vuex);
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(Mint);
// import source from './assets/js/source.js'
// Vue.prototype.$source = source
// import 'element-ui/lib/theme-default/index.css'

// import global_ from '../config/global.js'
// Vue.prototype.GLOBAL = global_;
Vue.prototype.staticURL = process.env.STATIC_URL
Vue.prototype.$axios=axios;
Vue.config.productionTip = false
Vue.prototype.SERVER_BASE_URL = 'http://localhost:8083/dmorder'
Vue.prototype.HOST = '/dmorder'

var store = new Vuex.Store({
	state: {
	  merchantCart: [],
	  menu: [],
	},
	getters:{
		merchantCart: state=>state.merchantCart,
		menu: state=>state.menu,
		totalNum: function(state){
				let totalNum = 0;
				state.merchantCart.forEach(element => {
				totalNum += element.amount;
			});
			return totalNum;
		},
		amountByOrdinals: (state) => (playload) => {
			return state.merchantCart.find(
				e => (
					e.itemOrdinal == playload.itemOrdinal && e.colOrdinal == playload.colOrdinal
				)
			).amount;
		}
	},
	mutations: {
		updateMerchantCart: (state, playload)=>{
			state.merchantCart = playload.merchantCart;
		},
		updateMenu: (state, playload)=>{
			state.menu = playload.menu;
		},
		incrementMerchantCart: (state, playload)=>{
			let num = playload.num;
			let itemOrdinal = playload.itemOrdinal;
			let colOrdinal = playload.colOrdinal;
			state.merchantCart.forEach(e => {
				if(itemOrdinal == e.itemOrdinal && colOrdinal == e.colOrdinal)
					e.amount += num;
			});
		}
	}
  })

// export default store;


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})

// Vue.prototype.genPicURL = function(pic) {
// 	return this.GLOBAL.SSERVER_BASE_URL + "/image/" + pic;
// }
