<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu>
          <el-menu-item index="0" class="text-wrap" style="padding:0px;">
            <router-link to="/p_info/choosing/menuServe/menuList">
            <p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">
              <i class="el-icon-location" style="margin-right:0px;"></i>优惠</p>
            </router-link>
          </el-menu-item>
          <el-menu-item :index="item.index" class="text-wrap" style="padding:0px;" v-for="item in menu" :key="item.index">
            <p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">{{item.title}}</p>
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
      menu:[
          {
            index: "1",
            title: '企业专送',
            icon:'',
            contents: [],
          },
          {
            index: "2",
            title: '早餐超值组合',
            icon:'',
            contents: [],
          },
          {
            index: "3",
            title: '早餐主食/小食',
            icon:'',
            contents: [],
          },
          {
            index: "4",
            title: '饮品',
            icon:'',
            contents: [],
          },
        ]
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>

</style>
