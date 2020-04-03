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
import Confirm from './components/confirm'

Vue.use(Confirm)
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
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.prototype.SERVER_BASE_URL = 'http://localhost:8083/dmorder'
Vue.prototype.HOST = '/dmorder'

var store = new Vuex.Store({
	state: {
		loginState: false,
		currentAccount: {},
		merchantInfo: {},
		merchantId: 0,
		merchantCart: [],
		cart: [],
		menu: [],
	},
	getters:{
		currentAccount: state=>state.currentAccount,
		loginState: state=>state.loginState,
		merchantInfo: state=>state.merchantInfo,
		merchantId: state=>state.merchantId,
		merchantCart: state=>state.merchantCart,
		merchantCartGrossPrice: function(state){
			let acc = 0.0;
			state.merchantCart.forEach(cartItem => {
				acc += cartItem.price * cartItem.amount;
			});
			return acc;
		},
		cart: state=>state.cart,
		cartGrossPrice: function(state){
			let acc = 0.0;
			state.cart.forEach(cartGroup => {
				cartGroup.listCartItem.forEach(cartItem => {
					acc += cartItem.price * cartItem.amount;
				});
			});
			return acc;
		},
		cartGrossPriceGvMch: (state) => (playload) => {
			let acc = 0.0;			
			state.cart.find(
				e => (e.merchantId == playload.merchantId).forEach(
					cartItem =>{
					acc += cartItem.price * cartItem.amount;
				}));
			return acc;
		},
		menu: state=>state.menu,
		totalNum: function(state){
				let totalNum = 0;
				state.merchantCart.forEach(element => {
				totalNum += element.amount;
			});
			return totalNum;
		},
		amountByOrdinals: (state) => (playload) => {
			return (state.merchantCart == null || state.merchantCart.length == 0) ? 0 : state.merchantCart.find(
				e => (
					e.itemOrdinal == playload.itemOrdinal && e.colOrdinal == playload.colOrdinal
				)
			).amount;
		}
	},
	mutations: {
		loginAccount: (state, playload)=>{
			if(playload.currentAccount != null) {
				state.currentAccount = playload.currentAccount;
				state.loginState = true;
			}
		},
		logoutAccount: (state)=>{
			state.currentAccount = {};
			state.loginState = false;
		},
		updateCurrentAccount: (state, payload)=>{
			state.currentAccount = payload.currentAccount;
		},
		updateMerchantInfo: (state, payload)=>{
			state.merchantInfo = payload.merchantInfo;
		},
		updateMerchantId: (state, payload)=>{
			state.merchantId = payload.merchantId;
		},
		updateMerchantCart: (state, playload)=>{
			state.merchantCart = playload.merchantCart;
		},
		updateCart: (state, playload)=>{
			state.cart = playload.cart;
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
