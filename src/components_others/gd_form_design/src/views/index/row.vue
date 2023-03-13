<template>
  <div>
    <el-row v-for="(item, index) in formTableList" :key="index" :style="{ background: item.color }">
      <row-column v-if="item.children && item.children.length > 0" :row-list="item.children"></row-column>
      <el-col v-else :style="{ background: item.color, width: item.widthStr, border: item.borderStyle }">2</el-col>
    </el-row>
  </div>
</template>

<script>
import RowColumn from './row'
export default {
  components: { RowColumn },
  props: {
    formTableList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style>
.el-row {
  margin-bottom: 0px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
<style lang="scss" scoped></style>
