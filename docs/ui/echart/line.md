# 折线图

gd-echart 统计图表组件

## 基础折线图

:::demo

```html
<template>
  <div style="height: 30vh; width: 100%">
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
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 基础平滑折线图

:::demo

```html
<template>
  <div style="height: 30vh; width: 100%">
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
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 基础面积图

:::demo

```html
<template>
  <div style="height: 30vh; width: 100%">
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
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {}
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 折线图堆叠

:::demo

```html
<template>
  <div style="height: 30vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 堆叠面积图

:::demo

```html
<template>
  <div style="height: 30vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          title: {
            text: '堆叠区域图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              label: {
                show: true,
                position: 'top'
              },
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 人数统计

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  var xData = (function() {
    var data = []
    for (var i = 1; i < 13; i++) {
      data.push(i + '月份')
    }
    return data
  })()
  export default {
    data() {
      return {
        options: {
          backgroundColor: '#344b58',
          title: {
            text: '人数统计',
            textStyle: {
              color: '#fff',
              fontSize: '22'
            },
            subtextStyle: {
              color: '#90979c',
              fontSize: '16'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              textStyle: {
                color: '#fff'
              }
            }
          },
          grid: {
            borderWidth: 0,
            top: 110,
            bottom: 95,
            textStyle: {
              color: '#fff'
            }
          },
          legend: {
            x: '4%',
            top: '8%',
            textStyle: {
              color: '#90979c'
            },
            data: ['女', '男', '平均']
          },

          calculable: true,
          xAxis: [
            {
              type: 'category',
              axisLine: {
                lineStyle: {
                  color: '#90979c'
                }
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitArea: {
                show: false
              },
              axisLabel: {
                interval: 0
              },
              data: xData
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#90979c'
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                interval: 0
              },
              splitArea: {
                show: false
              }
            }
          ],
          dataZoom: [
            {
              show: true,
              height: 30,
              xAxisIndex: [0],
              bottom: 30,
              start: 10,
              end: 80,
              handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
              handleSize: '110%',
              handleStyle: {
                color: '#d3dee5'
              },
              textStyle: {
                color: '#fff'
              },
              borderColor: '#90979c'
            },
            {
              type: 'inside',
              show: true,
              height: 15,
              start: 1,
              end: 35
            }
          ],
          series: [
            {
              name: '女',
              type: 'bar',
              stack: '总量',
              barMaxWidth: 35,
              barGap: '10%',
              itemStyle: {
                normal: {
                  color: 'rgba(255,144,128,1)',
                  label: {
                    show: true,
                    textStyle: {
                      color: '#fff'
                    },
                    position: 'inside',
                    formatter: function(p) {
                      return p.value > 0 ? p.value : ''
                    }
                  }
                }
              },
              data: [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078]
            },

            {
              name: '男',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                normal: {
                  color: 'rgba(0,191,183,1)',
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: 'inside',
                    formatter: function(p) {
                      return p.value > 0 ? p.value : ''
                    }
                  }
                }
              },
              data: [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220]
            },
            {
              name: '总数',
              type: 'line',
              symbolSize: 10,
              symbol: 'circle',
              itemStyle: {
                normal: {
                  color: 'rgba(252,230,48,1)',
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: 'top',
                    formatter: function(p) {
                      return p.value > 0 ? p.value : ''
                    }
                  }
                }
              },
              data: [1036, 3693, 2962, 3810, 2519, 1915, 1748, 4675, 6209, 4323, 2865, 4298]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 深色折线图

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  var fontColor = '#30eee9'
  export default {
    data() {
      return {
        options: {
          backgroundColor: '#11183c',
          grid: {
            left: '5%',
            right: '10%',
            top: '20%',
            bottom: '15%',
            containLabel: true
          },
          tooltip: {
            show: true,
            trigger: 'item'
          },
          legend: {
            show: true,
            x: 'center',
            y: '35',
            icon: 'stack',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: '#1bb4f6'
            },
            data: ['已采纳', '已发布', '浏览量']
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLabel: {
                color: fontColor
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#397cbc'
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#195384'
                }
              },
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '信息量',
              min: 0,
              max: 1000,
              axisLabel: {
                formatter: '{value}',
                textStyle: {
                  color: '#2ad1d2'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#27b4c2'
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#11366e'
                }
              }
            },
            {
              type: 'value',
              name: '浏览量',
              min: 0,
              max: 1000,
              axisLabel: {
                formatter: '{value} 人',
                textStyle: {
                  color: '#186afe'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#186afe'
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#11366e'
                }
              }
            }
          ],
          series: [
            {
              name: '已采纳',
              type: 'line',
              stack: '总量',
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#0092f6',
                  lineStyle: {
                    color: '#0092f6',
                    width: 1
                  }
                }
              },
              markPoint: {
                itemStyle: {
                  normal: {
                    color: 'red'
                  }
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
            },
            {
              name: '已发布',
              type: 'line',
              stack: '总量',
              symbol: 'circle',
              symbolSize: 8,

              itemStyle: {
                normal: {
                  color: '#00d4c7',
                  lineStyle: {
                    color: '#00d4c7',
                    width: 1
                  }
                }
              },
              data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
            },
            {
              name: '浏览量',
              type: 'line',
              stack: '总量',
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#aecb56',
                  lineStyle: {
                    color: '#aecb56',
                    width: 1
                  }
                }
              },
              data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 折现柱状图

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
          backgroundColor: '#05224d',
          tooltip: {},
          grid: {
            top: '8%',
            left: '1%',
            right: '1%',
            bottom: '8%',
            containLabel: true
          },
          legend: {
            itemGap: 50,
            data: ['注册总量', '最新注册量'],
            textStyle: {
              color: '#f9f9f9',
              borderColor: '#fff'
            }
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                  color: '#f9f9f9'
                }
              },
              axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                  color: '#d1e6eb',
                  margin: 15
                }
              },
              axisTick: {
                show: false
              },
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
            }
          ],
          yAxis: [
            {
              type: 'value',
              min: 0,
              // max: 140,
              splitNumber: 7,
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#0a3256'
                }
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                margin: 20,
                textStyle: {
                  color: '#d1e6eb'
                }
              },
              axisTick: {
                show: false
              }
            }
          ],
          series: [
            {
              name: '注册总量',
              type: 'line',
              // smooth: true, //是否平滑曲线显示
              // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
              showAllSymbol: true,
              symbol: 'emptyCircle',
              symbolSize: 6,
              lineStyle: {
                normal: {
                  color: '#28ffb3' // 线条颜色
                },
                borderColor: '#f0f'
              },
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff'
                }
              },
              itemStyle: {
                normal: {
                  color: '#28ffb3'
                }
              },
              tooltip: {
                show: false
              },
              areaStyle: {
                //区域填充样式
                normal: {
                  shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                  shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
              },
              data: [393, 438, 485, 631, 689, 824, 987]
            },
            {
              name: '最新注册量',
              type: 'bar',
              barWidth: 20,
              tooltip: {
                show: false
              },
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff'
                }
              },
              itemStyle: {
                normal: {
                  // barBorderRadius: 5,
                  // color: new echarts.graphic.LinearGradient(
                  //     0, 0, 0, 1,
                  //     [{
                  //             offset: 0,
                  //             color: '#14c8d4'
                  //         },
                  //         {
                  //             offset: 1,
                  //             color: '#43eec6'
                  //         }
                  //     ]
                  // )
                  color: function(params) {
                    var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1']
                    return colorList[params.dataIndex]
                  }
                }
              },
              data: [200, 382, 102, 267, 186, 315, 316]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 多条曲线不同标准值区分

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  var color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
  export default {
    data() {
      return {
        options: {
          title: {
            text: '',
            left: 'center'
          },
          tooltip: {
            trigger: 'axis',
            padding: [2, 10],
            textStyle: {
              fontSize: 16
            }
          },
          xAxis: {
            type: 'category',
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 3
              }
            },
            axisTick: {
              show: true,
              alignWithLabel: true,
              lineStyle: {
                width: 3
              }
            },
            axisLabel: {
              rotate: 45,
              fontWeight: 'bold',
              formatter: function(value) {
                return value.split(' ')[1]
              }
            },
            data: ['2017-09-11 16:23:34', '2017-09-11 16:28:34', '2017-09-11 16:33:34', '2017-09-11 16:38:34', '2017-09-11 16:43:34', '2017-09-11 16:48:34', '2017-09-11 16:53:34']
          },
          grid: {
            left: '2%',
            right: '4%',
            bottom: '4%',
            containLabel: true
          },
          visualMap: [
            {
              show: false,
              pieces: [
                {
                  gt: 0,
                  lte: 100,
                  color: 'red'
                },
                {
                  gt: 100,
                  color: 'blue'
                }
              ],
              seriesIndex: 1
            },
            {
              show: false,
              pieces: [
                {
                  gt: 0,
                  lte: 80,
                  color: 'yellow'
                },
                {
                  gt: 80,
                  color: 'blue'
                }
              ],
              seriesIndex: 0
            }
          ],
          yAxis: {
            type: 'value',
            name: 'M',
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 3,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'red'
                    },
                    {
                      offset: 1,
                      color: 'blue'
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            axisTick: {
              lineStyle: {
                width: 3
              }
            },
            axisLabel: {
              fontWeight: 'bold'
            }
          },
          series: [
            {
              type: 'line',
              symbol: 'circle',
              symbolSize: 10,
              smooth: true,
              animationDuration: 2000,
              itemStyle: {
                normal: {
                  color: 'rgb(103, 99, 99)',
                  shadowBlur: 2,
                  shadowColor: 'rgba(0, 0, 0, .12)',
                  shadowOffsetX: 2,
                  shadowOffsetY: 2
                }
              },
              lineStyle: {
                normal: {
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetX: 4,
                  shadowOffsetY: 10
                }
              },
              data: [120, 90, 34, 65, 89, 201, 130],
              markLine: {
                silent: true,
                data: [
                  {
                    yAxis: 100
                  }
                ]
              },
              markPoint: {
                label: {
                  normal: {
                    show: true,
                    align: 'center',
                    color: 'WHITE',
                    fontWeight: 100,
                    formatter: '{b}'
                  }
                },
                itemStyle: {
                  normal: {
                    color: {
                      type: 'radial',
                      x: 0.4,
                      y: 0.4,
                      r: 0.9,
                      colorStops: [
                        {
                          offset: 0,
                          color: '#51e0a2'
                        },
                        {
                          offset: 1,
                          color: 'rgb(33,150,243)'
                        }
                      ],
                      globalCoord: false
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                  }
                },
                data: [
                  {
                    name: '触发',
                    value: 120,
                    coord: [0, 120]
                  }
                ]
              }
            },
            {
              type: 'line',
              symbol: 'circle',
              symbolSize: 10,
              smooth: true,
              animationDuration: 2000,
              itemStyle: {
                normal: {
                  color: 'rgb(103, 99, 99)',
                  shadowBlur: 2,
                  shadowColor: 'rgba(0, 0, 0, .12)',
                  shadowOffsetX: 2,
                  shadowOffsetY: 2
                }
              },
              lineStyle: {
                normal: {
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetX: 4,
                  shadowOffsetY: 10
                }
              },
              data: [10, 40, 74, 83, 120, 146, 180]
            },
            {
              type: 'line',
              symbol: 'circle',
              symbolSize: 10,
              smooth: true,
              animationDuration: 2000,
              itemStyle: {
                normal: {
                  color: 'rgb(103, 99, 99)',
                  shadowBlur: 2,
                  shadowColor: 'rgba(0, 0, 0, .12)',
                  shadowOffsetX: 2,
                  shadowOffsetY: 2
                }
              },
              lineStyle: {
                normal: {
                  color: color[5],
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetX: 4,
                  shadowOffsetY: 10
                }
              },
              data: [30, 25, 74, 143, 93, 100, 135]
            }
          ]
        }
      }
    }
  }
</script>
```

:::
