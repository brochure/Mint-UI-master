<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu default-active="1">
          <el-menu-item index="0" class="text-wrap" style="padding:0px;">
            <!-- :to="{path:'/p_info/choosing/menuServe',query:{id:merchant.id}}" -->
            <!-- <router-link :to="{path:'/p_info/choosing/menuServe/menuBlock'}" replace> -->
            <p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">
              <i class="el-icon-location" style="margin-right:0px;"></i>优惠</p>
            <!-- </router-link> -->
          </el-menu-item>
          <el-menu-item :index="String(item.ordinal)" class="text-wrap" style="padding:0px;" v-for="item in $store.getters.menu" :key="item.ordinal">
            <router-link :to="{path:'/p_info/choosing/menuServe/menuBlock',query:{colOrdinal:item.ordinal}}" replace>
              <p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">{{item.title}}</p>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <!-- <keep-alive> -->
          <router-view></router-view>
        <!-- </keep-alive> -->
      </el-col>
    </el-row>
    <el-footer>
      <div class="cart-concern-btm-fixed">
        <div class="concern-cart">
          <div style="float:left;margin-left:20px;">
            <el-badge :value="totalNum" class="item">
              <i class="mintui mintui-life" style="font-size:4em;"/>
            </el-badge>
          </div>
          <div style="float:left;margin-top:2px;margin-left:20px;text-align:left;">
            <div class="btm-text-lg">¥{{basketGrossPriceByMid}}</div>
            <div class="btm-text-sm">另需配送费¥{{$store.getters.merchantInfo.initfee}}</div>
          </div>
          <el-button @click="submitCart" style="font-size:1.1em;width:120px;float:right;margin-top:4px;margin-right:2px;" type="success">去结算</el-button>
        </div>
      </div>
    </el-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import{ mapGetters } from 'vuex'

export default {
  name: "menuServe",
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['totalNum', 'basketGrossPriceByMid']),
  },
  methods: {
    submitCart(){
      let that = this;
      let url = that.HOST + "/order/submitCart";
      let param = {
        accountId: that.$store.getters.currentAccountId,
        merchantId: that.$store.getters.merchantId,
        // merchantCart: that.$store.getters.merchantCart
      };
      that.$axios({
        url: url,
        method: 'POST',
        data: param
      }).then(resp => {
        if(resp.data.success){
          that.$router.push("/p_info/cart");
        }else{
          that.$toast(resp.data.msg);
        }
      }).catch(err =>{console.log(err);})
    },
    getMenu(){      
      let that = this;
      let req_map = that.HOST + "/order/getMenu";
      let param = {merchantId: that.$store.getters.merchantId};
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
      if(resp.data.success){
        console.log("menu");
        console.log(resp.data.content);
        that.$store.commit('updateMenu', {menu: resp.data.content});
      }else{
          that.$toast(resp.data.msg);
        }
      }).catch(err =>{
        that.$toast(err.data);
      });
    },
    getCart(){
      let that = this;
      let req_map = that.HOST + "/order/getCart";
      let param = {
        accountId: that.$store.getters.currentAccountId,
        };
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
        if(resp.data.success){
          that.$store.commit('updateCart',
            {
              cart: resp.data.content
            }
          );
        }else{
          that.$toast(resp.data.msg);
          }
        }).catch(err =>{
          that.$toast(err.data);
        });
      },
      
  },
  created(){
    this.getMenu();
    this.getCart();
    this.getMerchantCart();
    console.log("MenuServe created");
    console.log(this.$store.getters.merchantId);
  }
}
</script>

<style scoped>
#ball {
  width:12px;
  height:12px;
  background: rgb(73, 147, 247);
  border-radius: 50%;
  position: fixed;
  transition: left 1s linear, top 1s ease-in;
}

.cart-concern-btm-fixed {
  bottom: 0;
  height: 50px;
  left: 0;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 10;
}

.concern-cart { 
  background-color: rgba(10, 10, 10, 0.75); 
  width: 100%;
  height: 50px; 
  line-height: 50px; 
  float: left;
} 

.btm-text-lg {
  float: left;
  display: block;
  height: 20px;
  line-height: 25px;
  width: 100%;
  font-size:1.2em;
  color:white;
}

.btm-text-sm {
  float: left;
  display: block;
  height: 20px;
  line-height: 25px;
  width: 100%;
  font-size:0.75em;
  color:rgba(255, 255, 255, 0.6);
}
/*  
.order-numbers { 
    background-color: white; 
    border-radius: 8px; 
    color: #f15353; 
    display: inline-block; 
    font-size: 8px; 
    font-style: normal; 
    line-height: 12px; 
    padding: 0 5px; 
    position: absolute; 
    right: -10px; 
    top: -5px; 
} */
</style>
