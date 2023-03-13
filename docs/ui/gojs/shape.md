### 图形形状

- 使用 go.Shape 定义一个图形形状

```js
$(go.Shape, 'Rectangle', { width: 40, height: 60, margin: 4, fill: null })
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
      myDiagram.add(
        $(
          go.Part,
          'Horizontal',
          $(go.Shape, 'Rectangle', { width: 40, height: 60, margin: 4, fill: 'blue' }),
          $(go.Shape, 'RoundedRectangle', { width: 40, height: 60, margin: 4, fill: null, stroke: 'purple', strokeWidth: 3 }),
          $(go.Shape, 'Ellipse', { width: 40, height: 60, margin: 4, fill: null }),
          $(go.Shape, 'Diamond', { width: 40, height: 60, margin: 4, fill: null }),
          $(go.Shape, 'TriangleRight', { width: 40, height: 60, margin: 4, fill: null }),
          $(go.Shape, 'TriangleDown', { width: 40, height: 60, margin: 4, fill: null }),
          $(go.Shape, 'TriangleLeft', { width: 40, height: 60, margin: 4, fill: null }),
          $(go.Shape, 'TriangleUp', { width: 40, height: 60, margin: 4, fill: null }),
          $(go.Shape, 'MinusLine', { width: 40, height: 60, margin: 4, fill: null }),
          $(go.Shape, 'PlusLine', { width: 40, height: 60, margin: 4, fill: null }),
          $(go.Shape, 'XLine', { width: 40, height: 60, margin: 4, fill: null })
        )
      )
    },
  }
</script>
```

:::

- 自定义形状

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
    methods: {},
    mounted() {
      const { myDiagram, $ } = this.$refs.GdGo.init(($, go) => {
        return {
          domId: 'shape1',
          defalutOption: {
            initialContentAlignment: go.Spot.Center,
          },
        }
      })
      go.Shape.defineFigureGenerator('RoundedTopRectangle', function (shape, w, h) {
        // this figure takes one parameter, the size of the corner
        var p1 = 5 // default corner size
        if (shape !== null) {
          var param1 = shape.parameter1
          if (!isNaN(param1) && param1 >= 0) p1 = param1 // can't be negative or NaN
        }
        p1 = Math.min(p1, w / 2)
        p1 = Math.min(p1, h / 2) // limit by whole height or by half height?
        var geo = new go.Geometry()
        // a single figure consisting of straight lines and quarter-circle arcs
        geo.add(
          new go.PathFigure(0, p1)
            .add(new go.PathSegment(go.PathSegment.Arc, 180, 90, p1, p1, p1, p1))
            .add(new go.PathSegment(go.PathSegment.Line, w - p1, 0))
            .add(new go.PathSegment(go.PathSegment.Arc, 270, 90, w - p1, p1, p1, p1))
            .add(new go.PathSegment(go.PathSegment.Line, w, h))
            .add(new go.PathSegment(go.PathSegment.Line, 0, h).close())
        )
        // don't intersect with two top corners when used in an "Auto" Panel
        geo.spot1 = new go.Spot(0, 0, 0.3 * p1, 0.3 * p1)
        geo.spot2 = new go.Spot(1, 1, -0.3 * p1, 0)
        return geo
      })

      go.Shape.defineFigureGenerator('RoundedBottomRectangle', function (shape, w, h) {
        // this figure takes one parameter, the size of the corner
        var p1 = 5 // default corner size
        if (shape !== null) {
          var param1 = shape.parameter1
          if (!isNaN(param1) && param1 >= 0) p1 = param1 // can't be negative or NaN
        }
        p1 = Math.min(p1, w / 2)
        p1 = Math.min(p1, h / 2) // limit by whole height or by half height?
        var geo = new go.Geometry()
        // a single figure consisting of straight lines and quarter-circle arcs
        geo.add(
          new go.PathFigure(0, 0)
            .add(new go.PathSegment(go.PathSegment.Line, w, 0))
            .add(new go.PathSegment(go.PathSegment.Line, w, h - p1))
            .add(new go.PathSegment(go.PathSegment.Arc, 0, 90, w - p1, h - p1, p1, p1))
            .add(new go.PathSegment(go.PathSegment.Line, p1, h))
            .add(new go.PathSegment(go.PathSegment.Arc, 90, 90, p1, h - p1, p1, p1).close())
        )
        // don't intersect with two bottom corners when used in an "Auto" Panel
        geo.spot1 = new go.Spot(0, 0, 0.3 * p1, 0)
        geo.spot2 = new go.Spot(1, 1, -0.3 * p1, -0.3 * p1)
        return geo
      })

      myDiagram.nodeTemplate = $(
        go.Part,
        'Spot',
        {
          selectionAdorned: false, // don't show the standard selection handle
          resizable: true,
          resizeObjectName: 'SHAPE', // user can resize the Shape
          rotatable: true,
          rotateObjectName: 'SHAPE', // user can rotate the Shape
          // without rotating the label
        },
        $(
          go.Shape,
          {
            name: 'SHAPE',
            fill: $(go.Brush, 'Linear', { 0.0: 'white', 1.0: 'gray' }),
            desiredSize: new go.Size(100, 50),
          },
          new go.Binding('figure', 'fig'),
          new go.Binding('parameter1', 'p1')
        ),
        $(
          go.Panel,
          'Vertical',
          $(go.TextBlock, new go.Binding('text', 'fig')),
          $(
            go.TextBlock,
            { stroke: 'blue' },
            new go.Binding('text', 'parameter1', function (p1) {
              return p1
            }).ofObject('SHAPE')
          )
        )
      )

      myDiagram.model = new go.Model([
        { fig: 'RoundedTopRectangle' },
        { fig: 'RoundedTopRectangle', p1: 0 },
        { fig: 'RoundedTopRectangle', p1: 3 },
        { fig: 'RoundedTopRectangle', p1: 10 },
        { fig: 'RoundedTopRectangle', p1: 50 },
        { fig: 'RoundedTopRectangle', p1: 250 },
        { fig: 'RoundedBottomRectangle' },
        { fig: 'RoundedBottomRectangle', p1: 0 },
        { fig: 'RoundedBottomRectangle', p1: 3 },
        { fig: 'RoundedBottomRectangle', p1: 10 },
        { fig: 'RoundedBottomRectangle', p1: 50 },
        { fig: 'RoundedBottomRectangle', p1: 250 },
      ])
    },
  }
</script>
```

:::
