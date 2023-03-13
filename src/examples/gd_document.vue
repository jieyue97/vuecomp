<template>
  <div class="vueForm">
    <div class="header">智能表单文档</div>
    <div class="container">
      <div class="left">
        <el-tree :data="leftData" :props="defaultProps" @node-click="handleNodeClick" default-expand-all></el-tree>
      </div>
      <div class="right">
        <RightContent :itemData="itemData" :moduleObj="moduleObj" />
      </div>
    </div>
  </div>
</template>
<script>
import { leftData } from '../vueForm/data/left_data'
import { mapData } from '../vueForm/data/map'
import rightData from '../vueForm/data/right_data'
import RightContent from '../vueForm/index.vue'
export default {
  name: 'gd_document',
  data() {
    return {
      templateStr: '',
      moduleObj: {},
      itemData: {
        html: '',
      },
      leftData: leftData,
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
  components: { RightContent },
  mounted() {
    // this.handleNodeClick(leftData[0])
    this.handleNodeClick({ id: 'operation_panel' })
  },
  methods: {
    handleNodeClick(val) {
      const data = rightData[val.id]
      this.setCompTemplate(data)
    },
    // 生成组件模板代码
    setCompTemplate(data) {
      this.templateStr = ''
      this.moduleObj = {}
      const newAction = this.resetCopmName()
      for (let i = 0; i < data.length; i++) {
        this.moduleObj[data[i].id] = data[i]
        this.templateStr = this.templateStr + newAction.get(data[i].name)(data[i])
      }
      this.$set(this.itemData, 'html', `<div>${this.templateStr}</div>`)
    },
    // 重定义组件名称
    resetCopmName() {
      const actions = new Map(mapData)
      return actions
    },
  },
}
</script>
<style>
html,
body,
#app {
  height: 100%;
  color: #1c1e21;
}
.vueForm .el-tree-node__content {
  height: 30px;
}
</style>
<style lang="scss" scoped>
.vueForm {
  height: calc(100% - 5px);
  overflow: hidden;
  .header {
    height: 30px;
    padding: 10px 21px;
    font-size: 20px;
    line-height: 30px;
    font-weight: bolder;
    box-shadow: 0 1px 2px 0 #0000001a;
  }
  .container {
    height: calc(100% - 50px);
    display: flex;
    .left {
      width: 300px;
      padding: 8px;
      border-right: 1px solid #dadde1;
      overflow-y: auto;
      .first {
        width: 286px;
        // height: 28px;
        // line-height: 28px;
        padding: 5px 10px;
      }
      .seconed {
        padding: 5px 10px;
      }
      // background: blueviolet;
    }
    .right {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }
  }
}
</style>
