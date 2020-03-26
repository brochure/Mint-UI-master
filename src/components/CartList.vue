<template>
  <ul class="list-group list-group-flush">
    <div v-for="item in menulist" :key="item.title">
      <li class="list-group-item" style="padding-top:0px;">
        <!-- <div @click="routerTo(item)"> -->
          <cart-display :meal="item"></cart-display>
        <!-- </div> -->
      </li>
    </div>
    <el-row>
      <el-col :span="9" :offset="9">
        <span style="float:right;">合计¥{{getSum(menulist)}}</span>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button size="small" type="success" style="width:75px;">去结算</el-button>
      </el-col>
    </el-row>
  </ul>
</template>

<script>
import CartDisplay from '../components/CartDisplay.vue'
export default {
  props: {
    mid: {
      type: String,
      default: ""
    },
    menulist: {
      type: Array,
      default:function(){
        return []
      }
    }
  },
  components: {
    CartDisplay
  },
  data () {
    return {
      menuForCart: {},
    }
  },
  computed: {
    getSum() {
      return function(merch){
        var acc = 0;
        merch.forEach(element => {
          acc += element.price * element.amount;
        });
        return acc;
      };
    },
  },
  watch: {
  },
  methods: {
    getMenuForCart() {
      var that = this;
      var req_map = that.HOST + "/getMenu";
      var param = {id: that.mid};
      that.$axios({
          url: req_map,
          method: 'POST',
          data: param
      }).then(resp => {
      if(resp.data.success){        
          console.log(resp);
          that.menuForCart = resp.data.content;
      }else{that.$toast(resp.data.msg);}
      }).catch(err =>{
        that.$toast(err.data);
      });
    },
    addCount(val){
      console.log("addCount in MenuList");
      this.$parent.addCount(val);
    },
    routerTo(menu){
      // this.$router.push({path: '/p_info/choosing', query:{id: merchant.id}});  
      // this.$router.push({ name: 'choosing', params: { merchant }});
    },
  },
  created(){

  }
}
</script>
