<template>
  <el-row type="flex">
      <el-col :span="6">
        <img :src="genPicURL(menuItem.imgAddress)" class="logo">
      </el-col>
      <el-col :span="18" :offset="2">
        <el-row>
          <span><p style="font-size:0.86em;line-height:1.2em;">{{menuItem.title}}</p></span>
        </el-row>
          <el-row style="margin-top:-20px;">
            <!-- <li class="list-inline-item"><i class="mintui mintui-star" style="color:#ec6800;"></i><small style="color:#ec6800;">{{merchant.rate}}</small></li> -->
            <small class="text-muted">月售{{menuItem.monthSold}}</small>
          </el-row>
          <el-row>
            <el-col :span="5">
              <small class="text-muted">¥{{menuItem.price}}</small>
            </el-col>
            <el-col :span="2" :pull="6">
              <div @click="inrement(-1)">
                <mt-palette-button content="-" direction="rt" 
              :radius="80" ref="target_1" mainButtonStyle="font-size:2.8em;color:#fff;background-color:#26a2ff;transform:scale(0.35,0.35);" style="left:90px;top:-40px;">
                <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
              </mt-palette-button>
              </div>
            </el-col>
            <el-col :span="1">
              {{amt}}
            </el-col>
            <el-col :span="2">
              <div @click="main_log">
              <div @click="inrement(1)">
              <mt-palette-button content="+" direction="rt"
              :radius="80" ref="target_1" mainButtonStyle="font-size:2.8em;color:#fff;background-color:#26a2ff;transform:scale(0.35,0.35);" style="left:90px;top:-40px;">
                <div class="" @touchstart="sub_log(1)"></div>
              </mt-palette-button>
              </div>
              </div>
            </el-col>
        </el-row>
      </el-col>
  </el-row>
</template>

<script>
import Vue from 'vue'
import { PaletteButton } from 'mint-ui';

export default {
  props: {
    menuItem:{
      type: Object,
      default() {
        return {};
      }
    }
  },
  data () {
    return {
      amt: 0,
      itemOrdinal: 0,
      colOrdinal: 0,
      // merchantCart: []
    }
  },
  methods: {
    inrement(val){
      if((this.amt+val) >= 0){
        this.amt += val;
        Vue.prototype.$merchantCart.forEach(element => {
          if(element.colOrdinal==this.colOrdinal&&element.itemOrdinal==this.itemOrdinal){
            element.amount += val;
          }
        });
      }      
    },
    main_log(evt) {
      this.parabola(evt);
    },
    sub_log(val) {
      this.$refs.target_1.collapse();
    },
    parabola(evt){
      var ball = document.createElement("div"); 
      ball.setAttribute("id","ball");
      document.body.appendChild(ball);
      // var $ball = document.getElementById('ball');
      // $ball.style.hidden="";
      console.log(evt.pageX,evt.pageY)
        ball.style.top = evt.pageY+'px';
        ball.style.left = evt.pageX+'px';
        ball.style.transition = 'left 0s, top 0s';
      setTimeout(()=>{
          ball.style.top = window.innerHeight+'px';
          ball.style.left = '0px';
          ball.style.transition = 'left 1s linear, top 1s ease-in';
      }, 20)
    },
    genPicURL(pic) {
      return this.SERVER_BASE_URL + "/image/" + pic;
    },
    stringOrObjectIsNull(s){
      return s == null || JSON.stringify(s) == "{}";
    }
  },
  created(){
    console.log("MenuDisplay Vue.prototype.$merchantCart");
    console.log(Vue.prototype.$merchantCart);
    
    
    this.itemOrdinal = this.menuItem.ordinal;
    this.colOrdinal = this.menuItem.colOrdinal;
    // this.merchantCart = Vue.prototype.$merchantCart;
    if(!this.stringOrObjectIsNull(Vue.prototype.$merchantCart)){
      // for(int i=0;i<)
      Vue.prototype.$merchantCart.forEach(element => {
        if(element.colOrdinal==this.colOrdinal && element.itemOrdinal==this.itemOrdinal){
          this.amt = element.amount;
          console.log("amt");
          console.log(element.amount);
        }
      });
    }
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
 .logo{
    width: 70px;
    height: 70px;
    float: left;
  }
</style>
