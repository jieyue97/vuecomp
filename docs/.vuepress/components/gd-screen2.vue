<template>
  <div class="content-body">
    <div class="bnt">
      <div class="topbnt_left fl">
        <ul>
          <li><a href="javascript:void(0)">警情警力</a></li>
          <li><a href="javascript:void(0)">实有人口</a></li>
          <li><a href="javascript:void(0)">流动人口</a></li>
          <li><a href="javascript:void(0)">实名制</a></li>
        </ul>
      </div>
      <h1 class="tith1 fl">舆情分析</h1>
      <div class=" fr topbnt_right">
        <ul>
          <li><a href="javascript:void(0)">返回</a></li>
          <li><a href="javascript:void(0)">分析报告</a></li>
          <li><a href="javascript:void(0)">交通</a></li>
          <li><a href="javascript:void(0)">舆情</a></li>
        </ul>
      </div>
    </div>
    <!-- bnt end -->
    <div class="puleft fl">
      <div class="pulefttop">
        <h2 class="tith2"><span>舆情来源分析</span></h2>
        <div class="lefttoday_tit">
          <p class="fl">地区：甘孜</p>
          <p class="fr">2018-06-14</p>
        </div>
        <div class="box pbox">
          <div class="lefttoday_bar pulefttoday_bar fl">
            <ul>
              <li class="c1 big1" style="top: 25%;left: 16%;"><span>交通警情6</span></li>
              <li class="c2 big2" style="top: 35%;left: 65%;"><span>求助1</span></li>
              <li class="c3 big4" style="top: 25%;left: 35%;"><span>无效报警2</span></li>
              <li class="c4 big5" style="top: 65%;left: 65%;"><span>投诉2</span></li>
              <li class="c5 big6" style="top: 65%;left: 25%;"><span>灾害事故1</span></li>
              <li class="c6 big1" style="top: 45%;left: 15%;"><span>刑事案件1</span></li>
              <li class="c1 big0" style="top: 35%;left: 75%;"></li>
              <li class="c2 big0" style="top: 85%;left: 55%;"></li>
              <li class="c3 big0" style="top: 85%;left: 15%;"></li>
            </ul>
          </div>
          <div class="pvr fr pulefttoday_bar2">
            <ul>
              <li class="hot1">1</li>
              <li class="hot2">2</li>
              <li class="hot3">3</li>
              <li class="hot4">4</li>
              <li class="hot5">5</li>
            </ul>
            <div id="puleftbox2bott_cont" class="puleftbox2bott_cont">
              <gd-echart :width="'100%'" :height="'100%'" :options="optionFirst"> </gd-echart>
            </div>
          </div>
        </div>
        <!-- lefttoday_number end -->
      </div>
      <div class="puleftboxtmidd">
        <h2 class="tith2">舆情区域分析</h2>
        <div class="lefttoday_tit">
          <p class="fl">状态：已调节</p>
          <p class="fr">时间段：2018-06-10 至 2018-06-14</p>
        </div>
        <div class="box pbox">
          <div id="puleftboxtmidd1" class="fl puleftboxtmidd1">
            <gd-echart :width="'100%'" :height="'100%'" :options="optionSecond"> </gd-echart>
          </div>
          <div class="pvr fr pulefttoday_bar2">
            <ul>
              <li class="hot1">1</li>
              <li class="hot2">2</li>
              <li class="hot3">3</li>
              <li class="hot4">4</li>
              <li class="hot5">5</li>
            </ul>
            <div id="puleftboxtmidd2" class="puleftbox2bott_cont">
              <gd-echart :width="'100%'" :height="'100%'" :options="optionFirst"> </gd-echart>
            </div>
          </div>
        </div>
      </div>
      <div class="puleftboxtbott">
        <h2 class="tith2 pt1">舆情环比分析</h2>
        <div class="lefttoday_tit">
          <p class="fl">状态：已调节</p>
          <p class="fr">时间段：2018-06-10 至 2018-06-14</p>
        </div>
        <div class="box pbox">
          <div id="puleftboxtbott1" class="fl puleftboxtbott1">
            <gd-echart :width="'100%'" :height="'100%'" :options="optionThird"> </gd-echart>
          </div>
          <div class="puleftboxtbott2 fr">
            <div class="widget-inline-box text-center ">
              <p>今日舆情总数</p>
              <h3 class=" ceeb1fd">54</h3>
              <h4 class="text-muted ">环比<img src="./img/iconup.png" height="16" />2%</h4>
            </div>
            <div class="widget-inline-box text-center ">
              <p>本周舆情总数</p>
              <h3 class=" c24c9ff">54</h3>
              <h4 class="text-muted ">环比<img src="./img/icondown.png" height="16" />3%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  left1 end -->
    <div class="fl pt6 puleft2">
      <div class="pmidd_bott">
        <div class="pumiddboxttop1 fl">
          <h2 class="tith2 pt3">今日舆情</h2>
          <div class="lefttoday_tit">
            <p class="fl">状态：已调节</p>
            <p class="fr">时间段：2018-06-10</p>
          </div>
          <div class="puleft2height">
            <div class="widget-inline-box text-center ">
              <p>今日舆情总数</p>
              <h3 class=" ceeb1fd f30">54</h3>
              <h4 class="text-muted ">环比<img src="./img/iconup.png" height="16" />2%</h4>
            </div>
            <div class="widget-inline-box text-center ">
              <p>本周舆情总数</p>
              <h3 class=" c24c9ff f30">54</h3>
              <h4 class="text-muted ">环比<img src="./img/icondown.png" height="16" />3%</h4>
            </div>
            <div class="widget-inline-box text-center ">
              <p>本月舆情总数</p>
              <h3 class=" cffff00 f30">4</h3>
              <h4 class="text-muted ">环比<img src="./img/icondown.png" height="16" />3%</h4>
            </div>
            <div class="widget-inline-box text-center ">
              <p>今日舆情总数</p>
              <h3 class=" ceeb1fd f30">54</h3>
              <h4 class="text-muted ">环比<img src="./img/iconup.png" height="16" />2%</h4>
            </div>
          </div>
        </div>
        <div class="pumiddboxttop2 fl">
          <h2 class="tith2 pt3">热门信息</h2>
          <div class="lefttoday_tit ">
            <p class="fl">状态：已调节</p>
            <p class="fr">时间段：2018-06-10</p>
          </div>
          <div class="left2_table pumiddboxttop2_cont">
            <ul>
              <li>
                <p class="text_l">村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。</p>
                <p class="text_r">新浪微博 转发：86 2018-06-14 11:08:56</p>
              </li>
              <li class="bg">
                <p class="text_l">村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。</p>
                <p class="text_r">新浪微博 转发：86 2018-06-14 11:08:56</p>
              </li>
              <li>
                <p class="text_l">村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。</p>
                <p class="text_r">新浪微博 转发：86 2018-06-14 11:08:56</p>
              </li>
              <li class="bg">
                <p class="text_l">村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。</p>
                <p class="text_r">新浪微博 转发：86 2018-06-14 11:08:56</p>
              </li>
              <li>
                <p class="text_l">村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。</p>
                <p class="text_r">新浪微博 转发：86 2018-06-14 11:08:56</p>
              </li>
              <li class="bg">
                <p class="text_l">村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。</p>
                <p class="text_r">新浪微博 转发：86 2018-06-14 11:08:56</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--  amidd_bott end-->
      <div class="pmiddboxtbott">
        <h2 class="tith2 pt1">舆情同比分析</h2>
        <div class="lefttoday_tit">
          <p class="fl">状态：已调节</p>
          <p class="fr">时间段：2018-06-10 至 2018-06-14</p>
        </div>
        <div class="box pbox">
          <div id="pumiddboxtbott1" class="fl pumiddboxtbott1cont">
            <gd-echart :width="'100%'" :height="'100%'" :options="optionFour"> </gd-echart>
          </div>
          <div class="pumiddboxtbott2 fr">
            <div class="widget-inline-box text-center ">
              <p>今年舆情总数</p>
              <h3 class=" ceeb1fd f30">54</h3>
              <h4 class="text-muted ">环比<img src="./img/iconup.png" height="16" />2%</h4>
            </div>
          </div>
        </div>
      </div>
      <!-- amidd_bott end -->
    </div>
    <!-- mrbox_top end -->
    <div class="mr_right fl">
      <div class="purightboxtop">
        <h2 class="tith2 pt12">舆情类别分析</h2>
        <div class="lefttoday_tit">
          <p class="fl">状态：已调节</p>
          <p class="fr">时间段：2018-06-10</p>
        </div>
        <div id="purightboxtop" class="purightboxtopcont">
          <gd-echart :width="'100%'" :height="'100%'" :options="optionFive"> </gd-echart>
        </div>
      </div>
      <div class="purightboxmidd">
        <h2 class="tith2 pt12">七日舆情走势分析</h2>
        <div class="lefttoday_tit">
          <p class="fl">状态：已调节</p>
          <p class="fr">时间段：2018-06-10</p>
        </div>
        <div id="purightboxmidd" class="purightboxmiddcont">
          <gd-echart :width="'100%'" :height="'100%'" :options="optionSix"> </gd-echart>
        </div>
      </div>
      <div class="purightboxbott">
        <h2 class="tith2 pt12">矛盾纠纷七日数据分析</h2>
        <div class="lefttoday_tit">
          <p class="fl">状态：已调节</p>
          <p class="fr">时间段：2018-06-10 至 2018-06-14</p>
        </div>
        <div id="purightboxbott" class="purightboxbottcont">
          <gd-echart :width="'100%'" :height="'100%'" :options="optionSeven"> </gd-echart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `BigSrceen2`,
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
      return {
        color: ['#7ecef4'],
        backgroundColor: 'rgba(1,202,217,.2)',
        grid: {
          left: 40,
          right: 20,
          top: 30,
          bottom: 0,
          containLabel: true
        },

        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0)'
            }
          },
          axisLabel: {
            color: 'rgba(255,255,255,0)'
          },
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.5)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.1)'
            }
          },
          axisLabel: {
            color: 'rgba(255,255,255,.5)'
          },
          data: ['微博', '网站', '新闻', '贴吧', '论坛']
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              normal: {
                // color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                //   { offset: 0, color: 'rgba(230,253,139,.7)' },
                //   { offset: 1, color: 'rgba(41,220,205,.7)' }
                // ])
              }
            },
            data: [18203, 23489, 29034, 104970, 131744]
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
  background: url(./img/bg.jpg) 0px 0px / 100% 100% no-repeat rgb(0, 6, 91);
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
pre,
table,
blockquote,
input,
button,
select,
em,
textarea {
  margin: 0;
  font-weight: normal;
  margin: 0;
  padding: 0;
  list-style: none;
  font-style: normal;
  color: white;
}

.wpbox {
  width: 100%;
  height: calc(100% - 10px);
}
.bnt {
  height: 9%;
  width: 100%;
  display: inline-block;
}
.left1 {
  width: 18%;
  height: calc(100% - 10%);
  float: left;
  padding-left: 2.2%;
  text-align: center;
}
.pleft1 {
  width: 18.6%;
  float: left;
  padding-left: 2.2%;
  text-align: center;
}
.puleft {
  padding-left: 2.2%;
  width: 35.2%;
  text-align: center;
  height: 100%;
}
.puleft2 {
  width: 35%;
  height: 100%;
  padding-left: 0.4%;
}
.mr_right {
  width: 25%;
  height: 100%;
}
.left2 {
  width: 18%;
  float: left;
  height: 100%;
}
.mrbox {
  float: left;
  width: 79%;
  height: 100%;
}
.mrbox.prbox {
  float: left;
  width: 60%;
  height: 100%;
}
.mrbox_bottom {
  float: left;
  width: 100%;
  height: 28%;
}
.mrbox_top_midd {
  width: 68%;
  float: left;
  height: 100%;
}
.mrbox_topmidd {
  float: left;
  width: 76%;
  padding-left: 0.2%;
  height: 100%;
}
.amidd_bott,
.box {
  overflow: hidden;
}
.pmidd_bott {
  width: 100%;
  height: 57.4%;
}

.mrbox_top_right {
  float: right;
  width: 29.4%;
  padding-right: 1.4%;
  height: 100%;
}
.mrbox_top {
  width: 100%;
  height: 62.4%;
}
.hdmrbox_top {
  width: 100%;
  height: 100%;
}

.lefttime {
  background: url(./img/time.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 84%;
  height: 9.3%;
  margin-left: 6%;
}
.lefttime_text {
  padding: 2% 5% 0 5%;
}
.lefttime_text li {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  width: 20%;
  float: left;
  height: 22px;
  line-height: 22px;
  text-align: center;
  border-radius: 4px;
}
.lefttime_text li.bg {
  background: rgba(0, 183, 238, 0.1);
}
.lefttime_text li.active {
  background: rgba(0, 183, 238, 0.6);
  color: #fff;
}
.lefttoday {
  background: url(./img/left1box.png);
  background-repeat: no-repeat;
  background-position: -3px 2px;
  width: 350px;
  height: 584px;
  margin: 0 auto;
}

.lefttoday_tit {
  overflow: hidden;
  padding: 1.9% 5% 0.2%;
  height: 6%;
  position: relative;
}
.lefttoday_tit.height {
  height: 12%;
}
.lefttoday_number {
  overflow: hidden;
  height: 74%;
  width: 91%;
  margin: 1% 4%;
  background: rgba(1, 202, 217, 0.2);
}
.lefttoday_tit p.fl {
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  left: 5%;
  top: 22%;
}
.lefttoday_tit p.fr {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  position: absolute;
  right: 5%;
  top: 25%;
}
.lefttoday_tit p.fm {
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  left: 40%;
  top: 25%;
}

.lefttoday_tit.height.ht {
  height: 16%;
}
.lefttoday_tit.height p.fl {
  position: absolute;
  left: 5%;
  top: 15%;
}
.lefttoday_tit.height p.fr {
  position: absolute;
  left: 5%;
  top: 65%;
  right: auto;
}

.lefttoday_bar ul {
  position: relative;
  width: 100%;
  height: 100%;
}
.lefttoday_bar li {
  color: #333;
  position: absolute;
  border-radius: 50%;
  font-size: 12px;
  overflow: hidden;
  font-weight: normal;
  text-align: center;
  line-height: 140%;
}
.lefttoday_bar li span {
  padding-top: 30%;
  display: inline-block;
}
.c1 {
  background: #ac3ff2;
}
.c2 {
  background: #ffff00;
}
.c3 {
  background: #0078ff;
}
.c4 {
  background: #9cff00;
}
.c5 {
  background: #ff6c00;
}
.c6 {
  background: #77b5fb;
}
.big0 {
  width: 10px;
  height: 10px;
}
.big1 {
  width: 20px;
  height: 20px;
}
.big2 {
  width: 30px;
  height: 30px;
}
.big3 {
  width: 40px;
  height: 40px;
}
.big4 {
  width: 50px;
  height: 50px;
}
.big5 {
  width: 60px;
  height: 60px;
}
.big6 {
  width: 70px;
  height: 70px;
}

.leftclass {
  background: url(./img/leftb1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 350px;
  height: 291px;
}
.leftbox2_table {
  background: url(./img/leftbox2.png);
  background-repeat: no-repeat;
  background-position: -2px -2px;
  width: 354px;
  height: 680px;
}
.left2_table {
  width: 91%;
  margin-left: 5%;
  font-size: 12px;
  height: 83.6%;
  overflow: hidden;
}
.hdleft2_table {
  width: 91%;
  margin-left: 5%;
  font-size: 12px;
  height: 91.6%;
  overflow: hidden;
}
.left2_table li {
  background: rgba(1, 202, 217, 0.2) url(./img/icosjx.png) no-repeat top left;
  position: relative;
  overflow: hidden;
  padding: 2% 6%;
  color: rgba(255, 255, 255, 0.7);
  line-height: 150%;
}
.left2_table li b {
  color: rgba(255, 255, 255, 1);
  font-weight: normal;
}
.left2_table li p.fl {
  width: 80%;
  overflow: hidden;
}
.left2_table li p.fr {
  position: absolute;
  right: 5%;
  top: -20%;
}
.yellow {
  color: #fff45c;
}
.green {
  color: #00c2fd;
}
.left2_table li.bg {
  background: rgba(0, 255, 255, 0.4) url(./img/icosjx.png) no-repeat top left;
}
.mrbox_tr_box {
  background: url(./img/rbox1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 354px;
  height: 291px;
}

.mrboxtm-mbox {
  background: url(./img/midtop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 63.6%;
}
.mrboxtm-b1 {
  background: url(./img/mbox1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 460px;
  height: 233px;
  float: left;
}
.mrboxtm-b2 {
  background: url(./img/mbox2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 330px;
  height: 233px;
  float: right;
}
/* .mrbox_tr_box{background:url(./img/rbox1.png);background-size: 100% 100%; background-repeat: no-repeat;background-position: top center; width:350px; height:680px;} */

.hdmrboxtm-mbox {
  background: url(./img/hdbj.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 61.6%;
}

.rbottom_box1 {
  background: url(./img/b-rbox2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 33.5%;
  height: 89.4%;
  float: left;
}
.rbottom_box2 {
  background: url(./img/bbox2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 33.5%;
  height: 89.4%;
  float: left;
  margin-left: 0.8%;
}
.rbottom_box3 {
  background: url(./img/b-rbox2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 30%;
  height: 89.4%;
  float: left;
  margin-left: 1%;
}
.prbottom_box1cont {
  margin-left: 5.2%;
  width: 90.6%;
  height: 82%;
  margin-top: 1.8%;
}
.prbottom_box2cont {
  margin-left: 5.2%;
  width: 90.6%;
  height: 82%;
  margin-top: 1.8%;
}
.prbottom_box3cont {
  margin-left: 5.2%;
  width: 90.6%;
  height: 82%;
  margin-top: 1.8%;
}

.tith2 {
  text-align: center;
  width: 100%;
  font-size: 12px;
  padding-top: 1.9%;
  font-weight: normal;
  letter-spacing: 2px;
  font-weight: normal;
  overflow: hidden;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.topbnt_left {
  width: 33%;
}
.topbnt_left ul {
  padding-top: 38px;
  padding-left: 10%;
  width: 100%;
}
.topbnt_left li {
  background: url(./img/bnt.png) center;
  font-size: 14px;
  line-height: 33px;
  background-repeat: no-repeat;
  width: 18%;
  height: 35px;
  float: left;
  text-align: center;
  margin-left: 1%;
}
.topbnt_left li.active,
.topbnt_right li.active {
  background: url(./img/bntactive.png) no-repeat center;
}
.topbnt_left li a {
  text-decoration: none;
  color: #fff;
}
.tith1 {
  width: 33%;
  text-align: center;
  padding-top: 16px;
  font-weight: bold;
  letter-spacing: 8px;
  font-size: 36px;
}
.topbnt_right {
  padding-top: 2%;
  padding-right: 2.5%;
  width: 27%;
}
.topbnt_right li {
  background: url(./img/bnt.png) center;
  font-size: 14px;
  line-height: 33px;
  background-repeat: no-repeat;
  width: 22%;
  height: 35px;
  float: right;
  text-align: center;
  margin-right: 1%;
}
.topbnt_right li a {
  text-decoration: none;
  color: #fff;
}
.pt1 {
  padding-top: 1.3%;
}
.pt2 {
  padding-top: 2.2%;
}
.pt3 {
  padding-top: 3.3%;
}
.pt6 {
  padding-top: 6px;
}
.pt17 {
  padding-top: 17px;
}
.pt14 {
  padding-top: 14px;
}
.pt12 {
  padding-top: 12px;
}
.pt20 {
  padding-top: 22px;
}
/* .box_pad{ margin: 3px 20px; } */

.mrboxtm-map {
  background: url(./img/mapbg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 90%;
  margin-left: 4%;
  margin-top: 1%;
  height: 90%;
  position: relative;
}
.hdmrboxtm-map {
  background: url(./img/hdmap.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 90%;
  margin-left: 4%;
  margin-top: 1%;
  height: 66%;
  position: relative;
}
.mrboxtm-map li {
  width: 23px;
  height: 22px;
  line-height: 22px;
  color: #fff;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 12px;
  position: absolute;
}
.mrboxtm-map li.bluer {
  background-image: url(./img/blue_rico.png);
}
.mrboxtm-map li.redr {
  background-image: url(./img/red_rico.png);
}
.ricontop {
  width: 29px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  bbackground-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  font-size: 12px;
  margin-right: 5px;
  font-style: normal;
  display: inline-block;
}
i.bluer {
  background-image: url(./img/ricon2.png);
}
i.redr {
  background-image: url(./img/ricon1.png);
}
.font14 p.fl,
.font14 p.fr {
  color: #fff;
  font-size: 14px;
}
.mrtop1 {
  background: rgba(1, 202, 217, 0.2);
  overflow: hidden;
  margin: 4px 15px;
}
.widget-inline-box {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  width: 50%;
  padding: 10% 0;
  text-align: center;
  font-size: 12px;
  float: left;
  overflow: hidden;
}
.widget-inline-box h3 {
  font-size: 22px;
  font-weight: 100;
  font-weight: normal;
}
.ceeb1fd {
  color: #eeb1fd;
}
.c24c9ff {
  color: #24c9ff;
}
.cffff00 {
  color: #ffff00;
}
.c11e2dd {
  color: #11e2dd;
}
.text-muted {
  font-size: 12px;
  color: #789ce0;
}
.text-muted img {
  vertical-align: middle;
  margin: 0 3px;
}
.mrtop2 {
  margin: 4px 15px;
  padding: 20px 0;
  background: rgba(1, 202, 217, 0.2);
  width: 305px;
}
.tith4 {
  font-size: 12px;
  text-align: center;
}
.mrtop3 {
  margin: 4px 15px;
  padding: 20px 0;
  background: rgba(1, 202, 217, 0.2);
  width: 305px;
}

.mrboxtm-b1wp {
  margin: 4px 25px;
  padding: 20px 0;
  background: rgba(1, 202, 217, 0.2);
  width: 415px;
  overflow: hidden;
}
.mrboxtm_text {
  overflow: hidden;
  padding-left: 12px;
  padding-bottom: 10px;
}
.mrbtext_info {
  background: rgba(1, 202, 217, 0.2);
  font-weight: normal;
  padding: 10px 0;
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  float: left;
  margin: 2px 0 10px 8px;
  width: 140px;
}
.mrbtext_info b {
  font-weight: normal;
  font-size: 18px;
}
.lefttoday_number .widget-inline-box {
  width: 25%;
}

/*  警情警力分析 完*/
.aleftboxttop {
  background: url(./img/leftb1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 99%;
  height: 27.5%;
  margin-bottom: 1%;
}
.aleftboxttop .lefttoday_number {
  background: none;
}
.aleftboxttop .widget-inline-box {
  width: 24.2%;
  margin: 0 0.4%;
  background: rgba(1, 202, 217, 0.2);
  padding: 16% 0;
  height: 100%;
  font-size: 10px;
}

.aleftboxtmidd {
  background: url(./img/aleftboxtmidd.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 98.5%;
  height: 29.4%;
  margin-bottom: 1%;
}
.aleftboxtmiddcont {
  width: 91%;
  height: 66%;
  margin-left: 4.4%;
  margin-top: 1%;
}
.aleftboxtbott {
  background: url(./img/aleftboxtbott.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 40%;
}
.aleftboxtbott_cont {
  width: 91%;
  height: 72.6%;
  margin-top: 1.8%;
  margin-left: 4.4%;
}
.aleftboxtbott_cont2 {
  width: 89.9%;
  height: 86.6%;
  margin-top: 2.8%;
  margin-left: 5%;
}
.aleftboxtbott_contr {
  width: 89.9%;
  height: 90.6%;
  margin-top: 1.8%;
  margin-left: 5%;
}
.amiddboxttop {
  overflow: hidden;
  background: url(./img/amiddboxttop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 99%;
  height: 52.1%;
}
.amiddboxttop_map {
  background: url(./img/img.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
  width: 90%;
  height: 86%;
  margin: 1.4% 5% 0;
}
.hot_map {
  width: 90%;
  height: 86%;
  margin: 1.4% 5% 0;
}

.amidd_bott {
  width: 100%;
  height: 38%;
  padding-top: 0.8%;
}
.amiddboxttop_map span {
  background: url(./img/camera.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  width: 24px;
  height: 19px;
  display: inline-block;
  position: absolute;
}
.amiddboxttop_map span.camera_l {
  background: url(./img/camera_l.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  width: 24px;
  height: 19px;
  display: inline-block;
  position: absolute;
}

.amiddboxtbott1 {
  background: url(./img/amiddboxtbott1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 48%;
  height: 91.6%;
  margin-left: 0.5%;
  margin-right: 1%;
}
.amiddboxtbott1content {
  width: 91%;
  height: 86.5%;
  margin-left: 4.8%;
  margin-top: 1.6%;
}
.amiddboxtbott1content2 {
  width: 91%;
  height: 80%;
  margin-left: 4.8%;
  margin-top: 0.6%;
}
.amiddboxtbott2 {
  background: url(./img/amiddboxtbott2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  float: right;
  width: 49%;
  height: 91.8%;
  margin-right: 0.9%;
}
.amiddboxtbott2content {
  width: 91.8%;
  height: 86%;
  margin-left: 4.4%;
  margin-top: 1.6%;
}
.arightboxtop {
  background: url(./img/arightboxtop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 51.9%;
}
.arightboxbott {
  background: url(./img/arightboxbott.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 35%;
  margin-top: 3%;
}
.arightboxbottcont {
  width: 91%;
  margin-top: 1%;
  margin-left: 5%;
  height: 79%;
}
.arightboxbottcont2 {
  width: 90%;
  margin-top: 1.6%;
  margin-left: 5.3%;
  height: 85.5%;
}
.plefttoday {
  background: url(./img/pleft1middt.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 96%;
  height: 30%;
  margin-top: 0.4%;
}
.plefttoday .widget-inline-box {
  width: 48%;
  padding: 4% 0;
}
.lpeftmidbot {
  background: url(./img/pleft1middb.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 95.8%;
  height: 27.6%;
  margin-top: 3.4%;
}
.lpeftmidbotcont {
  width: 90.1%;
  margin-top: 2%;
  margin-left: 5.2%;
  height: 82%;
}
.lpeftbot {
  background: url(./img/pleft1middb.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 95.8%;
  height: 27.6%;
  margin-top: 3.4%;
}
.lpeftbotcont {
  width: 90.1%;
  margin-top: 2%;
  margin-left: 5.2%;
  height: 82%;
}
.pleftbox2top {
  background: url(./img/pleftbox2top.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 96.8%;
  height: 35.2%;
  margin-top: 1%;
}
.pleftbox2topcont {
  width: 90.1%;
  margin-top: 2%;
  margin-left: 5%;
  height: 88%;
}
.pleftbox2midd {
  background: url(./img/pleftbox2mid.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 96.8%;
  height: 24.6%;
  margin-top: 3.8%;
}
.pleftbox2middcont {
  width: 90.1%;
  margin-top: 2%;
  margin-left: 5.2%;
  height: 82%;
  overflow: hidden;
}
.lpeft2bot {
  background: url(./img/pleft1middb.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 97.8%;
  height: 24.6%;
  margin-top: 4.2%;
}
.lpeftb2otcont1 {
  width: 100%;
  height: 100%;
}
.hdrightboxtop {
  background: url(./img/hdbjr.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 87%;
}

.lpeftb2otcont {
  width: 90.1%;
  margin-top: 2%;
  margin-left: 5.2%;
  height: 82%;
}
.pmrboxbottom {
  background: url(./img/pmiddboxmidd.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
  width: 100%;
  height: 32.9%;
  margin-top: 1.8%;
}
.pmrboxbottomcont {
  width: 94.1%;
  margin-top: 1.1%;
  margin-left: 3.1%;
  height: 76%;
}
.mrbox_bottom_bott {
  width: 100%;
  height: 27%;
  margin-top: 1.8%;
}
.pmrtop {
  background: url(./img/prighttop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 56.6%;
}
.pmrtop_contheight {
  height: 30%;
  width: 100%;
  overflow: hidden;
}

.pmrtop1 {
  background: url(./img/prighttop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 40.4%;
}
.pmrtop_cont1 {
  height: 87%;
  width: 100%;
  overflow: hidden;
}

.pmrmiddcont {
  width: 98.1%;
  margin-top: 1.1%;
  margin-left: 3.1%;
  height: 64%;
}
.pmrtop_contheight .widget-inline-box {
  padding: 5% 0;
}
.lefttoday_bar {
  height: 56%;
  width: 100%;
}
.pmrtop_cont {
  background: rgba(1, 202, 217, 0.2);
  width: 90.6%;
  height: 86%;
  margin: 2.2% 0 0 5.1%;
}
.pmrtop_wid .widget-inline-box {
  width: 33%;
}

.pulefttop {
  background: url(./img/pulefttop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 29%;
}
.puleftboxtmidd {
  background: url(./img/puleftmidd.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 28.6%;
  margin-top: 1%;
}
.puleftboxtbott {
  background: url(./img/puleftbott.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 28%;
  margin-top: 1%;
}

.pumiddboxttop1 {
  background: url(./img/pumiddtop1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 47.7%;
  height: 100%;
  padding-left: 1.4%;
}
.pumiddboxttop2 {
  background: url(./img/pumiddtop2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 47.7%;
  height: 100%;
  margin-left: 1.4%;
}
.pmiddboxtbott {
  background: url(./img/pumiddbott.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 98.4%;
  height: 27.8%;
  margin-top: 2%;
}
.purightboxtop {
  background: url(./img/purighttop.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 29%;
}
.purightboxmidd {
  background: url(./img/purightmidd.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 28%;
  margin-top: 1.8%;
}
.purightboxbott {
  background: url(./img/purightbott.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 28%;
  margin-top: 2.2%;
}
.purightboxtopcont {
  width: 90.2%;
  height: 77%;
  margin-left: 5%;
}
.purightboxmiddcont {
  width: 90.2%;
  height: 77%;
  margin-left: 5%;
}
.purightboxbottcont {
  width: 90.2%;
  height: 77%;
  margin-left: 5%;
}
.pumiddboxtbott1cont {
  width: 62%;
  height: 100%;
  margin-left: 3%;
}

.tith2 span {
  display: inline-block;
  float: left;
  width: 40%;
}
.pbox {
  width: 100%;
  height: 76%;
}
.pulefttoday_bar {
  width: 46.7%;
  height: 100%;
  margin-left: 2.5%;
}
.pulefttoday_bar2 {
  width: 46.7%;
  height: 100%;
  margin-right: 2.5%;
}
.puleftboxtmidd1 {
  width: 46.7%;
  height: 100%;
  margin-left: 2.5%;
}
.puleftboxtbott1 {
  width: 62.7%;
  height: 100%;
  margin-left: 2.5%;
}
.puleftboxtbott2 {
  width: 30.7%;
  height: 100%;
  margin-right: 2.5%;
}
.puleft2height {
  width: 96%;
  height: 88%;
  margin-left: 3%;
}
.puleftbox2bott_cont {
  width: 100%;
  height: 100%;
}
.pulefttoday_bar,
.puleftboxtbott2,
.pumiddboxtbott2 {
  background: rgba(1, 202, 217, 0.2);
}
.puleftboxtbott2 .widget-inline-box {
  width: 100%;
  margin: 0;
  padding: 2% 0;
}

.pumiddboxttop1 .widget-inline-box {
  width: 45%;
  background: rgba(1, 202, 217, 0.2);
  margin-left: 2%;
  margin-bottom: 1.5%;
  height: 38%;
}
.pumiddboxttop1 .widget-inline-box p {
  padding-top: 30%;
}
.f30 {
  font-size: 40px !important;
  margin: 10% 0;
}
.pumiddboxtbott2 {
  width: 30.9%;
  height: 100%;
  margin-right: 2.5%;
}
.pumiddboxtbott2 .widget-inline-box {
  width: 100%;
  margin: 0;
  text-align: center;
}
.pumiddboxtbott2 .widget-inline-box p {
  padding-top: 19%;
}

.pumiddboxttop2_cont {
  width: 90%;
  margin-left: 4.5%;
  margin-top: 0;
  height: 85.4%;
  overflow: hidden;
  text-align: left;
}
.pumiddboxttop2_cont ul {
  height: 100%;
}
.pumiddboxttop2_cont li {
  background: rgba(1, 202, 217, 0.2) url(./img/hot.png) no-repeat 12px 12px;
  height: 13.8%;
}
.pumiddboxttop2_cont li p.text_l {
  line-height: 160%;
  width: 95%;
  overflow: hidden;
  padding-left: 10%;
}
.pumiddboxttop2_cont li p.text_r {
  text-align: right;
  width: 99%;
  height: 40%;
}
.pumiddboxttop2_cont li.bg {
  background: rgba(0, 255, 255, 0.4) url(./img/hot.png) no-repeat 12px 12px;
}
.pvr {
  position: relative;
}
.pvr ul {
  position: absolute;
  left: 11%;
  top: 13%;
}
.pvr ul li {
  width: 16px;
  height: 16px;
  text-align: center;
  line-height: 16px;
  margin-top: 82%;
  border-radius: 2px;
  font-size: 12px;
  display: block;
  color: #fff;
  z-index: 1111;
}
.hot1 {
  background-color: #ff0000;
}
.hot2 {
  background-color: #ff7200;
}
.hot3 {
  background-color: #ffbd5e;
}
.hot4 {
  background-color: #b3b3b3;
}
.hot5 {
  background-color: #597a9f;
}
.liwp ul li {
  margin-top: 79%;
}
.hdtop ul li {
  margin-top: 95%;
}
.pulefttoday_bar2 ul {
  position: absolute;
  left: 4.7%;
  top: 8%;
}
.pulefttoday_bar2 ul li {
  margin-top: 110%;
}
.tlbox {
  overflow: hidden;
  height: 74%;
  width: 91%;
  margin: 1% 4%;
  background: rgba(1, 202, 217, 0.2);
  font-size: 12px;
}
.tlbox p.text {
  padding-left: 3%;
}
.tlbox p.text span {
  width: 27.8%;
  color: rgba(255, 255, 255, 0.6);
  display: inline-block;
  text-align: left;
}
.tlbox ul {
  height: 100%;
}
.tlbox li {
  height: 20%;
  padding-top: 5.6%;
}
.tlbox p.rwith {
  width: 90%;
  height: 10px;
  background: #4ab4ff;
  margin: 2% 5%;
}
.tlbox span.rwith_img {
  height: 10px;
  background: #f8e19a;
  float: left;
  display: inline-block;
}
.tlbox p.text span.w12 {
  width: 28%;
  text-align: left;
}
.tlbox p.bgc3 {
  background: #f19ec2;
}
.tlbox span.qgc2 {
  background: #7ecef4;
}
.tlbox p.bgc2 {
  background: #99b0f7;
}
.tlbox span.qgc3 {
  background: #cce198;
}
.tlbox p.text span.tr {
  text-align: right;
  width: 10%;
  padding-right: 3%;
}

.tlbox li span i {
  width: 14px;
  height: 6px;
  display: inline-block;
  margin-right: 3px;
}
.ricon1 {
  background: #f8e19a;
}
.ricon2 {
  background: #7ecef4;
}
.ricon3 {
  background: #f19ec2;
}
.tricon1 {
  background: #4ab4ff;
}
.tricon2 {
  background: #99b0f7;
}
.tricon3 {
  background: #cce198;
}
.hdwid {
  width: 49.6%;
}
</style>
