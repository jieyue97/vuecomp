# 标题组件 gd-title

特征：

能快速成型标题,简单的标题，具有明显的宽高。
支持多功能标题插入，比如可插入 select/input 作为标题内容。

### 基本用法

--普通标题

--默认无左边框，左边框，左边框leftType五种样式（primary，success，info，warning，danger）

::: demo

```html
<template>
  <div style="padding-bottom: 20px">
    <el-radio-group v-model="leftType">
      <el-radio label="primary">默认标题</el-radio>
      <el-radio label="success">成功标题</el-radio>
      <el-radio label="info">信息标题</el-radio>
      <el-radio label="warning">警告标题</el-radio>
      <el-radio label="danger">错误标题</el-radio>
    </el-radio-group>
  </div>
  <div>
    <gdTitleTool :title="gdTitle" :leftType="leftType"></gdTitleTool>
  </div>
</template>

<script>
  export default {
    name: 'gd_title_in',
    data() {
      return {
        gdTitle: '标题',
        leftType: 'primary'
      }
    }
  }
</script>
```

:::

### 基本用法

--普通标题-更换背景颜色

::: demo

```html
<template>
  <div style="padding-bottom: 20px">
    <el-color-picker v-model="color1"></el-color-picker>
  </div>
  <div>
    <gdTitleTool :leftType="leftType" :bg-color="color1">
      <template slot="label">
        <span style="color: white;padding-left: 10px">{{gdTitle}}</span>
      </template>
    </gdTitleTool>
  </div>
</template>

<script>
  export default {
    name: 'gd_title_in',
    data() {
      return {
        color1: '#0C68C5',
        gdTitle: '标题',
        leftType: 'primary'
      }
    }
  }
</script>
```

:::

### 进阶用法

-可添加其他组件作为 title，开启右侧功能按钮

::: demo

```html
<template>
  <div>
    <gdTitleTool isRight leftType="primary" :is-padding="isPadding">
      <template slot="label">
        <el-select size="small" v-model="value" placeholder="请选择" style="line-height: 40px;padding-left: 10px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </template>
      <template slot="isRight">
        <el-button type="text" @click="isShow"><i class="el-icon-share"></i></el-button>
      </template>
    </gdTitleTool>
  </div>
</template>

<script>
  export default {
    name: 'gd_title_in',
    data() {
      return {
        isPadding: false,
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          },
          {
            value: '选项3',
            label: '蚵仔煎'
          },
          {
            value: '选项4',
            label: '龙须面'
          },
          {
            value: '选项5',
            label: '北京烤鸭'
          }
        ],
        value: ''
      }
    },
    methods: {
      isShow() {
        alert('操作')
      }
    }
  }
</script>
```

:::

<mdtable mdname='title'></mdtable>
