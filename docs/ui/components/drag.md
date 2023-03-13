# 拖拽 组件 gd-drag

需要实现对 DOM 元素拖拽移动时,可以自定义类 demo

### 基本用法

:::demo

```html
<template>
  <div style="height:200px">
    <GdDrag class="demo" style="height: 50px;width: 50px;background: red;cursor: pointer;"></GdDrag>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  .wrapper {
    height: 300px;
    border: 2px solid #0c5cb3;
  }
  .demo {
    width: 80px;
    height: 80px;
    padding: 0;
    background: red;
  }
</style>
```

:::

### handle 支持选择器、元素对象、函数设置

:::demo

```html
<template>
  <div style="height:200px">
    <GdDrag class="demo" handle=".demo_header">
      <div class="demo_header" style="height:30px;background:red;cursor: pointer;">拖动</div>
      <div class="demo_header1">内容</div>
    </GdDrag>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
```

:::

### 限制拖拽方向

:::demo

```html
<template>
  <div style="height:200px">
    <el-row>
      <el-col :span="12">
        <div class="wrapper">
          <GdDrag class="demo" axis="h">
            <div style="height:30px;background:red;cursor: pointer;">水平方向</div>
          </GdDrag>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="wrapper" style="margin-top:100px">
          <GdDrag class="demo" axis="v">
            <div style="height:30px;background:red;cursor: pointer;">垂直方向</div>
          </GdDrag>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
```

:::

### 锁定拖拽范围

target 支持选择器、元素对象、函数设置

:::demo

```html
<template>
  <div class="wrapper" id="target" style="height: 300px;border: 2px solid #0c5cb3;">
    <GdDrag target="#target">
      <div style="height:30px;background:red;cursor: pointer;">锁定访问</div>
    </GdDrag>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
```

:::

#####

<mdtable mdname='drag'></mdtable>
