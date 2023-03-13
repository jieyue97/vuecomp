# 散点图

gd-echart 统计图表组件

## 基础散点图

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  export default {
    name: 'gd_echart_examples',
    data() {
      return {
        options: {
          xAxis: {},
          yAxis: {},
          series: [
            {
              symbolSize: 20,
              data: [
                [10.0, 8.04],
                [8.07, 6.95],
                [13.0, 7.58],
                [9.05, 8.81],
                [11.0, 8.33],
                [14.0, 7.66],
                [13.4, 6.81],
                [10.0, 6.33],
                [14.0, 8.96],
                [12.5, 6.82],
                [9.15, 7.2],
                [11.5, 7.2],
                [3.03, 4.23],
                [12.2, 7.83],
                [2.02, 4.47],
                [1.05, 3.33],
                [4.05, 4.96],
                [6.03, 7.24],
                [12.0, 6.26],
                [12.0, 8.84],
                [7.08, 5.82],
                [5.02, 5.68]
              ],
              type: 'scatter'
            }
          ]
        }
      }
    },
    methods: {}
  }
</script>
```

:::

## Anscomb's quartet

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  var dataAll = [
    [
      [10.0, 8.04],
      [8.0, 6.95],
      [13.0, 7.58],
      [9.0, 8.81],
      [11.0, 8.33],
      [14.0, 9.96],
      [6.0, 7.24],
      [4.0, 4.26],
      [12.0, 10.84],
      [7.0, 4.82],
      [5.0, 5.68]
    ],
    [
      [10.0, 9.14],
      [8.0, 8.14],
      [13.0, 8.74],
      [9.0, 8.77],
      [11.0, 9.26],
      [14.0, 8.1],
      [6.0, 6.13],
      [4.0, 3.1],
      [12.0, 9.13],
      [7.0, 7.26],
      [5.0, 4.74]
    ],
    [
      [10.0, 7.46],
      [8.0, 6.77],
      [13.0, 12.74],
      [9.0, 7.11],
      [11.0, 7.81],
      [14.0, 8.84],
      [6.0, 6.08],
      [4.0, 5.39],
      [12.0, 8.15],
      [7.0, 6.42],
      [5.0, 5.73]
    ],
    [
      [8.0, 6.58],
      [8.0, 5.76],
      [8.0, 7.71],
      [8.0, 8.84],
      [8.0, 8.47],
      [8.0, 7.04],
      [8.0, 5.25],
      [19.0, 12.5],
      [8.0, 5.56],
      [8.0, 7.91],
      [8.0, 6.89]
    ]
  ]

  var markLineOpt = {
    animation: false,
    label: {
      formatter: 'y = 0.5 * x + 3',
      align: 'right'
    },
    lineStyle: {
      type: 'solid'
    },
    tooltip: {
      formatter: 'y = 0.5 * x + 3'
    },
    data: [
      [
        {
          coord: [0, 3],
          symbol: 'none'
        },
        {
          coord: [20, 13],
          symbol: 'none'
        }
      ]
    ]
  }
  export default {
    name: 'gd_echart_examples',
    data() {
      return {
        options: {
          title: {
            text: "Anscombe's quartet",
            left: 'center',
            top: 0
          },
          grid: [
            { left: '7%', top: '7%', width: '38%', height: '38%' },
            { right: '7%', top: '7%', width: '38%', height: '38%' },
            { left: '7%', bottom: '7%', width: '38%', height: '38%' },
            { right: '7%', bottom: '7%', width: '38%', height: '38%' }
          ],
          tooltip: {
            formatter: 'Group {a}: ({c})'
          },
          xAxis: [
            { gridIndex: 0, min: 0, max: 20 },
            { gridIndex: 1, min: 0, max: 20 },
            { gridIndex: 2, min: 0, max: 20 },
            { gridIndex: 3, min: 0, max: 20 }
          ],
          yAxis: [
            { gridIndex: 0, min: 0, max: 15 },
            { gridIndex: 1, min: 0, max: 15 },
            { gridIndex: 2, min: 0, max: 15 },
            { gridIndex: 3, min: 0, max: 15 }
          ],
          series: [
            {
              name: 'I',
              type: 'scatter',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: dataAll[0],
              markLine: markLineOpt
            },
            {
              name: 'II',
              type: 'scatter',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: dataAll[1],
              markLine: markLineOpt
            },
            {
              name: 'III',
              type: 'scatter',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: dataAll[2],
              markLine: markLineOpt
            },
            {
              name: 'IV',
              type: 'scatter',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: dataAll[3],
              markLine: markLineOpt
            }
          ]
        }
      }
    },
    methods: {}
  }
</script>
```

:::
