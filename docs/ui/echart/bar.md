# 柱状图

gd-echart 统计图表组件

## 基础柱状图

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 带背景色的柱状图

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 自定义单个柱子颜色

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [
                120,
                {
                  value: 200,
                  itemStyle: {
                    color: 'blue'
                  }
                },
                150,
                80,
                70,
                110,
                130
              ],
              type: 'bar'
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 多条横向柱状图

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          title: {
            text: '世界人口总量',
            subtext: '数据来自网络'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2011年', '2012年']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
              name: '2012年',
              type: 'bar',
              data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 多条竖向柱状图

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  var labelOption = {
    show: true,
    fontSize: 16,
    rich: {
      name: {}
    }
  }
  export default {
    data() {
      return {
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['Forest', 'Steppe', 'Desert', 'Wetland']
          },
          xAxis: [
            {
              type: 'category',
              axisTick: { show: false },
              data: ['2012', '2013', '2014', '2015', '2016']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: 'Forest',
              type: 'bar',
              label: labelOption,
              data: [320, 332, 301, 334, 390]
            },
            {
              name: 'Steppe',
              type: 'bar',
              label: labelOption,
              data: [220, 182, 191, 234, 290]
            },
            {
              name: 'Desert',
              type: 'bar',
              label: labelOption,
              data: [150, 232, 201, 154, 190]
            },
            {
              name: 'Wetland',
              type: 'bar',
              label: labelOption,
              data: [98, 77, 101, 99, 40]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 进度柱状图

:::demo

```html
<template>
  <div style="height: 80vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC']
  export default {
    data() {
      return {
        options: {
          backgroundColor: '#0e2147',
          grid: {
            left: '11%',
            top: '12%',
            right: '0%',
            bottom: '8%',
            containLabel: true
          },
          xAxis: [
            {
              show: false
            }
          ],
          yAxis: [
            {
              axisTick: 'none',
              axisLine: 'none',
              offset: '27',
              axisLabel: {
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16'
                }
              },
              data: ['南昌转运中心', '广州转运中心', '杭州转运中心', '宁夏转运中心', '兰州转运中心', '南宁转运中心', '长沙转运中心', '武汉转运中心', '合肥转运中心', '贵州转运中心']
            },
            {
              axisTick: 'none',
              axisLine: 'none',
              axisLabel: {
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16'
                }
              },
              data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
            },
            {
              name: '分拨延误TOP 10',
              nameGap: '50',
              nameTextStyle: {
                color: '#ffffff',
                fontSize: '16'
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(0,0,0,0)'
                }
              },
              data: []
            }
          ],
          series: [
            {
              name: '条',
              type: 'bar',
              yAxisIndex: 0,
              data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  textStyle: {
                    color: '#ffffff',
                    fontSize: '16'
                  }
                }
              },
              barWidth: 12,
              itemStyle: {
                normal: {
                  color: function(params) {
                    var num = myColor.length
                    return myColor[params.dataIndex % num]
                  }
                }
              },
              z: 2
            },
            {
              name: '白框',
              type: 'bar',
              yAxisIndex: 1,
              barGap: '-100%',
              data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
              barWidth: 20,
              itemStyle: {
                normal: {
                  color: '#0e2147',
                  barBorderRadius: 5
                }
              },
              z: 1
            },
            {
              name: '外框',
              type: 'bar',
              yAxisIndex: 2,
              barGap: '-100%',
              data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
              barWidth: 24,
              itemStyle: {
                normal: {
                  color: function(params) {
                    var num = myColor.length
                    return myColor[params.dataIndex % num]
                  },
                  barBorderRadius: 5
                }
              },
              z: 0
            },
            {
              name: '外圆',
              type: 'scatter',
              hoverAnimation: false,
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              yAxisIndex: 2,
              symbolSize: 35,
              itemStyle: {
                normal: {
                  color: function(params) {
                    var num = myColor.length
                    return myColor[params.dataIndex % num]
                  },
                  opacity: 1
                }
              },
              z: 2
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 双向柱状图

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['利润', '支出', '收入']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'value'
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisTick: {
                show: false
              },
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          series: [
            {
              name: '利润',
              type: 'bar',
              label: {
                show: true,
                position: 'inside'
              },
              emphasis: {
                focus: 'series'
              },
              data: [200, 170, 240, 244, 200, 220, 210]
            },
            {
              name: '收入',
              type: 'bar',
              stack: '总量',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [320, 302, 341, 374, 390, 450, 420]
            },
            {
              name: '支出',
              type: 'bar',
              stack: '总量',
              label: {
                show: true,
                position: 'left'
              },
              emphasis: {
                focus: 'series'
              },
              data: [-120, -132, -101, -134, -190, -230, -210]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 上下柱状图

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  var xAxisData = []
  var data1 = []
  var data2 = []
  var data3 = []
  var data4 = []

  for (var i = 0; i < 10; i++) {
    xAxisData.push('Class' + i)
    data1.push((Math.random() * 2).toFixed(2))
    data2.push((Math.random() * 5).toFixed(2))
    data3.push((Math.random() + 0.3).toFixed(2))
    data4.push(-Math.random().toFixed(2))
  }

  var emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
  }
  export default {
    data() {
      return {
        options: {
          legend: {
            data: ['bar', 'bar2', 'bar3', 'bar4'],
            left: '10%'
          },
          brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
          },
          toolbox: {
            feature: {
              magicType: {
                type: ['stack', 'tiled']
              },
              dataView: {}
            }
          },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            name: 'X Axis',
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false }
          },
          yAxis: {},
          grid: {
            bottom: 100
          },
          series: [
            {
              name: 'bar',
              type: 'bar',
              stack: 'one',
              emphasis: emphasisStyle,
              data: data1
            },
            {
              name: 'bar2',
              type: 'bar',
              stack: 'one',
              emphasis: emphasisStyle,
              data: data2
            },
            {
              name: 'bar3',
              type: 'bar',
              stack: 'two',
              emphasis: emphasisStyle,
              data: data3
            },
            {
              name: 'bar4',
              type: 'bar',
              stack: 'two',
              emphasis: emphasisStyle,
              data: data4
            }
          ]
        }
      }
    }
  }
</script>
```

:::
