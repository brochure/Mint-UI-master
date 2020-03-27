<template>
  <el-row type="flex">
      <el-col :span="6">
        <img :src="genPicURL(meal.pic)" class="logo">
      </el-col>
      <el-col :span="18" :offset="2">
        <el-row>
          <span><p style="font-size:0.86em;line-height:1.2em;">{{meal.title}}</p></span>
        </el-row>
          <el-row style="margin-top:-20px;">
                <!-- <li class="list-inline-item"><i class="mintui mintui-star" style="color:#ec6800;"></i><small style="color:#ec6800;">{{merchant.rate}}</small></li> -->
                <small class="text-muted">月售{{meal.month_sold}}</small>
          </el-row>
          <el-row>
            <el-col :span="5">
                <small class="text-muted">¥{{meal.price}}</small>
            </el-col>
            <el-col :span="2" :pull="6">
              <div @click="main_log(-1)">
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
              <div @click="main_log(1)">
              <mt-palette-button content="+" direction="rt"
              :radius="80" ref="target_1" mainButtonStyle="font-size:2.8em;color:#fff;background-color:#26a2ff;transform:scale(0.35,0.35);" style="left:90px;top:-40px;">
                <div class="" @touchstart="sub_log(1)"></div>
              </mt-palette-button>
              </div>
            </el-col>
        </el-row>
      </el-col>
  </el-row>
</template>

<script>
import { PaletteButton } from 'mint-ui';

export default {
  props: {
    basket:{
      type: Object,
      default:function(){
        return []
      }
    },
    meal:{
      type: Object,
      default() {
        return {};
      }
    }
  },
  data () {
    return {
      amt: 0,
      // title: "MerchantDisplay",
    }
  },
  methods: {
    main_log(val) {
      console.log("MenuDisplay");
      
      console.log('main_log', val);
      if((this.amt+val)>=0){
        var param = {
          title:this.meal.title,
          amount:val,
          pic:this.meal.pic,
          price:this.meal.price
        }
        this.$parent.addCount(param);
        this.amt += val;
      }
    },
    sub_log(val) {
      console.log('sub_log', val);
      this.$refs.target_1.collapse();
    },
    genPicURL(pic) {
      return this.SERVER_BASE_URL + "/image/" + pic;
    }
  },
  components: {

  },
  created(){
    this.amt = this.basket[this.meal.title].amount;
  },
  mounted(){
    // console.log(this.meal);
    // console.log("MenuDisplay Mounted");
    
    // console.log(this.basket);
    
  }
}
</script>

<style scoped>
 .logo{
    width: 70px;
    height: 70px;
    float: left;
  }
</style>
