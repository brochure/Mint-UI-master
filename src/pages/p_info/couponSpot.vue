<template>
<div>
    <el-container>
        <el-header>
            <el-row>
            <header-bar header-title="红包"></header-bar>
            </el-row>

    </el-header>
    <el-main>
        <el-row>
             <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
        </el-row>
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
  methods: {

  },
  components: {
    HeaderBar
  }
}
</script>

<style scoped>

</style>
