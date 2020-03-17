<template>
  <el-row type="flex">
      <el-col :span="6">
        <img :src="merchant.pic" class="logo">
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
      title:"",
      pic:"",
      rate:0,
      sale:0,
      initfee:0,
      postage:0
    }
  },
  data () {
    return {
      title: "MerchantDisplay",
    }
  },
  methods: {

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
  }
</style>
