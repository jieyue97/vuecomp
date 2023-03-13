# 下拉框树组件 gd-selectTree

常用的下拉框树组件,支持单选,多选,多个 tab 展示以及单个 tab 展示  
特征：el 没有此组件,提供多选和单选,全选,对数据灵活处理

### 基本用法

:::demo

```html
<template>
  <div style="width:50%">
    <gd-selectTree
      ref="selectTree"
      :selectAll="selectAll"
      @getValue="checkChange"
      :curValue="defaulData"
      :data="data"
      :obj="{
        id: 'id',
        label: 'label',
        children: 'children',
      }"
      checkStrictly
      clearable
      filterable
      multiple
      collapseTags
    />
  </div>
</template>
<script>
  export default {
    name: 'gd_pagin',
    data() {
      return {
        selectAll: true,
        defaulData: '',
        data: [
          {
            id: 1,
            label: '一级 1',
            children: [
              {
                id: 4,
                label: '二级 1-1',
                children: [
                  {
                    id: 9,
                    label: '三级 1-1-1'
                  },
                  {
                    id: 10,
                    label: '三级 1-1-2'
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            label: '一级 2',
            children: [
              {
                id: 5,
                label: '二级 2-1'
              },
              {
                id: 6,
                label: '二级 2-2'
              }
            ]
          },
          {
            id: 3,
            label: '一级 3',
            children: [
              {
                id: 7,
                label: '二级 3-1'
              },
              {
                id: 8,
                label: '二级 3-2'
              }
            ]
          }
        ]
      }
    },
    methods: {
      checkChange(val) {
        console.log(val)
      }
    }
  }
</script>
```

:::

#####

<mdtable mdname='selectTree'></mdtable>
