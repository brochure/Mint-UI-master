<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu>
          <el-menu-item index="0" class="text-wrap" style="padding:0px;">
            <!-- :to="{path:'/p_info/choosing/menuServe',query:{id:merchant.id}}" -->
            <!-- <router-link :to="{path:'/p_info/choosing/menuServe/menuBlock'}" replace> -->
            <p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">
              <i class="el-icon-location" style="margin-right:0px;"></i>优惠</p>
            <!-- </router-link> -->
          </el-menu-item>
          <el-menu-item :index="String(item.ordinal)" class="text-wrap" style="padding:0px;" v-for="item in menu" :key="item.ordinal">
            <router-link :to="{path:'/p_info/choosing/menuServe/menuBlock',query:{colOrdinal:item.ordinal}}" replace>
              <p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">{{item.title}}</p>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <keep-alive>
        <router-view @addCount="receive"></router-view>
        </keep-alive>
      </el-col>
    </el-row>
    <el-footer>
      <mt-tabbar fixed style="background:none;border:none;">
        <el-row>
          <el-col :span="3">
          <el-badge :value="menu_count" class="item">
            <i class="mintui mintui-life" style="font-size:2em;"/>
          </el-badge>
          </el-col>
          <el-col :span="10" :offset="3">
              <small class="text-muted">¥45</small>
               <small class="text-muted">另需配送费¥9</small>
          </el-col>
          <el-col :span="4" :offset="4">
            <el-button @click="submitCart">去结算</el-button>
            <!-- <el-button><router-link to="/p_info/cart" >去结算</router-link></el-button> -->
            <!-- <el-button><router-link :to="{path:'/p_info/cart',query:{basket:basket}}" >去结算</router-link></el-button> -->
          </el-col>
        </el-row>
      </mt-tabbar>
    </el-footer>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      menu: [],
      menu_count:0,
      // basket:{},
      // cart:{}
      // cartContent:[]
    }
  },
  methods: {
    submitCart(){
      var that = this;
      // var cartContent = new Array();
      // for (var key in that.basket) {
      //   cartContent.push({
      //     title:key,
      //     price:that.basket[key].price,
      //     pic:that.basket[key].pic,
      //     amount:that.basket[key].amount,
      //   })
      // }
      // console.log("cartContent");
      // console.log(cartContent);
      
      let url = that.HOST + "/submitCart";
      // console.log(cartContent);
      let param = {
        mid: Vue.prototype.$merchantId,
        contents: Vue.prototype.$basket
      };
      that.$axios({
        url: url,
        method: 'POST',
        data: param
      }).then(resp => {
        if(resp.data.success){
          that.$router.push("/p_info/cart");
        }else{that.$toast(resp.data.msg);}
      }).catch(err =>{console.log(err);})
    },
    receive(param){
      // console.log("recieve");
      // console.log(param);
      this.menu_count += param.amount;      
      if(this.basket[param.title] == null){
        this.basket[param.title] = {
            amount:param.amount,
            pic:param.pic,
            price:param.price
          };
      }else{
        this.basket[param.title].amount += param.amount;
      }
    },
    getMenu(){
      let that = this;
      let req_map = that.HOST + "/order/getMenu";
      let param = {merchantId: Vue.prototype.$merchantId};
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
        console.log(resp);
      if(resp.data.success){
        let respContent = resp.data.content;
        that.menu = respContent;
        Vue.prototype.$menu = respContent;
        console.log("Vue.prototype.$menu");
        console.log(Vue.prototype.$menu);
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
        accountId: 1,
        merchantId: Vue.prototype.$merchantId
        };
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
        console.log("getCart");
        console.log(resp);
        if(resp.data.success){
          Vue.prototype.$cart = resp.data.content;
        }else{that.$toast(resp.data.msg);}
        }).catch(err =>{
          that.$toast(err.data);
        });
      },
      getMerchantCart(){
        let that = this;
        let req_map = that.HOST + "/order/getMerchantCart";
        let param = {
          accountId: 1,
          merchantId: Vue.prototype.$merchantId
          };
        that.$axios({
          url: req_map,
          method: 'POST',
          data: param
        }).then(resp => {
          console.log("getMerchantCart");
          console.log(resp);
          if(resp.data.success){
            Vue.prototype.$merchantCart = resp.data.content;
          }else{that.$toast(resp.data.msg);}
          }).catch(err =>{
            that.$toast(err.data);
        });
      }
  },
  created(){
    this.getMenu();
    this.getCart();
    this.getMerchantCart();
  },
  watch:{
    // menu(val,oldVal) {
    //   this.$nextTick(() => {
    //     Vue.prototype.$menu = val;
    //     console.log("watch menu:");
    //     console.log(Vue.prototype.$menu);
    //   })
    // }
  }
}
</script>

<style scoped>
#ball {
  width:12px;
  height:12px;
  background: #5EA345;
  border-radius: 50%;
  position: fixed;
  transition: left 1s linear, top 1s ease-in;
}
</style>
