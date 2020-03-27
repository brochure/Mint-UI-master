<template>
  <div>
    <header-bar headerTitle="购物车"></header-bar>
    <el-container>
        <el-main style="margin-top:40px;">
            <!-- <el-row>
            </el-row> -->
    <cart-list v-for="item in cartGroups" :key="item.mid" :mid="item.mid" :menulist="item.contents"></cart-list>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar.vue'
import CartList from '../../components/CartList.vue'

export default {
  data () {
    return {
        cartGroups: {},

    }
  },
  methods: {
    getCartGroups(){
        var that = this;
        var req_map = that.HOST + "/getCartGroups";
        that.$axios({
            url: req_map,
            method: 'POST'
        }).then(resp => {
        // console.log(resp);
        if(resp.data.success){
            that.cartGroups = resp.data.content;
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
      this.getCartGroups();
  }
}
</script>

<style scoped>

</style>
