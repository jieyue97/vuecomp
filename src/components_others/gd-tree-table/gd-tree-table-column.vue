<template>
  <div></div>
</template>
<script>
export default {
  name: 'GdTreeTableColumn',
  props: {
    prop: String,
    label: String,
    width: String
  },
  methods: {
    renderCell(h, { node }, width) {
      let text = ''
      if (this.$scopedSlots.default) {
        text = this.$scopedSlots.default(node)
      } else if (this.prop) {
        text = node.data[this.prop] || ''
      }

      return h(
        'span',
        {
          class: 'gd-tree-table__td',
          style: {
            width: width,
            display: 'inline-block'
          }
        },
        [h('span', null, text)]
      )
    }
  },
  created() {
    // 在父组件记录列组件实例
    this.$parent.columns.push(this)
  }
}
</script>
