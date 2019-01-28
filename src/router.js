import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Classify from './views/classify.vue'
import Shopcar from './views/shopcar.vue'
import Center from './views/center.vue'
import First from './views/first.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: '',
        redirect: '/first'
      },
      {
        // 主页
        path: 'first',
        name: 'first',
        component: First
      }, {
        path: 'classify',
        name: 'classify',
        component: Classify
      }, {
        path: 'shopcar',
        name: 'shopcar',
        component: Shopcar
      }, {
        path: 'center',
        name: 'center',
        component: Center
      },
      {
        // 默认配置
        path: '*',
        redirect: '/first'
      }
      ]
    }
  ]
})
