import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'gd_vue_components/dist/gd-components.min.css'
export default async ({ Vue, options, router, siteData }) => {
  Vue.use(elementUI)
  const components = await import('gd_vue_components_all')
  Vue.use(components.default)
  // import('gd_vue_components').then(function(m) {
  //   Vue.use(m.default)
  // })
  // Vue.use(components)
  Vue.mixin({
    mounted() {},
  })
}
