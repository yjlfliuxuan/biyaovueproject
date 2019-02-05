import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    biyaoshopcarnum: 0,
    biyaoshopcar: localStorage.getItem('biyaoshopcar') ? JSON.parse(localStorage.getItem('biyaoshopcar')) : []
  },
  mutations: {
    changetotalnum (state, payload) {
      state.biyaoshopcarnum = payload
    },
    /**
     * 添加电影信息，
     * @param {Object} payload 添加的商品
     *      goodsImg:  商品图片
     *      goodsId:   商品ID
     *      goodsName: 商品名称
     *      goodsPrice: 商品价格
     *      goodsNum:   商品的数量
     */
    addgoodsNum (state, payload) {
      let goodid = payload.goodsid
      console.log(goodid)
      // 从json文件获取到的商品信息只有goodsid,从localStorage获得的商品数据只有goodsId,不过为了购物车和详情页能共用仓库中的数据，还是将localStorage的goodsId改为了goodsid
      console.log(payload)
      // 判断当前这个商品是否已经加入了购物车
      let index = -1
      let isZai = state.biyaoshopcar.some((item, i) => {
        console.log(item.goodsid)
        if (item.goodsid === goodid) {
          index = i
          console.log(i)
          return true
        }
        return false
      })
      if (isZai) {
        // 如果存在，就对其加一
        state.biyaoshopcar[index].goodsNum++
        console.log(index)
      } else {
        // 如果不存在，就push一个进去
        state.biyaoshopcar.push({
          goodsid: payload.goodsid,
          goodsImg: payload.goodimglog,
          goodsName: payload.title,
          goodsPrice: payload.price,
          goodsNum: 1
        })
      }
      ++state.biyaoshopcarnum
      // 最后将数据写入到localstoarge
      localStorage.setItem('biyaoshopcar', JSON.stringify(state.biyaoshopcar))
    },
    reducegoodsNum (state, payload) {
      let index = -1
      console.log(payload.goodsid)
      state.biyaoshopcar.forEach((item, i) => {
        console.log(item.goodsid)
        if (item.goodsid === payload.goodsid) {
          index = i
        }
      })

      // 判断是否有
      if (index > -1) {
        // 大于才是有
        let good = state.biyaoshopcar[index]
        --state.biyaoshopcarnum
        if (good.goodsNum > 1) {
          // 减一
          good.goodsNum--
        } else {
          // 删除
          state.biyaoshopcar.splice(index, 1)
        }
      }
      // 最后将数据写入到localstoarge
      localStorage.setItem('biyaoshopcar', JSON.stringify(state.biyaoshopcar))
      if (state.biyaoshopcar.length <= 0) {
        localStorage.removeItem('biyaoshopcar')
      }
    }
  },
  actions: {

  }
})
