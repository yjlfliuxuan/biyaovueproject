import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [{
        path: '',
        redirect: '/first/tuijian'
      },
      {
        // 主页
        path: 'first',
        component: () => import('./views/first.vue'),
        children: [{
          path: '',
          redirect: '/first/tuijian'
        },
        {
          path: 'tuijian',
          name: 'tuijian',
          component: () => import('./components/Tuijian/index.vue')
        },
        {
          path: 'coffee',
          name: 'coffee',
          component: () => import('./components/Coffee/index.vue')
        },
        {
          path: 'yinshi',
          name: 'yinshi',
          component: () => import('./components/Yinshi/index.vue')
        },
        {
          path: 'nanzhuang',
          name: 'nanzhuang',
          component: () => import('./components/Nanzhuang/index.vue')
        },
        {
          path: 'nvzhuang',
          name: 'nvzhuang',
          component: () => import('./components/Nvzhuang/index.vue')
        },
        {
          path: 'yanjing',
          name: 'yanjing',
          component: () => import('./components/Yanjing/index.vue')
        },
        {
          path: 'neiyipeishi',
          name: 'neiyipeishi',
          component: () => import('./components/Neiyipeishi/index.vue')
        },
        {
          path: 'muying',
          name: 'muying',
          component: () => import('./components/Muying/index.vue')
        },
        {
          path: 'xiexue',
          name: 'xiexue',
          component: () => import('./components/Xiexue/index.vue')
        },
        {
          path: 'yundong',
          name: 'yundong',
          component: () => import('./components/Yundong/index.vue')
        },
        {
          path: 'xiangbao',
          name: 'xiangbao',
          component: () => import('./components/Xiangbao/index.vue')
        },
        {
          path: 'meizhuanggehu',
          name: 'meizhuanggehu',
          component: () => import('./components/Meizhuanggehu/index.vue')
        },
        {
          path: 'jiafang',
          name: 'jiafang',
          component: () => import('./components/Jiafang/index.vue')
        },
        {
          path: 'canchu',
          name: 'canchu',
          component: () => import('./components/Canchu/index.vue')
        },
        {
          path: 'dianqi',
          name: 'dianqi',
          component: () => import('./components/Dianqi/index.vue')
        },
        {
          path: 'jiazhuang',
          name: 'jiazhuang',
          component: () => import('./components/Jiazhuang/index.vue')
        },
        {
          path: 'jiaju',
          name: 'jiaju',
          component: () => import('./components/Jiaju/index.vue')
        },
        {
          path: 'shuma',
          name: 'shuma',
          component: () => import('./components/Shuma/index.vue')
        },
        {
          path: 'qipei',
          name: 'qipei',
          component: () => import('./components/Qipei/index.vue')
        },
        {
          path: 'jiankang',
          name: 'jiankang',
          component: () => import('./components/Jiankang/index.vue')
        },
        {
          path: 'dingzhi',
          name: 'dingzhi',
          component: () => import('./components/Dingzhi/index.vue')
        }
        ]
      }, {
        path: 'classify',
        component: () => import('./views/classify.vue'),
        children: [{
          path: '',
          redirect: '/classify/fenlei'
        },
        {
          path: 'fenlei',
          name: 'fenlei',
          component: () => import('./components/Fenlei/index.vue')
        }
        ]
      }, {
        path: 'shopcar',
        name: 'shopcar',
        component: () => import('./views/shopcar.vue')
      }, {
        path: 'center',
        name: 'center',
        component: () => import('./views/center.vue')
      }
      ]
    },
    {
      path: 'searchhot',
      name: 'searchhot',
      component: () => import('./views/searchhot.vue')
    },
    {
      // 默认配置
      path: '*',
      redirect: '/first/tuijian'
    }
  ]
})
