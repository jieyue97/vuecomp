### 树及树形布局

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
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        new go.Binding('location', 'loc', go.Point.parse),
        $(go.Shape, 'Ellipse', { fill: 'white' }),
        $(go.TextBlock, new go.Binding('text', 'key'))
      )

      myDiagram.linkTemplate = $(go.Link, { routing: go.Link.Orthogonal, corner: 5 }, $(go.Shape))

      var nodeDataArray = [
        { key: 'Alpha', loc: '0 60' },
        { key: 'Beta', loc: '100 15' },
        { key: 'Gamma', loc: '200 0' },
        { key: 'Delta', loc: '200 30' },
        { key: 'Epsilon', loc: '100 90' },
        { key: 'Zeta', loc: '200 60' },
        { key: 'Eta', loc: '200 90' },
        { key: 'Theta', loc: '200 120' },
      ]
      var linkDataArray = [
        { from: 'Alpha', to: 'Beta' },
        { from: 'Beta', to: 'Gamma' },
        { from: 'Beta', to: 'Delta' },
        { from: 'Alpha', to: 'Epsilon' },
        { from: 'Epsilon', to: 'Zeta' },
        { from: 'Epsilon', to: 'Eta' },
        { from: 'Epsilon', to: 'Theta' },
      ]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
    },
  }
</script>
```

:::

- 垂直树

:::demo

```html
<template>
  <div style="height: 220px; width: 100%">
    <gd-go ref="GdGo"> </gd-go>
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
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(go.Node, 'Auto', $(go.Shape, 'Ellipse', { fill: 'white' }), $(go.TextBlock, new go.Binding('text', 'key')))

        myDiagram.linkTemplate = $(go.Link, { routing: go.Link.Orthogonal, corner: 5 }, $(go.Shape))

        var nodeDataArray = [
          { key: 'Alpha' },
          { key: 'Beta', parent: 'Alpha' },
          { key: 'Gamma', parent: 'Beta' },
          { key: 'Delta', parent: 'Beta' },
          { key: 'Epsilon', parent: 'Alpha' },
          { key: 'Zeta', parent: 'Epsilon' },
          { key: 'Eta', parent: 'Epsilon' },
          { key: 'Theta', parent: 'Epsilon' },
        ]
        myDiagram.model = new go.TreeModel(nodeDataArray)
        myDiagram.layout = $(go.TreeLayout, { angle: 90 })
      },
    },
    mounted() {
      this.setLink()
    },
  }
</script>
```

:::

- 子树

:::demo

```html
<template>
  <div style="height: 220px; width: 100%">
    <gd-go ref="GdGo"> </gd-go>
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
            domId: 'link22',
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(
          go.Node,
          'Horizontal',
          { isTreeExpanded: false }, // by default collapsed
          $(go.Panel, 'Auto', $(go.Shape, 'Ellipse', { fill: null }), $(go.TextBlock, new go.Binding('text', 'key'))),
          $('TreeExpanderButton')
        )

        myDiagram.layout = $(go.TreeLayout)

        // After the nodes and links have been created,
        // expand each of the tree roots to 3 levels deep.
        myDiagram.addDiagramListener('InitialLayoutCompleted', function (e) {
          e.diagram.findTreeRoots().each(function (r) {
            r.expandTree(3)
          })
        })

        var nodeDataArray = [
          { key: 'Alpha' },
          { key: 'Beta' },
          { key: 'Gamma' },
          { key: 'Delta' },
          { key: 'Epsilon' },
          { key: 'Zeta' },
          { key: 'Eta' },
          { key: 'Theta' },
          { key: 'Iota' },
          { key: 'Kappa' },
          { key: 'Lambda' },
        ]
        var linkDataArray = [
          { from: 'Alpha', to: 'Beta' },
          { from: 'Beta', to: 'Gamma' },
          { from: 'Beta', to: 'Delta' },
          { from: 'Alpha', to: 'Epsilon' },
          { from: 'Epsilon', to: 'Zeta' },
          { from: 'Epsilon', to: 'Eta' },
          { from: 'Eta', to: 'Theta' },
          { from: 'Gamma', to: 'Iota' },
          { from: 'Iota', to: 'Kappa' },
          { from: 'Iota', to: 'Lambda' },
        ]
        myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      },
    },
    mounted() {
      this.setLink()
    },
  }
</script>
```

:::
