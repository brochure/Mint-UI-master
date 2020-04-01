<template>
  <ul class="list-group list-group-flush">
    <div v-for="item in menuItemGroup" :key="item.title">
      <li class="list-group-item" style="padding-top:0px;padding-bottom:0px;margin-bottom:-10px;">
        <!-- <div @click="routerTo(item)"> -->
          <menu-display :menuItem="item"></menu-display>
        <!-- </div> -->
      </li>
    </div>
  </ul>
</template>

<script>
import Vue from 'vue'
import MenuDisplay from '../components/MenuDisplay.vue'
export default {
  props: {
    colOrdinal: {
      type: Number,
      default: 0
    }
  },
  components: {
    MenuDisplay
  },
  data () {
    return {
      menuItemGroup: []
    }
  },
  methods: {
  },
  created(){
    Vue.prototype.$menu.forEach(element => {
      if(element.ordinal==this.colOrdinal){
        this.menuItemGroup = element.listMenuCol;
      }
    });
  },
  watch: {
    colOrdinal(val,oldVal) {
      this.$nextTick(() => {
        Vue.prototype.$menu.forEach(element => {
          if(element.ordinal==val){
            this.menuItemGroup = element.listMenuCol;
          }
        });
      })
    }
  }
}
</script>
