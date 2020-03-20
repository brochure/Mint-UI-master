<template>
    <ul class="list-group list-group-flush">
      <div v-for="item in merchants" :key="item.title">
        <div v-if="filters.flrfav.includes(item.fav) && filters.flrsc.includes(item.selfCollectable) && filters.flrtype.includes(item.type)">
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
      // title: "MerchantsList",
      merchants: []
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    getIdolList () {
      // var url = this.HOST + "/merchant";
      //     var that = this;
      //     that.$axios({
      //       url: url,
      //       method: 'POST'
      //     }).then(resp => {
      //       var data = resp.data;
      //       console.log(resp);
      //       console.log(data);
      //       if(data.success){
      //         alert(data.msg);
      //         that.prev();
      //       }else{
      //         alert(data.msg);
      //       }
      //     }).catch(err =>{
      //       console.log(err);
      //       // reject(err.data);
      //     })


      var that = this;
  //     var url = this.staticURL + "json/merchants.json";
  //     that.$axios.get(url).then((resp) => {
  //       that.merchants = resp.data;
  //     })
      var url = that.HOST + "/merchant";
      that.$axios.get(url).then((resp) => {   
        // console.log(resp);
        if(resp.data.success) {
          that.merchants = resp.data.content;
        }else{
          // alert(resp.msg);
        }
      });
    },
    routerTo(merchant){
      this.$router.push({ name: 'choosing', params: { merchant }});
    },
  },
  beforeCreated () {
  },
  created () {
    this.getIdolList();
  },
  mounted () {
  }
}
</script>
