<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected" v-show="isShow" fixed class="border-1px-top">
      <mt-tab-item id="main">
        <mt-cell icon='eleme' class="footicon"></mt-cell>
        外卖
      <!--  <img :src="img1" slot="icon">外卖-->
      </mt-tab-item>
      <mt-tab-item id="life">
        <mt-cell icon='life' class="footicon"></mt-cell>
        生活
      </mt-tab-item>

      <mt-tab-item id="order">
        <mt-cell icon='order' class="footicon"></mt-cell>
        订单
      </mt-tab-item>

      <mt-tab-item id="info">
        <mt-cell icon='info' class="footicon"></mt-cell>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style>
@import url("//at.alicdn.com/t/font_1684162_56otp1zo8mb.css");
.footicon{
margin-bottom:0px;
background:none;
margin:-15px 0px -12px 0px;
}
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
