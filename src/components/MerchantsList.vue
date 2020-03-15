<template>
    <ul class="list-group list-group-flush">
      <div v-for="value in merchants" :key="value.title">
        <div v-if="filters.flrfav.includes(value.isFav) && filters.flrsc.includes(value.isSelfCollectable) && filters.flrtype.includes(value.type)">
      <li class="list-group-item">
            <div class="row" @click="routerTo(value)">
                <div class="col-3">
                    <img :src="value.pic" class="logo">
                </div>
                <div class="col-9">
                    <span>{{value.title}}</span>
                    <ul class="list-inline">
                        <li class="list-inline-item"><i class="mintui mintui-star" style="color:#ec6800;"></i><small style="color:#ec6800;">{{value.rate}}</small></li>
                        <li class="list-inline-item"><small class="text-muted">月售{{value.sale}}</small></li>
                    </ul>
                    <ul class="list-inline" style='margin-top:-5px;'>
                        <li class="list-inline-item"><small class="text-muted">起送¥{{value.initfee}}</small></li>
                        <li class="list-inline-item"><small class="text-muted">配送¥{{value.postage}}</small></li>
                    </ul>
                </div>
            </div>
        </li>
        </div>
      </div>
    </ul>
</template>

<script>
//import axios from 'axios';

export default {
  //组件私有数据（必须是function，而且要return对象类型）
  props: {
    filters:{
      flrfav: [true, false],
      flrsc: [true, false],
      flrtype: [0, 1]
    }
  },
  data () {
    return {
      title: '组件标题',
      merchants: 'a'
    }
  },
  //父组件传递过来的数据（两种方式声明：1.数组 2.对象）
  //数组方式
  //props: ['age'],
  //对象方式
  /*props: {
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  }*/
  //计算属性
  computed: {
    
  },
  //监听
  watch: {
  },
  //函数集，自己封装，便于开发使用
  methods: {
    getIdolList () {
      var url = "./static/json/merchants.json";  
      this.$axios.get(url).then((res) => {
          this.merchants = res.data;
          //用axios的方法引入地址
          //alert(this.merchants)
          //this.perpareData(this.merchants);//页面数据构造方法
          //console.log('list'+this.merchants.length);
      })
  
    },


  },
  //生命周期钩子：实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
  beforeCreated () {
    console.log('component before created')
  },
  //生命周期钩子：组件实例完成创建之后调用
  created () {
    this.getIdolList()
  },
  //生命周期钩子：组件实例渲染完成时调用
  mounted () {

  },
  //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
  components: {
  }
}
</script>

<style scoped>
  .logo{
    width: 70px;
    height: 70px;
    float: left;
  }
</style>