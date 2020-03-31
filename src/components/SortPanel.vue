<template>
<div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" style="margin-top:-16px;">
    <el-submenu index="zh">
        <template slot="title">{{dictSort[sortkey]}}</template>
        <el-menu-item index="hp">好评优先</el-menu-item>
        <el-menu-item index="qs">起送价最低</el-menu-item>
        <el-menu-item index="psk">配送最快</el-menu-item>
        <el-menu-item index="psf">配送费最低</el-menu-item>
        <el-menu-item index="rja">人均从低到高</el-menu-item>
        <el-menu-item index="rjb">人均从高到低</el-menu-item>
        <el-menu-item index="ty">通用排序</el-menu-item>
    </el-submenu>
    <el-menu-item index="jl">距离</el-menu-item>
    <el-menu-item index="xl">销量</el-menu-item>
    <!-- <el-menu-item index="sx">筛选</el-menu-item> -->
    </el-menu>
    <merchants-list :sortkey="sortkey" :merchants="merchants"></merchants-list>
</div>
</template>

<script>
import MerchantsList from '../components/MerchantsList.vue'

export default {
  props: {
    merchants: {
      type: Array,
      default:function(){
          return []
      }
    }
  },
  data () {
    return {
        sortkey: "zh",
        activeIndex: "1",
        dictSort: {
            "zh":"综合排序",
            "hp":"好评优先",
            "qs":"起送价最低",
            "psk":"配送最快",
            "psf":"配送费最低",
            "rja":"人均从低到高",
            "rjb":"人均从高到低",
            "ty":"综合排序",
            "jl": "综合排序",
            "xl": "综合排序"
        },
    }
  },
  methods: {
    handleSelect(key, keyPath) {      
      switch(keyPath[0]){
        case "zh":
          this.sortkey = key; 
          break;
        case "jl":
        case "xl":
          this.sortkey = key; 
          break;
        case "sx":
          break;
      }
    },
  },
  components: {
    MerchantsList
  },
  created(){
  },
}
</script>

<style scoped>

</style>
