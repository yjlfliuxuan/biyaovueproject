<template>
  <div class="goodsdetail">
    <div class='swiper-container'>
      <div class='swiper-wrapper'>
        <div
          class="swiper-slide"
          v-for="(item,index) in imgUrlslist.imgUrls"
          :key="index"
          @change="changeswiperindex(index)"
        >
          <img
            :src="item"
            class="swiperimg"
          />
        </div>
      </div>
      <div class='banneritem'><span class='fenye'>{{fenyenum}}</span>/5</div>
    </div>
    <div class='gl-detial-wrap'>
      <div class='gl-title'>
        <span class='lx-title'>{{imgUrlslist.title}}</span>
        <div class='rightimg'><img
            src='../images/collect.png'
            class='collectSign'
          /></div>
      </div>
      <div class='gl-salePoint'>
        <span class='lxflex'>{{imgUrlslist.salepoint}}</span>
        <span class="collectspan">收藏</span>
      </div>
    </div>
    <div class='price-duration-wrap'>
      <div class='gl-price-duration-wrap'>
        <div class="gl-price"><span>￥</span><span>{{imgUrlslist.price}}</span></div>
        <div class='gl-duration-wrap'><img
            class="gl-duration-icon"
            src='https://static.biyao.com/mnew/img/base/produce_cycle_015ebc2.png'
          /><span class="gl-duration">{{imgUrlslist.days}}</span></div>
      </div>
    </div>
    <div class="labels">{{imgUrlslist.product}}</div>
    <div class='aftersales'>
      <div class='aftersalesleft'>
        <div><img
            src='../images/true.png'
            class='true'
          /><span>7天无忧退货</span></div>
        <div><img
            src='../images/true.png'
            class='true'
          /><span>先行赔付</span></div>
        <div><img
            src='../images/true.png'
            class='true'
          /><span>超时赔偿</span></div>
        <div><img
            src='../images/true.png'
            class='true'
          /><span>顺丰包邮</span></div>
      </div>
      <div class='arror'><img
          src='../images/arrorright.png'
          class='arrorright'
        /></div>
    </div>
    <div class="my-address">
      <div class="location-icon"><img
          class="location-img"
          src='https://static.biyao.com/mnew/img/master/togetherGroup/location_purple48@2x_7462100.png'
        /></div>
      <div class="location-detial">
        <span class="location-area">广东省 深圳市 福田区</span>
        <span class="location-status">可配送</span>
      </div>
      <div class="gl-more"><img
          src='../images/arrorright.png'
          class='arrorright'
        /></div>
    </div>
    <div class="btns">
    <button>加入购物车</button>
    <button>立即购买</button>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  name: 'goodsdetail',
  data () {
    return {
      fenyenum: 1,
      imgUrlslist: {}
    }
  },
  methods: {
    changeswiperindex (index) {
      console.log(index)
      this.fenyenum = index
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true
    })
    var goodindex = Number(this.$router.history.current.params.goodsindex)
    axios.get('/static/api/biyaodetail.json').then(res => {
      var datalist = res.data
      for (var i = 0; i < datalist.length; i++) {
        if (datalist[i].goodsid === goodindex) {
          this.imgUrlslist = datalist[i]
        }
      }
    })
  }
}
</script>
<style lang="scss">
@import "@/styles/common/px2rem.scss";
@import "../../node_modules/swiper/dist/css/swiper.min.css";
.goodsdetail {
  width: 100%;
  height: 100%;
  .swiper-container {
    height: px2rem(750);
  }
  .banneritem {
    position: absolute;
    right: px2rem(20);
    bottom: px2rem(20);
    width: px2rem(112);
    height: px2rem(44);
    border: px2rem(2) solid #000;
    border-radius: px2rem(22);
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
    line-height: px2rem(44);
    color: #fff;
    z-index: 100;
  }
  .swiperimg {
    width: 100%;
    height: 100%;
  }
}
.btns{
   display: flex;
   justify-content: center;
   align-items: center;
   button{
     width: 30%;
     height: px2rem(80);
     line-height: px2rem(80);
     font-size: px2rem(25);
     border-radius: px2rem(20);
     text-align: center;
     background: red;
     color: #fff;
   }
}
.gl-detial-wrap {
  padding: px2rem(20);
}
.gl-title {
  display: flex;
  justify-content: space-between;
}
.collectSign {
  width: px2rem(44);
  height: px2rem(44);
  align-self: center;
}
.gl-salePoint {
  display: flex;
  justify-content: space-between;
}
.lxflex {
  font-size: px2rem(28);
  margin-top: px2rem(6);
  flex: 8;
}
.lx-title {
  font-size: px2rem(32);
  flex: 8;
}
.collectspan {
  font-size: px2rem(28);
  margin-top: px2rem(6);
  align-self: flex-start;
  flex: 1.5;
  text-align: center;
}
.rightimg {
  flex: 1.5;
  display: flex;
  justify-content: center;
}
.price-duration-wrap {
  padding: px2rem(20) px2rem(20) px2rem(10);
}
.gl-price-duration-wrap {
  display: flex;
  justify-content: space-between;
}
.gl-price {
  color: red;
}
.gl-duration-wrap {
  display: flex;
}
.gl-duration-icon {
  width: px2rem(24);
  height: px2rem(24);
  align-self: center;
}
.gl-duration {
  font-size: px2rem(28);
  align-self: center;
}
.labels {
  width: px2rem(290);
  height: px2rem(36);
  background: #f7f1e8;
  color: #bf9e6b;
  font-size: px2rem(24);
  margin-left: px2rem(20);
  text-align: center;
}
.true,
.arrorright {
  width: px2rem(28);
  height: px2rem(28);
}
.aftersales {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: px2rem(20);
  margin-top: px2rem(20);
}
.aftersalesleft {
  display: flex;
  font-size: px2rem(28);
  justify-content: space-between;
  flex: 9;
}
.arror {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.location-img {
  width: px2rem(48);
  height: px2rem(48);
}
.my-address {
  display: flex;
  height: px2rem(94);
  padding: px2rem(20);
  margin-bottom: px2rem(70);
}
.location-icon {
  display: flex;
  justify-content: flex-start;
  align-self: center;
  flex: 1;
}
.location-detial {
  flex: 8;
  display: flex;
  flex-direction: column;
  align-items: space-between;
}
.gl-more {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.location-area {
  font-size: px2rem(32);
}
.location-status {
  font-size: px2rem(24);
  color: red;
}
</style>
