<template>
  <div id="index">
    <figure class="figure">
      <img src="/static/canteen_bg/bg_mcd.jpg" style="height:150px;width:100%;" class="figure-img img-fluid rounded">
      <figcaption class="figure-caption text-center font-weight-bold text-dark" style="font-size:1.25em;">{{this.$route.params.merchant.title}}</figcaption>
      <figcaption class="text-muted text-center small"><span>评价&nbsp;{{this.$route.params.merchant.rate}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>月售&nbsp;{{this.$route.params.merchant.sale}}</span></figcaption>
    </figure>
    <el-container>
      <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true">
        <el-tab-pane :span="8" label="点餐" name="first">
          <el-row>
            <el-col :span="5">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                  <el-menu-item index="1-1"><i class="el-icon-location"></i>优惠
                  </el-menu-item>
                  <el-menu-item index="value.index" class="text-wrap" style="height:60px;" v-for="value in menu" :key="value">{{value.title}}
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



     <!--{{this.$route.params.merchant.title}}/static/canteen_bg/bg_mcd.jpg-->
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
