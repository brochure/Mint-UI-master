<template>
  <div id="choosing">
    <figure class="figure">
      <img :src="genPicURL('canteen_bg/bg_mcd.jpg')" style="height:150px;width:100%;" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption text-center font-weight-bold text-dark" style="font-size:1.25em;">{{merchant.title}}</figcaption>
      <figcaption class="text-muted text-center small"><span>评价&nbsp;{{merchant.rate}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>月售&nbsp;{{merchant.sale}}</span></figcaption>
    </figure>
    <el-container>
      <!-- <el-header>
        
      </el-header> -->
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
          <el-tab-pane :span="8" name="first">
            <span slot="label"><router-link to="/p_info/choosing/menuServe">点餐</router-link></span>
          </el-tab-pane>
          <el-tab-pane :span="8" name="second">
            <span slot="label"><router-link to="/p_info/choosing/commentRate">评价</router-link></span>
          </el-tab-pane>
          <el-tab-pane :span="8" name="third">
            <span slot="label"><router-link to="/p_info/choosing/merchantInfo">商家</router-link></span>
          </el-tab-pane>
        </el-tabs>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer>
        <el-row type="flex" justify="space-between" style="margin-top:20px;">
          <el-col :span="3">
          <mt-badge type="error">10</mt-badge>
          </el-col>
          <el-col :span="10">
             <ul class="list-inline">
              <li class="list-inline-item"><small class="text-muted">¥45</small></li>
            </ul>
            <ul class="list-inline" style='margin-top:-25px;'>
                <li class="list-inline-item"><small class="text-muted">另需配送费¥9</small></li>
            </ul>
          </el-col>
          <el-col :span="4" :offset="7">
            <el-button>去结算</el-button>
          </el-col>
        </el-row>
      </el-footer> -->
    </el-container>
     <!--{{this.$route.params.merchant.title}}/static/canteen_bg/bg_mcd.jpg-->
  </div>
</template>

<style scoped>

</style>

<script>
  export default{
    name: 'choosing',
    components: {
    },
    data () {
      return {  
        merchant:{},
        activeName: 'first',
    }
    },
    methods: {
      // toURL(){
      //   this.$router.push({ path: '/p_info/choosing/commentRate' })
      // },
      getMerchantInfo(){
        var that = this;
        var req_map = that.HOST + "/getMerchantGivenId";
        var param = {id: that.$route.query.id};
        that.$axios({
            url: req_map,
            method: 'POST',
            data: param
        }).then(resp => {
        if(resp.data.success){
            console.log(resp);
            that.merchant = resp.data.content;
            that.showResult = true;
        }else{that.$toast(resp.data.msg);}
        }).catch(err =>{
          that.$toast(err.data);
        });
      },
      genPicURL(pic) {
        return this.SERVER_BASE_URL + "/image/" + pic;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    created(){
      this.getMerchantInfo();
    }
  }
</script>
