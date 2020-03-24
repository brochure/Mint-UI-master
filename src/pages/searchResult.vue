<template>
<div id="index">
  <el-container>
      <el-header>
      <el-row type="flex" justify="space-between" style="margin-top:10px;">
          <el-col :span="21">
              <!-- <el-button>edwed</el-button> -->
            <el-input :autofocus="true" :placeholder="phcontent" v-model="iptContent" @change="execSearch" class="searchClass">
                <el-button slot="prepend" icon="el-icon-search" style="width:30px;margin-left:-27px;"></el-button>
            </el-input>
          </el-col>
          <el-col :span="3">
              <p @click="prev" style="float:right;font-size:0.9em;margin:2px;color:#409EFF;">取消</p>
          </el-col>
      </el-row>
      </el-header>
  </el-container>
</div>
</template>

<script>
export default {
  data () {
    return {
        name:'index',
        phcontent: "星巴克",
        iptContent: ""
    }
  },
  methods: {
    prev(){this.$router.go(-1)},
    execSearch(){
        
    }
  },
  components: {

  }
}
</script>

<style scoped>
.searchClass >>>{
    /* width: 100%; */
  /* border: 1px solid #c5c5c5; */
  border-radius: 20px;
  background: #f4f4f4;
}
.searchClass >>> .el-input-group__prepend {
  border: none;
  background-color: transparent;
  /* padding: 0 10px 0 30px; */
}
.searchClass >>> .el-input-group__append {
  border: none;
  background-color: transparent;
}
.searchClass >>> .el-input__inner {
  height: 28px;
  line-height: 36px;
  border: none;
  background-color: transparent;
}
.searchClass >>> .el-icon-search{
  font-size: 16px;
}
.searchClass >>> .centerClass {
  height: 100%;
  line-height: 100%;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
}
.searchClass >>> .line {
  width: 1px;
  height: 26px;
  background-color: #c5c5c5;
  margin-left: 14px;
}
.searchClass:hover >>>{
  border: 1px solid #D5E3E8;
  background: #fff;
}
.searchClass:hover >>> .line {
  background-color: #D5E3E8;
}
.searchClass:hover >>> .el-icon-search{
  color: #409eff;
  font-size: 16px;
}
</style>
