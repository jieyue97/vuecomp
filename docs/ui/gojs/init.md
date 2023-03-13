# 初始化

- 初始化 Api
  - 调用 init 方法，传参是一个函数，函数需要有返回值
  - domId：需要加载关系图的 div 上的 id，可以不传，如果一个页面需要多次引入组件，则该 domId 为必传且不能重复
  - style：设置样式
  - defalutOption：默认配置

```js
const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
  return {
    domId: 'base',
    style: { width: '300px', height: '100%' },
    defalutOption: {
      initialContentAlignment: go.Spot.Center,
    },
  }
})
```

- 节点初始化

```js
// 一个节点为 Node，内部可以创建 Panel，Shape，TextBlock，Picture。
// Panel：面板，可以把 Shape，TextBlock，Picture 向内堆放
// Shape：图像
// TextBlock：文本框
// Picture：图片
myDiagram.nodeTemplateMap.add(
  node_type || 'Normal', // 默认节点为普通节点
  $(
    go.Node,
    'Vertical', // 节点默认内部的排列方式，垂直(还有Spot、Auto，下面会介绍)
    new go.Binding('location', 'loc', go.Point.parse), //设定和绑定节点的初始位置
    { 这里可以写一些节点的配置 }
    // 这里可以写一些节点的配置
  )
)
```

```js
// 节点数据
// 节点的数据都存放在实例化画板的model属性里。

// 第一种存储数据的方式

myDiagram.model.nodeDataArray = [] //节点数据 格式为[{ key: "Alpha", color: "lightblue", loc: "400 0" }]
myDiagram.model.linkDataArray = [] //连线数据 格式为[{ from: "Beta", to: "Alpha" }]

// 第二种存储数据的方式

// 只需存储节点信息，但内有父级节点属性，这样显得不易乱
myDiagram.model = new go.TreeModel([…])

// 如果想更新已渲染画板的数据，就需要执行

myDiagram.rebuildParts()

// 或者

myDiagram.model = new go.GraphLinksModel(
  nodeDataArray, //此变量存储节点数据
  linkDataArray //此变量存储线条数据
);
```
