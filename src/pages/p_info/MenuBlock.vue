<template>
  <div>
<!-- <h3>{{$route.query.contents[0].title}}</h3> -->
<!-- <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in $route.query.contents" :key="item.index">{{ item.title }}</li>
</ul> -->
<menu-list :menulist="$route.query.contents"></menu-list>
  </div>
</template>

<script>
import MenuList from '../../components/MenuList.vue'
export default {
  data () {
    return {

    }
  },
  methods: {
    addCount(title, val){
      this.$emit("addCount", {title:title,val:val});
    },
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
