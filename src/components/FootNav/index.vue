//FootNav组件
<template>
  <div class="lx-foot">
    <ul>
      <router-link v-for="(item,index) in bars" :key="index"
        :to="{path:item.id}"
        tag="li"
        active-class="z-act"
      >
        <p>
          <i class="iconfont sz" :class="item.icon"></i>
        </p>
        <p>{{item.name}}</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FootNav',
  data () {
    return {
      bars: [
        {
          id: 'first',
          icon: 'icon-shouye',
          name: '首页'
        },
        {
          id: 'classify',
          icon: 'icon-leimupinleifenleileibie--',
          name: '分类'
        },
        {
          id: 'shopcar',
          icon: 'icon-gouwuche',
          name: '购物车'
        },
        {
          id: 'center',
          icon: 'icon-gerenzhongxin',
          name: '我的'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/common/px2rem.scss";
.lx-foot {
  flex-shrink: 0;
  background: white;
  width: 100%;
  ul {
    width: 100%;
    height: px2rem(78);
    display: flex;
    li {
      flex: 1;
      text-align: center;
      line-height: px2rem(78);
      height: px2rem(78);
      display: block;
      color: #797d82;
      text-decoration: none;
      p {
        line-height: px2rem(28);
        font-size: px2rem(24);
        .sz {
          font-size: px2rem(40);
          display: inline-block;
          height: px2rem(40);
          width:100%;
        }
      }
      &.z-act {
       color: #7f4395;
      }
    }
  }
}
</style>
