### 树结构

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
      return {
        defalutOption: {
          // 'draggingTool.dragsLink': true,
        },
      }
    },
    methods: {},
    mounted() {
      const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
        return {
          defalutOption: {
            layout: $(go.TreeLayout, { angle: 90, nodeSpacing: 10, layerSpacing: 40, layerStyle: go.TreeLayout.LayerUniform }),
          },
        }
      })
      var bluegrad = '#90CAF9'
      var pinkgrad = '#F48FB1'

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
            $(go.Shape, 'Rectangle', { desiredSize: new go.Size(30, 30), fill: bluegrad, margin: 5 }),
            $(go.TextBlock, 'Males', { font: '700 13px Droid Serif, sans-serif' })
          ), // end row 1
          $(
            go.Panel,
            'Horizontal',
            { row: 2, alignment: go.Spot.Left },
            $(go.Shape, 'Rectangle', { desiredSize: new go.Size(30, 30), fill: pinkgrad, margin: 5 }),
            $(go.TextBlock, 'Females', { font: '700 13px Droid Serif, sans-serif' })
          ) // end row 2
        )
      )

      // get tooltip text from the object's data
      function tooltipTextConverter(person) {
        var str = ''
        str += 'Born: ' + person.birthYear
        if (person.deathYear !== undefined) str += '\nDied: ' + person.deathYear
        if (person.reign !== undefined) str += '\nReign: ' + person.reign
        return str
      }

      // define tooltips for nodes
      var tooltiptemplate = $(
        'ToolTip',
        { 'Border.fill': 'whitesmoke', 'Border.stroke': 'black' },
        $(
          go.TextBlock,
          {
            font: 'bold 8pt Helvetica, bold Arial, sans-serif',
            wrap: go.TextBlock.WrapFit,
            margin: 5,
          },
          new go.Binding('text', '', tooltipTextConverter)
        )
      )

      // define Converters to be used for Bindings
      function genderBrushConverter(gender) {
        if (gender === 'M') return bluegrad
        if (gender === 'F') return pinkgrad
        return 'orange'
      }

      // replace the default Node template in the nodeTemplateMap
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        { deletable: false, toolTip: tooltiptemplate },
        new go.Binding('text', 'name'),
        $(
          go.Shape,
          'Rectangle',
          {
            fill: 'lightgray',
            stroke: null,
            strokeWidth: 0,
            stretch: go.GraphObject.Fill,
            alignment: go.Spot.Center,
          },
          new go.Binding('fill', 'gender', genderBrushConverter)
        ),
        $(
          go.TextBlock,
          {
            font: '700 12px Droid Serif, sans-serif',
            textAlign: 'center',
            margin: 10,
            maxSize: new go.Size(80, NaN),
          },
          new go.Binding('text', 'name')
        )
      )

      // define the Link template
      myDiagram.linkTemplate = $(
        go.Link, // the whole link panel
        { routing: go.Link.Orthogonal, corner: 5, selectable: false },
        $(go.Shape, { strokeWidth: 3, stroke: '#424242' })
      ) // the gray link shape

      // here's the family data
      var nodeDataArray = [
        { key: 0, name: 'George V', gender: 'M', birthYear: '1865', deathYear: '1936', reign: '1910-1936' },
        { key: 1, parent: 0, name: 'Edward VIII', gender: 'M', birthYear: '1894', deathYear: '1972', reign: '1936' },
        { key: 2, parent: 0, name: 'George VI', gender: 'M', birthYear: '1895', deathYear: '1952', reign: '1936-1952' },
        { key: 7, parent: 2, name: 'Elizabeth II', gender: 'F', birthYear: '1926', reign: '1952-' },
        { key: 16, parent: 7, name: 'Charles, Prince of Wales', gender: 'M', birthYear: '1948' },
        { key: 38, parent: 16, name: 'Prince William', gender: 'M', birthYear: '1982' },
        { key: 39, parent: 16, name: 'Prince Harry of Wales', gender: 'M', birthYear: '1984' },
        { key: 17, parent: 7, name: 'Anne, Princess Royal', gender: 'F', birthYear: '1950' },
        { key: 40, parent: 17, name: 'Peter Phillips', gender: 'M', birthYear: '1977' },
        { key: 82, parent: 40, name: 'Savannah Phillips', gender: 'F', birthYear: '2010' },
        { key: 41, parent: 17, name: 'Zara Phillips', gender: 'F', birthYear: '1981' },
        { key: 18, parent: 7, name: 'Prince Andrew', gender: 'M', birthYear: '1960' },
        { key: 42, parent: 18, name: 'Princess Beatrice of York', gender: 'F', birthYear: '1988' },
        { key: 43, parent: 18, name: 'Princess Eugenie of York', gender: 'F', birthYear: '1990' },
        { key: 19, parent: 7, name: 'Prince Edward', gender: 'M', birthYear: '1964' },
        { key: 44, parent: 19, name: 'Lady Louise Windsor', gender: 'F', birthYear: '2003' },
        { key: 45, parent: 19, name: 'James, Viscount Severn', gender: 'M', birthYear: '2007' },
        { key: 8, parent: 2, name: 'Princess Margaret', gender: 'F', birthYear: '1930', deathYear: '2002' },
        { key: 20, parent: 8, name: 'David Armstrong-Jones', gender: 'M', birthYear: '1961' },
        { key: 21, parent: 8, name: 'Lady Sarah Chatto', gender: 'F', birthYear: '1964' },
        { key: 46, parent: 21, name: 'Samuel Chatto', gender: 'M', birthYear: '1996' },
        { key: 47, parent: 21, name: 'Arthur Chatto', gender: 'M', birthYear: '1999' },
        { key: 3, parent: 0, name: 'Mary, Princess Royal', gender: 'F', birthYear: '1897', deathYear: '1965' },
      ]

      // create the model for the family tree
      myDiagram.model = new go.TreeModel(nodeDataArray)
    },
  }
</script>
```

:::

- 双向树

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
      var colors = {
        blue: '#2a6dc0',
        orange: '#ea2857',
        green: '#1cc1bc',
        gray: '#5b5b5b',
        white: '#F5F5F5',
      }
      const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
        return {
          domId: 'tree',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
            'undoManager.isEnabled': true,
            layout: $(go.TreeLayout),
          },
        }
      })
      myDiagram.nodeTemplate = $(
        go.Node,
        'Auto',
        $(go.Shape, 'Circle', { fill: 'lightcoral', strokeWidth: 0, width: 65, height: 65 }, new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 8, stroke: colors['white'], font: 'bold 16px sans-serif' }, new go.Binding('text', 'geo')),

        {
          toolTip: $(
            'ToolTip',
            { 'Border.stroke': colors['gray'], 'Border.strokeWidth': 2 },
            $(go.TextBlock, { margin: 8, stroke: colors['gray'], font: 'bold 16px sans-serif' }, new go.Binding('text', 'geo'))
          ),
        }
      )
      myDiagram.linkTemplate = $(
        go.Link,

        { routing: go.Link.Orthogonal, corner: 5 },
        $(go.Shape, { strokeWidth: 3.5, stroke: colors['gray'] })
      )
      myDiagram.model = new go.GraphLinksModel(
        [
          { key: 1, geo: 'file', color: colors['blue'] },
          { key: 2, geo: 'alarm', color: colors['orange'] },
          { key: 3, geo: 'lab', color: colors['blue'] },
          { key: 4, geo: 'earth', color: colors['blue'] },
          { key: 5, geo: 'heart', color: colors['green'] },
          { key: 6, geo: 'arrow', color: colors['blue'] },
          { key: 7, geo: 'html5', color: colors['orange'] },
          { key: 8, geo: 'up', color: colors['orange'] },
        ],
        [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 3, to: 4 },
          { from: 4, to: 5 },
          { from: 4, to: 6 },
          { from: 3, to: 7 },
          { from: 3, to: 8 },
        ]
      )
    },
  }
</script>
```

:::

- 决策树

:::demo

```html
<template>
  <div style="height:500px; width: 100%">
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
          domId: 'tree2',
          defalutOption: {
            initialContentAlignment: go.Spot.Left,
            isReadOnly: true,
            allowSelect: false,
            layout: $(go.TreeLayout, { nodeSpacing: 5 }),
          },
        }
      })
      // custom behavior for expanding/collapsing half of the subtree from a node
      function buttonExpandCollapse(e, port) {
        var node = port.part
        node.diagram.startTransaction('expand/collapse')
        var portid = port.portId
        node.findLinksOutOf(portid).each(function (l) {
          if (l.visible) {
            // collapse whole subtree recursively
            collapseTree(node, portid)
          } else {
            // only expands immediate children and their links
            l.visible = true
            var n = l.getOtherNode(node)
            if (n !== null) {
              n.location = node.getDocumentPoint(go.Spot.TopRight)
              n.visible = true
            }
          }
        })
        myDiagram.toolManager.hideToolTip()
        node.diagram.commitTransaction('expand/collapse')
      }

      // recursive function for collapsing complete subtree
      function collapseTree(node, portid) {
        node.findLinksOutOf(portid).each(function (l) {
          l.visible = false
          var n = l.getOtherNode(node)
          if (n !== null) {
            n.visible = false
            collapseTree(n, null) // null means all links, not just for a particular portId
          }
        })
      }

      // get the text for the tooltip from the data on the object being hovered over
      function tooltipTextConverter(data) {
        var str = ''
        var e = myDiagram.lastInput
        var currobj = e.targetObject
        if (currobj !== null && (currobj.name === 'ButtonA' || (currobj.panel !== null && currobj.panel.name === 'ButtonA'))) {
          str = data.aToolTip
        } else {
          str = data.bToolTip
        }
        return str
      }
      var tooltipTemplate = $(
        'ToolTip',
        { 'Border.fill': 'whitesmoke', 'Border.stroke': 'lightgray' },
        $(
          go.TextBlock,
          {
            font: '8pt sans-serif',
            wrap: go.TextBlock.WrapFit,
            desiredSize: new go.Size(200, NaN),
            alignment: go.Spot.Center,
            margin: 6,
          },
          new go.Binding('text', '', tooltipTextConverter)
        )
      )
      myDiagram.nodeTemplateMap.add(
        'decision',
        $(
          go.Node,
          'Auto',
          new go.Binding('text', 'key'),
          // define the node's outer shape, which will surround the Horizontal Panel
          $(go.Shape, 'Rectangle', { fill: 'whitesmoke', stroke: 'lightgray' }),
          // define a horizontal Panel to place the node's text alongside the buttons
          $(
            go.Panel,
            'Horizontal',
            $(go.TextBlock, { font: '30px Roboto, sans-serif', margin: 5 }, new go.Binding('text', 'key')),
            // define a vertical panel to place the node's two buttons one above the other
            $(
              go.Panel,
              'Vertical',
              { defaultStretch: go.GraphObject.Fill, margin: 3 },
              $(
                'Button', // button A
                {
                  name: 'ButtonA',
                  click: buttonExpandCollapse,
                  toolTip: tooltipTemplate,
                },
                new go.Binding('portId', 'a'),
                $(go.TextBlock, { font: '500 16px Roboto, sans-serif' }, new go.Binding('text', 'aText'))
              ), // end button A
              $(
                'Button', // button B
                {
                  name: 'ButtonB',
                  click: buttonExpandCollapse,
                  toolTip: tooltipTemplate,
                },
                new go.Binding('portId', 'b'),
                $(go.TextBlock, { font: '500 16px Roboto, sans-serif' }, new go.Binding('text', 'bText'))
              ) // end button B
            ) // end Vertical Panel
          ) // end Horizontal Panel
        )
      )
      myDiagram.nodeTemplateMap.add(
        'personality',
        $(
          go.Node,
          'Auto',
          new go.Binding('text', 'key'),
          $(go.Shape, 'Rectangle', { fill: 'whitesmoke', stroke: 'lightgray' }),
          $(
            go.TextBlock,
            {
              font: '13px Roboto, sans-serif',
              wrap: go.TextBlock.WrapFit,
              desiredSize: new go.Size(200, NaN),
              margin: 5,
            },
            new go.Binding('text', 'text')
          )
        )
      )

      // define the only Link template
      myDiagram.linkTemplate = $(
        go.Link,
        go.Link.Orthogonal, // the whole link panel
        { fromPortId: '' },
        new go.Binding('fromPortId', 'fromport'),
        $(
          go.Shape, // the link shape
          { stroke: 'lightblue', strokeWidth: 2 }
        )
      )
      var model = $(go.GraphLinksModel, { linkFromPortIdProperty: 'fromport' })
      // set up the model with the node and link data
      makeNodes(model)
      makeLinks(model)
      myDiagram.model = model

      // make all but the start node invisible
      myDiagram.nodes.each(function (n) {
        if (n.text !== 'Start') n.visible = false
      })
      myDiagram.links.each(function (l) {
        l.visible = false
      })
      function makeNodes(model) {
        var nodeDataArray = [
          { key: 'Start' }, // the root node

          // intermediate nodes: decisions on personality characteristics
          { key: 'I' },
          { key: 'E' },

          { key: 'IN' },
          { key: 'IS' },
          { key: 'EN' },
          { key: 'ES' },

          { key: 'INT' },
          { key: 'INF' },
          { key: 'IST' },
          { key: 'ISF' },
          { key: 'ENT' },
          { key: 'ENF' },
          { key: 'EST' },
          { key: 'ESF' },

          // terminal nodes: the personality descriptions
          {
            key: 'INTJ',
            text: 'INTJ: Scientist\nThe most self-confident ',
          },
          {
            key: 'INTP',
            text: 'INTP: Architect\nAn architect of ideas,',
          },
          {
            key: 'INFJ',
            text: 'INFJ: Author\nFocus on possibil',
          },
          {
            key: 'INFP',
            text: 'INFP: Questor\nPresent a calm and pleasant face to the w',
          },
          {
            key: 'ISTJ',
            text: 'ISTJ: Trustee\nISTJs like organized lives.',
          },
          {
            key: 'ISTP',
            text: 'ISTP: Artisan\nISTPs are quiet people ',
          },
          {
            key: 'ISFJ',
            text: 'ISFJ: Conservator\nISFJs are not particularly ',
          },
          {
            key: 'ISFP',
            text: 'ISFP: Author\nFocus on possibilities.  ',
          },
        ]

        // Provide the same choice information for all of the nodes on each level.
        // The level is implicit in the number of characters in the Key, except for the root node.
        // In a different application, there might be different choices for each node, so the initialization would be above, where the Info's are created.
        // But for this application, it makes sense to share the initialization code based on tree level.
        for (var i = 0; i < nodeDataArray.length; i++) {
          var d = nodeDataArray[i]
          if (d.key === 'Start') {
            d.category = 'decision'
            d.a = 'I'
            d.aText = 'Introversion'
            d.aToolTip =
              'The Introvert is “territorial” and desires space and solitude to recover energy.  Introverts enjoy solitary activities such as reading and meditating.  25% of the population.'
            d.b = 'E'
            d.bText = 'Extraversion'
            d.bToolTip =
              'The Extravert is “sociable” and is energized by the presence of other people.  Extraverts experience loneliness when not in contact with others.  75% of the population.'
          } else {
            switch (d.key.length) {
              case 1:
                d.category = 'decision'
                d.a = 'N'
                d.aText = 'Intuition'
                d.aToolTip = 'The “intuitive” person bases their lives on predictions and ingenuity.  They consider the future and enjoy planning ahead.  25% of the population.'
                d.b = 'S'
                d.bText = 'Sensing'
                d.bToolTip =
                  'The “sensing” person bases their life on facts, thinking primarily of their present situation.  They are realistic and practical.  75% of the population.'
                break
              case 2:
                d.category = 'decision'
                d.a = 'T'
                d.aText = 'Thinking'
                d.aToolTip =
                  'The “thinking” person bases their decisions on facts and without personal bias.  They are more comfortable with making impersonal judgments.  50% of the population.'
                d.b = 'F'
                d.bText = 'Feeling'
                d.bToolTip = 'The “feeling” person bases their decisions on personal experience and emotion.  They make their emotions very visible.  50% of the population.'
                break
              case 3:
                d.category = 'decision'
                d.a = 'J'
                d.aText = 'Judgment'
                d.aToolTip = 'The “judging” person enjoys closure.  They establish deadlines and take them seriously.  They despise being late.  50% of the population.'
                d.b = 'P'
                d.bText = 'Perception'
                d.bToolTip =
                  'The “perceiving” person likes to keep options open and fluid.  They have little regard for deadlines.  Dislikes making decisions unless they are completely sure they are right.  50% of the population.'
                break
              default:
                d.category = 'personality'
                break
            }
          }
        }
        model.nodeDataArray = nodeDataArray
      }
      function makeLinks(model) {
        var linkDataArray = []
        var nda = model.nodeDataArray
        for (var i = 0; i < nda.length; i++) {
          var key = nda[i].key
          if (key === 'Start' || key.length === 0) continue
          // e.g., if key=="INTJ", we want: prefix="INT" and letter="J"
          var prefix = key.slice(0, key.length - 1)
          var letter = key.charAt(key.length - 1)
          if (prefix.length === 0) prefix = 'Start'
          var obj = { from: prefix, fromport: letter, to: key }
          linkDataArray.push(obj)
        }
        model.linkDataArray = linkDataArray
      }
    },
  }
</script>
```

:::
