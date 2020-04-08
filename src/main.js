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
		baskets: {},
	},
	getters:{
		currentAccount: state=>state.currentAccount,
		loginState: state=>state.loginState,
		merchantInfo: state=>state.merchantInfo,
		merchantId: state=>state.merchantId,
		baskets: state=>state.baskets,
		cart: state=>state.cart,
		cartGrossPriceGvMch: (state) => (payload) => {
			let acc = 0.0;
			state.cart.find(
				e => (e.merchantId == payload.merchantId).forEach(
					cartItem =>{
					acc += cartItem.price * cartItem.amount;
				}));
			return acc;
		},
		menu: state=>state.menu,
		totalNum: function(state){
			let totalNum = 0;
			if(state.baskets.hasOwnProperty(1))
				state.baskets[1].forEach(e => {
				totalNum += e.amount;
			});
			return totalNum;
		},
		amountByOrdinals: (state) => (payload) => {
			return (state.merchantCart == null || state.merchantCart.length == 0) ? 0 : state.merchantCart.find(
				e => (
					e.itemOrdinal == payload.itemOrdinal && e.colOrdinal == payload.colOrdinal
				)
			).amount;
		},
		merchantBasket: (state) => (payload) => {
			return (state.merchantCart == null || state.merchantCart.length == 0) ? 0 : state.merchantCart.find(
				e => (
					e.itemOrdinal == payload.itemOrdinal && e.colOrdinal == payload.colOrdinal
				)
			).amount;
		},
		amountByOrdinalsAndMid: (state) => (payload) => {
			return (state.baskets[payload.merchantId] == null || state.baskets[payload.merchantId].length == 0) ? 0 : state.baskets[payload.merchantId].find(
				e => (
					e.itemOrdinal == payload.itemOrdinal && e.colOrdinal == payload.colOrdinal
				)
			).amount;
		},
		basketsHasKey: (state) => (payload) => {
			return state.baskets.hasOwnProperty(payload.merchantId);
		},
		basketGrossPriceByMid: function(state) {
			let acc = 0.0;
			if(state.baskets.hasOwnProperty(1)){
				// state.baskets[state.merchantId].forEach(cartItem => {
					// acc += cartItem.price * cartItem.amount;
					acc += state.baskets[1][5].amount;
				// });
			}
			acc += 14.1;
			return JSON.stringify(state.baskets) == "{}";
		},
	},
	mutations: {
		loginAccount: (state, payload)=>{
			if(payload.currentAccount != null) {
				state.currentAccount = payload.currentAccount;
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
		updateCart: (state, payload)=>{
			state.cart = payload.cart;
		},
		updateMenu: (state, payload)=>{
			state.menu = payload.menu;
		},
		appendBaskets: (state, payload)=>{
			if(state.baskets.hasOwnProperty(payload.merchantId)) delete state.baskets[payload.merchantId];
			state.baskets[payload.merchantId] = payload.merchantCart;
		},
		incrementBaskets: (state, payload)=>{
			if(state.baskets.hasOwnProperty(payload.merchantId)){
				state.baskets[payload.merchantId].find(
					e => (
						e.itemOrdinal == payload.itemOrdinal && e.colOrdinal == payload.colOrdinal
					)
				).amount += payload.num;
			}
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
