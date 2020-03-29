<template>
  <div>
<div id="ball"></div>
<el-button style="margin-left:100px;margin-top:50px;" @click="hjkl">asdad</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    hjkl(evt){
      var $ball = document.getElementById('ball');
      console.log(evt.pageX,evt.pageY)
        $ball.style.top = evt.pageY+'px';
        $ball.style.left = evt.pageX+'px';
        $ball.style.transition = 'left 0s, top 0s';
      setTimeout(()=>{
          $ball.style.top = window.innerHeight+'px';
          $ball.style.left = '0px';
          $ball.style.transition = 'left 1s linear, top 1s ease-in';
      }, 20)
    }
  },
  components: {

  }
}
</script>

<style scoped>
/* * {
  padding: 0;
  margin: 0;
} */
#ball {
  width:12px;
  height:12px;
  background: #5EA345;
  border-radius: 50%;
  position: fixed;
  transition: left 1s linear, top 1s ease-in;
}
</style>
