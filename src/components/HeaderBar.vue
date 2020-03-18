<template>
    <mt-header fixed :title="headerTitle" :style="styleObject">
    <router-link to="/" slot="left">
        <mt-button icon="back" @click="prev"></mt-button>
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
