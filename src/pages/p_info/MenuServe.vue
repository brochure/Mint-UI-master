<template>
  <div>
    <el-row>
      <el-col :span="4">
        <el-menu>
          <el-menu-item index="0" class="text-wrap" style="padding:0px;">
            <!-- :to="{path:'/p_info/choosing/menuServe',query:{id:merchant.id}}" -->
            <router-link :to="{path:'/p_info/choosing/menuServe/menuBlock'}" replace>
            <p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">
              <i class="el-icon-location" style="margin-right:0px;"></i>优惠</p>
            </router-link>
          </el-menu-item>
          <el-menu-item :index="item.index" class="text-wrap" style="padding:0px;" v-for="item in menu" :key="item.index">
            <router-link :to="{path:'/p_info/choosing/menuServe/menuBlock',query:{id:$route.query.id,contents:item.contents,basket:basket,cart:cart}}" replace>
            <p style="font-size:0.8em;line-height:1.1em;padding-top:20px;padding-bottom:10px;">{{item.title}}</p>
            </router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <keep-alive>
        <router-view @addCount="receive"></router-view>
        </keep-alive>
      </el-col>
    </el-row>
    <el-footer>
      <mt-tabbar fixed style="background:none;border:none;">
        <el-row>
          <el-col :span="3">
          <el-badge :value="menu_count" class="item">
            <i class="mintui mintui-life" style="font-size:2em;"/>
          </el-badge>
          </el-col>
          <el-col :span="10" :offset="3">
              <small class="text-muted">¥45</small>
               <small class="text-muted">另需配送费¥9</small>
          </el-col>
          <el-col :span="4" :offset="4">
            <el-button @click="submitCart">去结算</el-button>
            <!-- <el-button><router-link to="/p_info/cart" >去结算</router-link></el-button> -->
            <!-- <el-button><router-link :to="{path:'/p_info/cart',query:{basket:basket}}" >去结算</router-link></el-button> -->
          </el-col>
        </el-row>
      </mt-tabbar>
    </el-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: {},
      menu_count:0,
      basket:{},
      cart:{}
      // cartContent:[]
      // numOfItems: 0
    }
  },
  methods: {
    submitCart(){
      // console.log("basket");
      // console.log(this.basket);
      
      var that = this;
      // var cartContent = new Array();
      // for (var key in that.basket) {
      //   cartContent.push({
      //     title:key,
      //     price:that.basket[key].price,
      //     pic:that.basket[key].pic,
      //     amount:that.basket[key].amount,
      //   })
      // }
      // console.log("cartContent");
      // console.log(cartContent);
      
      var url = that.HOST + "/submitCart";
      // console.log(cartContent);
      console.log(that.$route.query.id);
      
      var param = {
        mid: that.$route.query.id,
        contents: this.basket
        };
      that.$axios({
        url: url,
        method: 'POST',
        data: param
      }).then(resp => {
        if(resp.data.success){
          that.$router.push("/p_info/cart");
        }else{
          that.$toast(resp.data.msg);
        }
      }).catch(err =>{
        console.log(err);
      })
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
    receive(param){
      // console.log("recieve");
      // console.log(param);
      // console.log(this.basket);
      this.menu_count += param.amount;      
      if(this.basket[param.title] == null){
        this.basket[param.title] = {
            amount:param.amount,
            pic:param.pic,
            price:param.price
          };
      }else{
        this.basket[param.title].amount += param.amount;
      }
    },
    getMenu(){
      var that = this;
      var req_map = that.HOST + "/getMenu";
      var param = {id: that.$route.query.id};
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
      if(resp.data.success){        
          that.menu = resp.data.content;
      }else{that.$toast(resp.data.msg);}
      }).catch(err =>{
        that.$toast(err.data);
      });
    },
    getCart(){
      var that = this;
      var req_map = that.HOST + "/getCart";
      var param = {id: that.$route.query.id};
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
        console.log(resp);
        
      if(resp.data.success){   
        that.cart = resp.data.content;
      }else{that.$toast(resp.data.msg);}
      }).catch(err =>{
        that.$toast(err.data);
      });
    }
  },
  components: {

  },
  created(){
    this.getMenu();
    this.getCart();
  },
  watch:{
    // menu(val,oldVal) {
    //   this.$nextTick(() => {
    //     console.log("nextTick");
    //     console.log(this.menu);
    //     //当数据到来的时候， DOM 更新循环结束之后，立即执行函数
    //     $route.meta.df_id = that.$route.query.id;
    //     $route.meta.df_contents = menu[0];
    //   })
    // }
  }
}
</script>

<style scoped>
#ball {
  width:12px;
  height:12px;
  background: #5EA345;
  border-radius: 50%;
  position: fixed;
  transition: left 1s linear, top 1s ease-in;
}
</style>
