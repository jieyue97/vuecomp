
<template>
  <div style="padding: 10px">
    <gdTitle left-type="primary">
      <span slot="label" style="padding-left:10px">123456</span>
    </gdTitle>
    ---------------------------
    <gd-title-tool left-type="primary">
      <span slot="label" style="padding-left:10px">123456</span>
    </gd-title-tool>
    ---------------------------
    <gd-title1 left-type="primary">
      <span slot="label" style="padding-left:10px">123456</span>
    </gd-title1>

  </div>
</template>
<script>
import gdTitle from '../components/gd_title_tool'
  export default {
    name:"gd_title_tool_item",
    components: {
      gdTitle
    }
  }
</script>
<style lang="scss" scoped>

</style>
