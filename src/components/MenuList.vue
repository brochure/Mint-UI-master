<template>
    <ul class="list-group list-group-flush">
      <div v-for="item in menulist" :key="item.title">
            <li class="list-group-item">
                  <!-- <div @click="routerTo(item)"> -->
                    <menu-display :meal="item"></menu-display>
                  <!-- </div> -->
              </li>
      </div>
    </ul>
</template>

<script>
import MenuDisplay from '../components/MenuDisplay.vue'
export default {
  props: {
    menulist: {
      type: Array,
      default:function(){
        return []
      }
    }
  },
  components: {
    MenuDisplay
  },
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    routerTo(merchant){
      // this.$router.push({path: '/p_info/choosing', query:{id: merchant.id}});  
      // this.$router.push({ name: 'choosing', params: { merchant }});
    },
  },
  mounted () {
    console.log("menulist");
    
    console.log(this.menulist);
    
  }
}
</script>
