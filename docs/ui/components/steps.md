# 步骤条组件 gd-steps

gd-steps 步骤条

-- 当完成的目标需要分布来执行，且带有明确的先后次序  
-- 一个复杂任务需要拆分多个步骤完成，步骤数量不宜过多，3-5 个为宜

### 基础用法

:::demo

```html
<template>
  <div>
    <gd-steps :data="stepsData[stepsIcon]" :current="currentStep"></gd-steps>
    <div style="margin-top:10px">
      <el-button @click="currentStep--">上一步</el-button>
      <el-button @click="currentStep++">下一步</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gd_steps',
    data() {
      return {
        stepsIcon: 0,
        stepsData: [
          [
            {
              label: '基本信息',
              icon: 'el-icon-delete-solid'
            },
            {
              label: '功能服务',
              icon: 'el-icon-platform-eleme'
            },
            {
              label: '数据服务服务',
              icon: 'el-icon-s-tools'
            }
          ]
        ],
        currentStep: 0
      }
    },
    components: {},
    methods: {}
  }
</script>
```

:::

<mdtable mdname='steps'></mdtable>
