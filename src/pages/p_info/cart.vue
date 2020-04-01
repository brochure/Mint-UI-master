<template>
  <div>
    <header-bar headerTitle="购物车"></header-bar>
      <el-container>
        <el-main style="margin-top:40px;">
          <div v-if="hasReload">
            <cart-list v-for="item in $cart" :key="item.merchantId" :menulist="item.listCartItem"></cart-list>
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
      hasReload: false,
    }
  },
  methods: {
    getCart(){
      let that = this;
      let req_map = that.HOST + "/order/getCart";
      let param = {
        accountId: 1,
        merchantId: Vue.prototype.$merchantId
        };
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
        if(resp.data.success){
          Vue.prototype.$cart = resp.data.content;
          this.hasReload = true;
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
  },
  watch: {
  // $cart(val,oldVal) {        
  //   this.$nextTick(() => {
  //     this.hasReload = true;
  //     })
  //   }
  }
}
</script>

<style scoped>

</style>
