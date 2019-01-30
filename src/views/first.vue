<template>
  <div class='first'>
    <Search></Search>
    <div class="linescroll">
      <div class="nav">
        <ul>
          <li :class="{'x-act': $route.path === '/first/tuijian'}"
          @click="switchList('tuijian')"
           >推荐</li>
          <li :class="{'x-act': $route.path === '/first/coffee'}"
          @click="switchList('coffee')"
           >咖啡</li>
          <li :class="{'x-act': $route.path === '/first/yinshi'}"
          @click="switchList('yinshi')"
           >饮食</li>
          <li :class="{'x-act': $route.path === '/first/nanzhuang'}"
          @click="switchList('nanzhuang')"
           >男装</li>
           <li :class="{'x-act': $route.path === '/first/nvzhuang'}"
          @click="switchList('nvzhuang')"
           >女装</li>
           <li :class="{'x-act': $route.path === '/first/yanjing'}"
          @click="switchList('yanjing')"
           >眼镜</li>
           <li :class="{'x-act': $route.path === '/first/neiyipeishi'}"
          @click="switchList('neiyipeishi')"
           >内衣配饰</li>
           <li :class="{'x-act': $route.path === '/first/muying'}"
          @click="switchList('muying')"
           >母婴</li>
           <li :class="{'x-act': $route.path === '/first/xiexue'}"
          @click="switchList('xiexue')"
           >鞋靴</li>
           <li :class="{'x-act': $route.path === '/first/yundong'}"
          @click="switchList('yundong')"
           >运动</li>
           <li :class="{'x-act': $route.path === '/first/xiangbao'}"
          @click="switchList('xiangbao')"
           >箱包</li>
           <li :class="{'x-act': $route.path === '/first/meizhuanggehu'}"
          @click="switchList('meizhuanggehu')"
           >美妆个护</li>
            <li :class="{'x-act': $route.path === '/first/jiafang'}"
          @click="switchList('jiafang')"
           >家访</li>
            <li :class="{'x-act': $route.path === '/first/canchu'}"
          @click="switchList('canchu')"
           >餐厨</li>
            <li :class="{'x-act': $route.path === '/first/dianqi'}"
          @click="switchList('dianqi')"
           >电器</li>
            <li :class="{'x-act': $route.path === '/first/jiazhuang'}"
          @click="switchList('jiazhuang')"
           >家装</li>
            <li :class="{'x-act': $route.path === '/first/jiaju'}"
          @click="switchList('jiaju')"
           >家具</li>
            <li :class="{'x-act': $route.path === '/first/shuma'}"
          @click="switchList('shuma')"
           >数码</li>
              <li :class="{'x-act': $route.path === '/first/qipei'}"
          @click="switchList('qipei')"
           >汽配</li>
              <li :class="{'x-act': $route.path === '/first/jiankang'}"
          @click="switchList('jiankang')"
           >健康保健</li>
              <li :class="{'x-act': $route.path === '/first/dingzhi'}"
          @click="switchList('dingzhi')"
           >定制</li>
        </ul>
      </div>
      <div class='slide-on'>|<img src='../images/xiaarrow.png' class='arrow'/>
      </div>
   </div>
   <router-view></router-view>
 </div>
</template>

<script>
import Search from '../components/Search'
export default {
  name: 'first',
  components: {
    Search
  },
  methods: {
    /**
     * 切换路由
     */
    switchList (type) {
      if (type === 'tuijian') {
        this.$router.push('/first/tuijian')
      } else if (type === 'coffee') {
        this.$router.push('/first/coffee')
      } else if (type === 'yinshi') {
        this.$router.push('/first/yinshi')
      } else if (type === 'nanzhuang') {
        this.$router.push('/first/nanzhuang')
      } else if (type === 'nvzhuang') {
        this.$router.push('/first/nvzhuang')
      } else if (type === 'yanjing') {
        this.$router.push('/first/yanjing')
      } else if (type === 'neiyipeishi') {
        this.$router.push('/first/neiyipeishi')
      } else if (type === 'muying') {
        this.$router.push('/first/muying')
      } else if (type === 'xiexue') {
        this.$router.push('/first/xiexue')
      } else if (type === 'yundong') {
        this.$router.push('/first/yundong')
      } else if (type === 'xiangbao') {
        this.$router.push('/first/xiangbao')
      } else if (type === 'meizhuanggehu') {
        this.$router.push('/first/meizhuanggehu')
      } else if (type === 'jiafang') {
        this.$router.push('/first/jiafang')
      } else if (type === 'canchu') {
        this.$router.push('/first/canchu')
      } else if (type === 'dianqi') {
        this.$router.push('/first/dianqi')
      } else if (type === 'jiazhuang') {
        this.$router.push('/first/jiazhuang')
      } else if (type === 'jiaju') {
        this.$router.push('/first/jiaju')
      } else if (type === 'shuma') {
        this.$router.push('/first/shuma')
      } else if (type === 'qipei') {
        this.$router.push('/first/qipei')
      } else if (type === 'jiankang') {
        this.$router.push('/first/jiankang')
      } else if (type === 'dingzhi') {
        this.$router.push('/first/dingzhi')
      }
    }
  }
}
</script>
<style lang='scss'>
@import "@/styles/common/px2rem.scss";
.first {
  display: flex;
  flex-direction: column;
  height: 100%;
  .linescroll{
    display: flex;
    flex-shrink:0;
    height: px2rem(74);
    width: 96%;
    margin: 0 auto;
      ::-webkit-scrollbar {
     width: 0;
     height: 0;
     color: transparent;
      }
    .nav{
      flex: 90%;
      display: flex;
      align-items: center;
      overflow: scroll;
      ul{
        display: flex;
        flex-wrap: nowrap;
        li{
          flex: 1;
          width: px2rem(130);
          text-align: center;
          font-size: px2rem(32);
          height: px2rem(74);
          line-height: px2rem(74);
            &.x-act {
          color: #7f4395;
          border-bottom: px2rem(4) solid #7f4395;
            }
        }
      }
    }
    .slide-on{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .arrow{
        width: px2rem(44);
        height: px2rem(44);
        margin-top: px2rem(12);
      }
    }
  }
}
</style>
