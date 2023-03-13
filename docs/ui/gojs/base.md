# 使用方法

### 组件库版本要求

```js
gd_vue_components@0.4.56及以上版本
```

### 安装关系图依赖包

```js
// 注意这里的版本不要改变
cnpm i gojs@2.1.31 --save
```

### 引入关系图

```js
import GdGo from 'gd_vue_components/src/components_others/gd_gojs/components/init'
components: {
  GdGo
}
```

### 去除关系图水印

- 先下载 fix.js 文件并放到工程的 core 文件夹下，下载地址：<a href="/vuecomp/direct/fix.js" download="fix.js" style="color: #409eff ">fix.js</a>
- 在 package.json 文件的 scripts 对象里面添加 <font style="color:red;font-size:16px">"fix": "node core/fix.js"</font>
- 在项目根目录运行 <font style="color:red;font-size:16px">npm run fix </font> 即可去除水印

### 简单用例

- 具体配置项可查看配置模块

:::demo

```html
<template>
  <div style="height: 80px; width: 100%">
    <gd-go ref="GdGo"> </gd-go>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {
      const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
        return {
          domId: 'base',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      var node1 = $(go.Node, 'Auto', $(go.Shape, { figure: 'RoundedRectangle', fill: 'lightblue' }), $(go.TextBlock, { text: 'Alpha', margin: 5 }))
      myDiagram.add(node1)

      var node2 = $(go.Node, 'Auto', $(go.Shape, { figure: 'RoundedRectangle', fill: 'pink' }), $(go.TextBlock, { text: 'Beta', margin: 5 }))
      myDiagram.add(node2)

      myDiagram.add($(go.Link, { fromNode: node1, toNode: node2 }, $(go.Shape)))
    },
  }
</script>
```

:::
