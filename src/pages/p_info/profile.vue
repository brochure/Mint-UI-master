<template>
  <div id="index">
<el-container>
  <el-header>
     <mt-header fixed title="个人资料">
    <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
    </router-link>
    </mt-header>
  </el-header>
  <el-main>
    <p type="info">基础信息</p>
    <mt-cell title="头像" is-link @click.native="actionSheet">
      <img src="/static/user_portrait.jpg" class="round_icon" />
    </mt-cell>
        <mt-cell title="用户名" is-link>
      <span style="color:#909399;">Cheetos</span>
    </mt-cell>
    <mt-cell title="收货地址" is-link>
    </mt-cell>

    <p type="info" class="mt-4">账号绑定</p>
    <mt-cell title="手机" is-link>
    <span style="color:#909399;">139****1111</span>
    </mt-cell>
    <mt-cell title="淘宝" is-link>
      <span style="color:#409EFF;font-size:0.8em;">未绑定</span>
    </mt-cell>
    <mt-cell title="支付宝" is-link>
      <span style="color:#409EFF;font-size:0.8em;">未绑定</span>
    </mt-cell>
    <mt-cell title="微博" is-link>
      <span style="color:#409EFF;font-size:0.8em;">未绑定</span>
    </mt-cell>
    <mt-cell title="微信" is-link>
      <span style="color:#409EFF;font-size:0.8em;">未绑定</span>
    </mt-cell>
    <mt-cell title="QQ" is-link>
      <span style="color:#409EFF;font-size:0.8em;">未绑定</span>
    </mt-cell>
  </el-main>
  <el-upload>
  <mt-actionsheet
    :actions="actions"
    v-model="sheetVisible">
  </mt-actionsheet>

  

</el-upload>
</el-container>

  </div>
</template>

<style scoped>
 .round_icon{
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
</style>

<script>
  export default{
      name: 'index',
      data () {
        return {
          sheetVisible: false,
          actions: [{
          name: '拍照',
          method : this.getCamera
          }, {
            name: '从相册中选择', 
            method : this.getLibrary
          }],
        }
      },
    methods:{
      actionSheet(){
        this.sheetVisible = true;
      },
      getCamera(){
      console.log("打开照相机")
    },
    getLibrary(){
      console.log("打开相册")
    }

        // routerTo(merchant){
        // this.$router.push({ name: 'choosing', params: { merchant }});
        // }
    },
    created(){
      // this.actionSheet()
    }

  }

</script>
