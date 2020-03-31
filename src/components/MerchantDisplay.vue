<template>
  <el-row type="flex">
      <el-col :span="6" style="margin-left:0px;margin-right:10px;">
        <img :src="genPicURL(merchant.imgAddress)" class="logo">
      </el-col>
      <el-col :span="18">
        <span>{{merchant.title}}</span>
        <ul class="list-inline">
            <li class="list-inline-item"><i class="mintui mintui-star" style="color:#ec6800;"></i><small style="color:#ec6800;">{{merchant.rate}}</small></li>
            <li class="list-inline-item"><small class="text-muted">月售{{merchant.sale}}</small></li>
        </ul>
        <ul class="list-inline" style='margin-top:-5px;'>
            <li class="list-inline-item"><small class="text-muted">起送¥{{merchant.initfee}}</small></li>
            <li class="list-inline-item"><small class="text-muted">配送¥{{merchant.postage}}</small></li>
        </ul>
      </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    merchant:{
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
    genPicURL(pic) {
      return this.SERVER_BASE_URL + "/image/" + pic;
    }
  },
  components: {

  }
}
</script>

<style scoped>
 .logo{
    width: 70px;
    height: 70px;
    float: left;
    border-width: 0.55px;
    border-style: solid;
    border-color:#ddd;
  }
</style>
