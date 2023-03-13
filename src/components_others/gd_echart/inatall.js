const components = {
  // 通过install来安装组件
  install(Vue) {
    Vue.component('GdEchart', require('./index.vue'))
  }
}
// 注意这里的判断，很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components)
}
export default components
