# 组件简介

## gd-echart 统计图表组件

**特征**

- 不需要实例化
- 直接传 options 参数就可以渲染图标
- 支持 echart 的所有属性以及事件
- 事件直接调用即可，如<gd-echart :width="'100%'" :height="'50%'" :options="options1" @click="">

**基本用法**
:::demo

```html
<template>
  <div style="height: 50vh; width: 100%">
    <gd-echart :width="'100%'" :height="'50%'" :options="options"> </gd-echart>
    <gd-echart :width="'100%'" :height="'50%'" :options="options1"> </gd-echart>
    <!-- <gd-echart :width="'50%'" :height="'30%'" :options="options2"> </gd-echart> -->
  </div>
</template>

<script>
  export default {
    name: 'gd_echart_examples',
    data() {
      return {
        options2: {
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
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
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
        },
        options1: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330, 220]
            }
          ]
        },
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
    },
    methods: {}
  }
</script>
```

:::

<mdtable mdname='echartdetail'></mdtable>

## 数据下载

<geojson></geojson>
