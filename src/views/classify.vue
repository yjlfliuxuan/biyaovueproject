<template>
  <div class='classify'>
    <Search></Search>
       <div class='boxdown'>
          <div class='linescroll'>
              <ul class='classify_list'>
                <router-link tag="li" :to="{ path: '/classify/fenlei',query:{id:index}}" v-for="(item,index) in classifylist" :key="index" @click.native="changeclassname(index)" :class="tabsindex == index ? 'y-act':''"
           >{{item}}</router-link>
              </ul>
               <div class='listdetail'>
                 <router-view></router-view>
               </div>
          </div>
       </div>
  </div>
</template>

<script>
import Search from '../components/Search'
export default {
  name: 'classify',
  components: {
    Search
  },
  data () {
    return {
      classifylist: ['咖啡', '饮食', '男装', '女装', '眼镜', '内衣配饰', '母婴', '鞋靴', '运动', '箱包', '美妆个护', '家纺', '餐厨', '电器', '家装', '家具', '数码', '汽配', '健康保健', '定制'],
      tabsindex: 0
    }
  },
  methods: {
    changeclassname (index) {
      this.tabsindex = index
    }
  }
}
</script>
<style lang='scss'>
@import '@/styles/common/px2rem.scss';
.classify {
   flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
  .boxdown{
   width: 100%;
   height: 100%;
   overflow:hidden;
   .listdetail{
    width: 70%;
   padding: px2rem(10);
   }
   .linescroll{
     overflow:auto;
     white-space: nowrap;
     width:99.5%;
     height:98%;
     border: px2rem(2) solid #413e3ec5;
     display: flex;
    ::-webkit-scrollbar {
     width: 0;
     height: 0;
     color: transparent;
     }
     .classify_list{
     font-size: px2rem(30);
     height: 100%;
     width: 26%;
     overflow-y:scroll;
     border:px2rem(2) solid #413e3ec5;
     li{
      width: px2rem(100);
      line-height: px2rem(78);
      padding-left:px2rem(40);
    }
    .y-act {
          color: #7f4395;
          border-left: px2rem(4) solid #7f4395;
     }
   }
  }
 }
}
</style>
