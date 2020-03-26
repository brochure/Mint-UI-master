<template>
  <ul class="list-group list-group-flush">
    <div v-for="item in menulist" :key="item.title">
      <li class="list-group-item" style="padding-top:0px;padding-bottom:0px;margin-bottom:-10px;">
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
    routerTo(menu){
      // this.$router.push({path: '/p_info/choosing', query:{id: merchant.id}});  
      // this.$router.push({ name: 'choosing', params: { merchant }});
    },
  }
}
</script>
