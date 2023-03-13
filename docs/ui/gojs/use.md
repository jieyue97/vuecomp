### 数据绑定

- 将 loc 属性绑定到文本对象的 location 属性

```js
new go.Binding('location', 'loc')
```

- 如果我们希望绑定的属性进行转换，可以使用转换函数

```js
new go.Binding('location', 'loc', function (v) {
  return '地址: ' + v
})
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
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        new go.Binding('location', 'loc'), // get the Node.location from the data.loc value
        $(go.Shape, 'RoundedRectangle', { fill: 'white' }, new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key'))
      )

      var nodeDataArray = [
        // for each node specify the location using Point values
        { key: 'Alpha', color: 'lightblue', loc: new go.Point(0, 0) },
        { key: 'Beta', color: 'pink', loc: new go.Point(100, 50) },
      ]
      var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
    },
  }
</script>
```

:::
