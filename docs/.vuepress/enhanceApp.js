import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'gd_vue_components/dist/gd-components.min.css'
// import gd_vue_components from "gd_vue_components";
import '../../src/assets/iconfont/iconfont.css'
import axios from 'axios'
import VueJsonEditor from 'vue-json-editor'
import GdGo from '../../src/components_others/gd_gojs/components/init'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import CodeEditor from 'bin-code-editor';
// import "../../src/assets/iconfont/iconfont";
// import components from '../../src/components_others/gd_echart/inatall'
export default async ({ Vue, options, router, siteData }) => {
  Vue.use(elementUI)
  Vue.use(mavonEditor)
  const components_all = await import('gd_vue_components_all')
  Vue.use(components_all.default)
  const components = await import('gd_vue_components')
  Vue.use(components.default)
  // import('gd_vue_components').then(function(m) {
  //   Vue.use(m.default)
  // })
  Vue.component('VueJsonEditor', VueJsonEditor)
  Vue.component('GdGo', GdGo)
  // Vue.use(CodeEditor);
  Vue.prototype.$axios = axios
  Vue.mixin({
    mounted() {
      // 全局图标
      import('../../src/assets/iconfont/iconfont').then((icon) => {
        const requireAll = (requireContext) => requireContext.keys().map(requireContext)
        const requireComponent = require.context('../assets', true, /.json$/)
        requireAll(requireComponent).forEach((res) => {
          require(`../assets/${res.font_family}/iconfont.css`)
          require(`../assets/${res.font_family}/iconfont`)
        })
      })
      // 组件库
      // import('gd_vue_components').then(function(m) {
      //   Vue.use(m.default)
      // })
      // echart
      // import('../../src/components_others/gd_echart/inatall').then(function(m) {
      //   Vue.use(m.default)
      // })
      // 指令
      const tableHeight = require('./directive/tableHeight/index')
      Vue.directive('tableHeight', tableHeight)
    },
  })
}
