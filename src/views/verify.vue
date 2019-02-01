<template>
  <div class="verify">
    <div class='alert_p'>
  <img src='../images/cancel.png' class='cancel'/>
  <span class='cellVerify'>验证手机号</span>
  <div class='phone'><input type='text' placeholder='请输入手机号'/></div>
  <div class='box1'>
  <div class="duanxin"><input type='text' placeholder='请输入验证码'/></div>
  <button class='btn'>获取验证码</button>
  </div>
  <div class='attention'>
  <img src='../images/gantan.png' class='gantan'/>
  <span class='jingshi'>若输入的手机号未注册必要，系统会自动帮你注册</span>
  </div>
  <button class='nextBtn'>下一步</button>
  </div>
  </div>
</template>
<script>
export default {
  name: 'verify'
}
</script>
<style lang="scss">
@import '@/styles/common/px2rem.scss';
.verify{
   background: rgba(0,0,0,.6);
   width: 100%;
   height: 100%;
   z-index: 100;
}
.alert_p{
  width: px2rem(610);
  height: px2rem(652);
  background: #FFF;
  position: relative;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
}
.cancel{
  width: px2rem(56);
  height: px2rem(56);
  position: absolute;
  right: 0;
  top: px2rem(-80);
}
.cellVerify{
  display: block;
  height: px2rem(88);
  line-height: px2rem(88);
  text-align: center;
  font-size: px2rem(40);
}
.phone{
  border-bottom: px2rem(2) solid #000;
  width: 90%;
  height: px2rem(60);
  margin: px2rem(20) auto;
  input{
    width: 100%;
    height: 100%;
    outline: 0;
    border: none;
  }
}
.duanxin{
    border-bottom: px2rem(2) solid #000;
    width: 50%;
    height: px2rem(60);
    margin: px2rem(80) 0 px2rem(20) px2rem(24);
    input{
    width: 100%;
    height: 100%;
    outline: 0;
    border: none;
  }
}
.btn{
  width: 38%;
  color: #fff;
  background: #7F4395;
  font-size: px2rem(32);
  height: px2rem(60);
  line-height: px2rem(60);
  margin-top: px2rem(80);
  margin-left: px2rem(20);
}
.box1{
display: flex;
}
.gantan{
  width: px2rem(32);
  height: px2rem(32);
}
.jingshi{
  color: #BBB;
  font-size: px2rem(24);
}
.attention{
 margin-bottom: px2rem(80);
 display: flex;
 justify-content: center;

}
.nextBtn{
  width:86%;
  color: #fff;
  background: #7F4395;
  height: px2rem(88);
  margin: 0 auto;
  font-size: px2rem(40);
}
</style>
