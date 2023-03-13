### 高亮

:::demo

```html
<template>
  <div style="height: 180px; width: 100%">
    <gd-go ref="GdGo"> </gd-go>
  </div>
</template>

<script>
  function mouseEnter(e, obj) {
    var shape = obj.findObject('SHAPE')
    shape.fill = '#6DAB80'
    shape.stroke = '#A6E6A1'
    var text = obj.findObject('TEXT')
    text.stroke = 'white'
  }

  function mouseLeave(e, obj) {
    var shape = obj.findObject('SHAPE')
    shape.fill = obj.data.color
    shape.stroke = null
    var text = obj.findObject('TEXT')
    text.stroke = 'black'
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
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        {
          mouseEnter: mouseEnter,
          mouseLeave: mouseLeave,
        },
        $(go.Shape, 'Rectangle', { strokeWidth: 2, stroke: null, name: 'SHAPE' }, new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 10, font: 'bold 18px Verdana', name: 'TEXT' }, new go.Binding('text', 'key'))
      )

      myDiagram.model = new go.GraphLinksModel(
        [
          { key: 'Alpha', color: '#96D6D9' },
          { key: 'Beta', color: '#96D6D9' },
          { key: 'Gamma', color: '#EFEBCA' },
          { key: 'Delta', color: '#EFEBCA' },
        ],
        [
          { from: 'Alpha', to: 'Beta' },
          { from: 'Alpha', to: 'Gamma' },
          { from: 'Beta', to: 'Beta' },
          { from: 'Gamma', to: 'Delta' },
          { from: 'Delta', to: 'Alpha' },
        ]
      )
    },
  }
</script>
```

:::
