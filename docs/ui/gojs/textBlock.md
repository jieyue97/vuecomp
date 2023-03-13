### 文本快

- 使用 go.TextBlock 定义一个文本快

```js
 $(go.TextBlock, new go.Binding('text', 'color')),
```

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
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Vertical',
        new go.Binding('location', 'loc'), // get the Node.location from the data.loc value
        $(go.TextBlock, new go.Binding('text', 'color')),
        $(go.TextBlock, { text: 'a Text Block', stroke: 'red' }),
        $(go.TextBlock, { text: 'a Text Block', background: 'lightblue' }),
        $(go.TextBlock, { text: 'a Text Block', font: 'bold 14pt serif' })
      )

      var nodeDataArray = [
        // for each node specify the location using Point values
        { key: 'Alpha', color: 'lightblue', loc: new go.Point(0, 0) },
      ]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray)
    },
  }
</script>
```

:::

- 尺寸及裁剪

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
          domId: 'myDiagramDiv1',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Vertical',
        new go.Binding('location', 'loc'), // get the Node.location from the data.loc value
        $(go.TextBlock, { text: 'a Text Block', background: 'lightgreen', margin: 2 }),
        $(go.TextBlock, { text: 'a Text Block', background: 'lightgreen', margin: 2, width: 100, height: 33 }),
        $(go.TextBlock, { text: 'a Text Block', background: 'lightgreen', margin: 2, width: 60, height: 33 }),
        $(go.TextBlock, { text: 'a Text Block', background: 'lightgreen', margin: 2, width: 50, height: 22 }),
        $(go.TextBlock, { text: 'a Text Block', background: 'lightgreen', margin: 2, width: 40, height: 9 })
      )

      var nodeDataArray = [
        // for each node specify the location using Point values
        { key: 'Alpha', color: 'lightblue', loc: new go.Point(0, 0) },
      ]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray)
    },
  }
</script>
```

:::

- 最大行数及溢出处理

:::demo

```html
<template>
  <div style="height: 260px; width: 100%">
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
          domId: 'myDiagramDiv2',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Vertical',
        new go.Binding('location', 'loc'), // get the Node.location from the data.loc value
        $(go.TextBlock, {
          text: 'a Text Block that takes 4 lines',
          font: '14pt sans-serif',
          background: 'lightblue',
          overflow: go.TextBlock.OverflowClip /* the default value */,
          // No max lines
          margin: 2,
          width: 90,
        }),
        // Allow only 2 lines, OverflowClip:
        $(go.TextBlock, {
          text: 'a Text Block that takes 4 lines',
          font: '14pt sans-serif',
          background: 'lightblue',
          overflow: go.TextBlock.OverflowClip /* the default value */,
          maxLines: 2,
          margin: 2,
          width: 90,
        }),
        // Allow only 2 lines, OverflowEllipsis:
        $(go.TextBlock, {
          text: 'a Text Block that takes 4 lines',
          font: '14pt sans-serif',
          background: 'lightblue',
          overflow: go.TextBlock.OverflowEllipsis,
          maxLines: 2,
          margin: 2,
          width: 90,
        })
      )

      var nodeDataArray = [
        // for each node specify the location using Point values
        { key: 'Alpha', color: 'lightblue', loc: new go.Point(0, 0) },
      ]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray)
    },
  }
</script>
```

:::

- 文本对齐

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
          domId: 'myDiagramDiv3',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.add(
        $(
          go.Part,
          'Horizontal',
          $(
            go.Panel,
            'Vertical',
            { width: 150, defaultStretch: go.GraphObject.Horizontal },
            $(go.TextBlock, { text: "textAlign: 'left'", background: 'lightgreen', margin: 2, textAlign: 'left' }),
            $(go.TextBlock, { text: "textAlign: 'center'", background: 'lightgreen', margin: 2, textAlign: 'center' }),
            $(go.TextBlock, { text: "textAlign: 'right'", background: 'lightgreen', margin: 2, textAlign: 'right' })
          ),
          $(
            go.Panel,
            'Vertical',
            { width: 150, defaultStretch: go.GraphObject.None },
            $(go.TextBlock, { text: 'alignment: Left', background: 'lightgreen', margin: 2, alignment: go.Spot.Left }),
            $(go.TextBlock, { text: 'alignment: Center', background: 'lightgreen', margin: 2, alignment: go.Spot.Center }),
            $(go.TextBlock, { text: 'alignment: Right', background: 'lightgreen', margin: 2, alignment: go.Spot.Right })
          )
        )
      )
    },
  }
</script>
```

:::
