### 提示框

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
        $(go.Shape, 'RoundedRectangle', { fill: 'white' }, new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key')),
        {
          toolTip: $('ToolTip', $(go.TextBlock, { margin: 4 }, new go.Binding('text', 'color'))),
        }
      )
      function diagramInfo(model) {
        return 'Model:\n' + model.nodeDataArray.length + ' nodes, ' + model.linkDataArray.length + ' links'
      }
      myDiagram.toolTip = $('ToolTip', $(go.TextBlock, { margin: 4 }, new go.Binding('text', '', diagramInfo)))

      var nodeDataArray = [
        { key: 'Alpha', color: 'lightblue' },
        { key: 'Beta', color: 'pink' },
      ]
      var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
    },
  }
</script>
```

:::

- 提示位置

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
          domId: 'tooltip',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        new go.Binding('location', 'loc'),
        $(go.Shape, 'RoundedRectangle', { fill: 'white' }, new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key')),
        {
          // define a tooltip for each node
          toolTip: $(
            go.Adornment,
            'Spot', // that has several labels around it
            { background: 'transparent' }, // avoid hiding tooltip when mouse moves
            $(go.Placeholder, { padding: 5 }),
            $(
              go.TextBlock,
              { alignment: go.Spot.Top, alignmentFocus: go.Spot.Bottom, stroke: 'red' },
              new go.Binding('text', 'key', function (s) {
                return 'key: ' + s
              })
            ),
            $(
              go.TextBlock,
              'Bottom',
              { alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top, stroke: 'red' },
              new go.Binding('text', 'color', function (s) {
                return 'color: ' + s
              })
            )
          ), // end Adornment
        }
      )

      var nodeDataArray = [
        { key: 'Alpha', color: 'lightyellow', loc: new go.Point(100, 100) },
        { key: 'Beta', color: 'orange', loc: new go.Point(200, 100) },
      ]
      var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
    },
  }
</script>
```

:::
