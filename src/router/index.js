import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main.vue'
import Order from '../pages/order.vue'
import Life from '../pages/life.vue'
import Info from '../pages/info.vue'
import Collection from '../pages/p_info/collection.vue'
import Choosing from '../pages/p_info/choosing.vue'
import Profile from '../pages/p_info/profile.vue'
import ModifyPhoneNo from '../pages/p_info/modifyPhoneNo.vue'
import MessageCenter from '../pages/messageCenter.vue'
import CouponSpot from '../pages/p_info/couponSpot.vue'



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/", component: Main
    },
    {
      path: '/main', component: Main
    }, {
      path: '/life', component: Life
    }, 
    {
      path: '/order', component: Order
    },
    {
      path: '/info', component: Info
    },
    {
      path: '/p_info/collection', component: Collection
    },
    {
      path: '/p_info/choosing',
      name: 'choosing',
      component: Choosing
    },
    {
      path: '/p_info/profile', component: Profile
    },
    {
      path: '/p_info/modifyPhoneNo', component: ModifyPhoneNo
    },
    {
      path: '/messageCenter', component: MessageCenter
    },
    {
      path: '/p_info/couponSpot', component: CouponSpot
    }
  ]
})
