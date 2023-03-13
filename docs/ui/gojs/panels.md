### 面板

- 使用 go.Panel 定义一个面板
- 常用的面板排板有
  - Panel.Position （绝对定位）
  - Panel.Vertical（垂直排板）
  - Panel.Horizontal（水平排板）
  - Panel.Auto（自动排板）
  - Panel.Spot（点排板）
  - Panel.Table（表格排板）

```js
$(go.Panel, { background: 'lightgray' })
```

:::demo

```html
<template>
  <div style="height: 250px; width: 100%">
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
      myDiagram.add(
        // all Parts are Panels
        $(
          go.Part,
          go.Panel.Position, // or "Position"
          { background: 'lightgray' },
          $(go.TextBlock, 'default, at (0,0)', { background: 'lightgreen' }),
          $(go.TextBlock, '(100, 0)', { position: new go.Point(100, 0), background: 'lightgreen' }),
          $(go.TextBlock, '(0, 100)', { position: new go.Point(0, 100), background: 'lightgreen' }),
          $(go.TextBlock, '(55, 28)', { position: new go.Point(55, 28), background: 'lightgreen' }),
          $(go.TextBlock, '(33, 70)', { position: new go.Point(33, 70), background: 'lightgreen' }),
          $(go.TextBlock, '(100, 100)', { position: new go.Point(100, 100), background: 'lightgreen' })
        )
      )
      myDiagram.add(
        $(
          go.Part,
          'Vertical',
          { background: 'lightgray', width: 140 },
          $(go.TextBlock, 'a longer string', { background: 'lightgreen' }),
          $(go.TextBlock, 'left', { background: 'lightgreen', alignment: go.Spot.Left }),
          $(go.TextBlock, 'center', { background: 'lightgreen', alignment: go.Spot.Center }),
          $(go.TextBlock, 'right', { background: 'lightgreen', alignment: go.Spot.Right }),
          $(go.TextBlock, 'stretch', { background: 'lightgreen', stretch: go.GraphObject.Fill })
        )
      )
      myDiagram.add(
        $(
          go.Part,
          go.Panel.Spot, // or "Spot"
          $(go.Shape, 'Rectangle', { fill: 'lightgreen', stroke: null, width: 100, height: 50 }),
          $(go.TextBlock, '0,0', { alignment: new go.Spot(0, 0) }),
          $(go.TextBlock, '0.5,0', { alignment: new go.Spot(0.5, 0) }),
          $(go.TextBlock, '1,0', { alignment: new go.Spot(1, 0) }),
          $(go.TextBlock, '0,0.5', { alignment: new go.Spot(0, 0.5) }),
          $(go.TextBlock, '0.5,0.5', { alignment: new go.Spot(0.5, 0.5) }),
          $(go.TextBlock, '1,0.5', { alignment: new go.Spot(1, 0.5) }),
          $(go.TextBlock, '0,1', { alignment: new go.Spot(0, 1) }),
          $(go.TextBlock, '0.5,1', { alignment: new go.Spot(0.5, 1) }),
          $(go.TextBlock, '1,1', { alignment: new go.Spot(1, 1) })
        )
      )
      var pink = 'rgba(255,0,0,.2)'
      myDiagram.add(
        $(
          go.Part,
          'Spot',
          $(go.Shape, 'Rectangle', { fill: 'lightgreen', stroke: null, width: 200, height: 50 }),

          // Near bottom-left corner:
          $(go.TextBlock, '(-40,0)', { background: pink, alignment: new go.Spot(0, 1, -40, 0) }),
          $(go.TextBlock, '(0,0)', { background: pink, alignment: new go.Spot(0, 1, 0, 0) }),
          $(go.TextBlock, '(40,0)', { background: pink, alignment: new go.Spot(0, 1, 40, 0) }),

          // Near bottom-right corner:
          $(go.TextBlock, '(0,-20)', { background: pink, alignment: new go.Spot(1, 1, 0, -20) }),
          $(go.TextBlock, '(0,0)', { background: pink, alignment: new go.Spot(1, 1, 0, 0) }),
          $(go.TextBlock, '(0,20)', { background: pink, alignment: new go.Spot(1, 1, 0, 20) })
        )
      )
    },
  }
</script>
```

:::

- Panel.Table（表格排板）

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
          domId: 'panel',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.add(
        $(
          go.Part,
          $(
            go.Panel,
            'Table',
            $(go.TextBlock, 'Greetings', { row: 0, column: 0, columnSpan: 3, stretch: go.GraphObject.Horizontal, margin: 2, background: 'lightgray' }),
            $(go.TextBlock, 'numbers', { row: 1, column: 0, rowSpan: 2, stretch: go.GraphObject.Vertical, margin: 2, background: 'lightgray', angle: 270 }),
            $(go.TextBlock, 'row 1\ncol 1', { row: 1, column: 1, margin: 2, background: 'lightgray' }),
            $(go.TextBlock, 'row 1\ncol 2', { row: 1, column: 2, margin: 2, background: 'lightgray' }),
            $(go.TextBlock, 'row 2\ncol 1', { row: 2, column: 1, margin: 2, background: 'lightgray' }),
            $(go.TextBlock, 'row 2\ncol 3', { row: 2, column: 3, margin: 2, background: 'lightgray' }),
            $(go.TextBlock, 'Signature', { row: 3, column: 2, columnSpan: 2, stretch: go.GraphObject.Horizontal, margin: 2, background: 'lightgray' })
          )
        )
      )
      myDiagram.add(
        $(
          go.Part,
          'Auto',
          $(go.Shape, { fill: 'white', stroke: 'gray', strokeWidth: 3 }),
          $(
            go.Panel,
            'Table',
            $(go.TextBlock, 'Header 1', { row: 0, column: 1, font: 'bold 10pt sans-serif', margin: 2 }),
            $(go.TextBlock, 'Header 2', { row: 0, column: 2, font: 'bold 10pt sans-serif', margin: 2 }),

            // drawn before row 1:
            $(go.RowColumnDefinition, { row: 1, separatorStrokeWidth: 1.5, separatorStroke: 'black' }),
            // drawn before column 1:
            $(go.RowColumnDefinition, { column: 1, separatorStrokeWidth: 1.5, separatorStroke: 'black' }),

            $(go.TextBlock, 'One', { row: 1, column: 0, stroke: 'green', margin: 2 }),
            $(go.TextBlock, 'row 1 col 1', { row: 1, column: 1, margin: 2 }),
            $(go.TextBlock, 'row 1 col 2', { row: 1, column: 2, margin: 2 }),
            $(go.TextBlock, 'Two', { row: 2, column: 0, stroke: 'green', margin: 2 }),
            $(go.TextBlock, 'row 2 col 1', { row: 2, column: 1, margin: 2 }),
            $(go.TextBlock, 'row 2 col 2', { row: 2, column: 2, margin: 2 }),
            $(go.TextBlock, 'Three', { row: 3, column: 0, stroke: 'green', margin: 2 }),
            $(go.TextBlock, 'row 3 col 1', { row: 3, column: 1, margin: 2 }),
            $(go.TextBlock, 'row 3 col 2', { row: 3, column: 2, margin: 2 })
          )
        )
      )
    },
  }
</script>
```

:::

- 复杂面板使用

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
          domId: 'panel2',
          style: { width: '300px', height: '100%' },
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        $(go.Shape, 'RoundedRectangle', { fill: '#3AA7A3' }),
        $(go.Panel, 'Vertical', new go.Binding('itemArray', 'items'), {
          itemTemplate: $(
            go.Panel,
            'Auto',
            { margin: 2 },
            $(go.Shape, 'RoundedRectangle', { fill: '#91E3E0' }, new go.Binding('fill', 'c')),
            $(go.TextBlock, new go.Binding('text', 't'), { margin: 2 })
          ),
        })
      )

      myDiagram.model = $(go.GraphLinksModel, {
        nodeDataArray: [
          {
            key: 1,
            items: [{ t: 'Alpha', c: 'orange' }, { t: 'Beta' }, { t: 'Gamma', c: 'green' }, { t: 'Delta', c: 'yellow' }],
          },
          {
            key: 2,
            items: [{ t: 'first', c: 'red' }, { t: 'second', c: 'cyan' }, { t: 'third' }],
          },
        ],
        linkDataArray: [{ from: 1, to: 2 }],
      })
    },
  }
</script>
```

:::
