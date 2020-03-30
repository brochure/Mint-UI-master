<template>
  <div id="info">
    <el-header>
      <el-row style="padding-top:10px;" type="flex" :gutter="30">
          <el-col :span="2" :offset="20">
            <i class="el-icon-setting" style="font-size:1.5em;float:right;" @click="jumpto(urlmsgctr)" />
          </el-col>
          <el-col :span="2">
            <i class="el-icon-chat-line-square" style="font-size:1.5em;float:right;" @click="jumpto(urlmsgctr)" />
          </el-col>
      </el-row>
    </el-header>
<el-main>
  <el-row>
    <div  @click="jumpto(urlprofile)">
    <el-col :span="18">
      <h1>{{accountInfo.nickName}}</h1>
      <p style="font-size:0.7em;color:#777777;margin-top:-10px;">再忙，也要记得吃饭哟～</p>
    </el-col>
    <el-col :span="6">
      <img :src="profileImgUrl" class="round_icon" alt="" style="float:right;">
    </el-col>
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
    <li class="list-group-item" v-for="value in userscopes" :key="value.title" @click="jumpto(value.link)">
      <i class="mintui" :class="'mintui-'+value.icon"></i>
      <span class="ml-2">{{value.title}}</span>
      <span style="float:right;">
      <span v-if="value.extra!=''" class="small font-weight-light text-muted">{{value.extra}}</span>
      <svg class="bi bi-chevron-right text-muted font-weight-bold" width="15" height="15" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/></svg>
      </span>
    </li>
  </ul>

</el-main>
  </div>
</template>

<style scoped>
/*@import url("//at.alicdn.com/t/font_1684162_l2psewjzi8b.css");*/

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
import { Toast} from 'mint-ui'
  export default{
    name:'info',
    components: {
    },
    data () {
      return {
        profileImgUrl: "",
        urlmsgctr: "messageCenter",
        accountInfo: {},
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
        // userNickName: 'CheetoMan',
        //popupVisible: true

      }

    },
    methods:{
        //switchPopup(){
          //this.popupVisible = !this.popupVisible;
        //},
        genPicURL(pic) {
          return this.SERVER_BASE_URL + "/image/" + pic;
        },
        getAccountInfo () {
          // var url = this.staticURL + "json/account_info.json";
          var that = this;
          var req_map = that.HOST + "/account/id/1";
          that.$axios.get(req_map).then((resp) => {
            if(resp.data.success){
              that.accountInfo = resp.data.content;
            }else{that.$toast(resp.data.msg);}
        });
        },
        jumpto(link){
          if(link==''){
            //this.switchPopup();
            this.$toast("功能开发中");
          }else{
            this.$router.push(link);
          }
        }
    },
    created(){
      this.getAccountInfo();
    },
    mounted(){
      // .mintui color == blue
    },
    watch: {
      accountInfo(val,oldVal) {
        this.$nextTick(() => {
          // console.log("nextTick");
          // console.log(this.accountInfo.pic);
          //当数据到来的时候， DOM 更新循环结束之后，立即执行函数
          this.profileImgUrl = this.genPicURL(this.accountInfo.pic);
        })
    }
  }  

  }
</script>
