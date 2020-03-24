<template>
    <ul class="list-group list-group-flush">
      <div v-for="item in merchants" :key="item.title">
        <!-- <div v-if="filters.flrfav.includes(item.fav) && filters.flrsc.includes(item.selfCollectable) && filters.flrtype.includes(item.type)"> -->
            <li class="list-group-item">
                  <div @click="routerTo(item)">
                    <merchant-display :merchant="item"></merchant-display>
                  </div>
              </li>
        <!-- </div> -->
      </div>
    </ul>
</template>

<script>
import MerchantDisplay from '../components/MerchantDisplay.vue'
export default {
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
  components: {
    MerchantDisplay
  },
  data () {
    return {
    }
  },
  computed: {
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
      this.$router.push({ name: 'choosing', params: { merchant }});
    },
  },
  created () {
  }
}
</script>
