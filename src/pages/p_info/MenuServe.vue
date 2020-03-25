<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu>
          <el-menu-item index="0" class="text-wrap" style="padding:0px;">
            <!-- :to="{path:'/p_info/choosing/menuServe',query:{id:merchant.id}}" -->
            <router-link :to="{path:'/p_info/choosing/menuServe/menuBlock',query:{id:$route.query.id,part:'0'}}">
            <p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">
              <i class="el-icon-location" style="margin-right:0px;"></i>优惠</p>
            </router-link>
          </el-menu-item>
          <el-menu-item :index="item.index" class="text-wrap" style="padding:0px;" v-for="item in menu" :key="item.index">
            <router-link :to="{path:'/p_info/choosing/menuServe/menuBlock',query:{id:$route.query.id,contents:item.contents}}">
            <p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">{{item.title}}</p>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
    <el-footer>
      <mt-tabbar fixed style="background:none;border:none;">
        <el-row>
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
        <!-- <mt-tab-item id="life">
          <i class="mintui mintui-life" style="font-size:2em;"/>
          <p class="foottxt">生活</p>
        </mt-tab-item> -->
      </mt-tabbar>
    </el-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: {},
    }
  },
  methods: {
    getMenu(){
      var that = this;
      var req_map = that.HOST + "/getMenu";
      var param = {id: that.$route.query.id};
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
      if(resp.data.success){        
          // console.log(resp);
          that.menu = resp.data.content;
      }else{that.$toast(resp.data.msg);}
      }).catch(err =>{
        that.$toast(err.data);
      });
    }
  },
  components: {

  },
  created(){
    this.getMenu();
  }
}
</script>

<style scoped>

</style>
