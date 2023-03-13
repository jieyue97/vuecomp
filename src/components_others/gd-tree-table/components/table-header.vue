<template>
  <div :class="`${prefixCls}__header`">
    <span v-for="(item, index) in columns" :class="`${prefixCls}__th`" :key="index" :style="{ width: `${widthArray[index]}` }">
      <span>{{ item.label }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'GdTreeTableHeader',
  props: {
    columns: Array,
    widthArray: Array
  },
  data() {
    return {
      prefixCls: 'gd-tree-table'
    }
  }
}
</script>
<style scoped>
.gd-tree-table__th {
  display: inline-block;
}
</style>
