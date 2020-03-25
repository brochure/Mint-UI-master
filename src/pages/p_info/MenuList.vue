<template>
  <div>
<!-- <h3>{{$route.query.contents[0].title}}</h3> -->
<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in $route.query.contents" :key="item.index">{{ item.title }}</li>
</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    
  },
  components: {

  },
  created(){
  }
}
</script>

<style scoped>

</style>
