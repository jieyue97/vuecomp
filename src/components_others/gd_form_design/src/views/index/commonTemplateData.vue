<script>
import Vue from 'vue'
export default {
  name: 'preview',
  props: ['dataJs', 'dataHtml', 'dataCss'],
  render(h) {
    // 这里是关键，将string字符串转换成模板
    // 难点是String中包含了自定义组件，使用v-html是解析不了的
    if (this.dataHtml !== '') {
      this.$parent.setCss(this.dataCss)
      const result = Vue.extend({
        template: this.dataHtml,
        style: this.dataCss,
        ...this.dataJs
      })
      return h(result, {})
    }
  }
}
</script>
