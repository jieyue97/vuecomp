# 事件与方法

- 节点触发事件

```js
{
  // 鼠标移入事件 （e.event可以获取事件的记录信息，obj为不可读性的移入节点信息）
  mouseEnter: (e, obj) => {},
  // 鼠标移出事件
  mouseLeave: (e, obj) => {},
  // 选中节点事件 (node.isSelected表示被选中的节点)
  selectionChanged: (node) => {},
  // 单击节点事件
  click: (e, node) => {},
  // 双击节点事件
  doubleClick: (e, node) => {},
  // 鼠标悬停事件
  mouseHover: (e, node) => {
    // 注意：需要在画布定义悬停时间
    myDiagram.toolManager.hoverDelay = 500 ;
  },
  // 线连接事件
  linkConnected: function (node, link, port) {
      // 每个参数会触发两次，第一次是出发节点，第二个是目的节点
      console.log(port.portId) //可以获取到连线时，出发点和目的点的节点名称
  },
  // 线断开事件
  linkDisconnected: function(node, link, port) {}
}
```

- 监听事件

```js
// 空白背景点击事件
myDiagram.addDiagramListener('BackgroundSingleClicked', function (e) {})
// 监听删除事件
myDiagram.addDiagramListener('SelectionDeleted', function (e) {
	e.subject.each(function (n) {
	  // 删除的东西会依次遍历出来
	})
})
// 监听节点文本框修改事件
// 在TextBlock的配置中写
textEdited: function (tb, olds, news) {
    console.log('oldString: ' + olds + 'newString: ' + news)
}
// 监听节点生成事件
myDiagram.addDiagramListener('PartCreated', function (e) {

})
// 连接线的生成事件
myDiagram.addDiagramListener('LinkDrawn', function (e) {})
```

- 节点方法

```js
// 遍历一个节点的连接点（例子：把每个节点的连接点遍历出来，设置不透明（obj为节点的不可读信息））
obj.ports.each((item) => {
  item.opacity = 1
})
// 遍历一个节点的子节点
// Obj为不可读性的节点信息
obj.findTreeChildrenNodes().each((item) => {})

// 遍历画板所有节点
myDiagram.nodes.each(function (node) {})

// 添加新节点
myDiagram.model.addNodeData({ category: 'Normal', text: '新节点' })

// 删除选中节点
myDiagram.model.removeNodeData

// 获取选中节点的信息
myDiagram.selection.first() //想获取节点信息还需要加个data属性，连线信息加个links属性如果是选中节点数量
myDiagram.selection.size

// 编辑节点文本
myDiagram.commandHandler.editTextBlock()

// 修改节点属性
myDiagram.model.setDataProperty(this.myDiagram.selection.first(), 'category', 'Model')

// 通过节点属性key来找到节点
myDiagram.model.findNodeDataForKey(xxx) //例如要找的节点key=’xxx’

// 通过名称寻找该节点下的图形，面板等
node.findObject('LATESTVAL') //node为该节点的不可读信息

// 修改该图形，面板等的属性
xxx.setProperties({'visible': false}) // xxx为通过findObject找到的图形，面板等

// 获取节点关联的线
node.findLinksConnected().each(function(link) {} //node为该节点的不可读信息

// 获取节点与之连线的节点
node.findNodesConnected().each(function (node) {
  // 只要有连接关系，间接连接也算
  connectedNodes.push(node.data)
})

// 获取以from方向连接的节点
node.findNodesOutOf().each(function (node) {})

// 获取以to方向连接该的节点
node.findNodesInto ().each(function (node) {})
```
