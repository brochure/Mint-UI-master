<template>
  <div id="index">
    <el-container>
        <el-header>
        <header-bar header-title="修改手机"></header-bar>
      </el-header>
      <p class="text-center text-nowrap small" style="">请输入手机号码</p>

      <mt-field placeholder="手机号码" type="tel" v-model="phone"></mt-field>
      <el-row>
        <el-button type="info" plain style="text-align:center">确认</el-button>
      </el-row>
    </el-container>


  </div>
</template>

<style scoped>

</style>

<script>
  import HeaderBar from '../../components/HeaderBar.vue'
export default{
      name: 'index',
      components:{
        HeaderBar
      },
      data () {
        return {

        }
      },
  }
</script>
