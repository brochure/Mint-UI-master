<template>
  <div id="index">
<el-container>
  <el-header>
     <!-- <mt-header fixed title="个人资料">
    <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
    </router-link>
    </mt-header> -->
    <header-bar header-title="个人资料"></header-bar>
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
  <mt-actionsheet
    :actions="actions"
    v-model="sheetVisible">
  </mt-actionsheet>

  <!-- <el-upload>

</el-upload> -->
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
  import HeaderBar from '../../components/HeaderBar.vue'
  export default{
      name: 'index',
      components:{
        HeaderBar
      },
      data () {
        return {
          sheetVisible: false,
          actions: [{
          name: '拍照',
          method : this.getCamera
          }, {
            name: '从相册中选择', 
            method : this.fileUpload
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
    },
    fileUpload(event){
      // 上传文件
      console.log(event);
      
      // let file = event.target.files
      // let formData = new FormData()
      // formData.append('category', 'settingPic')
      // formData.append('file', file[0])
      // console.log(formData);
      // // 文件上传
      // this.$axios({
      //   method: "POST",
      //   url: url_g + '/dcas/event/'+this.contrastId+'/importathlete',
      //   data: formData
      // }).then((res) => {
      //   let data = res.data
      //   if(data.success) {
      //     console.log(data);
          
          
      //   } else {
      //     this.$message.error(data.message || '操作失败')
      //   }
      //   this.uploadLoading = false
      // }).catch((e)=>{
      //   this.uploadLoading = false
      //   alert(e)
      // })
      
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
