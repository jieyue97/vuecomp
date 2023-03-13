# 配置项

### 配置相关

- 初始化配置（defalutOption）

```js
{
  initialContentAlignment: go.Spot.Center, // 居中显示
  isReadOnly: true, // 只读，无法编辑操作
  allowMove: true, // 允许拖动画板
  allowDragOut:true, // 允许拖拽节点
  allowDelete: true, // 允许删除节点
  allowCopy: true, // 允许复制节点
  allowClipboard: true, // 允许粘贴节点
  scale: 1.0, // 初始视图大小比例
  minScale: 0.5, // 最小视图的缩小比例
  maxScale: 1.5, // 最大视图的放大比例
  scrollMargin: 500, // 默认下拖拽画布的时候边界是已最外的节点为边距，这个就是增加边距的，类似padding设置
  fixedBounds: , //设置图表边界

  'undoManager.isEnabled': true, // 支持 Ctrl-Z 和 Ctrl-Y 操作 （撤回和复原）
  'toolManager.hoverDelay': 100, // tooltip提示显示延时
  'toolManager.toolTipDuration': 10000, // tooltip持续显示时间
  'grid.visible': true, // 显示网格
  'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom, // 有鼠标滚轮事件放大和缩小，而不是向上和向下滚动
  'clickCreatingTool.archetypeNodeData': { category: 'Normal', text: '新节点', notice: ''}, // 双击新建节点(可以写入节点的默认信息)；
}
```

- 节点配置

```js
{
	// 节点阴影设置
	isShadowed: true,
	shadowOffset: new go.Point(3, 3), //阴影的位置偏移
	shadowColor: '#C5C1AA',

	zOrder: 99999//层级
	movable:false,//是否可拖动
	deletable:false,//是否可删除
	selectable: false, //是否可选择
	selectionAdorned:false, //显示选中边框
	copyable:false, //可复制的
	location, //节点坐标，还不会用
	minLocation: new go.Point(0, 0), //节点坐标最小位置
	maxLocation: new go.Point(9999, 0), //节点坐标最大位置
	isSelected:true, //默认fasle,true(操作型属性无法在模板定义，只能在节点生成后操作)例如，节点或线对象.isSelected=true;
	reshapable:true, // 重塑(改变shape形状边界时使用，将影响节点大小)
	resizable: true, // 可调整大小的(手动调整节点大小时，节点内容显示区域时使用)
	resizeCellSize: new go.Size(10, 10), //可调整的范围
	rotatable:true, // 可旋转的

	//这三个一起配合，固定选中的节点框只选中名为BODY的面板
	locationSpot: go.Spot.Center,
	locationObjectName: 'BODY',
	selectionObjectName: 'BODY'

	//固定连接点位置
	fromSpot: go.Spot.RightCenter,
	toSpot: go.Spot.LeftCenter

	desiredSize: new go.Size(160, 40), //设置大小

	avoidable:false,  //线绕开经过的节点,不从节点穿过，Link.routing 为AvoidsNodes才能使用
	avoidableMargin: new go.Margin(12,12,12,12) // 线绕开经过的节点的边距，默认6,6,6,6
}
```

- 树结构配置

```js
myDiagram.layout = $(go.TreeLayout, {
  // 树结构
  angle: 0, //树结构的方向
  layerSpacing: 35, //节点之间的距离
  isOngoing: false, // 是否开启自动布局
  isTreeExpanded: false, // 是否展开子节点
})
```

- 连接线的配置

```js
myDiagram.linkTemplate = $(
  go.Link,
  {
    routing: go.Link.Orthogonal, // 线会自动90度转弯（AvoidsNodes自动绕开节点）
    curve: go.Link.JumpGap, // 线与线相交会自动不重叠（还有go.Link.Bezier贝塞尔曲线）
    corner: 3, // 拐角弧度
    toEndSegmentLength: 30, //目的点线的固定距离（如果设置了自动拐角就是最短距离）
    fromEndSegmentLength: 30, //出发点线的固定距离（如果设置了自动拐角就是最短距离）
    fromShortLength, //设置线的出发点到端口的距离
    toShortLength, //设置线的结束点到端口的距离
    zOrder: -111, //图像层级
    selectable: false, //连接线是否可选
    fromSpot: go.Spot.LeftRightSides, //连线出发点强制为（new go.Spot(0.5, 0.5, 0, -25)为自定义）
    toSpot: go.Spot.LeftRightSides, //连线目的点强制为
    reshapable: true,
    resegmentable: true,
    relinkableFrom: true, //出发点是否可以改变
    relinkableTo: true, //目标点是否可改变
    adjusting: go.Link.Stretch,
    fromMaxLinks: 1, //限制一个连接点的连接次数
    toMaxLinks: 1, //限制一个连接点的连接次数
  },

  // 如果link数据有fromSpot，toSpot属性则可绑定
  new go.Binding('fromSpot', 'fromSpot', go.Spot.parse),
  new go.Binding('toSpot', 'toSpot', go.Spot.parse),

  $(go.Shape, {
    strokeWidth: 2, // 节点连线宽度
    stroke: '#57CFE3', // 节点连线颜色
  }),
  $(go.Shape, {
    toArrow: 'Standard',
    scale: 3, // 箭头放大倍数
    fill: '#57CFE3', // 箭头填充色
    stroke: null, // 外边框颜色
  })
)
```

- 鼠标框选配置

```js
myDiagram.toolManager.dragSelectingTool = null // 禁止框选

myDiagram.toolManager.dragSelectingTool.box = $(
  go.Part,
  {
    layerName: 'Tool',
    selectable: false,
  },
  $(go.Shape, { name: 'SHAPE', fill: null, stroke: 'chartreuse', strokeWidth: 3 })
)
```

- 节点选中时边框的配置

```js
$(go.Adornment, 'Auto', $(go.Shape, { fill: null, stroke: 'deepskyblue', strokeWidth: 1.5, strokeDashArray: [4, 2] }), $(go.Placeholder))
```

- 全局缩略图的配置

```js
let myOverview = $(go.Overview, 'myOverviewDiv', { observed: mySelf.myDiagram }) // 'myOverviewDiv'为缩略图dom的id名；
```

- 线段吸附网格配置

```js
myDiagram.toolManager.draggingTool.isGridSnapEnabled = true // 注意：要先打开网格

myDiagram.toolManager.draggingTool.gridSnapCllSpot = go.Spot.MiddleBottom // 设置网格编辑捕捉对齐点
```

- 面板的配置

```js
// 声明创建一个新的面板对象,自定义方式可参考mySelf.myDiagram.nodeTemplate
$(
  go.Panel,
  'Auto', // 布局为自动（还有自定义位置Position）
  {
    minSize: new go.Size(160, 40), //最小大小
    visible: false, // 不可见
    name: 'BODY', //面板名称
  },
  $(
    go.Shape,
    'RoundedRectangle', //为圆角矩形（还有矩形'Rectangle'）
    {
      fill: color || '#5D7092', // 内填充色
      stroke: '#FFF', // 外边框颜色 null 为无
      strokeWidth: 1, // 外边框粗细
      background: '#e6eefb', //可以理解为是panel的背景
      angle: 0, // 应该是旋转角度
      position: new go.Point(0, 95), //如果开启了自定义位置这个就要写
      desiredSize: new go.Size(120, 100), //宽高 不设置宽高表示自适应
      // 放在上一级的哪个位置，除了特定的值还可以自定义，前面两个参数表示几倍于上一级的宽高的位置，后面设置具体x，y的位置
      alignment: new go.Spot(1, 0.5, 100, 0),
    },
    new go.Binding('figure', 'figure') // 声明并创建一个新的图形
  ),
  // 编辑文本域
  $(go.TextBlock, '默认', {
    font: '12pt Helvetica, Arial, sans-serif',
    stroke: 'whitesmoke', // 外边框颜色
    width: 125, // 文本区域宽度，会覆盖minSize等但仍会生效
    maxLines: 2, //最多显示几行,
    maxSize: new go.Size(360, NaN), // 最大大小，NaN表示自适应，这个目前试出来shape不能用，使用Spot布局这个属性无法使用
    wrap: go.TextBlock.WrapFit, //文本域可换行，大小自适应（还有文本决定宽高go.TextBlock.WrapDesiredSize，文本不能换行go.TextBlock.None）使用需要设置宽高
    editable: true, // 是否可编辑
    textAlign: center, // 文本位置
    margin: 12, // new go.Margin(2, 0)或new go.Margin(1, 0, 0, 1)
    overflow: go.TextBlock.OverflowEllipsis, // 超出文本框大小的文字...代替（go.TextBlock.OverflowClip 溢出遮挡）使用需要设置宽高
  }),
  new go.Binding('text').makeTwoWay(), // 注意：这里的text简写了

  $(
    go.Picture, //图片，一个panel不能同时有shape
    {
      source: 'noticeImg', // 一定要以import的方式引入图片import noticeImg from '.. '
      width: 20,
      height: 23,
    }
  )
)
```

- 连接点的配置

```js
// 例子：配置四个连接点，注意在pannel配置
makePort('T', go.Spot.Top, true, true),
makePort('L', go.Spot.Left, true, true),
makePort('R', go.Spot.Right, true, true),
makePort('B', go.Spot.Bottom, true, true)
// 用函数可以配置不同的连接点
function makePort(name, spot, output, input) {
  return $(go.Shape, 'Circle', {
    fill: '#44CCFF', // 颜色
    opacity: 0, // 透明
    stroke: null, //边框颜色
    desiredSize: new go.Size(10, 10), //大小
    alignment: spot, //放置在相对与外部配置位置的（go.Spot.Left
    alignmentFocus: go.Spot.Center, //第二次调整
    portId: name, // 连接点ID，没有名称可能无法触发连线
    fromLinkable: output, //是否出发点可用true或者false
    toLinkable: input, // 是否目的点可用
    cursor: 'pointer', // 移入的时候鼠标显示什么
    fromShortLength, //设置线的出发点到端口的距离
    toShortLength, //设置线的结束点到端口的距离

    fromSpot: spot, //连线出发点强制为（go.Sport.RightCenter/AllSides/）
    toSpot: spot, // 连线目的点强制为
    // 如果需要这两个属性生效，必须在节点存储的方式上写
    this.$nextTick(() => {
      this.myDiagram.model = MAKE(go.GraphLinksModel, {
        linkFromPortIdProperty: 'fromPort',
        linkToPortIdProperty: 'toPort',
        nodeDataArray, //存储节点数据的变量
        linkDataArray //存储连线数据的变量
      })
    })
  })
}
```

- 右键点击配置

```js
{
  contextMenu:
    $('ContextMenu',
    $('ContextMenuButton',
      $(go.TextBlock, '清除计算'),
        { click: function () {
          console.log('右键点击了')
        } })
      )
},
// 可放在面板的配置中，面板右键触发
```

- 线段吸附网格配置

```js
myDiagram.toolManager.draggingTool.isGridSnapEnabled = true // 注意：要先打开网格

myDiagram.toolManager.draggingTool.gridSnapCllSpot = go.Spot.MiddleBottom // 设置网格编辑捕捉对齐点
```
