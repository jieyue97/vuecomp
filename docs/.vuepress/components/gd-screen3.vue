<template>
  <div class="content-body">
    <div class="head clearfix">
      <h1 class="pulll_left">某公司大数据展示模版标题</h1>
      <div class="menu menu2 pulll_left">
        <ul>
          <li><a href="javascript:void(0)">导航标题</a></li>
          <li><a href="javascript:void(0)">导航标题样式</a></li>
          <li><a href="javascript:void(0)">导航标题</a></li>
          <li><a href="javascript:void(0)">导航标题</a></li>
          <li><a href="javascript:void(0)">导航标题</a></li>
          <li><a href="javascript:void(0)">导航标题</a></li>
        </ul>
      </div>
      <div class="time" id="showTime">{{ nowTime }}</div>
    </div>
    <div class="mainbox">
      <ul class="clearfix nav1">
        <li style="width: 22%">
          <div class="box">
            <div class="tit">模块标题</div>
            <div class="boxnav">
              <div class="yqlist">
                <ul class="clearfix">
                  <li>
                    <div class="yq" id="yq">2634</div>
                    <span>销售总数(1)</span>
                  </li>
                  <li>
                    <div class="yq">567</div>
                    <span>数据展示(2)</span>
                  </li>
                  <li>
                    <div class="yq">56345</div>
                    <span>数据展示(3)</span>
                  </li>
                  <li>
                    <div class="yq">721</div>
                    <span>数据展示(4)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="tit">模块标题</div>
            <div class="boxnav">
              <div id="echart2" style="height: 300px;">
                <gd-echart :width="'100%'" :height="'100%'" :options="optionFirst"> </gd-echart>
              </div>
            </div>
          </div>
        </li>
        <li style="width: 54%">
          <div class="box">
            <div class="boxnav mapc" style="position: relative">
              <div class="map" id="map"></div>
            </div>
          </div>
          <div class="box">
            <div class="tit">模块标题</div>
            <div class="boxnav" id="echart3"></div>
          </div>
        </li>
        <li style="width: 21%">
          <div class="box">
            <div class="tit">模块标题</div>
            <div class="boxnav" id="echart4"></div>
          </div>
          <div class="box">
            <div class="tit">模块标题</div>
            <div class="boxnav" id="echart5"></div>
          </div>
          <div class="box">
            <div class="tit">模块标题</div>
            <div class="boxnav" id="echart6"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: `BigSrceen3`,
  data() {
    return {
      mapJson: require('../../.vuepress/public/geo/china.json'),
      nowTime: ''
    }
  },
  computed: {
    optionSeven() {
      return {
        color: ['#00f1fc', '#00b7ee', '#5578cf', '#5ebbeb', '#d16ad8', '#f8e19a', '#00b7ee', '#81dabe', '#5fc5ce'],
        backgroundColor: 'rgba(1,202,217,.2)',
        grid: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 20
        },
        legend: {
          top: 10,
          textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
          },
          data: ['境外', '境内']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '55%'],
            data: [
              { value: 335, name: '境外' },
              { value: 310, name: '境内' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    },
    optionSix() {
      return {
        color: ['#7de494', '#7fd7b1', '#5578cf', '#5ebbeb', '#d16ad8', '#f8e19a', '#00b7ee', '#81dabe', '#5fc5ce'],
        backgroundColor: 'rgba(1,202,217,.2)',

        grid: {
          left: 30,
          right: 40,
          top: 30,
          bottom: 20,
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
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255,255,255,.7)'
          },
          data: ['6-08', '6-09', '6-10', '6-11', '6-12', '6-13', '6-14']
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255,255,255,.7)'
          }
        },
        series: [
          {
            name: '2014年',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      }
    },
    optionFive() {
      return {
        color: ['#76c4bf', '#e5ffc7', '#508097', '#4d72d9'],
        backgroundColor: 'rgba(1,202,217,.2)',
        grid: {
          left: 10,
          right: 40,
          top: 0,
          bottom: 0,
          containLabel: true
        },
        calculable: true,
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [10, 70],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
              { value: 10, name: '涉蒙' },
              { value: 5, name: '涉疆' },
              { value: 15, name: '涉军' },
              { value: 25, name: '涉恐' },
              { value: 5, name: '涉藏' },
              { value: 15, name: '涉稳' },
              { value: 15, name: '涉警' }
            ]
          }
        ]
      }
    },
    optionFour() {
      return {
        backgroundColor: 'rgba(1,202,217,.2)',
        grid: {
          left: 60,
          right: 60,
          top: 70,
          bottom: 40
        },
        legend: {
          top: 10,
          textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
          },
          data: ['2017年', '2018年', '同比增速']
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.2)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            },
            axisLabel: {
              color: 'rgba(255,255,255,.7)'
            },

            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            max: 250,
            interval: 50,
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.3)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.01)'
              }
            },

            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: '',
            max: 25,
            interval: 5,
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.3)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            },
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '2017年',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '2018年',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name: '同比增速',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      }
    },

    optionThird() {
      var data = [
        [
          [28604, 77, 17099, 'Australia', 1990],
          [31163, 77.4, 2440, 'Canada', 1990],
          [1516, 68, 1605773, 'China', 1990],
          [13670, 74.7, 10082, 'Cuba', 1990],
          [28599, 75, 49805, 'Finland', 1990],
          [29476, 77.1, 569499, 'France', 1990],
          [31476, 75.4, 789237, 'Germany', 1990],
          [28666, 78.1, 254830, 'Iceland', 1990],
          [1777, 57.7, 870776, 'India', 1990],
          [29550, 79.1, 129285, 'Japan', 1990],
          [2076, 67.9, 201954, 'North Korea', 1990],
          [12087, 72, 42954, 'South Korea', 1990],
          [24021, 75.4, 33934, 'New Zealand', 1990],
          [43296, 76.8, 4240375, 'Norway', 1990],
          [10088, 70.8, 381958, 'Poland', 1990],
          [19349, 69.6, 1475652, 'Russia', 1990],
          [10670, 67.3, 53905, 'Turkey', 1990],
          [26424, 75.7, 57117, 'United Kingdom', 1990],
          [37062, 75.4, 252810, 'United States', 1990]
        ],
        [
          [44056, 81.8, 23973, 'Australia', 2015],
          [43294, 81.7, 35927, 'Canada', 2015],
          [13334, 76.9, 1376043, 'China', 2015],
          [21291, 78.5, 11562, 'Cuba', 2015],
          [38923, 80.8, 55057, 'Finland', 2015],
          [37599, 81.9, 64345, 'France', 2015],
          [44053, 81.1, 80545, 'Germany', 2015],
          [42182, 82.8, 329425, 'Iceland', 2015],
          [5903, 66.8, 1311027, 'India', 2015],
          [36162, 83.5, 126571, 'Japan', 2015],
          [1390, 71.4, 251317, 'North Korea', 2015],
          [34644, 80.7, 503439, 'South Korea', 2015],
          [34186, 80.6, 4528526, 'New Zealand', 2015],
          [64304, 81.6, 5210967, 'Norway', 2015],
          [24787, 77.3, 386194, 'Poland', 2015],
          [23038, 73.13, 143918, 'Russia', 2015],
          [19360, 76.5, 78630, 'Turkey', 2015],
          [38225, 81.4, 64715810, 'United Kingdom', 2015],
          [53354, 79.1, 321771, 'United States', 2015]
        ]
      ]
      return {
        backgroundColor: 'rgba(1,202,217,.2)',
        grid: {
          left: 60,
          right: 40,
          top: 45,
          bottom: 40
        },
        title: {
          top: 5,
          left: 20,
          textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.6)'
          },
          text: '环比类型：日环比'
        },
        legend: {
          right: 10,
          top: 5,
          textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.6)'
          },
          data: ['1990', '2015']
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255,255,255,.7)'
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255,255,255,.7)'
          },

          scale: true
        },
        series: [
          {
            name: '1990',
            data: data[0],
            type: 'scatter',
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2
            },
            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return param.data[3]
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5
              }
            }
          },
          {
            name: '2015',
            data: data[1],
            type: 'scatter',
            symbolSize: function(data) {
              return Math.sqrt(data[2]) / 5e2
            },
            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return param.data[3]
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5
              }
            }
          }
        ]
      }
    },
    optionSecond() {
      var data = [
        [5000, 10000, 6785.71],
        [4000, 10000, 6825],
        [3000, 6500, 4463.33],
        [2500, 5600, 3793.83],
        [2000, 4000, 3060],
        [2000, 4000, 3222.33],
        [2500, 4000, 3133.33],
        [1800, 4000, 3100],
        [1500, 1800, 1650]
      ]
      var cities = ['甘孜县', '泸定县', '炉霍县', '色达县', '白玉县', '得荣县', '雅江县', '九龙县', '康定市']
      var barHeight = 50
      return {
        color: ['#7ecef4'],
        backgroundColor: 'rgba(1,202,217,.2)',
        grid: {
          left: 60,
          right: 60,
          top: 60,
          bottom: 40
        },
        legend: {
          show: true,
          data: ['价格范围', '均值']
        },
        angleAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255,255,255,.7)'
          },
          data: cities
        },
        radiusAxis: {
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255,255,255,.5)'
          }
        },
        polar: {},
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            data: data.map(function(d) {
              return d[0]
            }),
            coordinateSystem: 'polar',
            stack: '最大最小值',
            silent: true
          },
          {
            type: 'bar',
            data: data.map(function(d) {
              return d[1] - d[0]
            }),
            coordinateSystem: 'polar',
            name: '价格范围',
            stack: '最大最小值'
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            data: data.map(function(d) {
              return d[2] - barHeight
            }),
            coordinateSystem: 'polar',
            stack: '均值',
            silent: true,
            z: 10
          },
          {
            type: 'bar',
            data: data.map(function(d) {
              return barHeight * 2
            }),
            coordinateSystem: 'polar',
            name: '均值',
            stack: '均值',
            barGap: '-100%',

            z: 10
          }
        ],
        legend: {
          show: true,
          data: ['A', 'B', 'C']
        }
      }
    },
    optionFirst() {
      var data = [683, 234, 234, 523, 345, 320, 280, 271, 254, 229, 210, 190, 182]
      var titlename = ['北京', '上海', '广州', '郑州', '武汉', '南京', '杭州', '东莞', '深圳', '虎门', '青岛', '石家庄', '安阳']
      return {
        grid: {
          left: '0',
          top: '0',
          right: '0',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: [
          {
            show: true,
            data: titlename,
            inverse: true,
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          {
            show: false,
            inverse: true,
            data: data,
            axisLabel: { textStyle: { color: '#fff' } },
            axisLine: { show: false },
            splitLine: { show: false },
            axisTick: { show: false }
          }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 15,
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: '#1089E7'
              }
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
                textStyle: { color: 'rgba(255,255,255,.5)' }
              }
            }
          }
        ]
      }
    }
  },
  mounted() {
    setInterval(this.getTime, 1000) //大屏
  },
  methods: {
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
.content-body {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  color: white;
  // background-color: #06164a;
  background: url(./img/bg.png) 0px 0px / 100% 100% no-repeat rgb(0, 6, 91);
}

li {
  list-style-type: none;
}
table {
}
i {
  margin: 0px;
  padding: 0px;
  text-indent: 0px;
}
img {
  border: none;
  max-width: 100%;
}
a {
  text-decoration: none;
  color: #fff;
}
a.active,
a:focus {
  outline: none !important;
  text-decoration: none;
}
ol,
ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}
a:hover {
  color: #06c;
  text-decoration: none !important;
}
.clearfix:after,
.clearfix:before {
  display: table;
  content: ' ';
}
.clearfix:after {
  clear: both;
}
.pulll_left {
  float: left;
}
.pulll_right {
  float: right;
}
i {
  font-style: normal;
}
.text-w {
  color: #ffe400;
}
.text-d {
  color: #ff6316;
}
.text-s {
  color: #14e144;
}
.text-b {
  color: #07e5ff;
}

.head {
  position: relative;
  height: 90px;
  margin: 0 15px;
  padding-right: 60px;
}
.head h1 {
  font-size: 30px;
  letter-spacing: -2px;
  text-align: center;
  line-height: 90px;
  padding-right: 55px;
  color: #daf9ff;
}
.head .menu {
}
.head .menu ul {
  font-size: 0;
}

.head .menu li {
  display: inline-block;
  position: relative;
  margin: 30px 15px;
}
.head .menu li a {
  display: block;
  font-size: 18px;
  color: #fff;
  line-height: 30px;
  padding: 0 10px;
}
.head .time {
  position: absolute;
  right: 0;
  line-height: 90px;
  top: 0;
}

.menu li:before,
.menu li:after {
  position: absolute;
  width: 10px;
  height: 5px;
  opacity: 0.4;
  content: '';
  border-top: 2px solid #02a6b5;
  top: -1px;
  border-radius: 2px;
}
.menu li:before,
.menu li a:before {
  border-left: 2px solid #02a6b5;
  left: -1px;
}
.menu li:after,
.menu li a:after {
  border-right: 2px solid #02a6b5;
  right: -1px;
}
.menu li a {
  position: relative;
}
.menu li a:before,
.menu li a:after {
  position: absolute;
  width: 10px;
  height: 5px;
  opacity: 0.4;
  content: '';
  border-bottom: 2px solid #02a6b5;
  bottom: -1px;
  border-radius: 2px;
}

.head .menu li a:hover {
  color: #f4e925;
}
.menu li a:hover:before,
.menu li a:hover:after,
.menu li:hover:before,
.menu li:hover:after {
  border-color: #f4e925;
  opacity: 1;
}

.mainbox {
  padding: 0px 10px;
  height: calc(100% - 200px);
}
.nav1 {
  margin-left: -6px;
  margin-right: -6px;
}
.nav1 > li {
  padding: 0 6px;
  float: left;
}

.box {
  border: 1px solid rgba(7, 118, 181, 0.5);
  box-shadow: inset 0 0 10px rgba(7, 118, 181, 0.4);
  margin-bottom: 12px;
  position: relative;
}
.tit {
  padding: 10px 10px 10px 25px;
  border-bottom: 1px solid rgba(7, 118, 181, 0.7);
  font-size: 16px;
  font-weight: 500;
  position: relative;
}
.tit:before,
.tit01:before {
  position: absolute;
  content: '';
  width: 6px;
  height: 6px;
  background: rgba(22, 214, 255, 0.9);
  box-shadow: 0 0 5px rgba(22, 214, 255, 0.9);
  border-radius: 10px;
  left: 10px;
  top: 18px;
}

.tit:after,
.box:before {
  width: 100%;
  height: 1px;
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  background: linear-gradient(to right, #076ead, #4ba6e0, #076ead);
  box-shadow: 0 0 5px rgba(131, 189, 227, 1);
  opacity: 0.6;
}
.box:before {
  top: -1px;
}

.boxnav {
  padding: 10px;
}
.tit01 {
  font-size: 16px;
  font-weight: 500;
  position: relative;
  padding-left: 15px;
}
.tit01:before {
  left: 3px;
  top: 8px;
}

.mapc {
  background: url(./img/bg3.png) no-repeat center center;
  background-size: 100% 100%;
}
.map {
  position: relative;
  height: 100%;
}
.map img {
}
.mapnav {
  position: absolute;
  z-index: 10;
}

.yqlist li {
  float: left;
  width: 50%;
  padding: 10px 0;
  text-align: center;
}
.yq {
  width: 100px;
  height: 100px;
  margin: 0 auto 5px auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-family: electronicFont;
  color: #fff32b;
}
.yqlist li span {
  opacity: 0.6;
  font-size: 14px;
}

.yq:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background: url(./img/img1.png) center center;
  border-radius: 100px;
  background-size: 100% 100%;
  opacity: 0.3;
  left: 0;
  top: 0;
  animation: myfirst2 15s infinite linear;
}

.yq:after {
  position: absolute;
  width: 86%;
  background: url(./img/img2.png) center center;
  border-radius: 100px;
  background-size: 100% 100%;
  opacity: 0.3;
  height: 86%;
  content: '';
  left: 7%;
  top: 7%;
  animation: myfirst 15s infinite linear;
}

@keyframes myfirst {
  to {
    transform: rotate(-360deg);
  }
}
@keyframes myfirst2 {
  to {
    transform: rotate(360deg);
  }
}
</style>
