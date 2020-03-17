<template>
    <ul class="list-group list-group-flush">
      <div v-for="item in merchants" :key="item.title">
        <div v-if="filters.flrfav.includes(item.isFav) && filters.flrsc.includes(item.isSelfCollectable) && filters.flrtype.includes(item.type)">
            <li class="list-group-item">
                  <div @click="routerTo(item)">
                    <merchant-display :merchant="item"></merchant-display>
                  </div>
              </li>
        </div>
      </div>
    </ul>
</template>

<script>
import MerchantDisplay from '../components/MerchantDisplay.vue'
export default {
  props: {
    filters:{
      flrfav: [true, false],
      flrsc: [true, false],
      flrtype: [0, 1]
    }
  },
  components: {
    MerchantDisplay
  },
  data () {
    return {
      title: "MerchantsList",
      merchants: {}
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
    routerTo(merchant){
      this.$router.push({ name: 'choosing', params: { merchant }});
      // this.$router.push({ name: 'choosing'});
    },


  },
  //生命周期钩子：实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
  beforeCreated () {
  },
  //生命周期钩子：组件实例完成创建之后调用
  created () {
    this.getIdolList()
  },
  //生命周期钩子：组件实例渲染完成时调用
  mounted () {
  }
}
</script>
