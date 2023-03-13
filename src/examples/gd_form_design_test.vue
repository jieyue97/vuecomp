<template>
  <div style="padding: 10px">
    <RowTest :data-js="vueTemplateObj.js" :data-html="vueTemplateObj.html" :data-css="vueTemplateObj.css"></RowTest>
  </div>
</template>
<script>
import RowTest from '../components_others/gd_form_design/src/views/index/templateData'
export default {
  name: 'gd_form',
  components: {
    RowTest
  },
  data() {
    return {
      vueTemplateObj: {
        html: localStorage.getItem('templateHtml'),
        css: localStorage.getItem('templateCss'),
        js: eval(`(${localStorage.getItem('templateJs')})`)
      }
    }
  },
  mounted() {
    // const aa = localStorage.getItem('templateHtml')
    // const bb = localStorage.getItem('templateJs')
    // const cc = localStorage.getItem('templateCss')
    // this.vueTemplateObj = {
    //   html: aa,
    //   css: cc,
    //   js:
    // }
  }
}
</script>
<style lang="scss" scoped></style>
