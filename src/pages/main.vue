<template>
  <div id="index">
  <div class="container-fluid">
    <div class="row">
      <div class="pos-f-t col-12">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-light p-4">
            <h5 class="text-black h4">Collapsed content</h5>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span>航科大厦</span>
          </button>
          <mt-button icon="scan"></mt-button>
           <mt-button icon="message" @click="exportJSON"></mt-button>
        </nav>
      </div>
    </div>
        <div fixed style="height:60px;">
          <mt-search
            v-model="searchContent"
            cancel-text="取消"
            placeholder="我爱专星送"
            style="width:100%;">
          </mt-search>
        </div>
        
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in banners" :key="item.pic">
          <img :src="item.pic" class="banner"/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="container my-2 mb-3">
      <div class="row">
        <div class="col-xs-1-5">
        <div class="cpanel qsort">
            <div class="icon">
                <span>美食</span>
            </div>
        </div>
        </div>
        <div class="col-xs-1-5">
          <div class="cpanel qsort">
            <div class="icon">
        <span>商超便利</span>
            </div>
        </div>
        </div>
        <div class="col-xs-1-5">
          <div class="cpanel qsort">
            <div class="icon">
                <span>买菜</span>
            </div>
        </div>
        </div>
        <div class="col-xs-1-5">
          <div class="cpanel qsort">
            <div class="icon">
                <span>跑腿代购</span>
            </div>
          </div>
        </div>
        <div class="col-xs-1-5">
          <div class="cpanel qsort">
            <div class="icon">
                <span>送药上门</span>
            </div>
        </div>
        </div>
        </div>
    </div>

<div class="container">
    <div class="card-group bg-warning rounded-lg p-1" style="height:216px;">
      <div class="col-12 ml-2" style="margin-bottom:-10px">
      <p class="text-danger d-inline-block">新人专属</p><p class="text-danger d-inline-block font-weight-bold hight-amt">1</p><p class="text-danger d-inline-block">元起</p>
      <p class="small font-weight-light" style="float:right;margin-top:2px;">更多 ></p>
      </div>
      <div class="card col-4 p-0 d-inline-block" v-for="value in discounts" :title="value.title" :key="value.title">
        <img :src="value.pic" class="card-img-top discountimg">
          <div class="card-body p-2">
            <p class="card-title text-nowrap small m-1">{{value.title}}</p>
            <p class="card-text text-muted mt-1"><del class="small">¥{{value.origin}}</del><a href="#" class="badge badge-info mt-1" style="float:right;">1元抢</a></p>
          </div>
      </div>
    </div>
</div>


<mt-navbar v-model="selected">
  <mt-tab-item id="1">推荐</mt-tab-item>
  <mt-tab-item id="2">果蔬商超</mt-tab-item>
  <mt-tab-item id="3">到店自取</mt-tab-item>
</mt-navbar>

<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <merchants-list :filters="filters1"></merchants-list>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <merchants-list :filters="filters2"></merchants-list>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <merchants-list :filters="filters3"></merchants-list>
  </mt-tab-container-item>
</mt-tab-container>

  </div>
    

  </div>
</template>

<style scoped>
@import url("//at.alicdn.com/t/font_1684162_l2psewjzi8b.css");

  #index{
    display: flex;
    justify-content: center;
    /*margin-top: 50px;*/
  }

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

  .portrait{
      width:100%;
      height:100px;
    }

    .main{
      width:100%;
      height:70px;
    }

    .stylemsg{
      margin-left:5px;
    }

     .row .col {
    float: left;
    width: 34px;
    background-color: #0f0;
    border: 10px solid #fff;
  }

  .banner{
    width: 100%;
    height: 150px;
  }

.cpanel div.icon span{-moz-transition-duration: 0.8s;
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
.cpanel div.icon span:hover{border:1px solid white;}

.card{
  width: 33%;
}

.discountimg{
  height: 100px;
}

.qsort{
  /*display:inline-block;*/
  padding:10px;
}

.col-xs-1-5,
		.col-sm-1-5,
		.col-md-1-5,
		.col-lg-1-5 {
			position: relative;
			min-height: 1px;
			padding-right: 10px;
			padding-left: 10px;
		}
 
		.col-xs-1-5 {
			width: 20%;
			float: left;
		}
 
		@media (min-width: 768px) {
		.col-sm-1-5 {
				width: 20%;
				float: left;
			}
		}
		@media (min-width: 992px) {
			.col-md-1-5 {
				width: 20%;
				float: left;
			}
		}
		@media (min-width: 1200px) {
			.col-lg-1-5 {
				width: 20%;
				float: left;
			}
		}

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
   export default{
    name:'index',
    components: {
      'header': Header,
      MerchantsList
    },
    data () {
      return {
        name: "index",
        selected: 1,
        searchContent: "",
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
            pic: '../../static/banners/1.jpg',
          },
          {
            pic: '../../static/banners/2.jpg',
          },
          {
            pic: '../../static/banners/3.jpg',
          }
        ],
       
        discounts: [
          {
            title: '白桃气泡饮套餐',
            origin: 38,
            pic: '../../static/discounts/1.jpg'
          },
          {
            title: '海鲜芝士比萨',
            origin: 78,
            pic: '../../static/discounts/2.jpg'
          },
          {
            title: '鲜蛋牛肉粥',
            origin: 20,
            pic: '../../static/discounts/3.jpg'
          }
        ],
        selected: "1",
        userNickName: 'CheetoMan'
      }
    },
  methods: {
    exportJSON () {
      const data = JSON.stringify(this.merchants)
      const blob = new Blob([data], {type: ''})
      FileSaver.saveAs(blob, 'merchants.json')
    }
  }

  }
</script>
