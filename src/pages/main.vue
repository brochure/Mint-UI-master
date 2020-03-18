<template>
  <div id="index">
    <el-container>
      <el-header>
        <el-row style="padding-top:10px;">
          <el-col :span="20">
            <el-dropdown>
              <span class="el-dropdown-link" style="font-size:1.2em;">
                <i class="el-icon-location"/>
                航科大厦（源深路）<i class="el-icon-arrow-down el-icon--right"/>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>当前定位</el-dropdown-item>
                <el-dropdown-item>当前定位</el-dropdown-item>
                <el-dropdown-item divided>收货地址</el-dropdown-item>
                <el-dropdown-item>收货地址</el-dropdown-item>
                <el-dropdown-item divided>附近地址</el-dropdown-item>
                <el-dropdown-item>附近地址</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="2">
            <i class="mintui mintui-scan"/>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-chat-line-square" style="font-size:1.5em;float:right;" @click="jumpto(urlmsgctr)"/>
          </el-col>
        </el-row>
        <el-row style="margin-top:10px;">
          <search-bar></search-bar>
        </el-row>
      </el-header>
      <el-main>
        <el-row style="margin-top:20px;">
          <el-carousel height="100px" trigger="click">
            <el-carousel-item v-for="item in banners" :key="item.pic">
              <img :src="item.pic" class="banner"/>
            </el-carousel-item>
          </el-carousel>
        </el-row>

        <el-row type="flex" justify="space-around" style="margin-top:20px;">
          <el-col :span="4">
            <svg-icon icon-class="meishi" />
            <p class="txtbnthic text-nowrap">美食</p>
          </el-col>
            <el-col :span="4">
              <svg-icon icon-class="shangchao" />
              <p class="txtbnthic text-nowrap">商超便利</p>
            </el-col>
              <el-col :span="4">
                <svg-icon icon-class="shuiguo" />
                <p class="txtbnthic text-nowrap">水果</p>
              </el-col>
              <el-col :span="4">
                <svg-icon icon-class="paotui" />
                <p class="txtbnthic text-nowrap">跑腿代购</p>
              </el-col>
              <el-col :span="4">
                <svg-icon icon-class="yaodian" />
                <p class="txtbnthic text-nowrap">送药上门</p>
              </el-col>
        </el-row>

        <el-row style="margin-top:5px;">
          <div class="card-group bg-warning rounded-lg p-1" style="height:216px;">
            <div class="col-12 ml-2" style="margin-bottom:-10px">
            <p class="text-danger d-inline-block">新人专属</p><p class="text-danger d-inline-block font-weight-bold hight-amt">1</p><p class="text-danger d-inline-block">元起</p>
            <p class="small font-weight-light" style="float:right;margin-top:2px;">更多 ></p>
            </div>
            <div class="card col-4 p-0 d-inline-block card-ad" v-for="value in discounts" :title="value.title" :key="value.title">
              <img :src="value.pic" class="card-img-top discountimg">
                <div class="card-body p-2">
                  <p class="card-title text-nowrap small m-1">{{value.title}}</p>
                  <p class="card-text text-muted mt-1"><del class="small">¥{{value.origin}}</del><a href="#" class="badge badge-info mt-1" style="float:right;">1元抢</a></p>
                </div>
            </div>
          </div>
        </el-row>

      <!-- <el-row type="flex" :gutter="100"> -->
        <div id="divrecm" style="margin-top:25px;">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="推荐" name="first">
                <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" style="margin-top:-16px;">
                <el-submenu index="1">
                  <template slot="title">综合排序</template>
                  <el-menu-item index="1-1">好评优先</el-menu-item>
                  <el-menu-item index="1-2">起送价最低</el-menu-item>
                  <el-menu-item index="1-3">配送最快</el-menu-item>
                  <el-menu-item index="1-4">配送费最低</el-menu-item>
                  <el-menu-item index="1-5">人均从低到高</el-menu-item>
                  <el-menu-item index="1-6">人均从高到低</el-menu-item>
                  <el-menu-item index="1-7">通用排序</el-menu-item>
                </el-submenu>
                <el-menu-item index="2">距离</el-menu-item>
                <el-menu-item index="3">销量</el-menu-item>
                <el-menu-item index="4">筛选</el-menu-item>
              </el-menu>
              <merchants-list :filters="filters1"></merchants-list>
            </el-tab-pane>
            <el-tab-pane label="果蔬商超" name="second">
              <merchants-list :filters="filters2"></merchants-list>
            </el-tab-pane>
            <el-tab-pane label="到店自取" name="third">
              <merchants-list :filters="filters3"></merchants-list>
            </el-tab-pane>
          </el-tabs>
        </div>
        <!-- <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <el-col>推荐</el-col>
          </mt-tab-item>
          <mt-tab-item id="2">
            <el-col>果蔬商超
            </el-col>
            </mt-tab-item>
          <mt-tab-item id="3">
            <el-col>到店自取
            </el-col>
            </mt-tab-item>
        </mt-navbar> -->
      <!-- </el-row> -->
        <!-- <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <merchants-list :filters="filters1"></merchants-list>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <merchants-list :filters="filters2"></merchants-list>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <merchants-list :filters="filters3"></merchants-list>
          </mt-tab-container-item>
        </mt-tab-container> -->
      </el-main>
    </el-container>
  </div>
</template>

<style>
#divrecm .el-submenu__title {
  float:left;
  padding-left:0;
}

#divrecm .el-tabs__item {
  /* color:red !important; */
  font-size: 1em !important;
}

.svg-icon{
  font-size:3em;
  position:relative;
  left:50%;
  margin-left:-0.5em;
}

.el-carousel{
  border-radius: 10px;
}

@import url("//at.alicdn.com/t/font_1684162_mmd1uezrjmf.css");
.txtbnthic{
  text-align:center;
  font-size:0.8em;
  color:#565656;
  margin-top:3px;
}

  /* #index{
    display: flex;
    justify-content: center;
  } */

  .iconfont{
    color: #f76349;
  }

  .vclock{
    display: none;
  }

  .transbtn{
    width: 100px;
    height: 55px;
    float: center;
    text-align: left;
  }

  .intxt{
    font-size:0.6em;
    float: left;
  }

  .logo{
    width: 34px;
    height: 34px;
    float: left;
  }

  .round_icon{
    width: 34px;
    height: 34px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* .portrait{
      width:100%;
      height:100px;
    } */

    .main{
      width:100%;
      height:70px;
    }

    .stylemsg{
      margin-left:5px;
    }

     /* .row .col {
    float: left;
    width: 34px;
    background-color: #0f0;
    border: 10px solid #fff;
  } */

  /* .banner{
    width: 100%;
    height: 150px;
  } */

/* .cpanel div.icon span{-moz-transition-duration: 0.8s;
    background-color: #FF0000;
    background-position: -30px 50%;
    border: 1px solid #CCCCCC;
    border-radius: 60px;
    color: #565656;
    display: block;
    float: left;
    height: 40px;width: 40px;
    text-align:center;
    text-indent:0;}
.cpanel div.icon span:hover{border:1px solid white;} */

.card-ad{
  width: 33%;
}

.discountimg{
  height: 100px;
}

/* .qsort{
  padding:10px;
} */

  .hight-amt{
    font-size:1.3em;
    margin-left: 3px;
    margin-right: 3px;
  }
</style>

<script>
import FileSaver from 'file-saver'
import { Header, TabContainer, TabContainerItem} from 'mint-ui'
import MerchantsList from '../components/MerchantsList.vue'
import SearchBar from '../components/SearchBar.vue'
   export default{
    name:'index',
    components: {
      'header': Header,
      MerchantsList,
      SearchBar
    },
    data () {
      return {
        name: "index",
        // selected: 1,
        activeName: "first",
        searchContent: "",
        urlmsgctr: "messageCenter",
        filters1:{
          flrfav: [true,false],
          flrsc: [true, false],
          flrtype: [0, 1]
        },
        filters2:{
          flrfav: [true,false],
          flrsc: [true, false],
          flrtype: [1]
        },
        filters3:{
          flrfav: [true,false],
          flrsc: [true],
          flrtype: [0, 1]
        },
        banners: [
          {
            pic: this.GLOBAL.STATIC_URL + 'banners/1.jpg',
          },
          {
            pic: this.GLOBAL.STATIC_URL + 'banners/2.jpg',
          },
          {
            pic: this.GLOBAL.STATIC_URL + 'banners/3.jpg',
          }
        ],
       
        discounts: [
          {
            title: '白桃气泡饮套餐',
            origin: 38,
            pic: this.GLOBAL.STATIC_URL + 'discounts/1.jpg'
          },
          {
            title: '海鲜芝士比萨',
            origin: 78,
            pic: this.GLOBAL.STATIC_URL + 'discounts/2.jpg'
          },
          {
            title: '鲜蛋牛肉粥',
            origin: 20,
            pic: this.GLOBAL.STATIC_URL + 'discounts/3.jpg'
          }
        ],
        selected: "1",
        // userNickName: 'CheetoMan'
      }
    },
  methods: {
    exportJSON () {
      const data = JSON.stringify(this.merchants) //this.merchants has been deleted
      const blob = new Blob([data], {type: ''})
      FileSaver.saveAs(blob, 'merchants.json')
    },
    jumpto(link){
  if(link==''){
    Toast({
      message: '功能开发中',
      position: 'middle',
      duration: 1000
    });
  }else{
    this.$router.push(link);
  }
}
  },
  created(){
    console.log("created: ");
    
        const baseUrl=this.GLOBAL.BASE_URL
    // const classId=this.$route.query.classId
    console.log(baseUrl)
  }

  }
</script>
