### 分组

- 使用 groupTemplate 定义一个分组
- nodeDataArray 里面设置 isGroup:true 表示一个组，定义 group === key 表示哪些项属于组

:::demo

```html
<template>
  <div style="height: 150px; width: 100%">
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
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(go.Node, 'Auto', $(go.Shape, 'Ellipse', { fill: 'white' }), $(go.TextBlock, new go.Binding('text', 'key')))

      myDiagram.groupTemplate = $(
        go.Group,
        'Vertical',
        $(
          go.Panel,
          'Auto',
          $(
            go.Shape,
            'RoundedRectangle', // 围绕着占位符Placeholder
            { parameter1: 14, fill: 'rgba(128,128,128,0.33)' }
          ),
          $(
            go.Placeholder, //占位符,表示所有构件的面积，
            { padding: 5 }
          ) // 添加内边距
        ),
        $(
          go.TextBlock, // group title
          { alignment: go.Spot.Right, font: 'Bold 12pt Sans-Serif' },
          new go.Binding('text', 'key')
        )
      )

      var nodeDataArray = [{ key: 'Alpha' }, { key: 'Beta', group: 'Omega' }, { key: 'Gamma', group: 'Omega' }, { key: 'Omega', isGroup: true }, { key: 'Delta' }]
      var linkDataArray = [
        { from: 'Alpha', to: 'Beta' }, // from outside the Group to inside it
        { from: 'Beta', to: 'Gamma' }, // this link is a member of the Group
        { from: 'Omega', to: 'Delta' }, // from the Group to a Node
      ]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
    },
  }
</script>
```

:::

- 子图的布局

:::demo

```html
<template>
  <div style="height: 200px; width: 100%">
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
          domId: 'group',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.groupTemplate = $(
        go.Group,
        'Auto',
        // declare the Group.layout:
        { layout: $(go.LayeredDigraphLayout, { direction: 0, columnSpacing: 10 }) },
        $(
          go.Shape,
          'RoundedRectangle', // surrounds everything
          { parameter1: 10, fill: 'rgba(128,128,128,0.33)' }
        ),
        $(
          go.Panel,
          'Vertical', // position header above the subgraph
          $(
            go.TextBlock, // group title near top, next to button
            { font: 'Bold 12pt Sans-Serif' },
            new go.Binding('text', 'key')
          ),
          $(
            go.Placeholder, // represents area for all member parts
            { padding: 5, background: 'white' }
          )
        )
      )

      // declare the Diagram.layout:
      myDiagram.layout = $(go.LayeredDigraphLayout, { direction: 90, layerSpacing: 10, isRealtime: false })

      var nodeDataArray = [
        { key: 'Alpha' },
        { key: 'Omega', isGroup: true },
        { key: 'Beta', group: 'Omega' },
        { key: 'Gamma', group: 'Omega' },
        { key: 'Epsilon', group: 'Omega' },
        { key: 'Zeta', group: 'Omega' },
        { key: 'Delta' },
      ]
      var linkDataArray = [
        { from: 'Alpha', to: 'Omega' }, // from a Node to the Group
        { from: 'Beta', to: 'Gamma' }, // this link is a member of the Group
        { from: 'Beta', to: 'Epsilon' }, // this link is a member of the Group
        { from: 'Gamma', to: 'Zeta' }, // this link is a member of the Group
        { from: 'Epsilon', to: 'Zeta' }, // this link is a member of the Group
        { from: 'Omega', to: 'Delta' }, // from the Group to a Node
      ]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
    },
  }
</script>
```

:::

- 折叠和展开组

:::demo

```html
<template>
  <div style="height: 200px; width: 100%">
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
          domId: 'group2',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.groupTemplate = $(
        go.Group,
        'Auto',
        { layout: $(go.LayeredDigraphLayout, { direction: 0, columnSpacing: 10 }) },
        $(
          go.Shape,
          'RoundedRectangle', // surrounds everything
          { parameter1: 10, fill: 'rgba(128,128,128,0.33)' }
        ),
        $(
          go.Panel,
          'Vertical', // position header above the subgraph
          { defaultAlignment: go.Spot.Left },
          $(
            go.Panel,
            'Horizontal', // the header
            { defaultAlignment: go.Spot.Top },
            $('SubGraphExpanderButton'), // this Panel acts as a Button
            $(
              go.TextBlock, // group title near top, next to button
              { font: 'Bold 12pt Sans-Serif' },
              new go.Binding('text', 'key')
            )
          ),
          $(
            go.Placeholder, // represents area for all member parts
            { padding: new go.Margin(0, 10), background: 'white' }
          )
        )
      )

      myDiagram.layout = $(go.LayeredDigraphLayout, { direction: 90, layerSpacing: 10, isRealtime: false })

      var nodeDataArray = [
        { key: 'Alpha' },
        { key: 'Omega', isGroup: true },
        { key: 'Beta', group: 'Omega' },
        { key: 'Gamma', group: 'Omega' },
        { key: 'Epsilon', group: 'Omega' },
        { key: 'Zeta', group: 'Omega' },
        { key: 'Delta' },
      ]
      var linkDataArray = [
        { from: 'Alpha', to: 'Omega' }, // from a Node to the Group
        { from: 'Beta', to: 'Gamma' }, // this link is a member of the Group
        { from: 'Beta', to: 'Epsilon' }, // this link is a member of the Group
        { from: 'Gamma', to: 'Zeta' }, // this link is a member of the Group
        { from: 'Epsilon', to: 'Zeta' }, // this link is a member of the Group
        { from: 'Omega', to: 'Delta' }, // from the Group to a Node
      ]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
    },
  }
</script>
```

:::
:::demo

```html
<template>
  <div style="height: 180px; width: 100%">
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
          domId: 'group8',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.groupTemplate = $(
        go.Group,
        'Auto',
        { layout: $(go.TreeLayout) },
        $(go.Shape, 'Rectangle', { fill: 'orange', stroke: 'darkorange' }),
        $(
          go.Panel,
          'Table',
          { margin: 0.5 }, // avoid overlapping border with table contents
          $(go.RowColumnDefinition, { row: 0, background: 'white' }), // header is white
          $('SubGraphExpanderButton', { row: 0, column: 0, margin: 3 }),
          $(
            go.TextBlock, // title is centered in header
            { row: 0, column: 1, font: 'bold 14px Sans-Serif', stroke: 'darkorange', textAlign: 'center', stretch: go.GraphObject.Horizontal },
            new go.Binding('text')
          ),
          $(
            go.Placeholder, // becomes zero-sized when Group.isSubGraphExpanded is false
            { row: 1, columnSpan: 2, padding: 10, alignment: go.Spot.TopLeft },
            new go.Binding('padding', 'isSubGraphExpanded', function (exp) {
              return exp ? 10 : 0
            }).ofObject()
          )
        )
      )

      myDiagram.layout = $(go.TreeLayout, { isRealtime: false })

      myDiagram.model = new go.GraphLinksModel(
        [
          { key: 1, text: 'Alpha' },
          { key: 2, text: 'GROUP', isGroup: true },
          { key: 3, text: 'Beta', group: 2 },
          { key: 4, text: 'Gamma', group: 2 },
          { key: 5, text: 'Delta' },
        ],
        [
          { from: 1, to: 3 },
          { from: 3, to: 4 },
          { from: 1, to: 5 },
        ]
      )
    },
  }
</script>
```

:::
