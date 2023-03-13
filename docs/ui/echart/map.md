# 地图

gd-echart 统计图表组件

## 中国地图

:::demo

```html
<template>
  <div style="height: 80vh; width: 100%">
    <!-- <gd-echart :width="'100%'" :height="'100%'" :options="options" :geo="mapJson"> </gd-echart> -->
    <gd-echart :width="'100%'" :height="'100%'" :options="options" :map="'china'" :geo="mapJson"> </gd-echart>
  </div>
</template>

<script>
  var points = [
    { value: [119.4543, 25.9222], itemStyle: { color: '#4ab2e5' } },
    { value: [127.9688, 45.368], itemStyle: { color: '#4fb6d2' } },
    { value: [110.3467, 41.4899], itemStyle: { color: '#52b9c7' } },
    { value: [125.8154, 44.2584], itemStyle: { color: '#5abead' } },
    { value: [116.4551, 40.2539], itemStyle: { color: '#f34e2b' } },
    { value: [123.1238, 42.1216], itemStyle: { color: '#f56321' } },
    { value: [114.4995, 38.1006], itemStyle: { color: '#f56f1c' } },
    { value: [117.4219, 39.4189], itemStyle: { color: '#f58414' } },
    { value: [112.3352, 37.9413], itemStyle: { color: '#f58f0e' } },
    { value: [109.1162, 34.2004], itemStyle: { color: '#f5a305' } },
    { value: [103.5901, 36.3043], itemStyle: { color: '#e7ab0b' } },
    { value: [106.3586, 38.1775], itemStyle: { color: '#dfae10' } },
    { value: [101.4038, 36.8207], itemStyle: { color: '#d5b314' } },
    { value: [103.9526, 30.7617], itemStyle: { color: '#c1bb1f' } },
    { value: [108.384366, 30.439702], itemStyle: { color: '#b9be23' } },
    { value: [113.0823, 28.2568], itemStyle: { color: '#a6c62c' } },
    { value: [102.9199, 25.46639], itemStyle: { color: '#96cc34' } },
    { value: [113.4668, 22.8076], itemStyle: { color: '#96cc34' } },
    { value: [118.8062, 31.9208] }
  ]
  // const mapJsonData = require('./map/china.json')
  export default {
    name: 'gd_echart_examples',
    data() {
      return {
        // mapJson: require('../../.vuepress/public/geo/china.json'),
        mapJson: require('../../.vuepress/public/geo/china.json'),
        options: {
          backgroundColor: '#013954',
          toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          geo: [
            {
              map: 'china',
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#1DE9B6'
                  },
                  formatter: function(params) {
                    if (params.name.includes('内蒙古') || params.name.includes('黑龙江')) {
                      return params.name.substring(0, 3)
                    } else {
                      return params.name.substring(0, 2)
                    }
                  }
                },

                emphasis: {
                  textStyle: {
                    color: 'rgb(183,185,14)'
                  }
                }
              },
              // aspectScale: 1.1,
              zoom: 1.2,
              roam: true,
              silent: false,
              scaleLimit: {
                min: 0.75,
                max: 2
              },
              itemStyle: {
                normal: {
                  borderColor: 'rgb(147, 235, 248)',
                  borderWidth: 1,
                  areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#09132c' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#274d68' // 100% 处的颜色
                      }
                    ],
                    globalCoord: true // 缺省为 false
                  }
                },
                emphasis: {
                  areaColor: 'rgb(46,229,206)',
                  //    shadowColor: 'rgb(12,25,50)',
                  borderWidth: 0.1
                }
              },
              regions: this.getChinaColor(),
              z: 10
            }
          ],
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              showEffectOn: 'render',
              zlevel: 1,
              rippleEffect: {
                period: 15,
                scale: 4,
                brushType: 'fill'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  offset: [15, 0],
                  color: '#1DE9B6',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#1DE9B6',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              symbolSize: 12,
              data: points
            }, // 地图线的动画效果
            {
              type: 'lines',
              zlevel: 2,
              effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 7 //图标大小
              },
              lineStyle: {
                normal: {
                  color: '#1DE9B6',
                  width: 1, //线条宽度
                  opacity: 0.1, //尾迹线条透明度
                  curveness: 0.3 //尾迹线条曲直度
                }
              },
              data: [
                {
                  coords: [
                    [118.8062, 31.9208],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#4ab2e5' }
                },
                {
                  coords: [
                    [127.9688, 45.368],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#4fb6d2' }
                },
                {
                  coords: [
                    [110.3467, 41.4899],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#52b9c7' }
                },
                {
                  coords: [
                    [125.8154, 44.2584],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#5abead' }
                },
                {
                  coords: [
                    [116.4551, 40.2539],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#f34e2b' }
                },
                {
                  coords: [
                    [123.1238, 42.1216],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#f56321' }
                },
                {
                  coords: [
                    [114.4995, 38.1006],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#f56f1c' }
                },
                {
                  coords: [
                    [117.4219, 39.4189],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#f58414' }
                },
                {
                  coords: [
                    [112.3352, 37.9413],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#f58f0e' }
                },
                {
                  coords: [
                    [109.1162, 34.2004],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#f5a305' }
                },
                {
                  coords: [
                    [103.5901, 36.3043],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#e7ab0b' }
                },
                {
                  coords: [
                    [106.3586, 38.1775],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#dfae10' }
                },
                {
                  coords: [
                    [101.4038, 36.8207],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#d5b314' }
                },
                {
                  coords: [
                    [103.9526, 30.7617],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#c1bb1f' }
                },
                {
                  coords: [
                    [108.384366, 30.439702],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#b9be23' }
                },
                {
                  coords: [
                    [113.0823, 28.2568],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#a6c62c' }
                },
                {
                  coords: [
                    [102.9199, 25.46639],
                    [113.4668, 22.8076]
                  ],
                  lineStyle: { color: '#96cc34' }
                }
              ]
            }
          ]
        }
      }
    },
    methods: {
      //  中国地图颜色
      getChinaColor() {
        var list = []
        let chinaColor = [
          { name: '云南省', value: '#a1b8ea' },
          { name: '广西省', value: '#a1b8ea' },
          { name: '北京市', value: '#a1b8ea' },
          { name: '广东省', value: '#baf2f3' }
        ]
        for (var i = 0; i < chinaColor.length; i++) {
          list.push({
            name: chinaColor[i].name,
            itemStyle: {
              normal: {
                shadowColor: '#6783a1',
                shadowBlur: 1,
                areaColor: chinaColor[i].value,
                borderColor: '#0f4d9a',
                color: '#fff'
              },
              emphasis: {
                areaColor: chinaColor[i].value
              }
            }
          })
        }
        return list
      }
    }
  }
</script>
```

:::

## 广东省地图

:::demo

```html
<template>
  <div style="height: 80vh; width: 100%">
    <!-- <gd-echart :width="'100%'" :height="'100%'" :options="options" :map="'guangdong'"> </gd-echart> -->
    <gd-echart :width="'100%'" :height="'100%'" :options="options" :map="'guangdong'" :geo="mapJson"> </gd-echart>
  </div>
</template>

<script>
  // const mapJsonData = require('./map/province/guangdong.json')
  var geoCoordMap = {
    广州市: [113.280637, 23.125178],
    韶关市: [113.591544, 24.801322],
    深圳市: [114.085947, 22.547],
    珠海市: [113.553986, 22.224979],
    汕头市: [116.708463, 23.37102],
    佛山市: [113.122717, 23.028762],
    江门市: [113.094942, 22.590431],
    湛江市: [110.364977, 21.274898],
    茂名市: [110.919229, 21.659751],
    肇庆市: [112.472529, 23.051546],
    梅州市: [116.117582, 24.299112],
    汕尾市: [115.364238, 22.774485],
    河源市: [114.697802, 23.746266],
    阳江市: [111.975107, 21.859222],
    清远市: [113.051227, 23.685022],
    东莞市: [113.746262, 23.046237],
    中山市: [113.382391, 22.521113],
    潮州市: [116.632301, 23.661701],
    揭阳市: [116.355733, 23.543778],
    云浮市: [112.044439, 22.929801],
    惠州市: [114.412599, 23.079404]
  }
  var data = [
    { name: '广州市', value: 199 },
    { name: '韶关市', value: 39 },
    { name: '深圳市', value: 152 },
    { name: '珠海市', value: 299 },
    { name: '汕头市', value: 89 },
    { name: '佛山市', value: 52 },
    { name: '江门市', value: 9 },
    { name: '湛江市', value: 352 },
    { name: '茂名市', value: 99 },
    { name: '肇庆市', value: 39 },
    { name: '梅州市', value: 39 },
    { name: '汕尾市', value: 39 },
    { name: '河源市', value: 39 },
    { name: '阳江市', value: 39 },
    { name: '清远市', value: 39 },
    { name: '东莞市', value: 39 },
    { name: '中山市', value: 39 },
    { name: '揭阳市', value: 39 },
    { name: '清远市', value: 39 },
    { name: '云浮市', value: 39 },
    { name: '惠州市', value: 480 }
  ]
  var max = 480
  var min = 9 // todo
  var maxSize4Pin = 100
  var minSize4Pin = 20

  var convertData = function(data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name]
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        })
      }
    }
    return res
  }
  export default {
    name: 'gd_echart_examples',
    data() {
      return {
        mapJson: require('../../.vuepress/public/geo/province/guangdong.json'),
        options: {
          title: {
            text: '广东省',
            subtext: '',
            x: 'center',
            textStyle: {
              color: '#ccc'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function(params) {
              if (typeof params.value[2] == 'undefined') {
                return params.name + ' : ' + params.value
              } else {
                return params.name + ' : ' + params.value[2]
              }
            }
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['credit_pm2.5'],
            textStyle: {
              color: '#fff'
            }
          },
          visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {
              color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            }
          },
          geo: {
            show: true,
            map: 'guangdong',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#fff'
                }
              }
            },
            roam: true,
            itemStyle: {
              areaColor: '#0E95F1',
              borderColor: '#e9e9e9',
              borderWidth: 1,
              shadowColor: '#0E95F1',
              shadowBlur: 20,
              emphasis: {
                areaColor: '#2B91B7'
              }
            }
          },
          series: [
            {
              name: '点',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin',
              symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min)
                var b = minSize4Pin - a * min
                b = maxSize4Pin - a * max
                return a * val[2] + b
              },
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: 9
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#F62157' //标志颜色
                }
              },
              zlevel: 6,
              data: convertData(data)
            },
            {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: data,
              symbolSize: function(val) {
                return val[2] / 10
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#05C3F9',
                  shadowBlur: 10,
                  shadowColor: '#05C3F9'
                }
              },
              zlevel: 1
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

## 广州市地图

:::demo

```html
<template>
  <div style="height: 80vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options" :map="'guangzhou'" :geo="mapJson"> </gd-echart>
    <!-- <gd-echart :width="'100%'" :height="'100%'" :options="options" :map="'guangdong'" :geo="mapJson"> </gd-echart> -->
  </div>
</template>

<script>
  // const mapJsonData = require('./map/province/guangdong.json')
  var geoCoordMap = {
    荔湾区: [113.238879, 23.128594],
    越秀区: [113.261503, 23.131377],
    海珠区: [113.311916, 23.086615],
    天河区: [113.355747, 23.127191],
    白云区: [113.267833, 23.160687],
    黄埔区: [113.45378, 23.10901],
    番禺区: [113.37863, 22.93893],
    花都区: [113.214859, 23.40674],
    南沙区: [113.603432, 22.774673],
    萝岗区: [113.522366, 23.06515],
    增城市: [113.832621, 23.292059],
    从化市: [113.581253, 23.551168]
  }
  var data = [
    { name: '荔湾区', value: 199 },
    { name: '越秀区', value: 39 },
    { name: '海珠区', value: 152 },
    { name: '天河区', value: 299 },
    { name: '白云区', value: 89 },
    { name: '黄埔区', value: 52 },
    { name: '番禺区', value: 9 },
    { name: '花都区', value: 352 },
    { name: '南沙区', value: 99 },
    { name: '萝岗区', value: 39 },
    { name: '增城市', value: 39 },
    { name: '从化市', value: 39 }
  ]
  var max = 480
  var min = 9 // todo
  var maxSize4Pin = 100
  var minSize4Pin = 20

  var convertData = function(data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name]
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        })
      }
    }
    return res
  }
  export default {
    name: 'gd_echart_examples',
    data() {
      return {
        mapJson: require('../../.vuepress/public/geo/city/440100.json'),
        options: {
          title: {
            text: '广州市',
            subtext: '',
            x: 'center',
            textStyle: {
              color: '#ccc'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: function(params) {
              return params.name
            }
          },
          legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['credit_pm2.5'],
            textStyle: {
              color: '#fff'
            }
          },
          geo: {
            show: true,
            map: 'guangzhou',
            label: {
              normal: {
                formatter: function(params) {
                  return params.name
                }
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#fff'
                }
              }
            },
            roam: true,
            itemStyle: {
              areaColor: '#0E95F1',
              borderColor: '#e9e9e9',
              borderWidth: 1,
              shadowColor: '#0E95F1',
              shadowBlur: 20,
              emphasis: {
                areaColor: '#2B91B7'
              }
            }
          },
          series: [
            {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(
                data.sort(function(a, b) {
                  return b.value - a.value
                })
              ),
              symbolSize: function(val) {
                return val[2] / 10
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#05C3F9',
                  shadowBlur: 10,
                  shadowColor: '#05C3F9'
                }
              },
              zlevel: 1
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

## 统计地图

:::demo

```html
<template>
  <div style="height: 80vh; width: 100%">
    <!-- <gd-echart :width="'100%'" :height="'100%'" :options="options" :map="'hebei'"> </gd-echart> -->
    <gd-echart :width="'100%'" :height="'100%'" :options="options" :map="'hebei'" :geo="mapJson"> </gd-echart>
  </div>
</template>

<script>
  var nameMap = 'hebei'
  var hbmap = [
    {
      name: '秦皇岛',
      value: '98'
    },
    {
      name: '衡水',
      value: '2223'
    },
    {
      name: '邢台',
      value: '437'
    },
    {
      name: '保定',
      value: '385'
    },
    {
      name: '唐山',
      value: '768'
    },
    {
      name: '张家口',
      value: '1233'
    },
    {
      name: '石家庄',
      value: '1633'
    }
  ]
  var geoCoordMap = {
    石家庄: [114.48, 38.03],
    保定: [115.48, 38.85],
    张家口: [114.87, 40.82],
    承德: [117.93, 40.97],
    秦皇岛: [119.57, 39.95],
    唐山: [118.02, 39.63],
    廊坊: [116.7, 39.53],
    沧州: [116.83, 38.33],
    邯郸: [114.47, 36.6],
    衡水: [115.72, 37.72],
    邢台: [114.48, 37.05]
  }

  var convertData = function(data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name]
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        })
      }
    }
    return res
  }
  var seriesdata = [
    {
      type: 'map',
      map: nameMap,
      aspectScale: 0.75, //长宽比
      left: '2%',
      // right: '35%',
      top: 10,
      width: '50%',
      height: '90%',
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#0C1564',
          borderColor: '#00effc',
          borderWidth: 1.5,
          label: {
            show: true,
            color: '#fff'
          },

          emphasis: {
            label: {
              show: true
            }
          }
        }
      },
      data: hbmap
    },
    //右边柱状图
    {
      name: '',
      type: 'bar',
      xAxisIndex: 0,
      yAxisIndex: 0,
      barWidth: '45%',
      itemStyle: {
        normal: {
          color: '#00effc'
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          textStyle: {
            color: '#00effc'
          }
        }
      },
      data: hbmap
    }
  ]
  var ynameMap = []
  for (var i = 0; i < 7; i++) {
    ynameMap.push(seriesdata[1].data[i].name)
  }
  export default {
    name: 'gd_echart_examples',
    data() {
      return {
        mapJson: require('../../.vuepress/public/geo/province/hebei.json'),
        options: {
          backgroundColor: '#0C1564',
          grid: {
            // left:'2%',
            right: '10%',
            bottom: '3%',
            width: '20%',
            height: '50%'
          },
          tooltip: {
            trigger: 'item',
            formatter: function(data) {
              //console.log(data);
              if (!isNaN(data.value)) {
                return data.name + '：' + data.value
              }
            }
          },
          xAxis: {
            gridIndex: 0,
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          yAxis: {
            gridIndex: 0,
            interval: 0,
            data: ynameMap,
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#00effc'
              }
            }
          },
          series: seriesdata
        }
      }
    },
    methods: {}
  }
</script>
```

:::

## 全国动态统计地图

:::demo

```html
<template>
  <div style="height: 80vh; width: 100%">
    <gd-echart :width="'100%'" :height="'100%'" :options="options" :map="'china'"> </gd-echart>
    <!-- <gd-echart :width="'100%'" :height="'100%'" :options="options" :map="'guangdong'" :geo="mapJson"> </gd-echart> -->
  </div>
</template>

<script>
  // 可视化配色
  //线条的汇集点坐标
  var geoGpsMap = [103.5901, 36.3043]
  var t = 1 //流入流出控制
  var r = 1 //右侧流入流出文字控制
  var geoCoordMap = {
    江苏: [118.8062, 31.9208],
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
    西藏: [91.11, 29.97]
  }

  var d1 = {
    江苏: 10041,
    黑龙江: 4093,
    内蒙古: 1157,
    吉林: 4903,
    北京市: 2667,
    辽宁: 8331,
    河北: 23727,
    天津: 681,
    山西: 5352,
    陕西: 38,
    甘肃: 77,
    宁夏: 65,
    青海: 10,
    新疆: 22000,
    四川: 309,
    重庆: 77,
    山东: 21666,
    河南: 15717,
    安徽: 15671,
    湖北: 3714,
    浙江: 3141,
    福建: 955,
    江西: 4978,
    湖南: 778,
    贵州: 33,
    云南: 149,
    广东: 1124,
    广西: 125,
    海南: 7,
    上海: 2155,
    西藏: 0
  }

  var d2 = {
    江苏: 159,
    黑龙江: 5,
    内蒙古: 54,
    吉林: 10,
    北京市: 0,
    辽宁: 0,
    河北: 1679,
    天津: 1,
    山西: 2698,
    陕西: 1744,
    甘肃: 362,
    宁夏: 429,
    青海: 122,
    新疆: 731,
    四川: 3925,
    重庆: 1480,
    山东: 79,
    河南: 1017,
    安徽: 208,
    湖北: 1209,
    浙江: 1418,
    福建: 1237,
    江西: 1004,
    湖南: 1511,
    贵州: 345,
    云南: 1429,
    广东: 2242,
    广西: 2271,
    海南: 59,
    上海: 8,
    西藏: 0
  }

  var d3 = {
    江苏: 11788,
    黑龙江: 1944,
    内蒙古: 2954,
    吉林: 3482,
    北京市: 1808,
    辽宁: 5488,
    河北: 27035,
    天津: 2270,
    山西: 13623,
    陕西: 4221,
    甘肃: 754,
    宁夏: 1783,
    青海: 91,
    新疆: 1907,
    四川: 4905,
    重庆: 1420,
    山东: 39781,
    河南: 16154,
    安徽: 7914,
    湖北: 6802,
    浙江: 5812,
    福建: 3345,
    江西: 4996,
    湖南: 5627,
    贵州: 1504,
    云南: 2725,
    广东: 6339,
    广西: 1009,
    海南: 0,
    上海: 1988,

    西藏: 0
  }

  var d4 = {
    江苏: 10041,
    黑龙江: 4093,
    内蒙古: 1157,
    吉林: 4903,
    北京市: 2667,
    辽宁: 8331,
    河北: 23727,
    天津: 681,
    山西: 5352,
    陕西: 38,
    甘肃: 77,
    宁夏: 65,
    青海: 10,
    新疆: 193,
    四川: 309,
    重庆: 77,
    山东: 21666,
    河南: 15717,
    安徽: 15671,
    湖北: 3714,
    浙江: 3141,
    福建: 955,
    江西: 4978,
    湖南: 778,
    贵州: 33,
    云南: 149,
    广东: 1124,
    广西: 125,
    海南: 7,
    上海: 2155,
    西藏: 0
  }

  var d5 = {
    江苏: 159,
    黑龙江: 5,
    内蒙古: 54,
    吉林: 10,
    北京市: 0,
    辽宁: 0,
    河北: 1679,
    天津: 1,
    山西: 2698,
    陕西: 1744,
    甘肃: 362,
    宁夏: 429,
    青海: 122,
    新疆: 731,
    四川: 3925,
    重庆: 1480,
    山东: 79,
    河南: 1017,
    安徽: 208,
    湖北: 1209,
    浙江: 1418,
    福建: 1237,
    江西: 1004,
    湖南: 1511,
    贵州: 345,
    云南: 1429,
    广东: 2242,
    广西: 2271,
    海南: 59,
    上海: 8,
    西藏: 0
  }

  var d6 = {
    江苏: 11788,
    黑龙江: 1944,
    内蒙古: 2954,
    吉林: 3482,
    北京市: 1808,
    辽宁: 5488,
    河北: 27035,
    天津: 2270,
    山西: 13623,
    陕西: 4221,
    甘肃: 754,
    宁夏: 1783,
    青海: 91,
    新疆: 1907,
    四川: 4905,
    重庆: 1420,
    山东: 39781,
    河南: 16154,
    安徽: 7914,
    湖北: 6802,
    浙江: 5812,
    福建: 3345,
    江西: 4996,
    湖南: 5627,
    贵州: 1504,
    云南: 2725,
    广东: 6339,
    广西: 1009,
    海南: 0,
    上海: 1988,
    西藏: 0
  }

  var colors = ['#1DE9B6', '#EEDD78', '#32C5E9', '#FFDB5C', '#37A2DA', '#04B9FF']
  var colorIndex = 0
  var year = ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06']
  var mapData = [[], [], [], [], [], []]

  /*柱子Y名称*/
  var categoryData = []
  var barData = []

  for (var key in geoCoordMap) {
    mapData[0].push({
      year: '2020-01',
      name: key,
      value: d1[key] / 100,
      value1: d1[key] / 100
    })
    mapData[1].push({
      year: '2020-02',
      name: key,
      value: d2[key] / 100,
      value1: d2[key] / 100
    })
    mapData[2].push({
      year: '2020-03',
      name: key,
      value: d3[key] / 100,
      value1: d3[key] / 100
    })
    mapData[3].push({
      year: '2020-04',
      name: key,
      value: d4[key] / 100,
      value1: d4[key] / 100
    })
    mapData[4].push({
      year: '2020-05',
      name: key,
      value: d5[key] / 100,
      value1: d5[key] / 100
    })
    mapData[5].push({
      year: '2020-06',
      name: key,
      value: d6[key] / 100,
      value1: d6[key] / 100
    })
  }

  for (var i = 0; i < mapData.length; i++) {
    mapData[i].sort(function sortNumber(a, b) {
      return a.value - b.value
    })
    barData.push([])
    categoryData.push([])
    for (var j = 0; j < mapData[i].length; j++) {
      barData[i].push(mapData[i][j].value1)
      categoryData[i].push(mapData[i][j].name)
    }
  }
  var convertData = function(data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name]
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        })
      }
    }
    return res
  }

  var convertToLineData = function(data, gps) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i]
      var toCoord = geoCoordMap[dataItem.name]
      var fromCoord = gps //郑州
      //  var toCoord = geoGps[Math.random()*3];
      if (fromCoord && toCoord) {
        if (t == 1) {
          res.push([
            {
              coord: toCoord
            },
            {
              coord: fromCoord,
              value: dataItem.value
            }
          ])
        } else {
          res.push([
            {
              coord: fromCoord,
              value: dataItem.value
            },
            {
              coord: toCoord
            }
          ])
        }
      }
    }
    if (t == 0) {
      t = 1
    } else {
      t = 0
    }
    return res
  }
  var optionXyMap01 = {
    timeline: {
      data: year,
      axisType: 'category',
      autoPlay: true,
      playInterval: 5000,
      left: '10%',
      right: '10%',
      bottom: '3%',
      width: '80%',
      //  height: null,
      label: {
        normal: {
          textStyle: {
            color: '#ddd'
          }
        },
        emphasis: {
          textStyle: {
            color: '#fff'
          }
        }
      },
      symbolSize: 10,
      lineStyle: {
        color: '#555'
      },
      checkpointStyle: {
        borderColor: '#777',
        borderWidth: 2
      },
      controlStyle: {
        showNextBtn: true,
        showPrevBtn: true,
        normal: {
          color: '#666',
          borderColor: '#666'
        },
        emphasis: {
          color: '#aaa',
          borderColor: '#aaa'
        }
      }
    },
    baseOption: {
      animation: true,
      animationDuration: 1000,
      animationEasing: 'cubicInOut',
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'cubicInOut',
      grid: {
        right: '2%',
        top: '10%',
        bottom: '10%',
        width: '18%'
      },
      tooltip: {
        trigger: 'axis', // hover触发器
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          shadowStyle: {
            color: 'rgba(150,150,150,0.1)' //hover颜色
          }
        }
      },
      visualMap: {
        min: 0,
        max: 250,
        left: 'left',
        top: 'bottom',
        text: ['高', '低'],
        textStyle: {
          color: 'white'
        },
        calculable: true,
        colorLightness: [0.8, 100],
        color: ['#FF6F00', '#FFA800', '#FFFFFF'],
        dimension: 0
      },
      geo: {
        show: true,
        map: 'china',
        roam: true,
        zoom: 1,
        center: [113.83531246, 34.0267395887],
        label: {
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#00FFE5',
            borderWidth: 1,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(0, 255, 255, 0.1)' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(0, 255, 255, 0.1)' // 100% 处的颜色
                }
              ],
              globalCoord: false // 缺省为 false
            },
            shadowColor: '#00FFFF',
            // shadowColor: 'rgba(255, 255, 255, 1)',
            shadowOffsetX: 2,
            shadowOffsetY: 4,
            shadowBlur: 12
          },
          emphasis: {
            areaColor: '#389BB7',
            borderWidth: 0
          }
        }
      }
    },
    options: []
  }

  for (var n = 0; n < year.length; n++) {
    var statistic_name = '各省' + (r == 1 ? '入' : '出') + '物流'
    optionXyMap01.options.push({
      title: [
        {
          text: '物流集散数字可视化平台',
          //subtext: '   ',
          left: '25%',
          top: '1%',
          textStyle: {
            color: '#fff',
            fontSize: 25
          }
        },
        {
          id: 'statistic',
          text: statistic_name,
          left: '75%',
          top: '3%',
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        }
      ],
      xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        min: 0,
        boundaryGap: false,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          margin: 1,
          textStyle: {
            color: '#aaa'
          }
        }
      },
      yAxis: {
        type: 'category',
        //  name: 'TOP 20',
        nameGap: 16,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#ddd'
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            color: '#ddd'
          }
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#ddd'
          }
        },
        data: categoryData[n]
      },

      series: [
        //未知作用
        {
          //文字和标志
          name: 'light',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(mapData[n]),
          symbolSize: function(val) {
            return 6
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: colors[n]
            }
          }
        },
        //地图？
        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          aspectScale: 1, //长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#FFFFFF'
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          },
          animation: false,
          data: mapData
        },
        //地图点的动画效果
        {
          //  name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(
            mapData[n]
              .sort(function(a, b) {
                return b.value - a.value
              })
              .slice(0, 20)
          ),
          symbolSize: function(val) {
            return 5
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: colors[n],
              shadowBlur: 10,
              shadowColor: colors[n]
            }
          },
          zlevel: 1
        },
        //地图线的动画效果
        {
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            period: 5, //箭头指向速度，值越小速度越快
            trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 6 //图标大小
          },
          lineStyle: {
            normal: {
              color: colors[n],
              width: 1, //尾迹线条宽度
              opacity: 0.2, //尾迹线条透明度
              curveness: 0.3 //尾迹线条曲直度
            }
          },
          data: convertToLineData(mapData[n], geoGpsMap)
        },
        //柱状图
        {
          zlevel: 1.5,
          type: 'bar',
          barMaxWidth: 8,
          symbol: 'none',
          itemStyle: {
            normal: {
              color: colors[n],
              barBorderRadius: [0, 30, 30, 0]
            }
          },
          data: barData[n]
        }
      ]
    })
    if (r == 0) {
      r = 1
    } else {
      r = 0
    }
  }
  export default {
    name: 'gd_echart_examples',
    data() {
      return {
        // mapJson: mapJsonData,
        options: optionXyMap01
      }
    },
    methods: {}
  }
</script>
```

:::
**属性**

| 参数   | 说明                                                                                                                                       | 类型            | 可选值 | 默认值 |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ------ | ------ |
| option | echarts 配置项,当 option 数据发生改变时无需手动刷新 echart,已经内置刷新数据具体可浏览 echart 官网:https://echarts.apache.org/zh/index.html | object,function | --     | --     |
| map    | 地图名称                                                                                                                                   | string          | -      | ''     |
| geo    | GeoJson 格式的数据,具体格式见 https://geojson.org/。可以是 JSON 字符串，也可以是解析得到的对象。这个参数也可以写为 geoJson，效果相同       | object          | --     | --     |
