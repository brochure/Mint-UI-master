<template>
    <ul class="list-group list-group-flush">
      <div v-for="item in merchants" :key="item.title">
        <div v-if="filters.flrfav.includes(item.isFav) && filters.flrsc.includes(item.isSelfCollectable) && filters.flrtype.includes(item.type)">
            <li class="list-group-item">
                  <div @click="routerTo(item)">
                    <merchant-display :merchant="item"></merchant-display>
                  </div>
              </li>
        </div>
      </div>
    </ul>
</template>

<script>
import MerchantDisplay from '../components/MerchantDisplay.vue'
export default {
  props: {
    filters:{
      flrfav: [true, false],
      flrsc: [true, false],
      flrtype: [0, 1]
    }
  },
  components: {
    MerchantDisplay
  },
  data () {
    return {
      title: "MerchantsList",
      merchants: {}
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getIdolList () {
      var url = this.staticURL + "json/merchants.json";  
      this.$axios.get(url).then((res) => {
          this.merchants = res.data;
      })
    },
    routerTo(merchant){
      this.$router.push({ name: 'choosing', params: { merchant }});
    },
  },
  beforeCreated () {
  },
  created () {
    this.getIdolList()
  },
  mounted () {
  }
}
</script>
