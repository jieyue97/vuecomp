### 按钮

- 使用 Button 定义一个按钮

```js
$('Button', { margin: 2 })
```

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
          domId: 'base',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        { locationSpot: go.Spot.Center },
        $(go.Shape, 'Rectangle', { fill: 'gold' }),
        $(
          go.Panel,
          'Vertical',
          { margin: 3 },
          $('Button', { margin: 2, click: incrementCounter }, $(go.TextBlock, 'Click me!')),
          $(
            go.TextBlock,
            new go.Binding('text', 'clickCount', function (c) {
              return 'Clicked ' + c + ' times.'
            })
          )
        )
      )

      function incrementCounter(e, obj) {
        var node = obj.part
        var data = node.data
        if (data && typeof data.clickCount === 'number') {
          node.diagram.model.commit(function (m) {
            m.set(data, 'clickCount', data.clickCount + 1)
          }, 'clicked')
        }
      }

      myDiagram.model = new go.GraphLinksModel([{ clickCount: 0 }])
    },
  }
</script>
```

:::

- 可展开按钮

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
          domId: 'button',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Spot',
        $(go.Panel, 'Auto', $(go.Shape, 'Rectangle', { fill: 'gold' }), $(go.TextBlock, 'Click small button\nto collapse/expand subtree', { margin: 5 })),
        $('TreeExpanderButton', { alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top }, { visible: true })
      )

      myDiagram.layout = $(go.TreeLayout, { angle: 90 })

      myDiagram.model = new go.GraphLinksModel([{ key: 1 }, { key: 2 }], [{ from: 1, to: 2 }])
    },
  }
</script>
```

:::
