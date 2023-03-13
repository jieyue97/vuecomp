### 连线

- 使用 go.Link 定义一个连线

```js
$(go.Link, { routing: go.Link.AvoidsNodes })
```

:::demo

```html
<template>
  <div style="height: 180px; width: 100%;display:flex">
    <gd-go ref="GdGo"> </gd-go>
    <gd-go ref="GdGo1"> </gd-go>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      setLink() {
        const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
          return {
            domId: 'link88',
            style: { width: '300px', height: '100%' },
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(
          go.Node,
          'Auto',
          new go.Binding('location', 'loc', go.Point.parse),
          $(go.Shape, 'RoundedRectangle', { fill: 'lightgray' }),
          $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
        )
        myDiagram.linkTemplate = $(
          go.Link, // the whole link panel
          $(go.Shape) // the link shape, default black stroke
        )
        var nodeDataArray = [
          { key: 'Alpha', loc: '0 0' },
          { key: 'Beta', loc: '100 50' },
        ]
        var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      },
      setLink1() {
        const { myDiagram, $ } = this.$refs.GdGo1.init(($, go) => {
          return {
            domId: 'link',
            style: { width: '300px', height: '100%' },
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(
          go.Node,
          'Auto',
          new go.Binding('location', 'loc', go.Point.parse),
          $(go.Shape, 'RoundedRectangle', { fill: 'lightgray' }),
          $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
        )
        myDiagram.linkTemplate = $(
          go.Link,
          $(go.Shape), // the link shape
          $(
            go.Shape, // the arrowhead
            { toArrow: 'OpenTriangle', fill: null }
          )
        )
        var nodeDataArray = [
          { key: 'Alpha', loc: '0 0' },
          { key: 'Beta', loc: '100 50' },
        ]
        var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      },
    },
    mounted() {
      this.setLink()
      this.setLink1()
    },
  }
</script>
```

:::

- 不可交叉可转弯

:::demo

```html
<template>
  <div style="height: 280px; width: 100%;display:flex">
    <gd-go ref="GdGo"> </gd-go>
    <gd-go ref="GdGo1"> </gd-go>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      setLink() {
        const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
          return {
            domId: 'link2',
            style: { width: '300px', height: '100%' },
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(
          go.Node,
          'Auto',
          new go.Binding('location', 'loc', go.Point.parse),
          $(go.Shape, 'RoundedRectangle', { fill: 'lightgray' }),
          $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
        )
        myDiagram.linkTemplate = $(go.Link, new go.Binding('routing', 'routing'), $(go.Shape), $(go.Shape, { toArrow: 'Standard' }))
        var nodeDataArray = [
          { key: 'Alpha', loc: '0 0' },
          { key: 'Beta', loc: '50 50' },
          { key: 'Gamma', loc: '100 25' },
        ]
        var linkDataArray = [
          { from: 'Alpha', to: 'Beta', routing: go.Link.Normal },
          { from: 'Alpha', to: 'Gamma', routing: go.Link.Orthogonal },
        ]
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      },
      setLink1() {
        const { myDiagram, $ } = this.$refs.GdGo1.init(($, go) => {
          return {
            domId: 'link6',
            style: { width: '300px', height: '100%' },
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(
          go.Node,
          'Auto',
          new go.Binding('location', 'loc', go.Point.parse),
          $(go.Shape, 'RoundedRectangle', { fill: 'lightgray' }),
          $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
        )
        myDiagram.linkTemplate = $(
          go.Link,
          { routing: go.Link.Orthogonal, fromSpot: go.Spot.Left, toSpot: go.Spot.Right },
          new go.Binding('fromEndSegmentLength'),
          new go.Binding('toEndSegmentLength'),
          $(go.Shape),
          $(go.Shape, { toArrow: 'Standard' })
        )
        var nodeDataArray = [
          { key: 'Alpha', loc: '0 0' },
          { key: 'Beta', loc: '100 50' },
          { key: 'Gamma', loc: '0 100' },
          { key: 'Delta', loc: '100 150' },
        ]
        var linkDataArray = [
          { from: 'Alpha', to: 'Beta' },
          { from: 'Gamma', to: 'Delta', fromEndSegmentLength: 4, toEndSegmentLength: 30 },
        ]
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      },
    },
    mounted() {
      this.setLink()
      this.setLink1()
    },
  }
</script>
```

:::

- 设置弧度，连线可设置标签

:::demo

```html
<template>
  <div style="height: 150px; width: 100%;display:flex">
    <gd-go ref="GdGo"> </gd-go>
    <gd-go ref="GdGo1"> </gd-go>
    <gd-go ref="GdGo2"> </gd-go>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      setLink() {
        const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
          return {
            domId: 'link100',
            style: { width: '300px', height: '100%' },
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(
          go.Node,
          'Auto',
          new go.Binding('location', 'loc', go.Point.parse),
          $(go.Shape, 'RoundedRectangle', { fill: 'lightgray' }),
          $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
        )
        myDiagram.linkTemplate = $(
          go.Link,
          { curve: go.Link.Bezier }, // Bezier curve
          $(go.Shape),
          $(go.Shape, { toArrow: 'Standard' })
        )
        var nodeDataArray = [
          { key: 'Alpha', loc: '0 0' },
          { key: 'Beta', loc: '100 50' },
        ]
        var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      },
      setLink1() {
        const { myDiagram, $ } = this.$refs.GdGo1.init(($, go) => {
          return {
            domId: 'link68',
            style: { width: '300px', height: '100%' },
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(
          go.Node,
          'Auto',
          new go.Binding('location', 'loc', go.Point.parse),
          $(go.Shape, 'RoundedRectangle', { fill: 'lightgray' }),
          $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
        )
        myDiagram.linkTemplate = $(go.Link, { curve: go.Link.Bezier }, $(go.Shape), $(go.Shape, { toArrow: 'Standard' }))
        var nodeDataArray = [
          { key: 'Alpha', loc: '0 0' },
          { key: 'Beta', loc: '100 50' },
        ]
        var linkDataArray = [
          { from: 'Alpha', to: 'Beta' }, // multiple links between the same nodes
          { from: 'Alpha', to: 'Beta' },
          { from: 'Alpha', to: 'Beta' },
          { from: 'Alpha', to: 'Beta' },
        ]
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      },
      setLink2() {
        const { myDiagram, $ } = this.$refs.GdGo2.init(($, go) => {
          return {
            domId: 'link20',
            style: { width: '300px', height: '100%' },
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(
          go.Node,
          'Auto',
          new go.Binding('location', 'loc', go.Point.parse),
          $(go.Shape, 'RoundedRectangle', { fill: 'lightgray' }),
          $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
        )

        myDiagram.linkTemplate = $(
          go.Link,
          $(go.Shape), // this is the link shape (the line)
          $(go.Shape, { toArrow: 'Standard' }), // this is an arrowhead
          $(
            go.TextBlock, // this is a Link label
            new go.Binding('text', 'text')
          )
        )

        var nodeDataArray = [
          { key: 'Alpha', loc: '0 0' },
          { key: 'Beta', loc: '200 50' },
        ]
        var linkDataArray = [{ from: 'Alpha', to: 'Beta', text: 'a label' }]
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      },
    },
    mounted() {
      this.setLink()
      this.setLink1()
      this.setLink2()
    },
  }
</script>
```

:::

- 连接点

:::demo

```html
<template>
  <div style="height: 150px; width: 100%;display:flex">
    <gd-go ref="GdGo"> </gd-go>
    <gd-go ref="GdGo1"> </gd-go>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      setLink() {
        const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
          return {
            domId: 'link12',
            style: { width: '300px', height: '100%' },
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.layout = $(
          go.LayeredDigraphLayout, // this will be discussed in a later section
          { columnSpacing: 5, setsPortSpots: false }
        )
        myDiagram.nodeTemplate = $(
          go.Node,
          'Auto',
          {
            fromSpot: go.Spot.Right, // coming out from middle-right
            toSpot: go.Spot.Left,
          }, // going into at middle-left
          $(go.Shape, 'Rectangle', { fill: 'lightgray' }),
          $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
        )

        myDiagram.linkTemplate = $(go.Link, $(go.Shape), $(go.Shape, { toArrow: 'Standard' }))
        var nodeDataArray = [{ key: 'Alpha' }, { key: 'Beta' }, { key: 'Gamma' }, { key: 'Delta' }, { key: 'Epsilon' }, { key: 'Zeta' }, { key: 'Eta' }, { key: 'Theta' }]
        var linkDataArray = [
          { from: 'Beta', to: 'Alpha' },
          { from: 'Gamma', to: 'Alpha' },
          { from: 'Delta', to: 'Alpha' },
          { from: 'Alpha', to: 'Epsilon' },
          { from: 'Alpha', to: 'Zeta' },
          { from: 'Alpha', to: 'Eta' },
          { from: 'Alpha', to: 'Theta' },
        ]
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      },
      setLink1() {
        const { myDiagram, $ } = this.$refs.GdGo1.init(($, go) => {
          return {
            domId: 'link66',
            style: { width: '300px', height: '100%' },
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(go.Node, 'Auto', $(go.Shape, 'Rectangle', { fill: 'lightgray' }), $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key')))

        myDiagram.linkTemplate = $(
          go.Link,
          // get the link spots from the link data
          new go.Binding('fromSpot', 'fromSpot', go.Spot.parse),
          new go.Binding('toSpot', 'toSpot', go.Spot.parse),
          $(go.Shape),
          $(go.Shape, { toArrow: 'Standard' })
        )

        var nodeDataArray = [{ key: 'Alpha' }, { key: 'Beta' }, { key: 'Gamma' }, { key: 'Delta' }]
        var linkDataArray = [
          { from: 'Alpha', to: 'Beta', fromSpot: 'TopRight', toSpot: 'Left' },
          { from: 'Alpha', to: 'Gamma', fromSpot: 'Left', toSpot: 'Left' },
          { from: 'Alpha', to: 'Delta', fromSpot: 'None', toSpot: 'Top' },
        ]
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      },
    },
    mounted() {
      this.setLink()
      this.setLink1()
    },
  }
</script>
```

:::
