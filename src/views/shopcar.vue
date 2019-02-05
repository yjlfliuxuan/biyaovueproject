<template>
  <div class="shopcar">
    <div class='lx-head'>
      <div class='lx-homelogo'><img
          class='lx-img'
          src='../images/home.png'
          @click="jumptofirst"
        /></div>
      <div class='lx-title'>购物车</div>
      <div class='lx-homelogo'></div>
    </div>
    <div
      class='lx-main'
      v-show="shopcarIsempty"
    >
      <div class='lx-mainimgbox'><img
          class='lx-mainimglogo'
          src='../images/shopcarlogo.png'
        /></div>
      <span class='lx-maintext'>购物车还是空的，赶紧行动吧！</span>
      <button
        class='lx-mainbtn'
        @click="jumptofirst"
      >去逛逛</button>
    </div>
    <div v-show="!shopcarIsempty">
      <div
        class="goodsshow"
        v-for="(item,index) in biyaoshopcar"
        :key="index"
      >
        <input
          type="checkbox"
          class="shopleft"
        />
        <img
          :src="item.goodsImg"
          class="shopcarlogo"
        />
        <div class="shopright">
          <p>{{item.goodsName}}</p>
          <p class="goodsprice">￥{{item.goodsPrice}}</p>
          <div class="mui-numbox">
            <!-- "-"按钮，点击可减小当前数值 -->
            <button
              class="mui-btn mui-numbox-btn-minus"
              type="button"
              @click.stop="reducegoodsNum(item)"
            >-</button>
            <input
              class="mui-numbox-input"
              type="number"
              disabled
              :value="item.goodsNum"
            />
            <!-- "+"按钮，点击可增大当前数值 -->
            <button
              class="mui-btn mui-numbox-btn-plus"
              type="button"
              @click.stop="addgoodsNum(item)"
            >+</button>
          </div>
        </div>
      </div>
      <div class="foot">
        <div><input type="checkbox">全选</div>
        <div class="footright">
          <div class="priceys"><b>合计</b>￥<span>0</span></div>
          <button>去结算</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'shopcar',
  data () {
    return {
      shopcarlogo: '',
      shopcarIsempty: true
    }
  },
  computed: {
    ...mapState([
      'biyaoshopcar',
      'biyaoshopcarnum'
    ])
  },
  methods: {
    jumptofirst () {
      this.$router.push('/first/tuijian')
    },
    ...mapMutations([
      'addgoodsNum',
      'reducegoodsNum'
    ])
  },
  created () {
    if (!localStorage.getItem('biyaoshopcar')) {
      this.shopcarIsempty = true
    } else {
      this.shopcarIsempty = false
    }
  }
}
</script>
<style lang="scss">
@import "@/styles/common/px2rem.scss";
.shopcar {
  flex: 1;
  overflow-y: auto;
  background-color: #f2f2f2;
  .lx-head {
    background-color: #fff;
    height: px2rem(84);
    display: flex;
    align-items: center;
  }
  .lx-homelogo {
    flex: 1;
    text-align: center;
  }
  .lx-title {
    flex: 8;
    color: #333;
    text-align: center;
    font-size: px2rem(32);
  }
  .lx-img {
    width: px2rem(44);
    height: px2rem(44);
  }
  .lx-main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .lx-mainimgbox {
    align-self: center;
    padding: px2rem(80) 0 px2rem(50);
  }
  .lx-mainimglogo {
    width: px2rem(100);
    height: px2rem(100);
  }
  .lx-maintext {
    align-self: center;
    margin-bottom: px2rem(40);
    font-size: px2rem(28);
    color: #666;
  }
  .lx-mainbtn {
    width: 60%;
    height: px2rem(70);
    line-height: px2rem(70);
    color: #fff;
    text-align: center;
    font-size: px2rem(32);
    background-color: #b768a5;
    border-radius: px2rem(10);
    margin: 0 auto;
  }
  .goodsshow {
    background: #fff;
    display: flex;
    padding: px2rem(20);
    align-items: center;
    justify-content: space-between;
    margin: px2rem(20) auto;
    .shopcarlogo {
      flex: 2;
      width: px2rem(144);
      height: px2rem(144);
      margin: 0 px2rem(20);
    }
    .shopleft {
      flex: 1;
    }
    .shopright {
      flex: 7;
      p {
        font-size: px2rem(28);
      }
      .goodsprice {
        color: red;
      }
      .mui-numbox {
        .mui-btn {
          width: px2rem(60);
          height: px2rem(60);
        }
        .mui-numbox-input {
          width: px2rem(200);
          height: px2rem(64);
        }
      }
    }
  }
  .foot {
    height: px2rem(88);
    display: flex;
    background: #fff;
    padding: px2rem(20);
    justify-content: space-between;
    align-items: center;
    font-size: px2rem(32);
    .footright {
      display: flex;
      align-items: center;
      width: px2rem(310);
      justify-content: space-between;
      .priceys {
        color: red;
        b {
          color: #333;
        }
      }
      button {
        background: #f33;
        color: white;
        border: 0;
        border-radius: px2rem(10);
        width: px2rem(162);
        height: px2rem(64);
      }
    }
  }
}
</style>
