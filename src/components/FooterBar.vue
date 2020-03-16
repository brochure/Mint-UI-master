<template>
  <div id="tab-bar">
    <el-footer>
      <mt-tabbar v-model="selected" v-show="isShow" fixed style="border:none;">
        <mt-tab-item id="main">
          <!-- <mt-cell icon='eleme' class="footicon"></mt-cell> -->
          <i class="el-icon-eleme" style="font-size:2em;"/>
          <p class="foottxt">外卖</p>
        <!--  <img :src="img1" slot="icon">外卖-->
        </mt-tab-item>
        <mt-tab-item id="life">
          <!-- <mt-cell icon='life' class="footicon"></mt-cell> -->
          <i class="mintui mintui-life" style="font-size:2em;"/>
          <p class="foottxt">生活</p>
        </mt-tab-item>

        <mt-tab-item id="order">
          <!-- <mt-cell icon='order' class="footicon"></mt-cell> -->
          <i class="mintui mintui-order" style="font-size:2em;"/>
          <p class="foottxt">订单</p>
        </mt-tab-item>

        <mt-tab-item id="info">
          <i class="mintui mintui-info" style="font-size:2em;"/>
          <!-- <mt-cell icon='info' class="footicon"></mt-cell> -->
          <p class="foottxt">我的</p>
        </mt-tab-item>
      </mt-tabbar>
    </el-footer>
  </div>
</template>
<style>
@import url("//at.alicdn.com/t/font_1684162_56otp1zo8mb.css");
.foottxt{
  margin-top:5px;
  margin-bottom:2px;
}
/* .footicon{
  background:none;
  border: none;
  margin:-15px 0px -12px 0px;
} */
</style>
<script>
  export default {
    data(){
      return {
        selected: 'main'
      }
    },
    computed: {
      isShow: function () {
        return true;
      }
    },
    watch: {
      'selected': {
        handler(){
          if (this.selected == "main") {
            this.$router.push('/main');
            //this.img1 = "static/home_selected.png"
          } else {
            this.img1 = "static/home.png"
          }
          if (this.selected == "life") {
            this.$router.push('/life');
            //this.img3 = 'static/or_selected.png'
          } else {
            this.img3 = 'static/tool.png'
          }
          if (this.selected == "order") {
            this.$router.push('/order')
            //this.img5 = "static/user_selected.png";
          } else {
            this.img5 = "static/user.png";
          }
          if (this.selected == "info") {
            this.$router.push('/info')
           // this.img5 = "static/user_selected.png";
          } else {
            this.img5 = "static/user.png";
          }
        }
      }
    }
  }
</script>
