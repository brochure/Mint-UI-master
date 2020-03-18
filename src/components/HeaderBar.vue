<template>
    <mt-header fixed :title="headerTitle" :style="styleObject">
    <router-link to="/" slot="left">
        <i class="el-icon-arrow-left" @click="prev" style="font-size:1.5em;color:white;"/>
    </router-link>
    </mt-header>
</template>

<script>
export default {
  props: {
    headerTitle: "",
    headerHeight: ""
  },
  data () {
    return {
      styleObject: {
        height: "40px"
      }
    }
  },
  methods:{
      prev(){this.$router.go(-1)}
  },
  created(){
    this.styleObject.height = this.headerHeight;
  }
}
</script>
