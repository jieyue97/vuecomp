### 节点

- 使用 go.Node 定义一个节点

```js
$(go.Node, { background: 'blue' })
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
      myDiagram.nodeTemplate = $(go.Node, 'Auto', $(go.Shape, 'Rectangle', new go.Binding('fill', 'color')), $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key')))

      myDiagram.model.nodeDataArray = [{ key: 'Alpha', color: 'lightblue' }]
    },
  }
</script>
```

:::

- 节点端口

:::demo

```html
<template>
  <div style="height: 220px; width: 100%;display:flex">
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
            domId: 'link22',
            style: { width: '300px', height: '100%' },
            defalutOption: {
              initialContentAlignment: go.Spot.Center,
            },
          }
        })
        myDiagram.nodeTemplate = $(
          go.Node,
          'Auto',
          $(go.Shape, 'Rectangle', { fill: 'lightgray' }),
          $(
            go.Panel,
            'Table',
            $(go.RowColumnDefinition, { column: 0, alignment: go.Spot.Left }),
            $(go.RowColumnDefinition, { column: 2, alignment: go.Spot.Right }),
            $(
              go.TextBlock, // the node title
              { column: 0, row: 0, columnSpan: 3, alignment: go.Spot.Center, font: 'bold 10pt sans-serif', margin: new go.Margin(4, 2) },
              new go.Binding('text', 'key')
            ),
            $(
              go.Panel,
              'Horizontal',
              { column: 0, row: 1 },
              $(
                go.Shape, // the "A" port
                { width: 6, height: 6, portId: 'A', toSpot: go.Spot.Left }
              ),
              $(go.TextBlock, 'A') // "A" port label
            ),
            $(
              go.Panel,
              'Horizontal',
              { column: 0, row: 2 },
              $(
                go.Shape, // the "B" port
                { width: 6, height: 6, portId: 'B', toSpot: go.Spot.Left }
              ),
              $(go.TextBlock, 'B') // "B" port label
            ),
            $(
              go.Panel,
              'Horizontal',
              { column: 2, row: 1, rowSpan: 2 },
              $(go.TextBlock, 'Out'), // "Out" port label
              $(
                go.Shape, // the "Out" port
                { width: 6, height: 6, portId: 'Out', fromSpot: go.Spot.Right }
              )
            )
          )
        )

        myDiagram.linkTemplate = $(go.Link, { routing: go.Link.Orthogonal, corner: 3 }, $(go.Shape), $(go.Shape, { toArrow: 'Standard' }))

        myDiagram.layout = $(go.LayeredDigraphLayout, { columnSpacing: 10 })

        myDiagram.model = $(go.GraphLinksModel, {
          linkFromPortIdProperty: 'fromPort', // required information:
          linkToPortIdProperty: 'toPort', // identifies data property names
          nodeDataArray: [{ key: 'Add1' }, { key: 'Add2' }, { key: 'Subtract1' }],
          linkDataArray: [
            { from: 'Add1', fromPort: 'Out', to: 'Subtract1', toPort: 'A' },
            { from: 'Add2', fromPort: 'Out', to: 'Subtract1', toPort: 'B' },
          ],
        })
      },
      setLink1() {
        const { myDiagram, $ } = this.$refs.GdGo1.init(($, go) => {
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
          $(go.Shape, 'Rectangle', { fill: 'lightgray' }),
          $(
            go.Panel,
            'Table',
            $(go.RowColumnDefinition, { column: 0, alignment: go.Spot.Left }),
            $(go.RowColumnDefinition, { column: 2, alignment: go.Spot.Right }),
            $(
              go.TextBlock, // the node title
              { column: 0, row: 0, columnSpan: 3, alignment: go.Spot.Center, font: 'bold 10pt sans-serif', margin: new go.Margin(4, 2) },
              new go.Binding('text', 'key')
            ),
            $(
              go.Panel,
              'Horizontal',
              { column: 0, row: 1 },
              $(
                go.Shape, // the "A" port
                { width: 6, height: 6, portId: 'A', toSpot: go.Spot.Left, toLinkable: true, toMaxLinks: 1 }
              ), // allow user-drawn links from here
              $(go.TextBlock, 'A') // "A" port label
            ),
            $(
              go.Panel,
              'Horizontal',
              { column: 0, row: 2 },
              $(
                go.Shape, // the "B" port
                { width: 6, height: 6, portId: 'B', toSpot: go.Spot.Left, toLinkable: true, toMaxLinks: 1 }
              ), // allow user-drawn links from here
              $(go.TextBlock, 'B') // "B" port label
            ),
            $(
              go.Panel,
              'Horizontal',
              { column: 2, row: 1, rowSpan: 2 },
              $(go.TextBlock, 'Out'), // "Out" port label
              $(
                go.Shape, // the "Out" port
                { width: 6, height: 6, portId: 'Out', fromSpot: go.Spot.Right, fromLinkable: true }
              ) // allow user-drawn links to here
            )
          )
        )

        myDiagram.linkTemplate = $(go.Link, { routing: go.Link.Orthogonal, corner: 3 }, $(go.Shape), $(go.Shape, { toArrow: 'Standard' }))

        myDiagram.layout = $(go.LayeredDigraphLayout, { columnSpacing: 10 })

        myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal

        myDiagram.model = $(go.GraphLinksModel, {
          linkFromPortIdProperty: 'fromPort', // required information:
          linkToPortIdProperty: 'toPort', // identifies data property names
          nodeDataArray: [{ key: 'Add1' }, { key: 'Add2' }, { key: 'Subtract1' }],
          linkDataArray: [
            // no predeclared links
          ],
        })
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
