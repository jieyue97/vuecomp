# 分页组件 gd-pagination

当数据量过多时，使用分页分解数据。  
特征：支持背景颜色修改，自动滚动，是否显示的功能

### 基本用法

-- 常见的分页用法，用于数据量或分页数适中的场景，进行基础翻页操作

:::demo

```html
<template>
  <div>
    <gd-pagination :total="total" layout="prev, pager, next" :background="false" />
  </div>
</template>
<script>
  export default {
    name: 'gd_pagin',
    data() {
      return {
        total: 100
      }
    }
  }
</script>
```

:::

### 高级用法

-- 数据量庞大，分页数较多时使用

:::demo

```html
<template>
  <div>
    <div style="padding: 10px">
      <el-checkbox v-model="has" label="total">显示总数量</el-checkbox>
      <el-checkbox v-model="has" label="jumper">显示“前往…”</el-checkbox>
    </div>
    <gd-pagination :total="total" :layout="layout" :page="page" :limit="limit" :background="background" :autoScroll="autoScroll" :hidden="hidden" />
  </div>
</template>
<script>
  export default {
    name: 'gd_pagin',
    data() {
      return {
        has: ['total', 'prev', 'pager', 'next'],
        total: 100,
        page: 1,
        limit: 10,
        //分页背景颜色 默认灰色
        background: true,
        autoScroll: true,
        layout: 'total, prev, pager, next',
        hidden: false
      }
    },
    watch: {
      has: {
        deep: true,
        handler(val) {
          if (val) {
            this.onChange(val)
          }
        }
      }
    },
    methods: {
      onChange(row) {
        this.layout = row.join(',')
      }
    }
  }
</script>
```

:::

#####

<mdtable mdname='pagination'></mdtable>
