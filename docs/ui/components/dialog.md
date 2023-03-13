# 弹框组件 gd-dialog

-- 弹窗多用于操作确认和信息提示，内容简单，较轻量。（如：消息提示、确认消息、提交内容等…）  
-- 当前任务中需要中途填写信息或执行别的动作，当用户进行操作时会被触发，直到用户确认知晓后才可关闭。 在相对无信息干扰的环境下完成轻微任务。  
-- 弹窗对话框,支持拖拽，放大缩小

### 基本用法

-- 弹窗提供默认（白色标题栏）、主题色标题栏两种样式，可根据情况选用

::: demo

```html
<template>
  <div>
    <el-radio-group v-model="themeColor" @change="changeDialog">
      <el-radio label="#fff">默认样式</el-radio>
      <el-radio label="rgb(30, 129, 241)">主题色</el-radio>
    </el-radio-group>
    <el-button size="small" type="primary" @click="showDialog" style="margin-left: 20px">打开</el-button>
    <gd-dialog
      :titleColor="titleColor"
      :themeColor="themeColor"
      :title="'弹框'"
      :z-index="201"
      :closed.sync="prinftShow"
      :append-to-body="true"
      width="880px"
      height="500px"
      draggable
      maximizable
      :maximized.sync="maximized"
    >
      内容区域
    </gd-dialog>
  </div>
</template>

<script>
  // Dialog 对话框,支持拖拽，放大缩小
  // import { SlidDelete } from '../../dist/hg-vcomponents.min.js';
  // import { GdDialog } from "gd_vue_components";
  export default {
    name: 'el-sliddelete',
    data() {
      return {
        prinftShow: false,
        maximized: false,
        themeColor: '#fff',
        titleColor: '#000'
      }
    },
    components: {
      // GdDialog
    },
    methods: {
      showDialog() {
        this.prinftShow = true
      },
      changeDialog(row) {
        if (row === '#fff') {
          this.titleColor = '#000'
        } else {
          this.titleColor = '#fff'
        }
      }
    }
  }
</script>
```

:::

### 自定义尺寸

-- 可通过 size 自定义尺寸，默认提供 big（800px）、default（600px）、small（400px），默认使用 default

::: demo

```html
<template>
  <div>
    <el-radio-group v-model="size">
      <el-radio label="default">默认尺寸</el-radio>
      <el-radio label="big">大尺寸</el-radio>
      <el-radio label="small">小尺寸</el-radio>
    </el-radio-group>
    <el-button size="small" type="primary" @click="prinftShow=true" style="margin-left: 20px">打开</el-button>
    <gd-dialog :title="'弹框'" :size="size" :z-index="201" :closed.sync="prinftShow" :append-to-body="true" height="300px" draggable maximizable :maximized.sync="maximized">
      内容区域
      <template slot="footer">
        <div>
          <el-button size="small" type="primary">主按钮</el-button>
          <el-button size="small">次按钮</el-button>
        </div>
      </template>
    </gd-dialog>
  </div>
</template>

<script>
  // Dialog 对话框,支持拖拽，放大缩小
  // import { SlidDelete } from '../../dist/hg-vcomponents.min.js';
  // import { GdDialog } from "gd_vue_components";
  export default {
    name: 'el-sliddelete',
    data() {
      return {
        prinftShow: false,
        maximized: false,
        size: 'default'
      }
    },
    components: {
      // GdDialog
    }
  }
</script>
```

:::

### 操作按钮

-- 提供居左对齐、右对齐、居中对齐三种方式，在同个系统下采用其中一种布局方式，不建议混用

::: demo

```html
<template>
  <div>
    <el-radio-group v-model="btnTextAlign">
      <el-radio label="left">左对齐</el-radio>
      <el-radio label="center">居中对齐</el-radio>
      <el-radio label="right">右对齐</el-radio>
    </el-radio-group>
    <el-button size="small" type="primary" @click="prinftShow=true" style="margin-left: 20px">打开</el-button>
    <gd-dialog
      :title="'弹框'"
      size="default"
      :btnTextAlign="btnTextAlign"
      :z-index="201"
      :closed.sync="prinftShow"
      :append-to-body="true"
      height="300px"
      draggable
      maximizable
      :maximized.sync="maximized"
    >
      内容区域
      <template slot="footer">
        <div>
          <el-button size="small" type="primary">主按钮</el-button>
          <el-button size="small">次按钮</el-button>
        </div>
      </template>
    </gd-dialog>
  </div>
</template>

<script>
  // Dialog 对话框,支持拖拽，放大缩小
  // import { SlidDelete } from '../../dist/hg-vcomponents.min.js';
  // import { GdDialog } from "gd_vue_components";
  export default {
    name: 'el-sliddelete',
    data() {
      return {
        prinftShow: false,
        maximized: false,
        btnTextAlign: 'center'
      }
    },
    components: {
      // GdDialog
    }
  }
</script>
```

:::

### 基本用法

-- 用于用户在界面交互过程中的行为确认提醒

::: demo

```html
<template>
  <div>
    <el-button size="small" type="success" @click="onChange('成功', 0)">成功提示弹窗</el-button>
    <el-button size="small" type="danger" @click="onChange('错误', 1)">错误提示弹窗</el-button>
    <el-button size="small" type="warning" @click="onChange('警告', 2)">警告的提示弹窗</el-button>
    <gd-dialog size="small" :titleColor="'#000'" :z-index="201" :closed.sync="prinftShow" :append-to-body="true" height="144px" draggable maximizable :maximized.sync="maximized">
      <el-row>
        <el-col :span="2">
          <i :class="icons[isNum]" style="font-size: 30px" :style="{color: colors[isNum]}"></i>
        </el-col>
        <el-col :span="22">
          <div style="padding:0 10px;font-size: 20px;font-weight: bolder">这里是操作{{text}}提示信息</div>
        </el-col>
      </el-row>
      <template slot="footer">
        <div>
          <el-button size="small" type="primary" @click="prinftShow=false">我知道了</el-button>
        </div>
      </template>
    </gd-dialog>
  </div>
</template>

<script>
  // Dialog 对话框,支持拖拽，放大缩小
  // import { SlidDelete } from '../../dist/hg-vcomponents.min.js';
  // import { GdDialog } from "gd_vue_components";
  export default {
    name: 'el-sliddelete',
    data() {
      return {
        prinftShow: false,
        maximized: false,
        text: '成功',
        isNum: 0,
        icons: ['el-icon-success', 'el-icon-error', 'el-icon-warning'],
        colors: ['#67C23A', '#FF5E5E', '#F69E1B']
      }
    },
    components: {
      // GdDialog
    },
    methods: {
      onChange(text, num) {
        this.text = text
        this.isNum = num
        this.prinftShow = true
      }
    }
  }
</script>
```

:::

<mdtable mdname='dialog'></mdtable>
