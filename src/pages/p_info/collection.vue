<template>
  <div id="index">
    <!-- <mt-header fixed title="我的收藏">
    <router-link to="/" slot="left">
        <mt-button icon="back" @click="prev"></mt-button>
    </router-link>
    </mt-header> -->
    <el-container>
      <el-header>
        <el-row>
          <header-bar header-title="我的收藏"></header-bar>
        </el-row>
      </el-header>
      <el-main>
          <!--ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="value in canteens" :key="value">
                  <div class="row" @click="routerTo(value)">
                      <div class="col-3">
                          <img :src="value.pic" class="logo">
                      </div>
                      <div class="col-9">
                              <span>{{value.title}}</span>
                              <ul class="list-inline">
                                  <li class="list-inline-item"><i class="mintui mintui-star" style="color:#ec6800;"></i><small style="color:#ec6800;">{{value.rate}}</small></li>
                                  <li class="list-inline-item"><small class="text-muted">月售{{value.sale}}</small></li>
                              </ul>
                              <ul class="list-inline" style='margin-top:-5px;'>
                                  <li class="list-inline-item"><small class="text-muted">起送¥{{value.initfee}}</small></li>
                                  <li class="list-inline-item"><small class="text-muted">配送¥{{value.postage}}</small></li>
                              </ul>
                      </div>
                  </div>
              </li>
          </ul-->
        <merchants-list :merchants="favMerchants"></merchants-list>
        <el-row>
            <!--p class="text-muted text-center small mt-3">当前位置暂无超出配送范围的商家</p-->
            <el-divider class="text-center text-nowrap" style="color:#909399;">当前位置暂无超出配送范围的商家</el-divider>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
@import url("//at.alicdn.com/t/font_1684162_mmd1uezrjmf.css");
  /* #index{
    display: flex;
    justify-content: center;
    margin-top: 40px;
  } */
/* to del
   .logo{
    width: 70px;
    height: 70px;
    float: left;
  }
  */
</style>

<script>
  import MerchantsList from '../../components/MerchantsList.vue'
  import HeaderBar from '../../components/HeaderBar.vue'
  export default{
      name: 'index',
      data () {
      return {
        favMerchants: [],
      }
      },
    methods:{
      getAllMerchants() {      
        var that = this;
        var url = that.HOST + "/merchant";
        that.$axios.get(url).then((resp) => {   
          if(resp.data.success) {
            var allMerchants = resp.data.content;
            allMerchants.forEach(element => {
              if(element.fav){
                this.favMerchants.push(element);
              }
            });
          }else{that.$toast(resp.data.msg);}
        });
      },
      routerTo(merchant){
        this.$router.push({ name: 'choosing', params: { merchant }});
      },
      prev(){
        this.$router.go(-1)
      }
    },
    components:{
      MerchantsList,
      HeaderBar
    },
    created(){
      this.getAllMerchants();
    }

  }
</script>
