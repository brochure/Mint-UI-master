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
import SearchResult from '../pages/searchResult.vue'
import MenuServe from '../pages/p_info/MenuServe.vue'
import CommentRate from '../pages/p_info/CommentRate.vue'
import MerchantInfo from '../pages/p_info/MerchantInfo.vue'
import MenuBlock from '../pages/p_info/MenuBlock.vue'
import Cart from '../pages/p_info/cart.vue'
import LoginPwd from '../pages/user/loginPwd.vue'
import Settings from '../pages/p_info/settings.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/", component: Main,
      meta: {
        showFootBar: true
      }
    },
    {
      path: '/main', component: Main,
      meta: {
        showFootBar: true
      }
    }, {
      path: '/life', component: Life,
      meta: {
        showFootBar: true
      }
    }, 
    {
      path: '/order', component: Order,
      meta: {
        showFootBar: true
      }
    },
    {
      path: '/user/loginPwd', component: LoginPwd,
      meta: {
        showFootBar: false
      }
    },
    {
      path: '/info', component: Info,
      meta: {
        showFootBar: true
      }
    },
    {
      path: '/p_info/collection', component: Collection,
      meta: {
        showFootBar: false
      }
    },
    {
      path: '/p_info/choosing',
      // name: 'choosing',
      component: Choosing,
      children:[
        {
          path: '/', 
          redirect: 'menuServe' 
        },
        {
          path: 'menuServe',
          name: 'menuServe',
          component: MenuServe,
          children:[
            // {
            //   path: '/', 
            //   redirect: 'menuBlock',
            // },
            {
              path: "menuBlock",
              component: MenuBlock,
            }
          ]
        },
        {
          path: 'commentRate',
          // name: 'commentRate',
          component: CommentRate
        },
        {
          path: 'merchantInfo',
          // name: 'merchantInfo',
          component: MerchantInfo
        }
      ],
      meta: {
        showFootBar: false,
        keepAlive: true
      },
    },
    {
      path: '/p_info/profile', component: Profile,
      meta: {
        showFootBar: false
      }
    },
    {
      path: '/p_info/modifyPhoneNo', component: ModifyPhoneNo,
      meta: {
        showFootBar: false
      }
    },
    {
      path: '/messageCenter', component: MessageCenter,
      meta: {
        showFootBar: false
      }
    },
    {
      path: '/p_info/couponSpot', component: CouponSpot
    },
    {
      path: '/searchResult', component: SearchResult,
      meta: {
        showFootBar: false
      }
    },
    {
      path: '/p_info/cart', component: Cart,
      meta: {
        showFootBar: false
      }
    },
    {
      path: '/p_info/settings', component: Settings,
      meta: {
        showFootBar: false
      }
    }
  ]
})
