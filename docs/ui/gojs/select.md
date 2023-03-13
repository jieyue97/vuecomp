### 选择

:::demo

```html
<template>
  <div style="height: 80px; width: 100%">
    <gd-go ref="GdGo"> </gd-go>
  </div>
</template>

<script>
  function addNodeAndLink(e, b) {
    var node = b.part.adornedPart
    var diagram = node.diagram
    diagram.startTransaction('add node and link')
    var newnode = { key: 'N' }
    diagram.model.addNodeData(newnode)
    diagram.findNodeForData(newnode).location = node.location
    var newlink = { from: node.data.key, to: newnode.key }
    diagram.model.addLinkData(newlink)
    diagram.commitTransaction('add node and link')
  }
  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {
      const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
        return {
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })

      myDiagram.nodeTemplate = $(go.Node, 'Auto', $(go.Shape, 'RoundedRectangle', { fill: 'lightgray' }), $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key')), {
        selectionAdornmentTemplate: $(
          go.Adornment,
          'Spot',
          $(
            go.Panel,
            'Auto',
            // this Adornment has a rectangular blue Shape around the selected node
            $(go.Shape, { fill: null, stroke: 'dodgerblue', strokeWidth: 3 }),
            $(go.Placeholder)
          ),
          // and this Adornment has a Button to the right of the selected node
          $(
            'Button',
            { alignment: go.Spot.Right, alignmentFocus: go.Spot.Left, click: addNodeAndLink }, // define click behavior for Button in Adornment
            $(
              go.TextBlock,
              'ADD', // the Button content
              { font: 'bold 6pt sans-serif' }
            )
          )
        ), // end Adornment
      })

      myDiagram.layout = $(go.TreeLayout)

      var nodeDataArray = [{ key: 'Alpha' }, { key: 'Beta' }]
      var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      myDiagram.select(myDiagram.findNodeForKey('Beta'))
    },
  }
</script>
```

:::

- 通过数据绑定改变外观

:::demo

```html
<template>
  <div style="height: 100px; width: 100%">
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
          domId: 'select',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        { selectionAdorned: false }, // 禁用选择装饰adornment
        new go.Binding('location', 'loc', go.Point.parse),
        $(
          go.Shape,
          'RoundedRectangle',
          { fill: 'lightgray', strokeWidth: 2 },
          // when this Part.isSelected changes value, change this Shape.fill value:
          new go.Binding('fill', 'isSelected', function (sel) {
            if (sel) return 'cyan'
            else return 'lightgray'
          }).ofObject('')
        ), // The object named "" is the root visual element, the Node itself
        $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
      )

      var nodeDataArray = [
        { key: 'Alpha', loc: '0 0' },
        { key: 'Beta', loc: '200 50' },
      ]
      var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      myDiagram.select(myDiagram.findNodeForKey('Beta'))
    },
  }
</script>
```

:::

- 通过函数改变外观

:::demo

```html
<template>
  <div style="height: 100px; width: 100%">
    <gd-go ref="GdGo"> </gd-go>
  </div>
</template>

<script>
  function onSelectionChanged(node) {
    //选择改变事件的回调函数
    var icon = node.findObject('Icon')
    if (icon !== null) {
      //判断node的选择状态
      if (node.isSelected) icon.fill = 'cyan'
      else icon.fill = 'lightgray'
    }
  }
  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {
      const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
        return {
          domId: 'select2',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        {
          selectionAdorned: false, // don't bother with any selection adornment
          selectionChanged: onSelectionChanged,
        }, // 在 Part.isSelected 改变后调用
        new go.Binding('location', 'loc', go.Point.parse),
        $(go.Shape, 'RoundedRectangle', { name: 'Icon', fill: 'lightgray', strokeWidth: 2 }),
        $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
      )

      var nodeDataArray = [
        { key: 'Alpha', loc: '0 0' },
        { key: 'Beta', loc: '200 50' },
      ]
      var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      myDiagram.select(myDiagram.findNodeForKey('Beta'))
    },
  }
</script>
```

:::
