<template>
   <div class="Fenlei">
      <div class='listdetail'>
          <div class='imgbox'>
          <img :src='imgboxurl' class='listimgdetail'/>
          </div>
          <div class='listbox'><span class='listname'>{{listboxtitle}}</span></div>
          <div class='listshow'>
             <div v-for="(item,index) in seleclist" :key="index" class='list-cate'>
             <img :src='item.imgsrc' class='listimgshow'/>
             <span>{{item.title}}</span>
             </div>
          </div>
      </div>
   </div>
</template>
<script>
export default {
  name: 'fenlei',
  data () {
    return {
      seleclist: []
    }
  },
  computed: {
    gettabsindex: function () {
      var id = this.$route.query.id
      return id
    }
  },
  created () {
    this.$route.query.id = 0;
     axios.get('/static/api/biyaofenlei.json').then(res => {
      var datalist = res.data
      this.seleclist = datalist
    })
  }
}
</script>
<style lang="scss">
@import "@/styles/common/px2rem.scss";
.listdetail{
  width: 70%;
  padding: px2rem(10);
}
.listimgdetail{
  width: px2rem(530);
  height: px2rem(240);
}
.listname::before{
    content: "";
    position: absolute;
    top: 36%;
    margin-left:px2rem(-130);
    height: px2rem(2);
    width: px2rem(100);
    background: #ccc;
}
.listname::after{
     content: "";
    position: absolute;
    top: 36%;
    height: px2rem(2);
    margin-left:px2rem(30);
    width: px2rem(100);
    background: #ccc;
}
.listname{
  position: absolute;
  top: 36%;
  margin-left: px2rem(250);
  font-size: px2rem(28);
}
.listbox{
  position: relative;
  height: px2rem(80);
}
.listimgshow{
  width: px2rem(128);
  height: px2rem(128);
}
.listshow{
  display: flex;
  padding: px2rem(20);
  justify-content: flex-start;
  flex-wrap: wrap;
}
.list-cate{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  font-size: px2rem(28);
}
</style>
