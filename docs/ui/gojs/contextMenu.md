### 右键菜单

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
          domId: 'menu',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      function changeColor(e, obj) {
        myDiagram.commit(function (d) {
          // get the context menu that holds the button that was clicked
          var contextmenu = obj.part
          // get the node data to which the Node is data bound
          var nodedata = contextmenu.data
          // compute the next color for the node
          var newcolor = 'lightblue'
          switch (nodedata.color) {
            case 'lightblue':
              newcolor = 'lightgreen'
              break
            case 'lightgreen':
              newcolor = 'lightyellow'
              break
            case 'lightyellow':
              newcolor = 'orange'
              break
            case 'orange':
              newcolor = 'lightblue'
              break
          }
          // modify the node data
          // this evaluates data Bindings and records changes in the UndoManager
          d.model.set(nodedata, 'color', newcolor)
        }, 'changed color')
      }

      // this is a normal Node template that also has a contextMenu defined for it
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        $(go.Shape, 'RoundedRectangle', { fill: 'white' }, new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key')),
        {
          // define a context menu for each node
          contextMenu: $(
            'ContextMenu', // that has one button
            $('ContextMenuButton', $(go.TextBlock, 'Change Color'), { click: changeColor })
            // more ContextMenuButtons would go here
          ), // end Adornment
        }
      )

      // also define a context menu for the diagram's background
      myDiagram.contextMenu = $(
        'ContextMenu',
        $(
          'ContextMenuButton',
          $(go.TextBlock, 'Undo'),
          {
            click: function (e, obj) {
              e.diagram.commandHandler.undo()
            },
          },
          new go.Binding('visible', '', function (o) {
            return o.diagram.commandHandler.canUndo()
          }).ofObject()
        ),
        $(
          'ContextMenuButton',
          $(go.TextBlock, 'Redo'),
          {
            click: function (e, obj) {
              e.diagram.commandHandler.redo()
            },
          },
          new go.Binding('visible', '', function (o) {
            return o.diagram.commandHandler.canRedo()
          }).ofObject()
        ),
        // no binding, always visible button:
        $('ContextMenuButton', $(go.TextBlock, 'New Node'), {
          click: function (e, obj) {
            e.diagram.commit(function (d) {
              var data = {}
              d.model.addNodeData(data)
              part = d.findPartForData(data) // must be same data reference, not a new {}
              // set location to saved mouseDownPoint in ContextMenuTool
              part.location = d.toolManager.contextMenuTool.mouseDownPoint
            }, 'new node')
          },
        })
      )

      var nodeDataArray = [
        { key: 'Alpha', color: 'lightyellow' },
        { key: 'Beta', color: 'orange' },
      ]
      var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
      myDiagram.undoManager.isEnabled = true
    },
  }
</script>
```

:::

- 设置菜单位置

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
          domId: 'menu2',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      function cmCommand(e, obj) {
        var node = obj.part.adornedPart // the Node with the context menu
        var buttontext = obj.elt(1) // the TextBlock
        alert(buttontext.text + ' command on ' + node.data.key)
      }

      // this is a normal Node template that also has a contextMenu defined for it
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        new go.Binding('location', 'loc'),
        $(go.Shape, 'RoundedRectangle', { fill: 'white' }, new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 5 }, new go.Binding('text', 'key')),
        {
          // define a context menu for each node
          contextMenu: $(
            'ContextMenu',
            'Spot', // that has several buttons around
            $(go.Placeholder, { padding: 5 }), // a Placeholder object
            $('ContextMenuButton', $(go.TextBlock, 'Top'), { alignment: go.Spot.Top, alignmentFocus: go.Spot.Bottom, click: cmCommand }),
            $('ContextMenuButton', $(go.TextBlock, 'Right'), { alignment: go.Spot.Right, alignmentFocus: go.Spot.Left, click: cmCommand }),
            $('ContextMenuButton', $(go.TextBlock, 'Bottom'), { alignment: go.Spot.Bottom, alignmentFocus: go.Spot.Top, click: cmCommand }),
            $('ContextMenuButton', $(go.TextBlock, 'Left'), { alignment: go.Spot.Left, alignmentFocus: go.Spot.Right, click: cmCommand })
          ), // end Adornment
        }
      )

      var nodeDataArray = [
        { key: 'Alpha', color: 'lightyellow', loc: new go.Point(100, 80) },
        { key: 'Beta', color: 'orange', loc: new go.Point(200, 80) },
      ]
      var linkDataArray = [{ from: 'Alpha', to: 'Beta' }]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
    },
  }
</script>
```

:::
