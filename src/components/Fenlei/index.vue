<template>
   <div class="Fenlei">
      <div class='listdetail'>
          <div class='imgbox'>
          <img :src='fenleilist.imgurl' class='listimgdetail'/>
          </div>
          <div class='listbox'><span class='listname'>{{fenleilist.listtitle}}</span></div>
          <div class='listshow'>
             <div v-for="(items,indexs) in fenleilist.goodlist" :key="indexs" class='list-cate'>
             <img :src='items.imgsrc' class='listimgshow'/>
             <span>{{items.title}}</span>
             </div>
          </div>
      </div>
   </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'fenlei',
  data () {
    return {
      fenleilist: {},
      classifyid: 0
    }
  },
  // computed: {
  //   tabindex: function () {
  //     return Number(this.$router.history.current.query.classid)
  //   }
  // },
  created () {
    // this.classifyid = Number(this.$router.history.current.query.classid)
    axios.get('/static/api/biyaofenlei.json').then(res => {
      var datalist = res.data
      for (var i = 0; i < datalist.length; i++) {
        if (datalist[i].id === this.classifyid) {
          this.fenleilist = datalist[i]
        }
      }
    })
  }
}
</script>
<style lang="scss">
@import "@/styles/common/px2rem.scss";
.fenlei{
  width: 100%;
  .listdetail{
  width: 100%;
  .imgbox{
    width: 100%;
  }
 }
}
.listimgdetail{
  width: px2rem(530);
  height: px2rem(240);
  margin: px2rem(10) px2rem(10) px2rem(10) px2rem(20);
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
  width: 90%;
}
.list-cate{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  font-size: px2rem(28);
}
</style>
