# 右键菜单 组件 gd-contextmenu

右键操作

### 基本用法

:::demo

```html
<template>
  <div style="height:200px">
    <div class="action-box">
      右键触发区域
    </div>
    <gd-contextmenu target=".action-box" :data="menu" @click="handleClick"></gd-contextmenu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menu: [
          { icon: 'el-icon-view', label: '查看' },
          { icon: 'el-icon-edit', label: '编辑' },
          {
            icon: 'el-icon-finished',
            label: '完成',
            children: [{ label: '二级菜单1' }, { label: '二级菜单2' }, { label: '二级菜单3' }, { label: '二级菜单4' }]
          },
          { icon: 'el-icon-delete', label: '删除' },
          { divider: true },
          { icon: 'el-icon-document', label: '属性' }
        ]
      }
    },
    methods: {
      handleClick(item, vm) {
        // 处理点击菜单后的触发动作
        this.$message.success(`点击了${item.label}`)
      }
    }
  }
</script>
<style>
  .action-box {
    height: 100%;
    width: 100%;
    text-align: center;
    line-height: 150px;
    font-size: 3rem;
    background-color: #eee;
    color: #fff;
    font-weight: bold;
  }
</style>
```

:::

#####

<mdtable mdname='contextmenu'></mdtable>
