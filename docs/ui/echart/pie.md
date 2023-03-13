# 饼图

gd-echart 统计图表组件

## 基础饼图

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
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直接访问' },
                { value: 580, name: '邮件营销' },
                { value: 484, name: '联盟广告' },
                { value: 300, name: '视频广告' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
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

## 环形圆

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
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直接访问' },
                { value: 580, name: '邮件营销' },
                { value: 484, name: '联盟广告' },
                { value: 300, name: '视频广告' }
              ]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 饼图自定义样式

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
          backgroundColor: '#2c343c',

          title: {
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
              color: '#ccc'
            }
          },

          tooltip: {
            trigger: 'item'
          },

          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 274, name: '联盟广告' },
                { value: 235, name: '视频广告' },
                { value: 400, name: '搜索引擎' }
              ].sort(function(a, b) {
                return a.value - b.value
              }),
              roseType: 'radius',
              label: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              labelLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              },
              itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function(idx) {
                return Math.random() * 200
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

## 基础南丁格尔玫瑰图

:::demo

```html
<template>
  <div style="height:80vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          legend: {
            top: 'bottom'
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          series: [
            {
              name: '面积模式',
              type: 'pie',
              radius: [50, 250],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8
              },
              data: [
                { value: 40, name: 'rose 1' },
                { value: 38, name: 'rose 2' },
                { value: 32, name: 'rose 3' },
                { value: 30, name: 'rose 4' },
                { value: 28, name: 'rose 5' },
                { value: 26, name: 'rose 6' },
                { value: 22, name: 'rose 7' },
                { value: 18, name: 'rose 8' }
              ]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 富文本标签

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples'
  var weatherIcons = {
    Sunny: ROOT_PATH + '/data/asset/img/weather/sunny_128.png',
    Cloudy: ROOT_PATH + '/data/asset/img/weather/cloudy_128.png',
    Showers: ROOT_PATH + '/data/asset/img/weather/showers_128.png'
  }
  export default {
    data() {
      return {
        options: {
          title: {
            text: '天气情况统计',
            subtext: '虚构数据',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            bottom: 10,
            left: 'center',
            data: ['西凉', '益州', '兖州', '荆州', '幽州']
          },
          series: [
            {
              type: 'pie',
              radius: '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data: [
                {
                  value: 1548,
                  name: '幽州',
                  label: {
                    formatter: [
                      '{title|{b}}{abg|}',
                      '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                      '{hr|}',
                      '  {Sunny|}{value|202}{rate|55.3%}',
                      '  {Cloudy|}{value|142}{rate|38.9%}',
                      '  {Showers|}{value|21}{rate|5.8%}'
                    ].join('\n'),
                    backgroundColor: '#eee',
                    borderColor: '#777',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                      title: {
                        color: '#eee',
                        align: 'center'
                      },
                      abg: {
                        backgroundColor: '#333',
                        width: '100%',
                        align: 'right',
                        height: 25,
                        borderRadius: [4, 4, 0, 0]
                      },
                      Sunny: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                          image: weatherIcons.Sunny
                        }
                      },
                      Cloudy: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                          image: weatherIcons.Cloudy
                        }
                      },
                      Showers: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                          image: weatherIcons.Showers
                        }
                      },
                      weatherHead: {
                        color: '#333',
                        height: 24,
                        align: 'left'
                      },
                      hr: {
                        borderColor: '#777',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                      },
                      value: {
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: 'left'
                      },
                      valueHead: {
                        color: '#333',
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: 'center'
                      },
                      rate: {
                        width: 40,
                        align: 'right',
                        padding: [0, 10, 0, 0]
                      },
                      rateHead: {
                        color: '#333',
                        width: 40,
                        align: 'center',
                        padding: [0, 10, 0, 0]
                      }
                    }
                  }
                },
                { value: 735, name: '荆州' },
                { value: 510, name: '兖州' },
                { value: 434, name: '益州' },
                { value: 335, name: '西凉' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
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

## 嵌套环形图

:::demo

```html
<template>
  <div style="height: 80vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '30%'],
              label: {
                position: 'inner',
                fontSize: 14
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1548, name: '搜索引擎' },
                { value: 775, name: '直达' },
                { value: 679, name: '营销广告', selected: true }
              ]
            },
            {
              name: '访问来源',
              type: 'pie',
              radius: ['45%', '60%'],
              labelLine: {
                length: 30
              },
              label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,

                rich: {
                  a: {
                    color: '#6E7079',
                    lineHeight: 22,
                    align: 'center'
                  },
                  hr: {
                    borderColor: '#8C8D8E',
                    width: '100%',
                    borderWidth: 1,
                    height: 0
                  },
                  b: {
                    color: '#4C5058',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 33
                  },
                  per: {
                    color: '#fff',
                    backgroundColor: '#4C5058',
                    padding: [3, 4],
                    borderRadius: 4
                  }
                }
              },
              data: [
                { value: 1048, name: '百度' },
                { value: 335, name: '直达' },
                { value: 310, name: '邮件营销' },
                { value: 251, name: '谷歌' },
                { value: 234, name: '联盟广告' },
                { value: 147, name: '必应' },
                { value: 135, name: '视频广告' },
                { value: 102, name: '其他' }
              ]
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 中心文字饼图

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  var scale = 1
  var echartData = [
    {
      value: 2154,
      name: '曲阜师范大学'
    },
    {
      value: 3854,
      name: '潍坊学院'
    },
    {
      value: 3515,
      name: '青岛职业技术学院'
    },
    {
      value: 3515,
      name: '淄博师范高等专科'
    },
    {
      value: 3854,
      name: '鲁东大学'
    },
    {
      value: 2154,
      name: '山东师范大学'
    }
  ]
  var rich = {
    yellow: {
      color: '#ffc72b',
      fontSize: 30 * scale,
      padding: [5, 4],
      align: 'center'
    },
    total: {
      color: '#ffc72b',
      fontSize: 40 * scale,
      align: 'center'
    },
    white: {
      color: '#fff',
      align: 'center',
      fontSize: 14 * scale,
      padding: [21, 0]
    },
    blue: {
      color: '#49dff0',
      fontSize: 16 * scale,
      align: 'center'
    },
    hr: {
      borderColor: '#0b5263',
      width: '100%',
      borderWidth: 1,
      height: 0
    }
  }
  export default {
    data() {
      return {
        options: {
          backgroundColor: '#031f2d',
          title: {
            text: '总考生数',
            left: 'center',
            top: '53%',
            padding: [24, 0],
            textStyle: {
              color: '#fff',
              fontSize: 18 * scale,
              align: 'center'
            }
          },
          legend: {
            selectedMode: false,
            formatter: function(name) {
              var total = 0 //各科正确率总和
              var averagePercent //综合正确率
              echartData.forEach(function(value, index, array) {
                total += value.value
              })
              return '{total|' + total + '}'
            },
            data: [echartData[0].name],
            // data: ['高等教育学'],
            // itemGap: 50,
            left: 'center',
            top: 'center',
            icon: 'none',
            align: 'center',
            textStyle: {
              color: '#fff',
              fontSize: 16 * scale,
              rich: rich
            }
          },
          series: [
            {
              name: '总考生数量',
              type: 'pie',
              radius: ['42%', '50%'],
              hoverAnimation: false,
              color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
              label: {
                normal: {
                  formatter: function(params, ticket, callback) {
                    var total = 0 //考生总数量
                    var percent = 0 //考生占比
                    echartData.forEach(function(value, index, array) {
                      total += value.value
                    })
                    percent = ((params.value / total) * 100).toFixed(1)
                    return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}'
                  },
                  rich: rich
                }
              },
              labelLine: {
                normal: {
                  length: 55 * scale,
                  length2: 0,
                  lineStyle: {
                    color: '#0b5263'
                  }
                }
              },
              data: echartData
            }
          ]
        }
      }
    }
  }
</script>
```

:::

## 多个饼图

:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options"> </gd-echart>
  </div>
</template>

<script>
  var data = [
    {
      name: '装备制造',
      value: 54
    },
    {
      name: '现代材料',
      value: 44
    },
    {
      name: '新能源',
      value: 35
    },
    {
      name: '新一代信息技术',
      value: 30
    },
    {
      name: '商贸物流',
      value: 20
    }
  ]

  var titleArr = []
  var seriesArr = []
  var colors = [
    ['#389af4', '#dfeaff'],
    ['#ff8c37', '#ffdcc3'],
    ['#ffc257', '#ffedcc'],
    ['#fd6f97', '#fed4e0'],
    ['#a181fc', '#e3d9fe']
  ]
  data.forEach(function(item, index) {
    titleArr.push({
      text: item.name,
      left: index * 20 + 10 + '%',
      top: '65%',
      textAlign: 'center',
      textStyle: {
        fontWeight: 'normal',
        fontSize: '16',
        color: colors[index][0],
        textAlign: 'center'
      }
    })
    seriesArr.push({
      name: item.name,
      type: 'pie',
      clockWise: false,
      radius: [60, 70],
      itemStyle: {
        normal: {
          color: colors[index][0],
          shadowColor: colors[index][0],
          shadowBlur: 0,
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      hoverAnimation: false,
      center: [index * 20 + 10 + '%', '50%'],
      data: [
        {
          value: item.value,
          label: {
            normal: {
              formatter: function(params) {
                return params.value + '%'
              },
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '20',
                fontWeight: 'bold',
                color: colors[index][0]
              }
            }
          }
        },
        {
          value: 100 - item.value,
          name: 'invisible',
          itemStyle: {
            normal: {
              color: colors[index][1]
            },
            emphasis: {
              color: colors[index][1]
            }
          }
        }
      ]
    })
  })
  export default {
    data() {
      return {
        options: {
          backgroundColor: '#fff',
          title: titleArr,
          series: seriesArr
        }
      }
    }
  }
</script>
```

:::
