<template>
  <el-row type="flex">
      <el-col :span="6">
        <img :src="genPicURL(meal.pic)" class="logo">
      </el-col>
      <el-col :span="18">
        <span>{{meal.title}}</span>
        <ul class="list-inline">
            <!-- <li class="list-inline-item"><i class="mintui mintui-star" style="color:#ec6800;"></i><small style="color:#ec6800;">{{merchant.rate}}</small></li> -->
            <li class="list-inline-item"><small class="text-muted">月售{{meal.month_sold}}</small></li>
        </ul>
        <ul class="list-inline" style='margin-top:-5px;'>
            <li class="list-inline-item"><small class="text-muted">¥{{meal.price}}</small></li>
        </ul>
      </el-col>
  </el-row>
</template>

<script>
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
    genPicURL(pic) {
      return this.SERVER_BASE_URL + "/image/" + pic;
    }
  },
  components: {

  },
  mounted(){
    // console.log(this.meal);
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
