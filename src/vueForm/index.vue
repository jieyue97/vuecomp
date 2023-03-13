<script>
import Vue from 'vue'
import comp from './index.js'
export default {
  name: 'FormRunner',
  props: ['itemData', 'moduleObj'],
  methods: {},
  render(h) {
    // 设置样式
    const templeteData = this.itemData
    const dataHtml = templeteData.html
    const compList = comp
    // 引入插槽
    const slots = Object.keys(this.$slots)
      .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      .map((vnode) => {
        vnode.context = this._self
        return vnode
      })
    if (dataHtml !== '') {
      const result = Vue.extend({
        props: {
          moduleObj: {
            type: Object,
            default: () => {
              return this.moduleObj
            },
          },
        },
        template: dataHtml,
        components: { ...compList },
      })
      return h(result, {}, slots)
    }
  },
}
</script>
