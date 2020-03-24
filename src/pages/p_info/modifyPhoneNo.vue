<template>
  <div id="index">
    <el-container>
        <el-header>
        <header-bar header-title="修改手机"></header-bar>
      </el-header>
      <p class="text-center text-nowrap small" style="">请输入手机号码</p>
    <el-row>
      <el-col :span="22" :offset="1">
        <mt-field placeholder="手机号码" type="tel" v-model="phoneNo"></mt-field>
      </el-col>
    </el-row>
      <el-row>
        <el-col :span="22" :offset="1">
          <el-button :type="btnType" :disabled="isBtnDisabled" plain @click="savePhoneNo" style="width:100%;">确&nbsp;&nbsp;认</el-button>
        </el-col>
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
          phoneNo: "",
          btnType: "info",
          isBtnDisabled: true
        }
      },
      watch: {
        phoneNo: function (newPhoneNo, oldPhoneNo) {
          var phoneNoReg=/^[1][3,4,5,7,8][0-9]{9}$/;
          if(phoneNoReg.test(newPhoneNo)){
            this.isBtnDisabled = false;
            this.btnType = "primary";
          }else{
            this.isBtnDisabled = true;
            this.btnType = "info";
          }
        }
      },
      methods:{
        savePhoneNo(){
          var url = this.HOST + "/modifyPhoneNo";
          var that = this;
          var param = {phoneNo: that.phoneNo};
          that.$axios({
            url: url,
            method: 'POST',
            data: param
          }).then(resp => {
            if(resp.data.success){
              that.$toast(resp.data.msg);
              that.prev();
            }else{
              that.$toast(resp.data.msg);
            }
          }).catch(err =>{
            console.log(err);
            // reject(err.data);
          })
        },
        prev(){this.$router.go(-1)}
      }
  }
</script>
