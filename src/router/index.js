import Vue from 'vue'
import Router from 'vue-router'
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
// webpack的api，一个函数方法，匹配文件
const requireComponent = require.context('../examples', true, /.vue$/)
const keyList = requireAll(requireComponent)
const routesList = []
// 循环获取到的文件，可在循环时处理文件名
keyList.forEach((config) => {
  const componentConfig = config.default
  routesList.push({
    path: '/' + componentConfig.name,
    name: componentConfig.name,
    component: config.default,
  })
})
console.log(routesList, 'routesList')
Vue.use(Router)

export default new Router({
  routes: routesList,
})
