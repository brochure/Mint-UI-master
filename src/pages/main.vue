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
        <el-row id="rowsb" style="margin-top:10px;">
          <div :class="{'drm-sb': isFixSb}">
          <div id="divsb" class="rmsb">
            <search-bar class="fxSearchBar"></search-bar>
          </div>
          </div>
        </el-row>
      </el-header>
      <el-main>
        <el-row style="margin-top:20px;">
          <el-carousel height="100px" trigger="click">
            <el-carousel-item v-for="item in banners" :key="item.pic">
              <img :src="genPicURL(item.imgAddress)" class="banner"/>
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
            <div class="card col-4 p-0 d-inline-block card-ad" v-for="item in discountContent" :title="item.title" :key="item.title">
              <img :src="genPicURL(item.imgAddress)" class="card-img-top discountimg">
                <div class="card-body p-2">
                  <p class="card-title text-nowrap small m-1">{{item.title}}</p>
                  <p class="card-text text-muted mt-1"><del class="small">¥{{item.originPrice}}</del><a href="#" class="badge badge-info mt-1" style="float:right;">1元抢</a></p>
                </div>
            </div>
          </div>
        </el-row>

      <!-- <el-row type="flex" :gutter="100"> -->
        <div id="divrecm" :class="{ 'drm': isfixTab }" style="margin-top:25px;">
            <!-- <el-tabs v-model="activeName" @tab-click="handleClick"> -->
            <el-tabs v-model="activeName">
              <el-tab-pane label="推荐" name="first">
                <div class="overhid">
                <sort-panel :merchants="allMerchants"></sort-panel>
                </div>
              </el-tab-pane>
              <el-tab-pane label="果蔬商超" name="second">
                <merchants-list :merchants="merchants2"></merchants-list>
              </el-tab-pane>
              <el-tab-pane label="到店自取" name="third">
                <merchants-list :merchants="merchants3"></merchants-list>
              </el-tab-pane>
            </el-tabs>
        </div>
        <div style="position:fixed;right:0;bottom:80px;">
          <el-button icon="el-icon-shopping-cart-1" circle style="font-size:1.6em;" @click="jumpto('/p_info/cart')"></el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style>
/* .rmsb .fxSearchBar {
  position:fixed;
  top:0;
} */
.drm-sb .rmsb{
  position:fixed;
  top:0;
  background-color: white;
  /* color: #fff; */
  z-index: 999;
  height: 35px;
  width:100%;
  padding-top:15px;
  padding-bottom:30px;
  padding-left:10px;
  padding-right:45px;
}

.overhid {
  position: relative;
  /* top: 100px; */
  overflow:hidden;
}

#index .el-tabs__nav{
  background-color: white;
}

 #index .drm .el-tabs__nav{
  position:fixed;
  top:0;
  padding-top:45px;
}

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

  .banner{
    width: 100%;
    height: 150px;
  }

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

  .hight-amt{
    font-size:1.3em;
    margin-left: 3px;
    margin-right: 3px;
  }

#ball {
    width:12px;
    height:12px;
    background: rgb(73, 147, 247);
    border-radius: 50%;
    position: fixed;
    transition: left 1s linear, top 1s ease-in;
}
</style>

<script>
import {TabContainer, TabContainerItem} from 'mint-ui'
import MerchantsList from '../components/MerchantsList.vue'
import SearchBar from '../components/SearchBar.vue'
import SortPanel from '../components/SortPanel.vue'

export default {
  components: {
    MerchantsList,
    SearchBar,
    SortPanel
  },
  data () {
    return {
      name: "index",
      activeName: "first",
      searchContent: "",
      urlmsgctr: "messageCenter",
      allMerchants: [],
      merchants2: [],
      merchants3: [],
      discountContent:[],
      banners: [],
      selected: "1",
      sbOffsetTop: 0,
      sbNavHeight: 0,
      dfOffsetTop: 0,
      dfNavHeight: 0,
      isFixSb: false,
      isfixTab: false,
    }
  },
  methods: {
    handleTabFix() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // var offsetTop = document.querySelector('#divrecm').offsetTop;
      // this.changeTabHeaderClassStyle(scrollTop > this.dfOffsetTop);
      // scrollTop > this.dfOffsetTop ? this.isfixTab = true : this.isfixTab = false;
      // let dfoffset = this.dfOffsetTop + this.dfnavheight;
      this.sbOffsetTop = document.querySelector('#rowsb').offsetTop;
      this.sbNavHeight = document.querySelector('#divsb').scrollHeight;
      if(scrollTop > (this.sbOffsetTop)){
        this.isFixSb = true;        
      }else if (scrollTop < this.sbOffsetTop) {
        this.isFixSb = false;
      }

      this.dfNavHeight = document.querySelector('.el-tabs__nav').scrollHeight;
      
      if(scrollTop > (this.dfOffsetTop + this.dfNavHeight)){
        this.isfixTab = true;        
      }else if (scrollTop < this.dfOffsetTop) {
        this.isfixTab = false;
      }
    },
    getAllMerchants() {      
      var that = this;
      var url = that.HOST + "/merchant/all";
      that.$axios.get(url).then((resp) => {   
        if(resp.data.success) {
          that.allMerchants = resp.data.content;
        }else{that.$toast(resp.data.msg);}
      });
    },
    genPicURL(pic) {
      return this.SERVER_BASE_URL + "/image/" + pic;
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
    },
    getBanners () {
      var that = this;
      var req_map = that.HOST + "/banners";
      that.$axios.get(req_map).then((resp) => {
        if(resp.data.success) {
          that.banners = resp.data.content;
        }else{that.$toast(resp.data.msg);}
      });
    },
    getDiscounts () {
      var that = this;
      var req_map = that.HOST + "/bannerdiscounts";
      that.$axios.get(req_map).then((resp) => {        
        if(resp.data.success){
          that.discountContent = resp.data.content;
        }else{that.$toast(resp.data.msg);}
      });
    },
  },
  created(){
    this.getDiscounts ();
    this.getBanners ();
    this.getAllMerchants();
  },
  mounted(){
    this.dfOffsetTop = document.querySelector('#divrecm').offsetTop;
    this.dfNavHeight = document.querySelector('.el-tabs__nav').scrollHeight;
    this.sbOffsetTop = document.querySelector('#rowsb').offsetTop;
    this.sbNavHeight = document.querySelector('#divsb').scrollHeight;
    window.addEventListener('scroll', this.handleTabFix, true);
  },
  beforeRouteLeave (to, from, next) {
    window.removeEventListener('scroll', this.handleTabFix, true);
    next();
  },
  watch: {
    allMerchants(val,oldVal) {
      var that = this;
      that.$nextTick(() => {
        let filters2 = {
          flrfav: [true,false],
          flrsc: [true, false],
          flrtype: [1]
        };
        var tmpMerchants = new Array();
        val.forEach(element => {
          if(filters2.flrfav.includes(element.fav)&&filters2.flrsc.includes(element.selfCollectable)&&filters2.flrtype.includes(element.type)){
            tmpMerchants.push(element);
          }
        });
        that.merchants2 = tmpMerchants;
        let filters3 = {
          flrfav: [true,false],
          flrsc: [true],
          flrtype: [0, 1]
        };
        var tmpMerchants = new Array();
        val.forEach(element => {
          if(filters3.flrfav.includes(element.fav)&&filters3.flrsc.includes(element.selfCollectable)&&filters3.flrtype.includes(element.type)){
            tmpMerchants.push(element);
          }
        });
        that.merchants3 = tmpMerchants;
      });
    }
  }
}
</script>
