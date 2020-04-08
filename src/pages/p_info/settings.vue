<template>
  <div>
    <el-container>
      <el-header>
        <header-bar header-title="设置"></header-bar>
      </el-header>
      <el-main>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span style="margin-left:6px;">账户与安全</span>
            <span style="float:right;">
              <span class="rb-text-extra">开启小额免密支付</span>
              <i class="el-icon-arrow-right" style="font-weight:bold;color:grey;"/>
            </span>
          </li>
          <li class="list-group-item">
            <span style="margin-left:6px;">通用</span>
            <span style="float:right;">
              <i class="el-icon-arrow-right" style="font-weight:bold;color:grey;"/>
            </span>
          </li>
          <li class="list-group-item">
            <span style="margin-left:6px;">欢迎评分</span>
            <span style="float:right;">
              <i class="el-icon-arrow-right" style="font-weight:bold;color:grey;"/>
            </span>
          </li>
          <li class="list-group-item">
            <span style="margin-left:6px;">关于饿了么</span>
            <span style="float:right;">
              <i class="el-icon-arrow-right" style="font-weight:bold;color:grey;"/>
            </span>
          </li>
          <li class="list-group-item">
            <span style="margin-left:6px;">隐私</span>
            <span style="float:right;">
              <i class="el-icon-arrow-right" style="font-weight:bold;color:grey;"/>
            </span>
          </li>
          <li class="list-group-item">
            <span style="margin-left:6px;">意见反馈</span>
            <span style="float:right;">
              <i class="el-icon-arrow-right" style="font-weight:bold;color:grey;"/>
            </span>
          </li>
        </ul>
        <div @click="logoutSubmit" style="margin-top:20px;text-align:center;">
          <span style="font-size:1.1em;color:#e83929;">退出当前账号</span>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar.vue'
export default {
  data () {
    return {

    }
  },
  created() {
  },
  methods: {    
    logoutSubmit(){      
      this.$store.commit('logoutAccount');
      this.jumpto('/info');
    },
    jumpto(link){
      if(link==''){
        this.$toast("功能开发中");
      }else{
        this.$router.push(link);
      }
    },
  },
  components: {
    HeaderBar
  }
}
</script>

<style scoped>
.rb-text-extra {
  font-size: 0.75em;
  color: #727171;
  font-weight: lighter;
}
</style>
