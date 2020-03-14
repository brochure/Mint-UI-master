<template>
    <mt-header fixed :title="headerTitle">
    <router-link to="/" slot="left">
        <mt-button icon="back" @click="prev"></mt-button>
    </router-link>
    </mt-header>
</template>

<script>
export default {
  props: {
    headerTitle: []
  },
  data () {
    return {
    }
  },
  methods:{
      prev(){this.$router.go(-1)}
  }
}
</script>
