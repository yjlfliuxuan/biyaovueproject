<template>
  <div class="shopcar">
    <div class='lx-head'>
    <div class='lx-homelogo'><img class='lx-img' src='../images/home.png' @click="jumptofirst"/></div>
    <div class='lx-title'>购物车</div>
    <div class='lx-homelogo'></div>
    </div>
    <div class='lx-main'>
      <div class='lx-mainimgbox'><img class='lx-mainimglogo' src='../images/shopcarlogo.png'/></div>
      <span class='lx-maintext'>购物车还是空的，赶紧行动吧！</span>
      <button class='lx-mainbtn' @click="jumptofirst">去逛逛</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shopcar',
  methods: {
    jumptofirst () {
      this.$router.push('/first/tuijian')
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/common/px2rem.scss';
.shopcar {
   flex: 1;
  overflow-y: auto;
  background-color: #f2f2f2;
    .lx-head{
    background-color: #fff;
    height: px2rem(84);
    display: flex;
    align-items: center;
  }
  .lx-homelogo{
    flex: 1;
    text-align: center;
  }
  .lx-title{
    flex: 8;
    color: #333;
    text-align: center;
    font-size: px2rem(32);
  }
  .lx-img{
    width: px2rem(44);
    height: px2rem(44);
  }
  .lx-main{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .lx-mainimgbox{
    align-self: center;
    padding: px2rem(80) 0 px2rem(50);
  }
  .lx-mainimglogo{
    width: px2rem(100);
    height: px2rem(100);
  }
  .lx-maintext{
    align-self: center;
    margin-bottom: px2rem(40);
    font-size: px2rem(28);
    color: #666;
  }
  .lx-mainbtn{
      width: 60%;
      height: px2rem(70);
      line-height: px2rem(70);
      color: #fff;
      text-align: center;
      font-size: px2rem(32);
      background-color: #B768A5;
      border-radius: px2rem(10);
      margin:0 auto;
  }
}
</style>
