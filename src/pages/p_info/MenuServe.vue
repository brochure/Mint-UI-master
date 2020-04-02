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
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
    <el-footer>
      <div style="position:fixed;bottom:0;">
        <!-- <mt-tabbar fixed style="background:none;border:none;"> -->
          <el-row type="flex" justify="space-between">
            <el-col :span="3">
            <el-badge :value="totalNum" class="item">
              <i class="mintui mintui-life" style="font-size:2em;"/>
            </el-badge>
            </el-col>
            <el-col :span="10" :offset="3">
                <small class="text-muted">¥45</small>
                <small class="text-muted">另需配送费¥9</small>
            </el-col>
            <el-col :span="4" :offset="4">
              <el-button @click="submitCart">去结算</el-button>
            </el-col>
          </el-row>
        <!-- </mt-tabbar> -->
      </div>
    </el-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import{ mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['totalNum']),
  },
  methods: {
    submitCart(){
      let that = this;
      let url = that.HOST + "/order/submitCart";
      let param = {
        accountId: 1,
        merchantId: Vue.prototype.$merchantId,
        merchantCart: this.$store.getters.merchantCart
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
      let param = {merchantId: Vue.prototype.$merchantId};
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
      if(resp.data.success){
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
        accountId: 1,
        merchantId: Vue.prototype.$merchantId
        };
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
        if(resp.data.success){
          Vue.prototype.$cart = resp.data.content;
        }else{
          that.$toast(resp.data.msg);
          }
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
          if(resp.data.success){
            this.$store.commit('updateMerchantCart', {merchantCart: resp.data.content});
          }else{
            that.$toast(resp.data.msg);
            }
          }).catch(err =>{
            that.$toast(err.data);
        });
      }
  },
  created(){
    this.getMenu();
    this.getCart();
    this.getMerchantCart();
  }
}
</script>

<style scoped>
#ball {
  width:12px;
  height:12px;
  background: rgb(61, 176, 230);
  border-radius: 50%;
  position: fixed;
  transition: left 1s linear, top 1s ease-in;
}
</style>
