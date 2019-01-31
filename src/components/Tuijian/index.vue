<template>
   <div class='tuijian'>
     <div class='swiper-container'>
          <div class='swiper-wrapper'>
              <div class='swiper-slide'><img src='../../images/biyaolunbo1.jpg'></div>
              <div class='swiper-slide'><img src='../../images/biyaolunbo2.jpg'></div>
              <div class='swiper-slide'><img src='../../images/biyaolunbo3.jpg'></div>
              <div class='swiper-slide'><img src='../../images/biyaolunbo4.jpg'></div>
              <div class='swiper-slide'><img src='../../images/biyaolunbo5.jpg'></div>
              <div class='swiper-slide'><img src='../../images/biyaolunbo6.jpg'></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class='swiper-pagination'></div>
      </div>
      <div class='sales'>
        <div class='saleitem'><img src='../../images/true.png' class='icon'/>大牌制造商直供</div>
        <div class='saleitem'><img src='../../images/true.png' class='icon'/>七天无忧退货</div>
        <div class='saleitem'><img src='../../images/true.png' class='icon'/>全平台包邮</div>
      </div>
      <div class='operate_g'>
          <div v-for='(item,index) in smallimgs' :key='index' class='operate-item'><img :src='item.imgurl' class='operate-img'/><span class='operate-txt'>{{item.imgtext}}</span></div>
      </div>
      <div class='grayline'></div>
      <div class='singleline-img'>
        <img src='../../images/biyaonavimg.jpg' class='navimg'/>
      </div>
      <div class='grayline'></div>
      <div class='commend-info'>
        <div class='item-img' v-for="(item,index) in commendlist" :key="index">
          <img :src='item.imageUrl' class='imglist'/>
          <div class='item-text'>
            <div><span class="item-price">￥</span><span class="item-price distance">{{item.price}}</span><span v-for="(items,indexs) in item.labels" :key="indexs" :class='`label${indexs}`'>{{items.content}}</span></div>
            <div class="item-bck">{{item.supplierBackground}}</div>
            <div class='itembott'><span class='item-title'>{{item.title}}</span><span class='item-praise'>{{item.evaluate}}</span></div>
           </div>
      </div>
     </div>
   </div>
</template>
<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  name: 'tuijian',
  data () {
    return {
      smallimgs: [
        { imgurl: require('../../images/smallpin.png'), imgtext: '一起拼' },
        { imgurl: require('../../images/smallrice.png'), imgtext: '健康正餐' },
        { imgurl: require('../../images/smallcloth.png'), imgtext: '品质男装' },
        { imgurl: require('../../images/smallgirlcloth.png'), imgtext: '花漾女神' },
        { imgurl: require('../../images/smallkouhong.png'), imgtext: '美妆个护' },
        { imgurl: require('../../images/smallwater.png'), imgtext: '厨具水具' },
        { imgurl: require('../../images/smalltea.png'), imgtext: '休食茶饮' },
        { imgurl: require('../../images/smalljiaju.png'), imgtext: '家居家纺' },
        { imgurl: require('../../images/smallele.png'), imgtext: '家用电器' },
        { imgurl: require('../../images/smallfoot.png'), imgtext: '男女鞋靴' }
      ],
      commendlist: []
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      delay: 1000,
      pagination: {
        el: '.swiper-pagination'
      }
    })
    axios.get('/static/api/biyaoindex.json').then(res => {
      var datalist = res.data
      this.commendlist = datalist
    })
  }
}
</script>
<style lang='scss'>
@import '../../styles/common/px2rem.scss';
@import '../../../node_modules/swiper/dist/css/swiper.min.css';
.swiper-container {
  height: px2rem(260);

  img {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet {
    width: px2rem(10);
    height: px2rem(10);
  }

  .swiper-pagination.swiper-pagination-bullets {
    bottom: px2rem(10);
    left: 0;
    width: 96%;
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
  }

}
.sales{
  height: px2rem(72);
  font-size: px2rem(28);
  display: flex;
  padding:0 px2rem(30);
  color:  #7f4395;
  justify-content: space-between;
  align-items: center;
  .saleitem{
    display: flex;
  }
  .icon{
  height: px2rem(36);
  width: px2rem(36);
  margin-right: px2rem(18);
  line-height:px2rem(36);
  }
}
.operate_g{
  display: flex;
  font-size: px2rem(28);
  padding: px2rem(30);
  flex-wrap: wrap;
}
.operate-item{
  width: 20%;
  display: flex;
  flex-direction: column;
  margin: px2rem(20) 0;
}
.operate-img{
  width: px2rem(50);
  height: px2rem(50);
  align-self: center;
}
.operate-txt{
  text-align: center;
}
.grayline{
  height: px2rem(28);
  background-color:#f2f2f2;
}
.singleline-img{
  padding: px2rem(30);
}
.navimg{
  width: 100%;
  height:px2rem(356);
}
.imglist{
  width: 100%;
  height:px2rem(385);
}
.item-text{
  padding: px2rem(20);
}
.item-price{
   color: #F7A701;
   font-size: px2rem(36);
}
.distance{
margin-right: px2rem(24);
}
.label0{
 background:#AB7FD1;
 color:#FFFFFF;
 border: px2rem(2) solid #AB7FD1;
 font-size: px2rem(22);
 margin-right: px2rem(15);
}
.label1{
 background:#FFFFFF;
 color:#FB4C81;
 border:px2rem(2) solid #FB4C81;
 font-size: px2rem(22);
 margin-left: px2rem(4);
}
.item-bck{
  color: #BF9E6B;
  font-size: px2rem(26);
  margin:px2rem(20) 0;
}
.itembott{
  display: flex;
  justify-content: space-between;
}
.item-title{
  font-size: px2rem(28);
}
.item-praise{
  font-size: px2rem(18);
  align-self: flex-end;
  color:#BBB;
}
.item-img{
  margin-bottom: px2rem(20);
}
</style>
