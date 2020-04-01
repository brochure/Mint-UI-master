<template>
  <div>
<!-- <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in $route.query.contents" :key="item.index">{{ item.title }}</li>
</ul> -->
    <menu-list :colOrdinal="parseInt($route.query.colOrdinal)"></menu-list>
  </div>
</template>

<script>
import Vue from 'vue'
import MenuList from '../../components/MenuList.vue'
export default {
  data () {
    return {
      addedMenu:{}
    }
  },
  methods: {
  },
  components: {
    MenuList
  },
  created(){
  }
}
</script>

<style scoped>

</style>
