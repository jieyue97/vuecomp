const requireAll = requireContext => requireContext.keys().map(requireContext)

// webpack的api，一个函数方法，匹配文件
const requireComponent = require.context('../components', true, /index.vue$/)
const keyList = requireAll(requireComponent)

const components = {
  // 通过install来安装组件
  install(Vue) {
    // 循环获取到的文件，可在循环时处理文件名
    keyList.forEach(config => {
      const componentConfig = config.default
      if (!componentConfig.name.includes('GdIcon')) {
        Vue.component(componentConfig.name, componentConfig)
      }
    })
  }
}
// 注意这里的判断，很重要
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components)
}
export default components
