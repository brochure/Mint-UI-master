<template>
  <div id="index">
    <el-container>
        <el-header>
          <header-bar header-title="消息中心"></header-bar>
      </el-header>
    </el-container>


  </div>
</template>

<style scoped>

</style>

<script>
  import HeaderBar from '../components/HeaderBar.vue'
  export default{
      name: 'index',
      components:{
          HeaderBar
      },
      data () {
          return {
          }
      },
      watch: {
      },
      methods:{
      }
  }
</script>
