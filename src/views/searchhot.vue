<template>
  <div class='searchhot'>
    <div class='lx-searchhead'>
        <div class='searchheadleft'>
       <img src='../images/arrowleft.png' class='arrowleft' @click="jumptofirst"/>
      </div>
      <input type="text" placeholder='请输入您想要的商品' class='searchheadmiddle'/>
      <button class='searchheadright'>搜索</button>
    </div>
    <div class='hotsearch'>
      <span class='hottitle'>热门搜索</span>
      <div class='hotlist'>
      <div v-for='(item,index) in searchlist' :key='index' class='searchci'>{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'searchhot',
  data () {
    return {
      searchlist: ['风衣女', '羊绒衫', '面膜', '口红', '连衣裙', '外套', '夹克', '大衣', '耳机', '护肤', '被芯', '运动鞋', '休闲裤', '衬衣', '男鞋', '女鞋', '箱包', '围巾', '保温杯', '四件套']
    }
  },
  methods: {
    jumptofirst () {
      this.$router.push('/first/tuijian')
    }
  }
}
</script>
<style lang='scss'>
@import '@/styles/common/px2rem.scss';
.lx-searchhead{
  display: flex;
  align-items: center;
  margin-top: px2rem(8);
}
.arrowleft{
  width: px2rem(40);
  height: px2rem(40);
}
.searchheadleft{
  flex: 1;
  align-self: center;
  text-align: center;
}
.searchheadright{
  flex: 1;
  font-size: px2rem(28);
  text-align: center;
  width: px2rem(100);
  height: px2rem(66);
  line-height: px2rem(66);
  margin:0 px2rem(10);
  border-radius: px2rem(10);
}
.searchheadmiddle{
  flex: 8;
  font-size: px2rem(28);
  outline: 0;
  height: px2rem(66);
}
.hotsearch{
  padding: px2rem(20);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.hottitle{
  margin-bottom: px2rem(20);
  font-size: px2rem(40);
}
.searchci{
  display: inline-block;
  padding: px2rem(6);
  border: px2rem(2) solid #000;
  margin: 0 px2rem(18) px2rem(14) 0;
  font-size: px2rem(28);
  border-radius: px2rem(10);
}
.hotlist{
  display: flex;
  flex-wrap: wrap;
}
</style>
