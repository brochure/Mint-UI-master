<template>
  <div id="index">
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="7" :offset="17">
          <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" style="width:100px">
            <el-submenu index="2" style="width:100px;">
              <template slot="title">其他订单</template>
              <el-menu-item index="2-1">跑腿代购</el-menu-item>
              <el-menu-item index="2-2">口碑团购</el-menu-item>
              <el-menu-item index="2-3">电影</el-menu-item>
              <el-menu-item index="2-3">酒店</el-menu-item>
              <el-menu-item index="2-3">火车票</el-menu-item>
              <el-menu-item index="2-3">外卖卡券</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
      <!-- <el-row>
        <el-col :span="4" :offset="17">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">其他订单</template>
            <el-menu-item index="2-1" style="background-color:#545c64;color:#fff;">跑腿代购</el-menu-item>
            <el-menu-item index="2-1" style="background-color:#545c64;color:#fff;">口碑团购</el-menu-item>
            <el-menu-item index="2-2" style="background-color:#545c64;color:#fff;">电影</el-menu-item>
            <el-menu-item index="2-3" style="background-color:#545c64;color:#fff;">酒店</el-menu-item>
            <el-menu-item index="2-3" style="background-color:#545c64;color:#fff;">火车票</el-menu-item>
            <el-menu-item index="2-3" style="background-color:#545c64;color:#fff;">外卖卡券</el-menu-item>
          </el-submenu>
          </el-menu>
        </el-col>
      </el-row> -->
      <el-row>
        <el-col :span="10">
          <h5>我的订单</h5>
        </el-col>
        <el-col :span="1" :push="11">
          <el-button icon="el-icon-search" circle></el-button>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
  </div>
</template>

<style scoped>
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
