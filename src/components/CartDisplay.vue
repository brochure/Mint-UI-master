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
                <small class="text-muted">x{{meal.amount}}</small>
          </el-row>
          <el-row>
            <el-col :span="5">
                <small class="text-muted">¥{{meal.price}}</small>
            </el-col>
        </el-row>
      </el-col>
  </el-row>
</template>

<script>
import { PaletteButton } from 'mint-ui';

export default {
  props: {
    meal:{
      type: Object,
      default() {
        return {};
      }
    }
  },
  data () {
    return {
      // title: "MerchantDisplay",
    }
  },
  methods: {
    main_log(val) {
      // console.log('main_log', val);
      this.$parent.addCount(val);
    },
    sub_log(val) {
      console.log('sub_log', val);
      this.$refs.target_1.collapse();
    },
    genPicURL(pic) {
      return this.SERVER_BASE_URL + "/image/" + pic;
    }
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
