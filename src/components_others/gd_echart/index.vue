<!-- echart组件 直接引入即可 -->
<template>
  <div ref="chart" class="ns-echarts" :style="styles"></div>
</template>

<script>
/**
 * ECharts组件, 提供Vue组件封装，异步加载echarts库
 * @module widgets/ns-echarts
 * @author 程卫拓
 */
import * as echarts from 'echarts'
import { addResizeListener, removeResizeListener } from 'element-ui/lib/utils/resize-event'

// echarts 支持的事件
const EVENTS = [
  'click',
  'dbclick',
  'mousedown',
  'mouseup',
  'mouseover',
  'mouseout',
  'globalout',
  'legendselectchanged',
  'legendselected',
  'legendunselected',
  'legendscroll',
  'datazoom',
  'datarangeselected',
  'timelinechanged',
  'timelineplaychanged',
  'restore',
  'dataviewchanged',
  'magictypechanged',
  'geoselectchanged',
  'geoselected',
  'geounselected',
  'pieselectchanged',
  'pieselected',
  'pieunselected',
  'mapselectchanged',
  'mapselected',
  'mapunselected',
  'axisareaselected',
  'focusnodeadjacency',
  'unfocusnodeadjacency',
  'brush',
  'brushselected'
]

/**
 * NsEcharts 组件
 */
export default {
  name: 'GdEchart',
  /**
   * 参数属性
   * @property {object} [geo] 需要注册的地图geoJson， 目录 下包含全国各地的地图
   * @property {string} [map] 需要注册的地图名称， map 和 geo 需要同时设置
   * @property {object|function} [options] echarts 配置项
   * @property {string} [width=100%] 图表的宽度
   * @property {string} [height=100%] 图表的高度
   * @property {boolean} [loading] 是否显示loading效果
   */
  props: {
    map: {
      type: String,
      default: String
    },
    geo: {
      type: Object
    },
    specialAreas: {
      type: Object,
      default: () => {}
    },
    options: {
      type: [Object, Function],
      default: () => {}
    },
    theme: {
      type: Object,
      default: () => {}
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    loading: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      /**
       *  当前图表是否活动状态
       */
      active: true,
      copyChart: null,
      copyDiv: null,
      copyWrapper: null
    }
  },
  computed: {
    styles() {
      return {
        width: this.width,
        height: this.height
      }
    }
  },
  watch: {
    // options发生改变时刷新图表
    options: {
      deep: true,
      handler(val) {
        this.setOption(val)
      }
    },
    // 更新loading状态
    loading(val) {
      this.setLoading(val)
    }
  },
  beforeDestroy() {
    removeResizeListener(this.$el, this.proxyResize)
    this.chart && this.chart.dispose()
  },
  created() {
    /**
     * ECharts 实例对象
     * @member chart
     * @type {ECharts}
     */
    this.chart = null
    /**
     * 全局 echarts 对象
     * @member echarts
     * @type {object}
     */
    this.echarts = echarts

    this.proxyResize = this.resize
    this.registerMap()
  },
  mounted() {
    this.init(this.$refs.chart)
    this.setOption(this.options)
    addResizeListener(this.$el, this.proxyResize)
  },

  activated() {
    this.active = true
  },
  deactivated() {
    this.active = false
  },
  methods: {
    /**
     * 注册地图
     * @function registerMap
     */
    registerMap() {
      if (this.map && this.geo && !echarts.getMap(this.map)) {
        echarts.registerMap(this.map, this.geo)
      } else if (this.map && !this.geo && !echarts.getMap(this.map)) {
        let geo = {}
        let map = this.map
        // 是不是中国地图
        // if (this.map === 'china') {
        //   geo = require('./map/china.json')
        // } else if (this.map.includes('-')) {
        //   const arr = this.map.split('-')
        //   map = arr[0]
        //   geo = require(`./map/city/${arr[1]}.json`)
        // } else {
        //   geo = require(`./map/province/${this.map}.json`)
        // }
        echarts.registerMap(map, geo)
      }
    },
    /**
     * 初始化图表，实例化ECharts
     */
    init(el) {
      this.chart = echarts.init(el || this.$el, this.theme)
      this.setLoading(this.loading)
      EVENTS.forEach(name => {
        this.chart.on(name, params => {
          this.$emit(name, params)
        })
      })
    },
    /**
     * 设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过setOption完成，ECharts 会合并新的参数和数据，然后刷新图表。
     * 如果开启动画的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。
     * @function setOption
     * @param {object} options 配置项，与echarts的配置项一致
     */
    setOption(options) {
      const opts = typeof options === 'function' ? options(echarts, this) || {} : options
      if (this.toggle) {
        if (!opts.toolbox) {
          opts.toolbox = {}
        }
        if (!opts.toolbox.feature) {
          opts.toolbox.feature = {}
        }
      }
      this.chart && this.chart.setOption(opts || {})
    },
    /**
     * 显示/关闭loading效果
     * @function setLoading
     * @param {boolean} loading 是否显示loading
     */
    setLoading(loading) {
      if (!this.chart) return
      loading ? this.chart.showLoading() : this.chart.hideLoading()
    },
    /**
     * 改变图表尺寸，在容器大小发生改变时将会自动调用。
     * @function resize
     */
    resize() {
      if (this.active) {
        this.chart && this.chart.resize()
      }
    },
    /**
     * 清空当前实例，会移除实例中所有的组件和图表。清空后调用 getOption 方法返回一个{}空对象。
     * @function clear
     */
    clear() {
      this.chart && this.chart.clear()
    },
    /**
     * 触发图表行为，例如图例开关legendToggleSelect, 数据区域缩放dataZoom，显示提示框showTip等等，更多见 action 和 events 的文档。
     * @function dispatchAction
     * @param {object} payload
     */
    dispatchAction(payload) {
      this.chart && this.chart.dispatchAction(payload)
    }
  }
}
</script>
