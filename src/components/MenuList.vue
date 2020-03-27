<template>
  <ul class="list-group list-group-flush">
    <div v-for="item in menulist" :key="item.title">
      <li class="list-group-item" style="padding-top:0px;padding-bottom:0px;margin-bottom:-10px;">
        <!-- <div @click="routerTo(item)"> -->
          <menu-display :meal="item" :basket="basket"></menu-display>
        <!-- </div> -->
      </li>
    </div>
  </ul>
</template>

<script>
import MenuDisplay from '../components/MenuDisplay.vue'
export default {
  props: {
    basket:{
      type: Object,
      default:function(){
        return []
      }
    },
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
    addCount(param){
      // console.log("addCount in MenuList");
      // console.log(param);
      this.$parent.addCount(param);
    },
    routerTo(menu){
      // this.$router.push({path: '/p_info/choosing', query:{id: merchant.id}});  
      // this.$router.push({ name: 'choosing', params: { merchant }});
    },
  }
}
</script>
