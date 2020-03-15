<template>
  <div id="index">
    <!-- <mt-header fixed title="我的收藏">
    <router-link to="/" slot="left">
        <mt-button icon="back" @click="prev"></mt-button>
    </router-link>
    </mt-header> -->
    <header-bar header-title="我的收藏"></header-bar>

    <div class="container-fluid">
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
        <merchants-list :filters="filters"></merchants-list>
    <div class="col">
        <!--p class="text-muted text-center small mt-3">当前位置暂无超出配送范围的商家</p-->
            <el-divider class="text-center text-nowrap" style="color:#909399;">当前位置暂无超出配送范围的商家</el-divider>

    </div>
    </div>
  </div>
</template>

<style scoped>
@import url("//at.alicdn.com/t/font_1684162_vhstopvyxxm.css");
  #index{
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
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
        filters:{
          flrfav: [true],
          flrsc: [true, false],
          flrtype: [0, 1]
        }
        /*
        canteens: [
          { title: '麦当劳',
            pic:'../../static/canteen_logos/mcd.jpg',
            isSelfCollectable: false,
            isFav: false,
            link: '',
            rate: 4.9,
            sale: 4446,
            initfee: 0,
            postage: 9
           },
          { title: '肯德基',
            pic:'../../static/canteen_logos/kfc.jpg',
            isSelfCollectable: true,
            isFav: false,
            link: '',
            rate: 4.9,
            sale: 8926,
            initfee: 0,
            postage: 5
           },
          { title: '棒！约翰',
            pic:'../../static/canteen_logos/ppj.jpg',
            isSelfCollectable: false,
            isFav: true,
            link: '',
            rate: 4.7,
            sale: 1520,
            initfee: 20,
            postage: 5
           },
           {
             title: '必胜客',
            pic:'../../static/canteen_logos/psh.jpg',
            isSelfCollectable: true,
            isFav: true,
            link: '',
            rate: 4.9,
            sale: 2850,
            initfee: 0,
            postage: 5
           }
        ],
        */
      }
      },
    methods:{
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
    }

  }
</script>
