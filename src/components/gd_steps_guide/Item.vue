<template>
  <el-tree :data="data" :props="defaultProps"></el-tree>
</template>

<script>
export default {
  name: 'GdStepsGuideItem',
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
  props: {
    index: {
      // 每一行的索引
      type: Number,
    },
    source: {
      // 每一行的内容
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    data() {
      return this.source
    },
  },
  methods: {},
  mounted() {},
}
</script>
