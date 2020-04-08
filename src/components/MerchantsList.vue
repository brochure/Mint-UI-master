<template>
  <ul class="list-group list-group-flush">
    <div v-for="item in merchants" :key="item.title">
      <li class="list-group-item">
        <div @click="routerTo(item)">
          <merchant-display :merchant="item"></merchant-display>
        </div>
      </li>
    </div>
  </ul>
</template>

<script>
import Vue from 'vue'
import MerchantDisplay from '../components/MerchantDisplay.vue'
export default {
  components: {
    MerchantDisplay
  },
  data () {
    return {
    }
  },
  computed: {
  },
  props: {
    sortkey: {
      type: String,
      default: "zh"
    },
    merchants: {
      type: Array,
      default:function(){
        return []
      }
    }
  },
  watch: {
    sortkey(val,oldVal){this.$nextTick(()=>{this.sortByKey(this.sortkey);})}
  },
  methods: {
    sortByKey(sortkey) {
      var that = this;
      switch (sortkey){
        case "xl":
          that.merchants.sort((a,b)=>(b.sale-a.sale));
          break;
        case "hp":
          that.merchants.sort((a,b)=>(b.rate-a.rate));
          break;
        case "qs":
          that.merchants.sort((a,b)=>(a.initfee-b.initfee));
          break;
        case "psf":
          that.merchants.sort((a,b)=>(a.postage-b.postage));
          break;
        default:
          that.merchants.sort((a,b)=>(a.title<b.title));
          break;
      }
    },
    getMerchantCart(merchantId){
        let that = this;
        let req_map = that.HOST + "/order/getMerchantCart";
        let param = {
          accountId: 1,
          merchantId: merchantId
          };
        that.$axios({
          url: req_map,
          method: 'POST',
          data: param
        }).then(resp => {
          if(resp.data.success){
            if(!that.$store.getters.basketsHasKey({merchantId: merchantId})){
              that.$store.commit('appendBaskets', {merchantId: merchantId, merchantCart: resp.data.content});
            }
          }else{
            that.$toast(resp.data.msg);
            }
          }).catch(err =>{
            that.$toast(err.data);
        });
      },
    routerTo(merchant){
      this.$store.commit('updateMerchantId', {merchantId: merchant.id});
      this.getMerchantCart(merchant.id);
      this.$router.push({path: '/p_info/choosing/menuServe'});  
    },
  },
  created () {
  }
}
</script>
