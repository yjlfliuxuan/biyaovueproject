
<template>
<router-link tag="div" class='searchbox' :to="{name:'searchhot'}">
  <input type="search" placeholder="请输入您想要的商品"/>
  <img src='../../images/search.png' class='searchlogo'/>
</router-link>
</template>
<script>

export default {
  name: 'search'
}
</script>
<style lang="scss">
@import "@/styles/common/px2rem.scss";
.searchbox{
  position: relative;
  width: 100%;
   input{
    display: block;
    width: 96%;
    height:px2rem(66) ;
    border:px2rem(2) solid black ;
    background-color:  #f2f2f2;
    padding: px2rem(20) px2rem(20) px2rem(20) px2rem(55);
    margin: 0 auto;
    outline: 0;
  }
  .searchlogo{
    position: absolute;
    left:px2rem(20);
    top:px2rem(10);
    width: px2rem(50);
    height: px2rem(50);
  }
}
</style>
