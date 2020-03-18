<template>
<div>
    <el-container>
        <el-header style="background-color:#209bff;height:95px;padding-top:15px">
            <el-row>
                <el-col :span="1">
                    <i class="el-icon-arrow-left" style="font-size:1.5em;color:white;"/>
                    <!-- <mt-button icon="back" @click="prev"></mt-button> -->
                </el-col>
                <el-col :span="4" :offset="10">
                    <h5>红包</h5>
                </el-col>
                <el-col :span="5" :offset="4">
                    <span class="txtcorner" style="float:right;">兑换红包</span>
                </el-col>
            </el-row>
            <!-- <el-row type="flex" justify="space-between"> -->
            <!-- <el-menu
            :default-active="activeIndex2"
            mode="horizontal"
            @select="handleSelect"
            background-color="#209bff"
            text-color="#fff"
            active-text-color="#ffd04b"
            stretch="true"
            class="headermenu">
            <el-menu-item index="1">
                <el-col>红包
                </el-col>
                </el-menu-item>
            <el-menu-item index="2">
                <el-col>店铺红包
                </el-col>
                </el-menu-item>
            <el-menu-item index="3"><el-col>
                抵用券
                </el-col></el-menu-item>
            <el-menu-item index="4">
                <el-col>本地生活
                </el-col>
                </el-menu-item>
            </el-menu> -->
                <div id="divcoupon">
                <el-tabs v-model="activeName" stretch="true">
                    <el-tab-pane label="红包" name="first">
                        <h1>红包</h1>
                    </el-tab-pane>
                    <el-tab-pane label="店铺红包" name="second">店铺红包</el-tab-pane>
                    <el-tab-pane label="抵用券" name="third">抵用券</el-tab-pane>
                    <el-tab-pane label="本地生活" name="fourth">本地生活</el-tab-pane>
                </el-tabs>
                </div>
            <!-- </el-row> -->
        </el-header>

    <el-main>

    </el-main>
    </el-container>
</div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar.vue'
export default {
  data () {
    return {
        activeName: "first"
    }
  },
  methods: {

  },
  components: {
    HeaderBar
  },
  mounted(){
  }
}
</script>

<style>
.headermenu .el-menu-item {
    height: 46px;
}
#divcoupon .el-submenu__title {
    color:white !important;
  float:none !important;
}

#divcoupon .el-tabs__item {
    color: white !important;
  font-size: 1em !important;
}
.el-tabs__nav-wrap{}

h5, .txtcorner {
    color:white;
}
</style>
