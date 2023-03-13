<template>
  <CommonTemplateData v-bind="$attrs"></CommonTemplateData>
</template>

<script>
import CommonTemplateData from './commonTemplateData'
export default {
  name: 'TemplateData',
  components: { CommonTemplateData },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
  },
  methods: {
    setCss(templateCss) {
      // 动态插入css
      let css = templateCss
      let head = document.getElementsByTagName('head')[0]
      let style = document.createElement('style')
      style.type = 'text/css'
      if (style.styleSheet) {
        style.styleSheet.cssText = css
      } else {
        style.appendChild(document.createTextNode(css))
      }
      head.appendChild(style)
    }
  }
}
</script>
<style></style>
<style lang="scss" scoped></style>
