<template>
  <div id="choosing">
    <div :style="styleObject">
      <el-row>
        <i class="el-icon-arrow-left" @click="prev" style="font-size:1.5em;color:white;"/>
      </el-row>
      <el-row>
        <el-col :offset="12">
          <img :src="genPicURL($store.getters.merchantInfo.imgAddress)" style="position:absolute;bottom:-131px;height:70px;width:70px;margin-left:-35px;" class="figure-img img-fluid rounded">
        </el-col>
      </el-row>
    </div>
      <el-row>
        <figcaption class="figure-caption text-center font-weight-bold text-dark" style="font-size:1.25em;">{{$store.getters.merchantInfo.title}}</figcaption>
      <figcaption class="text-muted text-center small"><span>评价&nbsp;{{$store.getters.merchantInfo.rate}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>月售&nbsp;{{$store.getters.merchantInfo.sale}}</span></figcaption>
      </el-row>
    <el-container>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
          <el-tab-pane :span="8" name="first">
            <span slot="label"><router-link :to="{path:'/p_info/choosing/menuServe'}">点餐</router-link></span>
          </el-tab-pane>
          <el-tab-pane :span="8" name="second">
            <span slot="label"><router-link to="/p_info/choosing/commentRate" replace>评价</router-link></span>
          </el-tab-pane>
          <el-tab-pane :span="8" name="third">
            <span slot="label"><router-link to="/p_info/choosing/merchantInfo" replace>商家</router-link></span>
          </el-tab-pane>
        </el-tabs>
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
  export default{
    name: 'choosing',
    data () {
      return {  
        activeName: 'first',
        styleObject: {
          background: "url(http://localhost:8083/dmorder/image/canteen_bg/bg_mcd.jpg)",
          "no-repeat": true,
          height: "150px",
          width: "100%",
          position: "relative"
        }
      }
    },
    methods: {
      getMerchantInfo(){
        let that = this;
        let req_map = that.HOST + "/merchant/id";
        console.log("getMerchantInfo");
        console.log(that.$store.getters.merchantId);
        
        let param = {id: that.$store.getters.merchantId};
        that.$axios({
            url: req_map,
            method: 'POST',
            data: param
        }).then(resp => {
        if(resp.data.success){
          that.$store.commit('updateMerchantInfo',
            {
              merchantInfo: resp.data.content
            }
          );
        }else{
          that.$toast(resp.data.msg);
          }
        }).catch(err =>{
          that.$toast(err.data);
        });
      },
      genPicURL(pic) {
        if(pic==null||pic==''){
          return null;
        }
        return this.SERVER_BASE_URL + "/image/" + pic;
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      prev(){this.$router.go(-1)}
    },
    created(){
      this.getMerchantInfo();
      // this.styleObject.background = this.genPicURL('canteen_bg/bg_mcd.jpg');
               
    }
  }
</script>

<style scoped>
</style>