<template>
  <div class='classify'>
    <Search></Search>
    <div class='boxdown'>
      <div class='linescroll'>
        <ul class='classify_list'>
          <router-link
            tag="li"
            :to="{ path: '/classify',query:{classid:index}}"
            v-for="(item,index) in classifylist"
            :key="index"
            @click.native="changeclassname(index)"
            :class="tabsindex == index ? 'y-act':''"
          >{{item}}</router-link>
        </ul>
        <div class='listdetail1'>
          <div class="Fenlei">
            <div class='listdetail'>
              <div class='imgbox'>
                <img
                  :src='fenleilist.imgurl'
                  class='listimgdetail'
                />
              </div>
              <div class='listbox'><span class='listname'>{{fenleilist.listtitle}}</span></div>
              <div class='listshow'>
                <div
                  v-for="(items,indexs) in fenleilist.goodlist"
                  :key="indexs"
                  class='list-cate'
                >
                  <img
                    :src='items.imgsrc'
                    class='listimgshow'
                  />
                  <span>{{items.title}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search'
import axios from 'axios'
export default {
  name: 'classify',
  components: {
    Search
  },
  data () {
    return {
      classifylist: ['咖啡', '饮食', '男装', '女装', '眼镜', '内衣配饰', '母婴', '鞋靴', '运动', '箱包', '美妆个护', '家纺', '餐厨', '电器', '家装', '家具', '数码', '汽配', '健康保健', '定制'],
      tabsindex: 0,
      fenleilist: {}
    }
  },
  methods: {
    changeclassname (index) {
      this.tabsindex = index
      axios.get('/static/api/biyaofenlei.json').then(res => {
        var datalist = res.data
        for (var i = 0; i < datalist.length; i++) {
          if (datalist[i].id === this.tabsindex) {
            this.fenleilist = datalist[i]
          }
        }
      })
    }
  },
  created () {
    axios.get('/static/api/biyaofenlei.json').then(res => {
      var datalist = res.data
      for (var i = 0; i < datalist.length; i++) {
        if (datalist[i].id === this.tabsindex) {
          this.fenleilist = datalist[i]
        }
      }
    })
  }
}
</script>
<style lang='scss'>
@import "@/styles/common/px2rem.scss";
.classify {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .boxdown {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .linescroll {
      overflow: auto;
      white-space: nowrap;
      width: 99.4%;
      height: 98%;
      border: px2rem(2) solid #413e3ec5;
      display: flex;
      ::-webkit-scrollbar {
        width: 0;
        height: 0;
        color: transparent;
      }
      .listdetail1 {
        width: 90%;
      }
      .classify_list {
        font-size: px2rem(30);
        height: 100%;
        width: 26%;
        overflow-y: scroll;
        border: px2rem(2) solid #413e3ec5;
        li {
          width: px2rem(100);
          line-height: px2rem(78);
          padding-left: px2rem(40);
        }
        .y-act {
          color: #7f4395;
          border-left: px2rem(4) solid #7f4395;
        }
      }
    }
  }
  .fenlei {
    width: 100%;
    .listdetail {
      width: 100%;
      .imgbox {
        width: 100%;
      }
    }
  }
  .listimgdetail {
    width: px2rem(530);
    height: px2rem(240);
    margin: px2rem(10) px2rem(10) px2rem(10) px2rem(30);
  }
  .listname::before {
    content: "";
    position: absolute;
    top: 36%;
    margin-left: px2rem(-130);
    height: px2rem(2);
    width: px2rem(100);
    background: #ccc;
  }
  .listname::after {
    content: "";
    position: absolute;
    top: 36%;
    height: px2rem(2);
    margin-left: px2rem(30);
    width: px2rem(100);
    background: #ccc;
  }
  .listname {
    position: absolute;
    top: 36%;
    margin-left: px2rem(250);
    font-size: px2rem(28);
  }
  .listbox {
    position: relative;
    height: px2rem(80);
  }
  .listimgshow {
    width: px2rem(128);
    height: px2rem(128);
  }
  .listshow {
    display: flex;
    padding: px2rem(20);
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 90%;
  }
  .list-cate {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33%;
    font-size: px2rem(28);
  }
}
</style>
