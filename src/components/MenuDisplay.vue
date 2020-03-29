<template>
  <el-row type="flex">
      <el-col :span="6">
        <img :src="genPicURL(meal.pic)" class="logo">
      </el-col>
      <el-col :span="18" :offset="2">
        <el-row>
          <span><p style="font-size:0.86em;line-height:1.2em;">{{meal.title}}</p></span>
        </el-row>
          <el-row style="margin-top:-20px;">
                <!-- <li class="list-inline-item"><i class="mintui mintui-star" style="color:#ec6800;"></i><small style="color:#ec6800;">{{merchant.rate}}</small></li> -->
                <small class="text-muted">月售{{meal.month_sold}}</small>
          </el-row>
          <el-row>
            <el-col :span="5">
                <small class="text-muted">¥{{meal.price}}</small>
            </el-col>
            <el-col :span="2" :pull="6">
              <div @click="main_log(-1)">
                <mt-palette-button content="-" direction="rt" 
              :radius="80" ref="target_1" mainButtonStyle="font-size:2.8em;color:#fff;background-color:#26a2ff;transform:scale(0.35,0.35);" style="left:90px;top:-40px;">
                <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
              </mt-palette-button>
              </div>
            </el-col>
            <el-col :span="1">
              {{amt}}
            </el-col>
            <el-col :span="2">
              <div @click="main_log">
              <mt-palette-button content="+" direction="rt"
              :radius="80" ref="target_1" mainButtonStyle="font-size:2.8em;color:#fff;background-color:#26a2ff;transform:scale(0.35,0.35);" style="left:90px;top:-40px;">
                <div class="" @touchstart="sub_log(1)"></div>
              </mt-palette-button>
              </div>
            </el-col>
                <!-- <div id="ball"></div> -->
        </el-row>
      </el-col>
  </el-row>
</template>

<script>
import { PaletteButton } from 'mint-ui';

export default {
  props: {
    cart:{
      type: Object,
      default:function(){
        return []
      }
    },
    basket:{
      type: Object,
      default:function(){
        return []
      }
    },
    meal:{
      type: Object,
      default() {
        return {};
      }
    }
  },
  data () {
    return {
      amt: 0,
      // title: "MerchantDisplay",
    }
  },
  methods: {
    main_log(evt) {
      console.log('main_log', evt);
      this.parabola(evt);
      console.log("MenuDisplay");
      
      if((this.amt+1)>=0){
        var param = {
          title:this.meal.title,
          amount:1,
          pic:this.meal.pic,
          price:this.meal.price
        }
        this.$parent.addCount(param);
        this.amt += 1;
      }
    },
    sub_log(val) {
      console.log('sub_log', val);
      this.$refs.target_1.collapse();
    },
    parabola(evt){
      var ball = document.createElement("div"); 
      ball.setAttribute("id","ball");
      document.body.appendChild(ball);

      // var $ball = document.getElementById('ball');
      // $ball.style.hidden="";
      console.log(evt.pageX,evt.pageY)
        ball.style.top = evt.pageY+'px';
        ball.style.left = evt.pageX+'px';
        ball.style.transition = 'left 0s, top 0s';
      setTimeout(()=>{
          ball.style.top = window.innerHeight+'px';
          ball.style.left = '0px';
          ball.style.transition = 'left 1s linear, top 1s ease-in';
      }, 20)
    },
    genPicURL(pic) {
      return this.SERVER_BASE_URL + "/image/" + pic;
    }
  },
  components: {

  },
  created(){
    console.log("MenuDisplay");
    console.log(this.basket);
    this.amt=0;
    console.log(JSON.stringify(this.basket));
    
    if (this.basket==null || JSON.stringify(this.basket) == "{}"){      
      console.log(this.cart);
      
      if(this.cart!=null && JSON.stringify(this.cart) != "{}"){        
        var carts = this.cart.contents;
        carts.forEach(element => {
          if(element.title==this.meal.title){
            for(let i=0;i<element.amount;i++){
              let param = {
                title:this.meal.title,
                amount:1,
                pic:this.meal.pic,
                price:this.meal.price
              }
              this.$parent.addCount(param);
              this.amt += 1;
            }
          }
        });
      }
    }else{
      this.amt = this.basket[this.meal.title].amount;
      }
  },
  mounted(){
    // console.log(this.meal);
    // console.log("MenuDisplay Mounted");
    
    // console.log(this.basket);
    
  }
}
</script>

<style scoped>
#ball {
  width:12px;
  height:12px;
  background: #5EA345;
  border-radius: 50%;
  position: fixed;
  transition: left 1s linear, top 1s ease-in;
}
 .logo{
    width: 70px;
    height: 70px;
    float: left;
  }
</style>
