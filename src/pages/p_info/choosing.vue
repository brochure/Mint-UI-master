<template>
  <div id="index">
    <figure class="figure">
      <img src="/src/assets/canteen_bg/bg_mcd.jpg" style="height:150px;width:100%;" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption text-center font-weight-bold text-dark" style="font-size:1.25em;">{{this.$route.params.merchant.title}}</figcaption>
      <figcaption class="text-muted text-center small"><span>评价&nbsp;{{this.$route.params.merchant.rate}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>月售&nbsp;{{this.$route.params.merchant.sale}}</span></figcaption>
    </figure>
    <el-container>
      <el-main>
        <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu> -->


        <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true">
          <el-tab-pane :span="8" label="点餐" name="first">
            <el-row>
              <el-col :span="4">
                <el-menu>
                    <el-menu-item index="1-1" class="text-wrap" style="padding:0px;"><p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;"><i class="el-icon-location" style="margin-right:0px;"></i>优惠</p>
                    </el-menu-item>
                    <el-menu-item index="item.index" class="text-wrap" style="padding:0px;" v-for="item in menu" :key="item"><p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">{{item.title}}</p>
                    </el-menu-item>
                  </el-menu>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :span="8" label="评价" name="second">
          评价
            </el-tab-pane>
          <el-tab-pane :span="8" label="商家" name="third">商家</el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>

  </div>
</template>

<style scoped>

</style>

<script>
  export default{
    name: 'index',
    components: {
    },
    data () {
      return {  
        activeName: 'first',
        menu:[
          {
            index: 1,
            title: '企业专送',
            icon:'',
            contents: [],
          },
          {
            index: 2,
            title: '早餐超值组合',
            icon:'',
            contents: [],
          },
          {
            index: 3,
            title: '早餐主食/小食',
            icon:'',
            contents: [],
          },
          {
            index: 4,
            title: '饮品',
            icon:'',
            contents: [],
          },
        ]
    }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
