<template>
  <div id="index">
  <el-container>
    <el-header>
      <el-row style="padding-top:10px;">
        <el-col :span="4" :offset="20">
          <el-dropdown>
              <span class="el-dropdown-link">其他订单</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>跑腿代购</el-dropdown-item>
                <el-dropdown-item>口碑团购</el-dropdown-item>
                <el-dropdown-item>电影</el-dropdown-item>
                <el-dropdown-item>酒店</el-dropdown-item>
                <el-dropdown-item>火车票</el-dropdown-item>
                <el-dropdown-item>外卖卡券</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          <!-- <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" style="width:100px">
            <el-submenu index="1">
              <template slot="title">其他订单</template>
              <el-menu-item index="1-1">跑腿代购</el-menu-item>
              <el-menu-item index="1-2">口碑团购</el-menu-item>
              <el-menu-item index="1-3">电影</el-menu-item>
              <el-menu-item index="1-4">酒店</el-menu-item>
              <el-menu-item index="1-5">火车票</el-menu-item>
              <el-menu-item index="1-6">外卖卡券</el-menu-item>
            </el-submenu>
          </el-menu> -->
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10">
          <h5>我的订单</h5>
        </el-col>
        <el-col :span="1" :push="11">
          <el-button icon="el-icon-search" circle></el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row style="margin-top:300px;">
        <el-col align="middle">
          <p>近三个月没有外卖订单</p>
          <el-button plain>查看更早订单</el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
  </div>
</template>

<style scoped>
h5, span{
  color:#303133;
}
</style>

<script>
  export default{
  name:'index',
      components: {
      },
      data () {
        return { 
        }
    }
  }
</script>
