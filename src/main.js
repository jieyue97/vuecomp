import Vue from 'vue'
import App from './App'
import router from './router'
// import '../dist/hg-vcomponents.min.css';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont'
import './assets/iconfont/iconfont.js'

import 'gd_vue_components_all/dist/gd-components.min.css'
// 线上
import gd_vue_components from 'gd_vue_components_all'
import GdIcon from 'gd_vue_components/src/components_others/gd_icon/index.vue'
Vue.component('GdIcon', GdIcon)
// import tableHeight from './components/gd_table/directive/tableHeight'
import './icons'
//  本地
// import components from './components'
Vue.config.productionTip = false
Vue.use(Element)
// Vue.use(tableHeight)
Vue.use(gd_vue_components)
// 全局组件
// Vue.use(components)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
