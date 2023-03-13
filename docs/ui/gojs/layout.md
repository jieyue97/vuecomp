# 图谱

- 甘特图

:::demo

```html
<template>
  <div style="height: 300px; width: 100%">
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
            _widthFactor: 1, // a scale for the nodes' positions and widths
            isReadOnly: true, // deny the user permission to alter the diagram or zoom in or out
            allowZoom: false,
            'grid.visible': true, // display a grid in the background of the diagram
            'grid.gridCellSize': new go.Size(30, 150),
          },
        }
      })
      myDiagram.nodeTemplateMap.add(
        '',
        $(
          go.Node,
          'Auto',
          // links come from the right and go to the left side of the top of the node
          { fromSpot: go.Spot.Right, toSpot: new go.Spot(0.001, 0, 11, 0) },
          $(
            go.Shape,
            'Rectangle',
            { height: 15 },
            new go.Binding('fill', 'color'),
            new go.Binding('width', 'width', function (w) {
              return scaleWidth(w)
            })
          ),
          $(go.TextBlock, { margin: 2, alignment: go.Spot.Left }, new go.Binding('text', 'key')),
          // using a function in the Binding allows the value to
          // change when Diagram.updateAllTargetBindings is called
          new go.Binding('location', 'loc', function (l) {
            return new go.Point(scaleWidth(l.x), l.y)
          })
        )
      )

      // create the template for the start node
      myDiagram.nodeTemplateMap.add(
        'start',
        $(
          go.Node,
          { fromSpot: go.Spot.Right, toSpot: go.Spot.Top, selectable: false },
          $(go.Shape, 'Diamond', { height: 15, width: 15 }),
          // make the location of the start node is not scalable
          new go.Binding('location', 'loc')
        )
      )

      // create the template for the end node
      myDiagram.nodeTemplateMap.add(
        'end',
        $(
          go.Node,
          { fromSpot: go.Spot.Right, toSpot: go.Spot.Top, selectable: false },
          $(go.Shape, 'Diamond', { height: 15, width: 15 }),
          // make the location of the end node (with location.x < 0) scalable
          new go.Binding('location', 'loc', function (l) {
            if (l.x >= 0) return new go.Point(scaleWidth(l.x), l.y)
            else return l
          })
        )
      )

      // create the link template
      myDiagram.linkTemplate = $(
        go.Link,
        {
          routing: go.Link.Orthogonal,
          corner: 3,
          toShortLength: 2,
          selectable: false,
        },
        $(go.Shape, { strokeWidth: 2 }),
        $(go.Shape, { toArrow: 'OpenTriangle' })
      )

      // add the nodes and links to the model
      myDiagram.model = new go.GraphLinksModel(
        [
          // node data
          { key: 'a', color: 'coral', width: 120, loc: new go.Point(scaleWidth(0), 40) },
          { key: 'b', color: 'turquoise', width: 160, loc: new go.Point(scaleWidth(0), 60) },
          { key: 'c', color: 'coral', width: 150, loc: new go.Point(scaleWidth(120), 80) },
          { key: 'd', color: 'turquoise', width: 190, loc: new go.Point(scaleWidth(120), 100) },
          { key: 'e', color: 'coral', width: 150, loc: new go.Point(scaleWidth(270), 120) },
          { key: 'f', color: 'turquoise', width: 130, loc: new go.Point(scaleWidth(310), 140) },
          { key: 'g', color: 'coral', width: 155, loc: new go.Point(scaleWidth(420), 160) },
          { key: 'begin', category: 'start', loc: new go.Point(-15, 20) },
          { key: 'end', category: 'end', loc: new go.Point(scaleWidth(575), 180) },
        ],
        [
          // link data
          { from: 'begin', to: 'a' },
          { from: 'begin', to: 'b' },
          { from: 'a', to: 'c' },
          { from: 'a', to: 'd' },
          { from: 'b', to: 'e' },
          { from: 'c', to: 'e' },
          { from: 'd', to: 'f' },
          { from: 'e', to: 'g' },
          { from: 'f', to: 'end' },
          { from: 'g', to: 'end' },
        ]
      )

      // add a Graduated panel to show the dates, globally scoped
      let dateScale = $(
        go.Part,
        'Graduated',
        {
          graduatedTickUnit: 1,
          graduatedMin: 0,
          graduatedMax: 3,
          pickable: false,
          location: new go.Point(0, 0),
        },
        $(go.Shape, { name: 'line', strokeWidth: 0, geometryString: 'M0 0 H' + scaleWidth(450) }),
        $(go.TextBlock, {
          name: 'labels',
          font: '10pt sans-serif',
          alignmentFocus: new go.Spot(0, 0, -3, -3),
          graduatedFunction: function (v) {
            var d = new Date(2017, 6, 23)
            d.setDate(d.getDate() + v * 7)
            // format date output to string
            var options = { month: 'short', day: '2-digit' }
            return d.toLocaleDateString('en-US', options)
          },
        })
      )
      myDiagram.add(dateScale)
      function scaleWidth(num) {
        return num * myDiagram._widthFactor
      }

      // change the grid's cell size and the widthFactor,
      // then update Bindings to scale the widths and positions of nodes,
      // as well as the width of the date scale
      function rescale() {
        var val = parseFloat(document.getElementById('widthSlider').value)
        myDiagram.startTransaction('rescale')
        myDiagram.grid.gridCellSize = new go.Size(val, 150)
        myDiagram._widthFactor = val / 30
        myDiagram.updateAllTargetBindings()
        // update width of date scale and maybe change interval of labels if too small
        var width = scaleWidth(450)
        dateScale.findObject('line').geometryString = 'M0 0 H' + width
        if (width >= 140) dateScale.findObject('labels').interval = 1
        if (width < 140) dateScale.findObject('labels').interval = 2
        if (width < 70) dateScale.findObject('labels').interval = 4
        myDiagram.commitTransaction('rescale')
      }
    },
  }
</script>
```

:::

- ER 图

:::demo

```html
<template>
  <div style="height: 700px; width: 100%">
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
          domId: 'base2',
          defalutOption: {
            allowDelete: false,
            allowCopy: false,
            layout: $(go.ForceDirectedLayout),
            'undoManager.isEnabled': true,
          },
        }
      })
      var colors = {
        red: '#be4b15',
        green: '#52ce60',
        blue: '#6ea5f8',
        lightred: '#fd8852',
        lightblue: '#afd4fe',
        lightgreen: '#b9e986',
        pink: '#faadc1',
        purple: '#d689ff',
        orange: '#fdb400',
      }
      // the template for each attribute in a node's array of item data
      var itemTempl = $(
        go.Panel,
        'Horizontal',
        $(
          go.Shape,
          { desiredSize: new go.Size(15, 15), strokeJoin: 'round', strokeWidth: 3, stroke: null, margin: 2 },
          new go.Binding('figure', 'figure'),
          new go.Binding('fill', 'color'),
          new go.Binding('stroke', 'color')
        ),
        $(
          go.TextBlock,
          {
            stroke: '#333333',
            font: 'bold 14px sans-serif',
          },
          new go.Binding('text', 'name')
        )
      )
      // define the Node template, representing an entity
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto', // the whole node panel
        {
          selectionAdorned: true,
          resizable: true,
          layoutConditions: go.Part.LayoutStandard & ~go.Part.LayoutNodeSized,
          fromSpot: go.Spot.AllSides,
          toSpot: go.Spot.AllSides,
          isShadowed: true,
          shadowOffset: new go.Point(3, 3),
          shadowColor: '#C5C1AA',
        },
        new go.Binding('location', 'location').makeTwoWay(),
        // whenever the PanelExpanderButton changes the visible property of the "LIST" panel,
        // clear out any desiredSize set by the ResizingTool.
        new go.Binding('desiredSize', 'visible', function (v) {
          return new go.Size(NaN, NaN)
        }).ofObject('LIST'),
        // define the node's outer shape, which will surround the Table
        $(go.Shape, 'RoundedRectangle', { fill: 'white', stroke: '#eeeeee', strokeWidth: 3 }),
        $(
          go.Panel,
          'Table',
          { margin: 8, stretch: go.GraphObject.Fill },
          $(go.RowColumnDefinition, { row: 0, sizing: go.RowColumnDefinition.None }),
          // the table header
          $(
            go.TextBlock,
            {
              row: 0,
              alignment: go.Spot.Center,
              margin: new go.Margin(0, 24, 0, 2), // leave room for Button
              font: 'bold 16px sans-serif',
            },
            new go.Binding('text', 'key')
          ),
          // the collapse/expand button
          $(
            'PanelExpanderButton',
            'LIST', // the name of the element whose visibility this button toggles
            { row: 0, alignment: go.Spot.TopRight }
          ),
          // the list of Panels, each showing an attribute
          $(
            go.Panel,
            'Vertical',
            {
              name: 'LIST',
              row: 1,
              padding: 3,
              alignment: go.Spot.TopLeft,
              defaultAlignment: go.Spot.Left,
              stretch: go.GraphObject.Horizontal,
              itemTemplate: itemTempl,
            },
            new go.Binding('itemArray', 'items')
          )
        ) // end Table Panel
      ) // end Node
      // define the Link template, representing a relationship
      myDiagram.linkTemplate = $(
        go.Link, // the whole link panel
        {
          selectionAdorned: true,
          layerName: 'Foreground',
          reshapable: true,
          routing: go.Link.AvoidsNodes,
          corner: 5,
          curve: go.Link.JumpOver,
        },
        $(
          go.Shape, // the link shape
          { stroke: '#303B45', strokeWidth: 2.5 }
        ),
        $(
          go.TextBlock, // the "from" label
          {
            textAlign: 'center',
            font: 'bold 14px sans-serif',
            stroke: '#1967B3',
            segmentIndex: 0,
            segmentOffset: new go.Point(NaN, NaN),
            segmentOrientation: go.Link.OrientUpright,
          },
          new go.Binding('text', 'text')
        ),
        $(
          go.TextBlock, // the "to" label
          {
            textAlign: 'center',
            font: 'bold 14px sans-serif',
            stroke: '#1967B3',
            segmentIndex: -1,
            segmentOffset: new go.Point(NaN, NaN),
            segmentOrientation: go.Link.OrientUpright,
          },
          new go.Binding('text', 'toText')
        )
      )
      // create the model for the E-R diagram
      var nodeDataArray = [
        {
          key: 'Products',
          items: [
            { name: 'ProductID', iskey: true, figure: 'Decision', color: colors.red },
            { name: 'ProductName', iskey: false, figure: 'Hexagon', color: colors.blue },
            { name: 'SupplierID', iskey: false, figure: 'Decision', color: 'purple' },
            { name: 'CategoryID', iskey: false, figure: 'Decision', color: 'purple' },
          ],
        },
        {
          key: 'Suppliers',
          items: [
            { name: 'SupplierID', iskey: true, figure: 'Decision', color: colors.red },
            { name: 'CompanyName', iskey: false, figure: 'Hexagon', color: colors.blue },
            { name: 'ContactName', iskey: false, figure: 'Hexagon', color: colors.blue },
            { name: 'Address', iskey: false, figure: 'Hexagon', color: colors.blue },
          ],
        },
        {
          key: 'Categories',
          items: [
            { name: 'CategoryID', iskey: true, figure: 'Decision', color: colors.red },
            { name: 'CategoryName', iskey: false, figure: 'Hexagon', color: colors.blue },
            { name: 'Description', iskey: false, figure: 'Hexagon', color: colors.blue },
            { name: 'Picture', iskey: false, figure: 'TriangleUp', color: colors.pink },
          ],
        },
        {
          key: 'Order Details',
          items: [
            { name: 'OrderID', iskey: true, figure: 'Decision', color: colors.red },
            { name: 'ProductID', iskey: true, figure: 'Decision', color: colors.red },
            { name: 'UnitPrice', iskey: false, figure: 'Circle', color: colors.green },
            { name: 'Quantity', iskey: false, figure: 'Circle', color: colors.green },
            { name: 'Discount', iskey: false, figure: 'Circle', color: colors.green },
          ],
        },
      ]
      var linkDataArray = [
        { from: 'Products', to: 'Suppliers', text: '0..N', toText: '1' },
        { from: 'Products', to: 'Categories', text: '0..N', toText: '1' },
        { from: 'Order Details', to: 'Products', text: '0..N', toText: '1' },
      ]
      myDiagram.model = $(go.GraphLinksModel, {
        copiesArrays: true,
        copiesArrayObjects: true,
        nodeDataArray: nodeDataArray,
        linkDataArray: linkDataArray,
      })
    },
  }
</script>
```

:::

- 概念图

:::demo

```html
<template>
  <div style="height: 600px; width: 100%">
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
          domId: 'base6',
          defalutOption: {
            initialAutoScale: go.Diagram.Uniform, // an initial automatic zoom-to-fit
            contentAlignment: go.Spot.Center, // align document to the center of the viewport
            layout: $(
              go.ForceDirectedLayout, // automatically spread nodes apart
              { maxIterations: 200, defaultSpringLength: 30, defaultElectricalCharge: 100 }
            ),
          },
        }
      })
      // define each Node's appearance
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto', // the whole node panel
        { locationSpot: go.Spot.Center },
        // define the node's outer shape, which will surround the TextBlock
        $(go.Shape, 'Rectangle', { fill: $(go.Brush, 'Linear', { 0: 'rgb(254, 201, 0)', 1: 'rgb(254, 162, 0)' }), stroke: 'black' }),
        $(go.TextBlock, { font: 'bold 10pt helvetica, bold arial, sans-serif', margin: 4 }, new go.Binding('text', 'text'))
      )

      // replace the default Link template in the linkTemplateMap
      myDiagram.linkTemplate = $(
        go.Link, // the whole link panel
        $(
          go.Shape, // the link shape
          { stroke: 'black' }
        ),
        $(
          go.Shape, // the arrowhead
          { toArrow: 'standard', stroke: null }
        ),
        $(
          go.Panel,
          'Auto',
          $(
            go.Shape, // the label background, which becomes transparent around the edges
            {
              fill: $(go.Brush, 'Radial', { 0: 'rgb(240, 240, 240)', 0.3: 'rgb(240, 240, 240)', 1: 'rgba(240, 240, 240, 0)' }),
              stroke: null,
            }
          ),
          $(
            go.TextBlock, // the label text
            {
              textAlign: 'center',
              font: '10pt helvetica, arial, sans-serif',
              stroke: '#555555',
              margin: 4,
            },
            new go.Binding('text', 'text')
          )
        )
      )

      // create the model for the concept map
      var nodeDataArray = [
        { key: 1, text: 'Concept Maps' },
        { key: 2, text: 'Organized Knowledge' },
        { key: 3, text: 'Context Dependent' },
        { key: 4, text: 'Concepts' },
        { key: 5, text: 'Propositions' },
        { key: 6, text: 'Associated Feelings or Affect' },
        { key: 7, text: 'Perceived Regularities' },
        { key: 8, text: 'Labeled' },
        { key: 9, text: 'Hierarchically Structured' },
        { key: 10, text: 'Effective Teaching' },
        { key: 11, text: 'Crosslinks' },
        { key: 12, text: 'Effective Learning' },
        { key: 13, text: 'Events (Happenings)' },
        { key: 14, text: 'Objects (Things)' },
        { key: 15, text: 'Symbols' },
        { key: 16, text: 'Words' },
        { key: 17, text: 'Creativity' },
        { key: 18, text: 'Interrelationships' },
        { key: 19, text: 'Infants' },
        { key: 20, text: 'Different Map Segments' },
      ]
      var linkDataArray = [
        { from: 1, to: 2, text: 'represent' },
        { from: 2, to: 3, text: 'is' },
        { from: 2, to: 4, text: 'is' },
        { from: 2, to: 5, text: 'is' },
        { from: 2, to: 6, text: 'includes' },
        { from: 2, to: 10, text: 'necessary\nfor' },
        { from: 2, to: 12, text: 'necessary\nfor' },
        { from: 4, to: 5, text: 'combine\nto form' },
        { from: 4, to: 6, text: 'include' },
        { from: 4, to: 7, text: 'are' },
        { from: 4, to: 8, text: 'are' },
        { from: 4, to: 9, text: 'are' },
        { from: 5, to: 9, text: 'are' },
        { from: 5, to: 11, text: 'may be' },
        { from: 7, to: 13, text: 'in' },
        { from: 7, to: 14, text: 'in' },
        { from: 7, to: 19, text: 'begin\nwith' },
        { from: 8, to: 15, text: 'with' },
        { from: 8, to: 16, text: 'with' },
        { from: 9, to: 17, text: 'aids' },
        { from: 11, to: 18, text: 'show' },
        { from: 12, to: 19, text: 'begins\nwith' },
        { from: 17, to: 18, text: 'needed\nto see' },
        { from: 18, to: 20, text: 'between' },
      ]
      myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray)
    },
  }
</script>
```

:::

- 看版图

:::demo

```html
<template>
  <div style="height: 400px; width: 100%">
    <gd-go ref="GdGo"> </gd-go>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          class: 'go.GraphLinksModel',
          nodeDataArray: [
            { key: 'Problems', text: 'Problems', isGroup: true, loc: '0 23.52284749830794' },
            { key: 'Reproduced', text: 'Reproduced', isGroup: true, color: '0', loc: '109 23.52284749830794' },
            { key: 'Identified', text: 'Identified', isGroup: true, color: '0', loc: '235 23.52284749830794' },
            { key: 'Fixing', text: 'Fixing', isGroup: true, color: '0', loc: '343 23.52284749830794' },
            { key: 'Reviewing', text: 'Reviewing', isGroup: true, color: '0', loc: '451 23.52284749830794' },
            { key: 'Testing', text: 'Testing', isGroup: true, color: '0', loc: '562 23.52284749830794' },
            { key: -1, group: 'Problems', category: 'newbutton', loc: '12 35.52284749830794' },
            { key: 1, text: 'text for oneA', group: 'Problems', color: '0', loc: '12 35.52284749830794' },
            { key: 2, text: 'text for oneB', group: 'Problems', color: '1', loc: '12 65.52284749830794' },
            { key: 3, text: 'text for oneC', group: 'Problems', color: '0', loc: '12 95.52284749830794' },
            { key: 4, text: 'text for oneD', group: 'Problems', color: '1', loc: '12 125.52284749830794' },
            { key: 5, text: 'text for twoA', group: 'Reproduced', color: '1', loc: '121 35.52284749830794' },
            { key: 6, text: 'text for twoB', group: 'Reproduced', color: '1', loc: '121 65.52284749830794' },
            { key: 7, text: 'text for twoC', group: 'Identified', color: '0', loc: '247 35.52284749830794' },
            { key: 8, text: 'text for twoD', group: 'Fixing', color: '0', loc: '355 35.52284749830794' },
            { key: 9, text: 'text for twoE', group: 'Reviewing', color: '0', loc: '463 35.52284749830794' },
            { key: 10, text: 'text for twoF', group: 'Reviewing', color: '1', loc: '463 65.52284749830794' },
            { key: 11, text: 'text for twoG', group: 'Testing', color: '0', loc: '574 35.52284749830794' },
          ],
          linkDataArray: [],
        },
      }
    },
    methods: {
      load(myDiagram, relayoutDiagram) {
        myDiagram.model = go.Model.fromJson(this.data)
        myDiagram.delayInitialization(relayoutDiagram)
      },
    },
    mounted() {
      const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
        function PoolLayout() {
          go.GridLayout.call(this)
          this.cellSize = new go.Size(1, 1)
          this.wrappingColumn = Infinity
          this.wrappingWidth = Infinity
          this.spacing = new go.Size(0, 0)
          this.alignment = go.GridLayout.Position
        }
        go.Diagram.inherit(PoolLayout, go.GridLayout)

        PoolLayout.prototype.doLayout = function (coll) {
          var diagram = this.diagram
          if (diagram === null) return
          diagram.startTransaction('PoolLayout')
          // make sure all of the Group Shapes are big enough
          var minsize = computeMinPoolSize()
          diagram.findTopLevelGroups().each(function (lane) {
            if (!(lane instanceof go.Group)) return
            var shape = lane.selectionObject
            if (shape !== null) {
              // change the desiredSize to be big enough in both directions
              var sz = computeLaneSize(lane)
              shape.width = !isNaN(shape.width) ? Math.max(shape.width, sz.width) : sz.width
              shape.height = isNaN(shape.height) ? minsize.height : Math.max(shape.height, minsize.height)
              var cell = lane.resizeCellSize
              if (!isNaN(shape.width) && !isNaN(cell.width) && cell.width > 0) shape.width = Math.ceil(shape.width / cell.width) * cell.width
              if (!isNaN(shape.height) && !isNaN(cell.height) && cell.height > 0) shape.height = Math.ceil(shape.height / cell.height) * cell.height
            }
          })
          // now do all of the usual stuff, according to whatever properties have been set on this GridLayout
          go.GridLayout.prototype.doLayout.call(this, coll)
          diagram.commitTransaction('PoolLayout')
        }
        return {
          domId: 'base8',
          defalutOption: {
            // start everything in the middle of the viewport
            contentAlignment: go.Spot.TopCenter,
            // use a simple layout to stack the top-level Groups next to each other
            layout: $(PoolLayout),
            // disallow nodes to be dragged to the diagram's background
            mouseDrop: function (e) {
              e.diagram.currentTool.doCancel()
            },
            // a clipboard copied node is pasted into the original node's group (i.e. lane).
            'commandHandler.copiesGroupKey': true,
            // automatically re-layout the swim lanes after dragging the selection
            SelectionMoved: relayoutDiagram, // this DiagramEvent listener is
            SelectionCopied: relayoutDiagram, // defined above
            'animationManager.isEnabled': false,
            'undoManager.isEnabled': true,
            // allow TextEditingTool to start without selecting first
            'textEditingTool.starting': go.TextEditingTool.DoubleClick,
          },
        }
      })
      // Customize the dragging tool:
      // When dragging a Node set its opacity to 0.7 and move it to the foreground layer
      myDiagram.toolManager.draggingTool.doActivate = function () {
        go.DraggingTool.prototype.doActivate.call(this)
        this.currentPart.opacity = 0.7
        this.currentPart.layerName = 'Foreground'
      }
      myDiagram.toolManager.draggingTool.doDeactivate = function () {
        this.currentPart.opacity = 1
        this.currentPart.layerName = ''
        go.DraggingTool.prototype.doDeactivate.call(this)
      }

      // There are only three note colors by default, blue, red, and yellow but you could add more here:
      var noteColors = ['#009CCC', '#CC293D', '#FFD700']
      function getNoteColor(num) {
        return noteColors[Math.min(num, noteColors.length - 1)]
      }

      myDiagram.nodeTemplate = $(
        go.Node,
        'Horizontal',
        new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
        $(
          go.Shape,
          'Rectangle',
          {
            fill: '#009CCC',
            strokeWidth: 1,
            stroke: '#009CCC',
            width: 6,
            stretch: go.GraphObject.Vertical,
            alignment: go.Spot.Left,
            // if a user clicks the colored portion of a node, cycle through colors
            click: function (e, obj) {
              myDiagram.startTransaction('Update node color')
              var newColor = parseInt(obj.part.data.color) + 1
              if (newColor > noteColors.length - 1) newColor = 0
              myDiagram.model.setDataProperty(obj.part.data, 'color', newColor)
              myDiagram.commitTransaction('Update node color')
            },
          },
          new go.Binding('fill', 'color', getNoteColor),
          new go.Binding('stroke', 'color', getNoteColor)
        ),
        $(
          go.Panel,
          'Auto',
          $(go.Shape, 'Rectangle', { fill: 'white', stroke: '#CCCCCC' }),
          $(
            go.Panel,
            'Table',
            { width: 130, minSize: new go.Size(NaN, 50) },
            $(
              go.TextBlock,
              {
                name: 'TEXT',
                margin: 6,
                font: '11px Lato, sans-serif',
                editable: true,
                stroke: '#000',
                maxSize: new go.Size(130, NaN),
                alignment: go.Spot.TopLeft,
              },
              new go.Binding('text', 'text').makeTwoWay()
            )
          )
        )
      )

      // unmovable node that acts as a button
      myDiagram.nodeTemplateMap.add(
        'newbutton',
        $(
          go.Node,
          'Horizontal',
          {
            selectable: false,
            click: function (e, node) {
              myDiagram.startTransaction('add node')
              var newdata = { group: 'Problems', loc: '0 50', text: 'New item ' + node.containingGroup.memberParts.count, color: 0 }
              myDiagram.model.addNodeData(newdata)
              myDiagram.commitTransaction('add node')
              var node = myDiagram.findNodeForData(newdata)
              myDiagram.select(node)
              myDiagram.commandHandler.editTextBlock()
            },
            background: 'white',
          },
          $(
            go.Panel,
            'Auto',
            $(go.Shape, 'Rectangle', { strokeWidth: 0, stroke: null, fill: '#6FB583' }),
            $(go.Shape, 'PlusLine', { margin: 6, strokeWidth: 2, width: 12, height: 12, stroke: 'white', background: '#6FB583' })
          ),
          $(go.TextBlock, 'New item', { font: '10px Lato, sans-serif', margin: 6 })
        )
      )

      // While dragging, highlight the dragged-over group
      function highlightGroup(grp, show) {
        if (show) {
          var part = myDiagram.toolManager.draggingTool.currentPart
          if (part.containingGroup !== grp) {
            grp.isHighlighted = true
            return
          }
        }
        grp.isHighlighted = false
      }

      myDiagram.groupTemplate = $(
        go.Group,
        'Vertical',
        {
          selectable: false,
          selectionObjectName: 'SHAPE', // even though its not selectable, this is used in the layout
          layerName: 'Background', // all lanes are always behind all nodes and links
          layout: $(
            go.GridLayout, // automatically lay out the lane's subgraph
            {
              wrappingColumn: 1,
              cellSize: new go.Size(1, 1),
              spacing: new go.Size(5, 5),
              alignment: go.GridLayout.Position,
              comparer: function (a, b) {
                // can re-order tasks within a lane
                var ay = a.location.y
                var by = b.location.y
                if (isNaN(ay) || isNaN(by)) return 0
                if (ay < by) return -1
                if (ay > by) return 1
                return 0
              },
            }
          ),
          click: function (e, grp) {
            // allow simple click on group to clear selection
            if (!e.shift && !e.control && !e.meta) e.diagram.clearSelection()
          },
          computesBoundsAfterDrag: true, // needed to prevent recomputing Group.placeholder bounds too soon
          handlesDragDropForMembers: true, // don't need to define handlers on member Nodes and Links
          mouseDragEnter: function (e, grp, prev) {
            highlightGroup(grp, true)
          },
          mouseDragLeave: function (e, grp, next) {
            highlightGroup(grp, false)
          },
          mouseDrop: function (e, grp) {
            // dropping a copy of some Nodes and Links onto this Group adds them to this Group
            // don't allow drag-and-dropping a mix of regular Nodes and Groups
            if (
              e.diagram.selection.all(function (n) {
                return !(n instanceof go.Group)
              })
            ) {
              var ok = grp.addMembers(grp.diagram.selection, true)
              if (!ok) grp.diagram.currentTool.doCancel()
            }
          },
          subGraphExpandedChanged: function (grp) {
            var shp = grp.selectionObject
            if (grp.diagram.undoManager.isUndoingRedoing) return
            if (grp.isSubGraphExpanded) {
              shp.width = grp._savedBreadth
            } else {
              grp._savedBreadth = shp.width
              shp.width = NaN
            }
          },
        },
        new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
        new go.Binding('isSubGraphExpanded', 'expanded').makeTwoWay(),
        // the lane header consisting of a TextBlock and an expander button
        $(
          go.Panel,
          'Horizontal',
          {
            name: 'HEADER',
            angle: 0, // maybe rotate the header to read sideways going up
            alignment: go.Spot.Left,
          },
          $('SubGraphExpanderButton', { margin: 5 }), // this remains always visible
          $(
            go.Panel,
            'Horizontal', // this is hidden when the swimlane is collapsed
            new go.Binding('visible', 'isSubGraphExpanded').ofObject(),
            $(
              go.TextBlock, // the lane label
              { font: '15px Lato, sans-serif', editable: true, margin: new go.Margin(2, 0, 0, 0) },
              new go.Binding('text', 'text').makeTwoWay()
            )
          )
        ), // end Horizontal Panel
        $(
          go.Panel,
          'Auto', // the lane consisting of a background Shape and a Placeholder representing the subgraph
          $(
            go.Shape,
            'Rectangle', // this is the resized object
            { name: 'SHAPE', fill: '#F1F1F1', stroke: null, strokeWidth: 4 },
            new go.Binding('fill', 'isHighlighted', function (h) {
              return h ? '#D6D6D6' : '#F1F1F1'
            }).ofObject(),
            new go.Binding('desiredSize', 'size', go.Size.parse).makeTwoWay(go.Size.stringify)
          ),
          $(go.Placeholder, { padding: 12, alignment: go.Spot.TopLeft }),
          $(
            go.TextBlock, // this TextBlock is only seen when the swimlane is collapsed
            {
              name: 'LABEL',
              font: '15px Lato, sans-serif',
              editable: true,
              angle: 90,
              alignment: go.Spot.TopLeft,
              margin: new go.Margin(4, 0, 0, 2),
            },
            new go.Binding('visible', 'isSubGraphExpanded', function (e) {
              return !e
            }).ofObject(),
            new go.Binding('text', 'text').makeTwoWay()
          )
        ) // end Auto Panel
      ) // end Group

      this.load(myDiagram, relayoutDiagram)

      // Set up a Part as a legend, and place it directly on the diagram
      myDiagram.add(
        $(
          go.Part,
          'Table',
          { position: new go.Point(300, 10), selectable: false },
          $(go.TextBlock, 'Key', { row: 0, font: '700 14px Droid Serif, sans-serif' }), // end row 0
          $(
            go.Panel,
            'Horizontal',
            { row: 1, alignment: go.Spot.Left },
            $(go.Shape, 'Rectangle', { desiredSize: new go.Size(10, 10), fill: '#CC293D', margin: 5 }),
            $(go.TextBlock, 'Halted', { font: '700 13px Droid Serif, sans-serif' })
          ), // end row 1
          $(
            go.Panel,
            'Horizontal',
            { row: 2, alignment: go.Spot.Left },
            $(go.Shape, 'Rectangle', { desiredSize: new go.Size(10, 10), fill: '#FFD700', margin: 5 }),
            $(go.TextBlock, 'In Progress', { font: '700 13px Droid Serif, sans-serif' })
          ), // end row 2
          $(
            go.Panel,
            'Horizontal',
            { row: 3, alignment: go.Spot.Left },
            $(go.Shape, 'Rectangle', { desiredSize: new go.Size(10, 10), fill: '#009CCC', margin: 5 }),
            $(go.TextBlock, 'Completed', { font: '700 13px Droid Serif, sans-serif' })
          ) // end row 3
        )
      )
      // For the layout
      var MINLENGTH = 200 // this controls the minimum length of any swimlane
      var MINBREADTH = 100 // this controls the minimum breadth of any non-collapsed swimlane

      // some shared functions

      // this is called after nodes have been moved
      function relayoutDiagram() {
        myDiagram.selection.each(function (n) {
          n.invalidateLayout()
        })
        myDiagram.layoutDiagram()
      }

      // compute the minimum size of the whole diagram needed to hold all of the Lane Groups
      function computeMinPoolSize() {
        var len = MINLENGTH
        myDiagram.findTopLevelGroups().each(function (lane) {
          var holder = lane.placeholder
          if (holder !== null) {
            var sz = holder.actualBounds
            len = Math.max(len, sz.height)
          }
          var box = lane.selectionObject
          // naturalBounds instead of actualBounds to disregard the shape's stroke width
          len = Math.max(len, box.naturalBounds.height)
        })
        return new go.Size(NaN, len)
      }

      // compute the minimum size for a particular Lane Group
      function computeLaneSize(lane) {
        // assert(lane instanceof go.Group);
        var sz = computeMinLaneSize(lane)
        if (lane.isSubGraphExpanded) {
          var holder = lane.placeholder
          if (holder !== null) {
            var hsz = holder.actualBounds
            sz.width = Math.max(sz.width, hsz.width)
          }
        }
        // minimum breadth needs to be big enough to hold the header
        var hdr = lane.findObject('HEADER')
        if (hdr !== null) sz.width = Math.max(sz.width, hdr.actualBounds.width)
        return sz
      }

      // determine the minimum size of a Lane Group, even if collapsed
      function computeMinLaneSize(lane) {
        if (!lane.isSubGraphExpanded) return new go.Size(1, MINLENGTH)
        return new go.Size(MINBREADTH, MINLENGTH)
      }

      // define a custom grid layout that makes sure the length of each lane is the same
      // and that each lane is broad enough to hold its subgraph
    },
  }
</script>
```

:::

- 力导图

:::demo

```html
<template>
  <div style="height: 600px; width: 100%">
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
        function DemoForceDirectedLayout() {
          go.ForceDirectedLayout.call(this)
        }
        go.Diagram.inherit(DemoForceDirectedLayout, go.ForceDirectedLayout)

        // Override the makeNetwork method to also initialize
        // ForceDirectedVertex.isFixed from the corresponding Node.isSelected.
        DemoForceDirectedLayout.prototype.makeNetwork = function (coll) {
          // call base method for standard behavior
          var net = go.ForceDirectedLayout.prototype.makeNetwork.call(this, coll)
          net.vertexes.each(function (vertex) {
            var node = vertex.node
            if (node !== null) vertex.isFixed = node.isSelected
          })
          return net
        }
        return {
          domId: 'base12',
          defalutOption: {
            initialAutoScale: go.Diagram.Uniform, // zoom to make everything fit in the viewport
            layout: new DemoForceDirectedLayout(),
          },
        }
      })
      // define the Node template
      myDiagram.nodeTemplate = $(
        go.Node,
        'Spot',
        // make sure the Node.location is different from the Node.position
        { locationSpot: go.Spot.Center },
        new go.Binding('text', 'text'), // for sorting
        $(
          go.Shape,
          'Ellipse',
          {
            fill: 'lightgray',
            stroke: null,
            desiredSize: new go.Size(30, 30),
          },
          new go.Binding('fill', 'fill')
        ),
        $(go.TextBlock, new go.Binding('text', 'text'))
      )

      // define the Link template
      myDiagram.linkTemplate = $(go.Link, { selectable: false }, $(go.Shape, { strokeWidth: 3, stroke: '#333' }))

      // generate a tree using the default values
      rebuildGraph()
      function rebuildGraph() {
        var minNodes = 20
        minNodes = parseInt(minNodes, 10)

        var maxNodes = 100
        maxNodes = parseInt(maxNodes, 10)

        var minChil = 1
        minChil = parseInt(minChil, 10)

        var maxChil = 10
        maxChil = parseInt(maxChil, 10)

        generateTree(minNodes, maxNodes, minChil, maxChil)
      }

      function generateTree(minNodes, maxNodes, minChil, maxChil) {
        myDiagram.startTransaction('generateTree')
        // replace the diagram's model's nodeDataArray
        generateNodes(minNodes, maxNodes)
        // replace the diagram's model's linkDataArray
        generateLinks(minChil, maxChil)
        // perform a diagram layout with the latest parameters
        layout()
        myDiagram.commitTransaction('generateTree')
      }

      // Creates a random number of randomly colored nodes.
      function generateNodes(min, max) {
        var nodeArray = []
        if (isNaN(min) || min < 0) min = 0
        if (isNaN(max) || max < min) max = min
        var numNodes = Math.floor(Math.random() * (max - min + 1)) + min
        for (var i = 0; i < numNodes; i++) {
          nodeArray.push({
            key: i,
            text: i.toString(),
            fill: go.Brush.randomColor(),
          })
        }

        // randomize the node data
        for (i = 0; i < nodeArray.length; i++) {
          var swap = Math.floor(Math.random() * nodeArray.length)
          var temp = nodeArray[swap]
          nodeArray[swap] = nodeArray[i]
          nodeArray[i] = temp
        }

        // set the nodeDataArray to this array of objects
        myDiagram.model.nodeDataArray = nodeArray
      }

      // Takes the random collection of nodes and creates a random tree with them.
      // Respects the minimum and maximum number of links from each node.
      // (The minimum can be disregarded if we run out of nodes to link to)
      function generateLinks(min, max) {
        if (myDiagram.nodes.count < 2) return
        if (isNaN(min) || min < 1) min = 1
        if (isNaN(max) || max < min) max = min
        var linkArray = []
        // make two Lists of nodes to keep track of where links already exist
        var nit = myDiagram.nodes
        var nodes = new go.List(/*go.Node*/)
        nodes.addAll(nit)
        var available = new go.List(/*go.Node*/)
        available.addAll(nodes)
        for (var i = 0; i < nodes.length; i++) {
          var next = nodes.get(i)
          available.remove(next)
          var children = Math.floor(Math.random() * (max - min + 1)) + min
          for (var j = 1; j <= children; j++) {
            if (available.length === 0) break
            var to = available.get(0)
            available.remove(to)
            // get keys from the Node.text strings
            var nextKey = parseInt(next.text, 10)
            var toKey = parseInt(to.text, 10)
            linkArray.push({ from: nextKey, to: toKey })
          }
        }
        myDiagram.model.linkDataArray = linkArray
      }

      // Update the layout from the controls.
      // Changing the properties will invalidate the layout.
      function layout() {
        myDiagram.startTransaction('changed Layout')
        var lay = myDiagram.layout

        var maxIter = 100
        maxIter = parseInt(maxIter, 10)
        lay.maxIterations = maxIter

        var epsilon = 1
        epsilon = parseFloat(epsilon, 10)
        lay.epsilonDistance = epsilon

        var infinity = 1000
        infinity = parseFloat(infinity, 10)
        lay.infinityDistance = infinity

        var arrangement = '100 100'
        var arrangementSpacing = new go.Size()
        arrangement = arrangement.split(' ', 2)
        arrangementSpacing.width = parseFloat(arrangement[0], 10)
        arrangementSpacing.height = parseFloat(arrangement[1], 10)
        lay.arrangementSpacing = arrangementSpacing

        var charge = 150
        charge = parseFloat(charge, 10)
        lay.defaultElectricalCharge = charge

        var mass = 0
        mass = parseFloat(mass, 10)
        lay.defaultGravitationalMass = mass

        var stiffness = 0.05
        stiffness = parseFloat(stiffness, 10)
        lay.defaultSpringStiffness = stiffness

        var length = 50
        length = parseFloat(length, 10)
        lay.defaultSpringLength = length

        myDiagram.commitTransaction('changed Layout')
      }
    },
  }
</script>
```

:::

- 可扩展力导图

:::demo

```html
<template>
  <div style="height: 600px; width: 100%">
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
      var blues = ['#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B']
      const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
        return {
          domId: 'base20',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
            layout: $(go.ForceDirectedLayout),
            // moving and copying nodes also moves and copies their subtrees
            'commandHandler.copiesTree': true, // for the copy command
            'commandHandler.deletesTree': true, // for the delete command
            'draggingTool.dragsTree': true, // dragging for both move and copy
            'undoManager.isEnabled': true,
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Spot',
        {
          selectionObjectName: 'PANEL',
          isTreeExpanded: false,
          isTreeLeaf: false,
        },
        // the node's outer shape, which will surround the text
        $(
          go.Panel,
          'Auto',
          { name: 'PANEL' },
          $(
            go.Shape,
            'Circle',
            { fill: 'whitesmoke', stroke: 'black' },
            new go.Binding('fill', 'rootdistance', function (dist) {
              dist = Math.min(blues.length - 1, dist)
              return blues[dist]
            })
          ),
          $(go.TextBlock, { font: '12pt sans-serif', margin: 5 }, new go.Binding('text', 'key'))
        ),
        // the expand/collapse button, at the top-right corner
        $('TreeExpanderButton', {
          name: 'TREEBUTTON',
          width: 20,
          height: 20,
          alignment: go.Spot.TopRight,
          alignmentFocus: go.Spot.Center,
          // customize the expander behavior to
          // create children if the node has never been expanded
          click: function (e, obj) {
            // OBJ is the Button
            var node = obj.part // get the Node containing this Button
            if (node === null) return
            e.handled = true
            expandNode(node)
          },
        }) // end TreeExpanderButton
      ) // end Node

      // create the model with a root node data
      myDiagram.model = new go.TreeModel([{ key: 0, color: blues[0], everExpanded: false }])
      function expandNode(node) {
        var diagram = node.diagram
        diagram.startTransaction('CollapseExpandTree')
        // this behavior is specific to this incrementalTree sample:
        var data = node.data
        if (!data.everExpanded) {
          // only create children once per node
          diagram.model.setDataProperty(data, 'everExpanded', true)
          var numchildren = createSubTree(data)
          if (numchildren === 0) {
            // now known no children: don't need Button!
            node.findObject('TREEBUTTON').visible = false
          }
        }
        // this behavior is generic for most expand/collapse tree buttons:
        if (node.isTreeExpanded) {
          diagram.commandHandler.collapseTree(node)
        } else {
          diagram.commandHandler.expandTree(node)
        }
        diagram.commitTransaction('CollapseExpandTree')
        myDiagram.zoomToFit()
      }
      function createSubTree(parentdata) {
        var numchildren = Math.floor(Math.random() * 10)
        if (myDiagram.nodes.count <= 1) {
          numchildren += 1 // make sure the root node has at least one child
        }
        // create several node data objects and add them to the model
        var model = myDiagram.model
        var parent = myDiagram.findNodeForData(parentdata)

        var degrees = 1
        var grandparent = parent.findTreeParentNode()
        while (grandparent) {
          degrees++
          grandparent = grandparent.findTreeParentNode()
        }

        for (var i = 0; i < numchildren; i++) {
          var childdata = {
            key: model.nodeDataArray.length,
            parent: parentdata.key,
            rootdistance: degrees,
          }
          // add to model.nodeDataArray and create a Node
          model.addNodeData(childdata)
          // position the new child node close to the parent
          var child = myDiagram.findNodeForData(childdata)
          child.location = parent.location
        }
        return numchildren
      }
    },
  }
</script>
```

:::
