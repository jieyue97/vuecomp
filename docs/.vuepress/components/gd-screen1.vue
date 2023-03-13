<template>
  <div class="content-body">
    <div class="header">
      <div class="header-left">
        <span>模板一</span>
      </div>
      <div class="header-time">
        <span id="time">{{ nowTime }}</span>
      </div>
    </div>
    <div class="content">
      <div class="content-con">
        <div class="left-body">
          <div class="left-top public-bg">
            <div class="public-title">重点水质量检测区</div>
            <div class="top-body">
              <div class="top-left">
                <div class="top-left-title">
                  <h6>注水量</h6>
                  <span><b>1756</b>m3/h</span>
                  <!-- <img src="image/pictre.png" /> -->
                </div>
              </div>
              <div class="top-right">
                <div class="top-left-title">
                  <h6>泄水量</h6>
                  <span><b>3520</b>m3/h</span>
                  <!-- <img src="image/pictre.png" /> -->
                </div>
              </div>
            </div>
          </div>
          <div class="left-con public-bg">
            <div class="public-title">水质量分布情况</div>
            <div class="title-nav" id="leida">
              <gd-echart :width="'100%'" :height="'100%'" :options="option1"> </gd-echart>
            </div>
          </div>
          <div class="left-bottom public-bg">
            <div class="public-title">企业污染排放情况</div>
            <div class="title-nav" id="wuran">
              <gd-echart :width="'100%'" :height="'100%'" :options="wuran()"> </gd-echart>
            </div>
          </div>
        </div>

        <div class="center-body">
          <div class="map" id="map">
            <gd-echart :width="'100%'" :height="'100%'" :options="map()" :map="'china'" :geo="mapJson"> </gd-echart>
          </div>
        </div>

        <div class="right-body">
          <div class="right-top public-bg">
            <div class="public-title">水质污染TOP5</div>
            <div class="title-nav">
              <div class="top5-ul">
                <ul>
                  <li>
                    <span>1</span>
                    <span>严重</span>
                    <span>北京市</span>
                    <span>房山区</span>
                    <span>重度污染</span>
                    <span>15公里</span>
                  </li>
                  <li>
                    <span>2</span>
                    <span>严重</span>
                    <span>上海市</span>
                    <span>闵行区</span>
                    <span>重度污染</span>
                    <span>10公里</span>
                  </li>
                  <li>
                    <span>3</span>
                    <span>严重</span>
                    <span>北京市</span>
                    <span>朝阳区</span>
                    <span>重度污染</span>
                    <span>9.3公里</span>
                  </li>
                  <li>
                    <span>4</span>
                    <span>中度</span>
                    <span>广东省</span>
                    <span>广州市</span>
                    <span>中度污染</span>
                    <span>8.6公里</span>
                  </li>
                  <li>
                    <span>5</span>
                    <span>中度</span>
                    <span>浙江省</span>
                    <span>杭州市</span>
                    <span>中度污染</span>
                    <span>6.6公里</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="right-con public-bg">
            <div class="public-title">水质类别占比</div>
            <div class="title-nav" id="huaxing">
              <gd-echart :width="'100%'" :height="'100%'" :options="huaxing()"> </gd-echart>
            </div>
          </div>
          <div class="right-bottom public-bg">
            <div class="public-title">主要地区水流量</div>
            <div class="title-nav" id="zhexian">
              <gd-echart :width="'100%'" :height="'100%'" :options="zhexian()"> </gd-echart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `BigSrceen1`,
  data() {
    return {
      mapJson: require('../../.vuepress/public/geo/china.json'),
      nowTime: '',
      option1: {
        color: ['#00c2ff', '#f9cf67', '#e92b77'],
        legend: {
          show: true,
          // icon: 'circle',//图例形状
          bottom: 0,
          center: 0,
          itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
          itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
          itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
          textStyle: {
            fontSize: 12,
            color: '#ade3ff'
          },
          data: ['2016', '2017', '2018']
        },
        radar: [
          {
            indicator: [
              {
                text: '重庆市',
                max: 100
              },
              {
                text: '北京市',
                max: 100
              },
              {
                text: '上海市',
                max: 100
              },
              {
                text: '广东省',
                max: 100
              },
              {
                text: '浙江省',
                max: 100
              }
            ],

            textStyle: {
              color: 'red'
            },
            center: ['50%', '50%'],
            radius: 60,
            startAngle: 90,
            splitNumber: 3,
            orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
            // shape: 'circle',
            // backgroundColor: {
            //     image:imgPath[0]
            // },
            name: {
              formatter: '{value}',
              textStyle: {
                fontSize: 12, //外圈标签字体大小
                color: '#5b81cb' //外圈标签字体颜色
              }
            },
            splitArea: {
              // 坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: true,
              areaStyle: {
                // 分隔区域的样式设置。
                color: ['#141c42', '#141c42'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
              }
            },
            // axisLabel:{//展示刻度
            //     show: true
            // },
            axisLine: {
              //指向外圈文本的分隔线样式
              lineStyle: {
                color: '#153269'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#113865', // 分隔线颜色
                width: 1 // 分隔线线宽
              }
            }
          }
        ],
        series: [
          {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
              emphasis: {
                lineStyle: {
                  width: 4
                }
              }
            },
            data: [
              {
                name: '2016',
                value: [85, 65, 55, 90, 82],
                areaStyle: {
                  normal: {
                    // 单项区域填充样式
                    color: {
                      type: 'linear',
                      x: 0, //右
                      y: 0, //下
                      x2: 1, //左
                      y2: 1, //上
                      colorStops: [
                        {
                          offset: 0,
                          color: '#00c2ff'
                        },
                        {
                          offset: 0.5,
                          color: 'rgba(0,0,0,0)'
                        },
                        {
                          offset: 1,
                          color: '#00c2ff'
                        }
                      ],
                      globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                  }
                },
                symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
                label: {
                  // 单个拐点文本的样式设置
                  normal: {
                    show: true, // 单个拐点文本的样式设置。[ default: false ]
                    position: 'top', // 标签的位置。[ default: top ]
                    distance: 2, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                    color: '#6692e2', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                    fontSize: 14, // 文字的字体大小
                    formatter: function(params) {
                      return params.value
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    //图形悬浮效果
                    borderColor: '#00c2ff',
                    borderWidth: 2.5
                  }
                }
                // lineStyle: {
                //     normal: {
                //         opacity: 0.5// 图形透明度
                //     }
                // }
              },
              {
                name: '2017',
                value: [50, 20, 45, 30, 75],
                symbolSize: 2.5,
                itemStyle: {
                  normal: {
                    borderColor: '#f9cf67',
                    borderWidth: 2.5
                  }
                },
                areaStyle: {
                  normal: {
                    // 单项区域填充样式
                    color: {
                      type: 'linear',
                      x: 0, //右
                      y: 0, //下
                      x2: 1, //左
                      y2: 1, //上
                      colorStops: [
                        {
                          offset: 0,
                          color: '#f9cf67'
                        },
                        {
                          offset: 0.5,
                          color: 'rgba(0,0,0,0)'
                        },
                        {
                          offset: 1,
                          color: '#f9cf67'
                        }
                      ],
                      globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                  }
                }
                // lineStyle: {
                //     normal: {
                //         opacity: 0.5// 图形透明度
                //     }
                // }
              },
              {
                name: '2018',
                value: [37, 80, 12, 50, 25],
                symbolSize: 2.5,
                itemStyle: {
                  normal: {
                    borderColor: '#e92b77',
                    borderWidth: 2.5
                  }
                },
                areaStyle: {
                  normal: {
                    // 单项区域填充样式
                    color: {
                      type: 'linear',
                      x: 0, //右
                      y: 0, //下
                      x2: 1, //左
                      y2: 1, //上
                      colorStops: [
                        {
                          offset: 0,
                          color: '#e92b77'
                        },
                        {
                          offset: 0.5,
                          color: 'rgba(0,0,0,0)'
                        },
                        {
                          offset: 1,
                          color: '#e92b77'
                        }
                      ],
                      globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                  }
                }
              }
            ]
          }
        ]
      }
    }
  },
  mounted() {
    setInterval(this.getTime, 1000) //大屏
  },
  methods: {
    map() {
      let iconRQ =
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII='
      let data = [
        {
          name: '北京',
          value: [116.24, 39.55, 100]
        },
        {
          name: '深圳',
          value: [114.271522, 22.753644]
        },

        {
          name: '重庆',
          value: [106.54, 29.59]
        },
        {
          name: '浙江',
          value: [120.19, 30.26]
        },
        {
          name: '上海',
          value: [121.4648, 31.2891]
        }
      ]
      let LableData = [
        {
          name: '北京',
          coords: [
            [116.24, 39.55, 100],
            [120.24, 46.55, 100]
          ], // 线条位置[开始位置，结束位置]
          value: [1021, 120]
        },
        {
          name: '深圳',
          coords: [
            [114.271522, 22.753644],
            [118.24, 18.55, 100]
          ], // 线条位置[开始位置，结束位置]
          value: [1021, 120]
        },
        {
          name: '重庆',
          coords: [
            [106.54, 29.59],
            [104.24, 35.55]
          ], // 线条位置[开始位置，结束位置]
          value: [1021, 120]
        },
        {
          name: '浙江',
          coords: [
            [120.19, 30.26],
            [125.24, 27.55, 100]
          ], // 线条位置[开始位置，结束位置]
          value: [1021, 120]
        },
        {
          name: '上海',
          coords: [
            [121.4648, 31.2891],
            [122.4648, 32.2891]
          ], // 线条位置[开始位置，结束位置]
          value: [1201, 60]
        }
      ]

      let option = {
        /*backgroundColor: '#000f1e',*/
        geo: {
          map: 'china',
          aspectScale: 0.85,
          layoutCenter: ['50%', '50%'], //地图位置
          layoutSize: '100%',
          itemStyle: {
            normal: {
              shadowColor: '#276fce',
              shadowOffsetX: 0,
              shadowOffsetY: 15,
              opacity: 0.5
            },
            emphasis: {
              areaColor: '#276fce'
            }
          },
          regions: [
            {
              name: '南海诸岛',
              itemStyle: {
                areaColor: 'rgba(0, 10, 52, 1)',

                borderColor: 'rgba(0, 10, 52, 1)',
                normal: {
                  opacity: 0,
                  label: {
                    show: false,
                    color: '#009cc9'
                  }
                }
              },
              label: {
                show: false,
                color: '#FFFFFF',
                fontSize: 12
              }
            }
          ]
        },
        series: [
          // 常规地图
          {
            type: 'map',
            mapType: 'china',
            aspectScale: 0.85,
            layoutCenter: ['50%', '50%'], //地图位置
            layoutSize: '100%',
            zoom: 1, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            scaleLimit: {
              //滚轮缩放的极限控制
              min: 1,
              max: 2
            },
            itemStyle: {
              normal: {
                areaColor: '#0c274b',
                borderColor: '#1cccff',
                borderWidth: 1.5
              },
              emphasis: {
                areaColor: '#02102b',
                label: {
                  color: '#fff'
                }
              }
            }
          },
          {
            //首都星图标
            name: '首都',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [
              {
                name: '首都',
                value: [116.24, 41.55, 100]
              }
            ],
            symbol: iconRQ,
            symbolSize: 20,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            }
          },
          // 区域散点图
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbolSize: 10,
            rippleEffect: {
              //坐标点动画
              period: 3,
              scale: 5,
              brushType: 'fill'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
                color: '#b3e2f2',
                fontWeight: 'bold',
                fontSize: 16
              }
            },

            data: data,
            itemStyle: {
              //坐标点颜色
              normal: {
                show: true,
                color: '#ff8003',
                shadowBlur: 20,
                shadowColor: '#fff'
              },
              emphasis: {
                areaColor: '#f00'
              }
            }
          },

          /*{
		            name: 'lable',
		            type: 'scatter',
		            coordinateSystem: 'geo',
		            symbol: 'pin',
		            symbolSize: [50,50],
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        color: '#fff',
		                        fontSize: 9,
		                    },
		                    formatter (value){
		                        return value.data.value[1]
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#D8BC37', //标志颜色
		                }
		            },
		            data: data,
		            showEffectOn: 'render',
		            rippleEffect: {
		                brushType: 'stroke'
		            },
		            hoverAnimation: true,
		            zlevel: 1
		        },*/
          {
            type: 'lines',
            zlevel: 3,
            symbol: 'circle',
            symbolSize: [5, 5],
            color: '#ff8003',
            opacity: 1,
            label: {
              show: true,
              padding: [10, 20],
              color: '#fff',
              backgroundColor: '#1a3961',
              borderColor: '#aee9fb',
              borderWidth: 1,
              borderRadius: 6,
              formatter(params) {
                let arr = [params.name, '废水污染：' + params.value[1] + '家', '废气污染：' + params.value[0] + '家']
                return arr.join('\n')
              },
              textStyle: {
                align: 'left',
                lineHeight: 20
              }
              /* normal: {

		                     textStyle: {
		                         color: '#fff',
		                         fontSize: 9,
		                     },
		                     formatter (value){
		                         return value.data.value[2]
		                     },

		                 }*/
            },
            lineStyle: {
              type: 'solid',
              color: '#fff',
              width: 0.5,
              opacity: 1
            },
            data: LableData
          }
        ]
      }
      return option
    },
    zhexian() {
      let dataObj = {
        year: ['2015', '2016', '2017', '2018', '2019', '2020'],
        data: {
          value: [
            {
              name: '上游流速',
              value: [127, 224, 250, 278, 227, 355]
            },
            {
              name: '下游流速',
              value: [27, 124, 70, 178, 127, 157]
            },
            {
              name: '平均流速',
              value: [127, 74, 120, 99, 130, 50]
            }
          ]
        }
      }
      let dataArr = []

      dataObj.data.value.map(item => {
        let datachild = []
        let newArr = {
          name: item.name,
          type: 'line',
          smooth: true,
          symbolSize: 8,
          data: item.value,
          barWidth: '30%',
          itemStyle: {
            normal: {
              color: item.name === '上游流速' ? '#f0c725' : item.name === '下游流速' ? '#0BE3FF' : '#16f892'
            }
          }
        }

        dataArr.push(newArr)
      })
      const option = {
        color: ['#f0c725', '#16f892'],
        title: {
          left: 'center',
          text: '',
          textStyle: {
            color: '#FFFFFF',
            fontSize: '14'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          x: 'center',
          top: '25',
          textStyle: {
            color: '#c1cadf',
            fontSize: 14
          }
        },
        grid: {
          left: '6%',
          right: '4%',
          top: '25%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          x: 'right',
          y: 'center'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: dataObj.year,
            axisLine: {
              lineStyle: {
                color: 'rgba(240,199,37,0.5)'
              }
            },
            axisLabel: {
              interval: 0,
              color: '#c1cadf',
              fontSize: '15'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '(m3)',
            nameTextStyle: {
              color: '#c1cadf',
              align: 'right',
              lineHeight: 10
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(240,199,37,0.5)'
              }
            },
            axisLabel: {
              interval: 0,
              color: '#c1cadf',
              fontSize: '15'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: dataArr
      }
      return option
    },
    huaxing() {
      var dataStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          shadowBlur: 0,
          shadowColor: '#203665'
        }
      }
      const option = {
        series: [
          {
            name: '第一个圆环',
            type: 'pie',
            clockWise: false,
            radius: [45, 55],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['15%', '50%'],
            data: [
              {
                value: 25,
                label: {
                  normal: {
                    rich: {
                      a: {
                        color: '#3a7ad5',
                        align: 'center',
                        fontSize: 14,
                        fontWeight: 'bold'
                      },
                      b: {
                        color: '#fff',
                        align: 'center',
                        fontSize: 12
                      }
                    },
                    formatter: function(params) {
                      return '{b|饮用水质}\n\n' + '{a|' + params.value + '个}' + '\n\n{b|增长2%}'
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                      fontSize: '12',
                      fontWeight: 'normal',
                      color: '#fff'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#2c6cc4',
                    shadowColor: '#2c6cc4',
                    shadowBlur: 0
                  }
                }
              },
              {
                value: 75,
                name: 'invisible',
                itemStyle: {
                  normal: {
                    color: '#24375c'
                  },
                  emphasis: {
                    color: '#24375c'
                  }
                }
              }
            ]
          },
          {
            name: '第二个圆环',
            type: 'pie',
            clockWise: false,
            radius: [45, 55],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [
              {
                value: 50,
                label: {
                  normal: {
                    rich: {
                      a: {
                        color: '#d03e93',
                        align: 'center',
                        fontSize: 14,
                        fontWeight: 'bold'
                      },
                      b: {
                        color: '#fff',
                        align: 'center',
                        fontSize: 12
                      }
                    },
                    formatter: function(params) {
                      return '{b|生活用水}\n\n' + '{a|' + params.value + '个}' + '\n\n{b|增长2%}'
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                      fontSize: '12',
                      fontWeight: 'normal',
                      color: '#fff'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#ef45ac',
                    shadowColor: '#ef45ac',
                    shadowBlur: 0
                  }
                }
              },
              {
                value: 50,
                name: 'invisible',
                itemStyle: {
                  normal: {
                    color: '#412a4e'
                  },
                  emphasis: {
                    color: '#412a4e'
                  }
                }
              }
            ]
          },
          {
            name: '第三个圆环',
            type: 'pie',
            clockWise: false,
            radius: [45, 55],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['85%', '50%'],
            data: [
              {
                value: 75,
                label: {
                  normal: {
                    rich: {
                      a: {
                        color: '#603dd0',
                        align: 'center',
                        fontSize: 14,
                        fontWeight: 'bold'
                      },
                      b: {
                        color: '#fff',
                        align: 'center',
                        fontSize: 12
                      }
                    },
                    formatter: function(params) {
                      return '{b|自来水}\n\n' + '{a|' + params.value + '个}' + '\n\n{b|增长2%}'
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                      fontSize: '12',
                      fontWeight: 'normal',
                      color: '#fff'
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#613fd1',
                    shadowColor: '#613fd1',
                    shadowBlur: 0
                  }
                }
              },
              {
                value: 25,
                name: 'invisible',
                itemStyle: {
                  normal: {
                    color: '#453284'
                  },
                  emphasis: {
                    color: '#453284'
                  }
                }
              }
            ]
          }
        ]
      }
      return option
    },
    wuran() {
      var salvProName = ['企业总数', '废气企业', '废水企业', '铅污染', '铬污染']
      var salvProValue = [117, 74, 72, 67, 55]
      var salvProMax = [] //背景按最大值
      for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
      }
      const option = {
        grid: {
          left: '2%',
          right: '2%',
          bottom: '-6%',
          top: '8%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
          }
        },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            data: salvProName
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '12'
              }
            },
            data: salvProValue
          }
        ],
        series: [
          {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30
              }
            },
            barWidth: 10,
            data: salvProValue
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
              normal: {
                color: 'rgba(24,31,68,1)',
                barBorderRadius: 30
              }
            }
          }
        ]
      }
      return option
    },
    //顶部时间
    getTime() {
      var myDate = new Date()
      var myYear = myDate.getFullYear() //获取完整的年份(4位,1970-????)
      var myMonth = myDate.getMonth() + 1 //获取当前月份(0-11,0代表1月)
      var myToday = myDate.getDate() //获取当前日(1-31)
      var myDay = myDate.getDay() //获取当前星期X(0-6,0代表星期天)
      var myHour = myDate.getHours() //获取当前小时数(0-23)
      var myMinute = myDate.getMinutes() //获取当前分钟数(0-59)
      var mySecond = myDate.getSeconds() //获取当前秒数(0-59)
      var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      this.nowTime =
        myYear +
        '年' +
        this.fillZero(myMonth) +
        '月' +
        this.fillZero(myToday) +
        '日' +
        ' ' +
        this.fillZero(myHour) +
        ':' +
        this.fillZero(myMinute) +
        ':' +
        this.fillZero(mySecond) +
        ' ' +
        week[myDay]
    },
    fillZero(str) {
      var realNum
      if (str < 10) {
        realNum = '0' + str
      } else {
        realNum = str
      }
      return realNum
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.public-bg {
  background: rgba(12, 26, 63, 0.3);
}
.public-title {
  width: calc(100% - 20px);
  height: 30px;
  position: relative;
  top: 0;
  left: 5px;
  color: white;
  padding-left: 16px;
  line-height: 30px;
  font-size: 13px;
}
.public-title:before {
  width: 4px;
  height: 20px;
  top: 5px;
  position: absolute;
  content: '';
  background: #2997e4;
  border-radius: 2px;
  left: 5px;
}

.content-body {
  width: 100%;
  height: 100%;
  background: #0d325f;
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

.header {
  height: 70px;
  width: 100%;
  /*    border: 1px solid red;*/
}
.header .header-left {
  width: 50%;
  float: left;
  line-height: 70px;
}
.header .header-left span {
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 2px;
  padding: 0 20px;
}
.header .header-time {
  width: 48%;
  line-height: 70px;
  float: right;
  text-align: right;
  padding-right: 20px;
}
.header .header-time span {
  color: #ffffff;
}
.content {
  width: 100%;
  height: calc(100% - 75px);
  position: absolute;
}
.content .content-con {
  height: 100%;
}
.content .content-con .left-body {
  width: 22%;
  height: 100%;
  float: left;
  margin: 0 0.3%;
}
.left-body .left-top {
  width: 100%;
  height: 27%;
}
.left-body .left-top .top-body {
  width: 100%;
  height: calc(100% - 30px);
}
.left-body .left-top .top-body .top-left {
  float: left;
  width: 50%;
  height: 100%;
}
.top-left-title {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
}
.top-left-title h6 {
  color: #bad0e2;
}
.top-left-title span {
  margin-top: 30px;
  display: inline-block;
  color: #2aa4f1;

  /*    height: 80px;
    line-height: 80px;*/
}
.top-left-title span b {
  font-size: 30px;
  letter-spacing: 5px;
}
.top-left-title img {
  width: 80%;
}
.left-body .left-top .top-body .top-right {
  float: left;
  width: 50%;
  height: 100%;
}
.left-body .left-con {
  width: 100%;
  height: 38%;
  margin-top: 1.6%;
}
.title-nav {
  width: 100%;
  height: calc(100% - 30px);
}
.left-body .left-bottom {
  width: 100%;
  height: 32%;
  margin-top: 1.6%;
}

.center-body {
  width: 54%;
  height: 100%;
  margin: 0 0.3%;
  float: left;
  /*border: 1px solid red;*/
}
.center-body .map {
  width: 100%;
  height: 100%;
}
.right-body {
  width: 22%;
  height: 100%;
  float: right;
  margin: 0 0.3%;
}

.right-body .right-top {
  width: 100%;
  height: 32%;
}
.title-nav .top5-ul {
  width: calc(100% - 20px);
  height: calc(100% - 30px);
  padding: 10px;
}
.title-nav .top5-ul ul {
  width: 100%;
  height: 100%;
}
.title-nav .top5-ul ul,
li {
  list-style: none;
}
.title-nav .top5-ul ul > li {
  width: 100%;
  height: 20%;
  color: #ffffff;
  line-height: 68px;
  justify-content: center;
}
.title-nav .top5-ul ul li span {
  margin-left: 3%;
  font-size: 14px;
}
.title-nav .top5-ul ul li span:nth-child(1) {
  color: #eb6841;
  font-style: oblique;
  /*width: 10%;*/
  /*#20a8fe
            #EB6841
            #3FB8AF
            #FE4365
            #FC9D9A*/
  display: inline-block;
  text-align: center;
  font-size: 20px;
}

.title-nav .top5-ul ul li span:nth-child(2) {
  width: 10%;
  display: inline-block;
  text-align: center;

  height: 30px;
  line-height: 30px;
  /*    height: 100%;*/
  /*line-height: 100%;*/
  vertical-align: center;
  border-radius: 5px;
  color: #ffffff;
}
.title-nav .top5-ul ul li:nth-child(1) span:nth-child(2),
.title-nav .top5-ul ul li:nth-child(2) span:nth-child(2),
.title-nav .top5-ul ul li:nth-child(3) span:nth-child(2) {
  background: #d89346;
}
.title-nav .top5-ul ul li:nth-child(4) span:nth-child(2),
.title-nav .top5-ul ul li:nth-child(5) span:nth-child(2) {
  background: #1db5ea;
}
.title-nav .top5-ul ul li span:nth-child(3) {
  /*width: 15%;*/
  display: inline-block;
  text-align: center;
}
.title-nav .top5-ul ul li span:nth-child(4) {
  /*width: 15%;*/
  display: inline-block;
  text-align: center;
}
.title-nav .top5-ul ul li span:nth-child(5) {
  /*width: 20%;*/
  display: inline-block;
  text-align: center;
}
.title-nav .top5-ul ul li span:nth-child(6) {
  display: inline-block;
  text-align: center;
}
.right-body .right-con {
  width: 100%;
  height: 25%;
  margin-top: 2%;
}
.right-body .right-bottom {
  width: 100%;
  height: 39%;
  margin-top: 2%;
}
</style>
