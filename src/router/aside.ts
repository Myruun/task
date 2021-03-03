const roters = [
  {
    path: '/',
    name: '首页',
    icon: 'el-icon-monitor',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/Layout/Index.vue'),
    meta: {
      keepAlive: false
    },
    children: [
      {
        path: '/',
        name: '工作平台',
        icon: 'el-icon-monitor',
        type: 0,
        key: 0,
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Index.vue')
      },
      {
        path: '/everyday',
        name: '日常列表',
        icon: 'el-icon-alarm-clock',
        type: 0,
        key: 2,
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Everyday/Index.vue'),
        meta: {
          keepAlive: false
        }
      },
      {
        path: '/set',
        name: '系统设置',
        icon: 'el-icon-setting',
        type: 0,
        key: 1,
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Tool/Set.vue'),
        meta: {
          keepAlive: false
        }
      },
      {
        path: '/versions',
        name: 'Versions',
        type: 2,
        key: 3,
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Tool/Versions.vue')
      }
    ]
  }
]

export default roters
