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
      <img :src="genPicURL(accountInfo.pic)" class="round_icon" />
    </mt-cell>
        <mt-cell title="用户名" is-link>
      <span style="color:#909399;">{{accountInfo.nickName}}</span>
    </mt-cell>
    <mt-cell title="收货地址" is-link />

    <p type="info" class="mt-4">账号绑定</p>
    <mt-cell title="手机" is-link to="/p_info/modifyPhoneNo">
    <!-- <mt-cell title="手机" is-link @click.native="modifyPhoneNo"> -->
      <span style="color:#909399;">{{replacePhoneNo(accountInfo.phoneNo)}}</span>
    </mt-cell>
    <div v-for="item in accountInfo.thirdPartyAccount" :key="item.title">
      <mt-cell :title=item.title is-link>
        <span v-if="item.bound" class="bound">已绑定</span>
        <span v-else class="bound" style="color:#409EFF;">未绑定</span>
      </mt-cell>
    </div>
  </el-main>
  <mt-actionsheet
    :actions="actions"
    v-model="sheetVisible">
  </mt-actionsheet>
  <input ref="filElem" type="file" style="display:none" class="upload-file" @change="getFile">
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
  .bound{
    font-size:0.8em;
  }
</style>

<script>
  import HeaderBar from '../../components/HeaderBar.vue'
  import FileSaver from 'file-saver'

  var formData = new FormData()
  export default{
      name: 'index',
      components:{
        HeaderBar
      },
      data () {
        return {
          accountInfo:{},
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
      genPicURL(pic) {
          return this.SERVER_BASE_URL + "/image/" + pic;
        },
      getAccountInfo () {
        // var url = this.staticURL + "json/account_info.json";
        var that = this;
        var req_map = that.HOST + "/account";
        that.$axios.get(req_map).then((resp) => {
          if(resp.data.success){
            that.accountInfo = resp.data.content;
          }else{
            alert(resp.data.msg);
          }
      });
      },
      replacePhoneNo (str) { // should be handed to the backstage
          if(!str){return ''}
          return str.replace(/(\d{3})\d{5}(\d{3})/, '$1****$2');
      },
      actionSheet(){this.sheetVisible = true;},
      getCamera(){
        console.log("打开照相机")
      },
      getLibrary(){
        this.$refs.filElem.dispatchEvent(new MouseEvent('click'))
      },
      getFile(){
        // function getObjectURL(file) { 
        //     var url = null; 
        //     if (window.createObjcectURL != undefined) { 
        //         url = window.createOjcectURL(file); 
        //     } else if (window.URL != undefined) { 
        //         url = window.URL.createObjectURL(file); 
        //     } else if (window.webkitURL != undefined) { 
        //         url = window.webkitURL.createObjectURL(file); 
        //     } 
        //     return url; 
        // }
        // var url = getObjectURL(this.$refs.filElem.files[0]);
        // console.log(url);
        //     // 应该用canvas编辑和保存图片
        //     var downloadLink = document.createElement("a");
        //     downloadLink.setAttribute("href", url);
        //     downloadLink.setAttribute("download", "new.png");
        //     downloadLink.click();
        // // this.$axios({
        // //   url: url,
        // //   type: "POST",
        // //   dataType: 'binary',
        // //   headers:{'Content-Type':'image/jpeg','X-Requested-With':'XMLHttpRequest'},
        // //   processData: false,
        // //   success: function(result){
        // //     console.log('wawad');  
        // //   }
        // // });
      },
    fileUpload(event){
      // formData.append('file', document.querySelector('input[type=file]').files[0]) // 'file' 这个名字要和后台获取文件的名字一样;
      // formData.append('user',this.name)
      // this.$axios({

      // }

      // )


      // // 上传文件
      // console.log(event);
      
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
      this.getAccountInfo()
      // this.actionSheet()
    }

  }

</script>
