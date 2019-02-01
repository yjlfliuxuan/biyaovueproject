<template>
  <div class="center">
    <div class='lx-head'>
      <div class='lx-headbg'><img class='lx-headbgimg' src='../images/wodelogin.png'/>
        <span>登录</span>
        </div>
    </div>
    <div class='lx-main'>
      <div class='dingdan'>
        <span>我的订单</span>
        <img src='../images/arrorright.png' class='arrorright'/>
      </div>
      <div class='ullist'>
          <div class='ullist-one' v-for="(item,index) in dindanlist" :key="index">
            <img :src='item.imgurl' class='smalllogos'/>
            <span>{{item.name}}</span>
          </div>
      </div>
    </div>
    <div class='lx-main'>
      <div class='dingdan' v-for="(item ,index) in centerlist" :key="index">
        <span>{{item}}</span>
        <img src='../images/arrorright.png' class='arrorright'/>
      </div>
      </div>
      <div class='public-signal'>关注“必要”微信服务号获取订单最新状态！</div>
      <div class='bottom-suction'>
        <div class='btns'>
        <button class='btn'>下载APP</button>
        <button class='btn'>关于必要</button>
        </div>
        <div class='loginer'>
        <span>率直的麦卡锡8693</span>
        <span>|</span>
        <span>退出</span>
        </div>
        <div class='foot'>Copyright © 2018, BIYAO.COM</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'center',
  data () {
    return {
      centerlist: ['商品收藏', '我的拼团', '我的抽奖', '我的红包', '我要开店', '我的余额', '体验金', '我的验光单', '我的地址', '修改密码', '设置支付密码', '商家入驻', '我的客服', '客服新消息'],
      dindanlist: [
        { name: '待付款', imgurl: require('../images/daifukuan.png') },
        { name: '生产中', imgurl: require('../images/shengchanzhong.png') }, { name: '待收货', imgurl: require('../images/daishouhuo.png') },
        { name: '待评价', imgurl: require('../images/daipingjia.png') },
        { name: '退款/售后', imgurl: require('../images/tuikuan.png') }
      ]
    }
  },
  components: {

  },
  beforeCreate () {
    console.log(document.cookie)
    if (!document.cookie) {
      this.$router.push({
        name: 'verify'
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/common/px2rem.scss';
.center{
  flex: 1;
  overflow-y: auto;
  .lx-headbg{
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url("https://static.biyao.com/mnew/img/master/personalCenter/banner-personal_61ce24d.png");
  background-size: 100% 100%;
  width: 100%;
  height: px2rem(320);
  padding-top: px2rem(60);
   font-size: px2rem(44);
}
.lx-headbgimg{
  width: px2rem(128);
  height: px2rem(128);
  margin-bottom: px2rem(30);
}
.arrorright{
  width: px2rem(48);
  height: px2rem(48);
}
.dingdan{
  display: flex;
  justify-content: space-between;
  padding: px2rem(20) 0;
  border-bottom: px2rem(4) solid #ccc;
  width: 94%;
  margin: 0 auto;
  font-size: px2rem(44);
}
.lx-main{
  margin-top: px2rem(20);
  background: #fff;
}
.ullist{
  display: flex;
  padding: px2rem(20);
 justify-content: space-between;
}
.ullist-one{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: px2rem(26);
}
.smalllogos{
  width: px2rem(44);
  height: px2rem(44);
}
.public-signal{
  font-size: px2rem(24);
  height: px2rem(63);
  line-height: px2rem(63);
  text-align: center;
}
.bottom-suction{
  padding: px2rem(30) 0;
 background-color: #333;
}
.btns{
  display: flex;
  width: 60%;
  margin: auto;
  justify-content: space-between;
}
.btn{
  width: px2rem(164);
  height: px2rem(68);
  text-align: center;
  line-height: px2rem(68);
  font-size: px2rem(24);
  color: #fff;
  background: #333;
  border:px2rem(2) solid #fff;
}
.loginer{
  width: 50%;
  display: flex;
  margin: px2rem(20) auto;
  font-size: px2rem(28);
  justify-content: space-between;
  color: gray;
}
.foot{
  width: 56%;
   margin:0 auto;
  font-size: px2rem(28);
  color: gray;
}
}
</style>
