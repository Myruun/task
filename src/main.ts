import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// import '@/plugin/elementUi'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

import '@/assets/css/element-variables.scss'

// 导入样式
import '@/assets/css/variables.scss'
import '@/assets/css/base.scss'
import '@/assets/css/infont.css'

// 导入js

import '@/common/variable'

import Methods from '@/common/index'

// 全局组件
import Icon from '@/components/icon/icon.vue'

const app = createApp(App)

app.use(router).mount('#app')

app.use(ElementPlus, { locale })
app.component('Icon', Icon)

app.config.globalProperties.$Methods = Methods
