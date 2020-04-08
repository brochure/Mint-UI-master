<template>
  <div id="info">
    <el-header>
      <el-row style="padding-top:10px;" type="flex" :gutter="30">
          <el-col :span="2" :offset="20">
            <i class="el-icon-setting" style="font-size:1.5em;float:right;" @click="jumpto(urlsettings)" />
          </el-col>
          <el-col :span="2">
            <i class="el-icon-chat-line-square" style="font-size:1.5em;float:right;" @click="jumpto(urlmsgctr)" />
          </el-col>
      </el-row>
    </el-header>
<el-main>
  <el-row>
      <div v-if="$store.getters.loginState">
        <div @click="jumpto(urlprofile)">
          <el-col :span="18">
            <h1>{{$store.getters.currentAccount.nickName}}</h1>
            <p style="font-size:0.7em;color:#777777;margin-top:-10px;">再忙，也要记得吃饭哟～</p>
          </el-col>
          <el-col :span="6">
            <img :src="genPicURL($store.getters.currentAccount.headPhotoAddress)" class="round_icon" alt="" style="float:right;">
          </el-col>
        </div>
      </div>
      <div v-else>
        <div @click="jumpto('/user/loginPwd')">
          <el-col :span="18">
            <h1>立即登陆</h1>
            <p style="font-size:0.7em;color:#777777;margin-top:-10px;">饿不饿都上饿了么</p>
          </el-col>
          <el-col :span="6">
            <img :src="genPicURL('sys/eleme.jpg')" class="round_icon" alt="" style="float:right;">
          </el-col>
        </div>
      </div>

  </el-row>

<el-row type="flex" :gutter="5">
      <el-col :span="8">
        <div class="card notice-card shadow-sm bg-white rounded" @click="jumpto(urlcouponspot)">
          <div class="card-body p-2">
            <h6 class="card-title mb-2">红包卡券</h6>
            <p class="text-md-left font-weight-bold d-inline-block highlight-num mb-0">{{ncoupon}}</p>
            <small class="text-muted smaller-font">个未使用</small>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card notice-card shadow-sm bg-white rounded">
          <div class="card-body p-2">
            <h6 class="card-title mb-2">津贴</h6>
            <p class="text-md-left font-weight-bold d-inline-block highlight-num mb-0">¥{{balanceprm}}</p><small class="text-muted smaller-font">可用</small>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="card notice-card shadow-sm bg-white rounded">
          <div class="card-body p-2">
            <h6 class="card-title mb-2">钱包</h6>
            <small class="text-muted mb-0 text-nowrap smaller-font">金币、借钱、福利</small>
          </div>
      </div>
      </el-col>
</el-row>

  <ul class="list-group list-group-flush">
    <li class="list-group-item" v-for="value in userscopes" :key="value.title" @click="clcCell(value.link)">
      <i class="mintui" :class="'mintui-'+value.icon"></i>
      <span style="margin-left:6px;">{{value.title}}</span>
      <span style="float:right;">
        <span v-if="value.extra!=''" class="rb-text-extra">{{value.extra}}</span>
        <i class="el-icon-arrow-right" style="font-weight:bold;color:grey;"/>
      </span>
    </li>
  </ul>

</el-main>
  </div>
</template>

<style scoped>
/*@import url("//at.alicdn.com/t/font_1684162_l2psewjzi8b.css");*/
.rb-text-extra {
  font-size: 0.75em;
  color: #727171;
  font-weight: lighter;
}

  #account{
    display: flex;
    justify-content: center;
    margin-top: 100px;
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
    font-size:0.5em;
    float: left;
  }

  .round_icon{
    width: 70px;
    height: 70px;
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

    .mintui-collection {
      color: #f76349;
    }
    .mint-cell-text{
      color:blue;
    }
    .highlight-num{
      color: #e83929;
      font-size: 1.2em;
    }
    .notice-card{
      height: 70px;
    }
    .smaller-font{
      font-size:0.65em;
    }
</style>

<script>
import { Toast } from 'mint-ui'
  export default{
    name:'info',
    data () {
      return {
        profileImgUrl: "",
        urlsettings: "/p_info/settings",
        urlmsgctr: "messageCenter",
        userscopes: [
          { title: '我的收藏',
            icon:'collection',
            link: '/p_info/collection',
            extra: ''
           },
          { title: '我的客服',
            icon:'cti',
            link: '',
            extra: ''
           },
          { title: '推荐有奖',
            icon:'gift',
            link: '',
            extra: '得15元'
          },
          { title: '商务合作',
          icon:'suitcase',
          link: '',
          extra: ''
          },
          { title: '办卡有礼',
          icon:'cards',
          link: '',
          extra: ''
          },
          { title: '3小时公益',
          icon:'pubbenefit',
          link: '',
          extra: ''
          },
          { title: '企业订餐',
          icon:'building',
          link: '',
          extra: ''
          },
          { title: '话费充值',
          icon:'bill',
          link: '',
          extra: '99折起'
          },
        ],
        urlprofile: "/p_info/profile",
        urlcouponspot: "/p_info/couponSpot",
        ncoupon: 6,
        balanceprm: 20,
      }
    },
    methods:{
      clcCell(link){
        if(this.$store.getters.loginState){
          this.jumpto(link);
        }else{
          this.$toast("请先登陆");
        }
      },
      genPicURL(pic) {
        return this.SERVER_BASE_URL + "/image/" + pic;
      },
      jumpto(link){
        if(link==''){
          this.$toast("功能开发中");
        }else{
          this.$router.push(link);
        }
      }
    },
    created(){
    },
    mounted(){
      // .mintui color == blue
    }
  }
</script>
