### 图片

- 使用 go.Picture 定义一个图片

```js
$(go.Picture, { source: '/images/intro/100x65.png', column: 0, margin: 2 })
```

:::demo

```html
<template>
  <div style="height: 280px; width: 100%">
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
          'Table',
          $(go.Picture, { source: '/vuecomp/img/guodi.png', column: 0, margin: 2 }),
          $(go.TextBlock, 'natural', { row: 1, column: 0 }),
          $(go.Picture, { source: '/vuecomp/img/guodi.png', column: 1, width: 100, height: 65, margin: 2 }),
          $(go.TextBlock, 'same size', { row: 1, column: 1 }),
          $(go.Picture, { source: '/vuecomp/img/guodi.png', column: 2, width: 200, height: 130, margin: 2 }),
          $(go.TextBlock, 'bigger', { row: 1, column: 2 }),
          $(go.Picture, { source: '/vuecomp/img/guodi.png', column: 3, width: 50, height: 32.5, margin: 2 }),
          $(go.TextBlock, 'smaller', { row: 1, column: 3 }),
          $(go.Picture, { source: '/vuecomp/img/guodi.png', column: 4, width: 50, height: 70, margin: 2 }),
          $(go.TextBlock, 'stretched', { row: 1, column: 4 })
        )
      )
    },
  }
</script>
```

:::
