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
    routerTo(merchant){
      Vue.prototype.$merchantId = merchant.id;
      this.$router.push({path: '/p_info/choosing', query:{id: merchant.id}});  
    },
  },
  created () {
  }
}
</script>
