<template>
  <div class="gd_form_line">
    <!-- <GdFormLine v-bind="$attrs"> </GdFormLine> -->
  </div>
</template>

<script>
// import GdFormLine from '../../../src/components_others/gd_form_line/src/components/form-designer'
export default {
  components: {
    // GdFormLine
  },
  name: `GdFormLineItem`
}
</script>
<style lang="scss">
.gd_form_line {
  table {
    display: inline-table;
  }
  position: absolute;
  width: calc(100% - 32px);
  padding: 10px;
  top: 0;
  left: 10px;
}
</style>
