<template>
  <div>
    <mt-header fixed title="购物车" :style="styleObject">
    <router-link to="/" slot="left">
      <i class="el-icon-arrow-left" @click="prev" style="font-size:1.5em;color:white;"/>
    </router-link>
    <router-link to="/" slot="right">
      <!-- <el-button type="text"> -->
        <span @click="setConfirm">清空</span>
        <!-- </el-button> -->
    </router-link>
    </mt-header>
      <el-container>
        <el-main style="margin-top:40px;">
          <div v-if="hasReload">
            <cart-list v-for="item in $store.getters.cart" :key="item.merchantId" :menulist="item.listCartItem"></cart-list>
          </div>
        </el-main>
      </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import HeaderBar from '../../components/HeaderBar.vue'
import CartList from '../../components/CartList.vue'

export default {
  data () {
    return {
      styleObject: {
        height: "40px"
      },
      hasReload: false,
    }
  },
  methods: {
    clearCart(){

    },
    setConfirm(){
      this.$confirm('确定清空购物车所有商品？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        this.$message({
          type: 'success',
          message: '清空成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消清空'
        });          
      });
    },
    prev(){this.$router.go(-1)},
    getCart(){
      let that = this;
      let req_map = that.HOST + "/order/getCart";
      let param = {
        accountId: 1,
        };
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
        if(resp.data.success){
          that.$store.commit('updateCart',
            {
              cart: resp.data.content
            }
          );
          that.hasReload = true;
        }else{that.$toast(resp.data.msg);}
      }).catch(err =>{
        that.$toast(err.data);
      });
    },
  },
  components: {
      HeaderBar,
      CartList
  },
  created(){
    this.getCart();
  }
}
</script>

<style>
.el-message-box {
  width: 70%;
  margin: 0 auto; /*水平居中*/
  /* position: relative; */
  /* top: 0%; */
}
</style>
