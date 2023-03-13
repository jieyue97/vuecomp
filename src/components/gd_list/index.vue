<template>
  <div class="content">
    <el-select v-model="chooseValue" v-on="$listeners" clearable filterable :filter-method="filterMethod" v-el-select-loadmore="loadMore(num)" @visible-change="visibleChange">
      <el-option v-for="(item, index) in options.slice(0, num)" :key="index" :label="item.label" :value="item.val"> </el-option>
    </el-select>
  </div>
</template>

<script>
import { _debounce } from './untils.js'
// import ElProps from 'element-ui/lib/select'
export default {
  name: 'GdList',
  data() {
    return {
      options: [],
      num: 10,
      chooseValue: '',
      resOptions: []
    }
  },
  props: {
    // ...ElProps.props,
    // 标题
    dataList: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 标题图标
    rangeNumber: {
      type: Number,
      default: 10
    }
    // 标题图标
    // value: {
    //   type: [String, Array],
    //   default: ''
    // }
  },
  methods: {
    // 模拟获取大量数据
    getList() {
      // 测试数据15000条数据, 这里数据多少条无所谓,options.slice(0, rangeNumber)方法只会默认加载初始的10条数据
      for (let i = 0; i < 25000; i++) {
        this.resOptions.push({ label: '选择' + i, val: '选择' + i })
      }
    },
    loadMore(n) {
      // n是默认初始展示的条数会在渲染的时候就可以获取,具体可以打log查看
      // elementui下拉超过7条才会出滚动条,如果初始不出滚动条无法触发loadMore方法
      return () => (this.num += 5) // 每次滚动到底部可以新增条数  可自定义
    },
    // 筛选方法
    filterMethod: _debounce(function(filterVal) {
      if (filterVal) {
        let filterArr = this.resOptions.filter(item => {
          return item.label.toLowerCase().includes(filterVal.toLowerCase())
        })
        this.options = filterArr
      } else {
        this.options = this.resOptions
      }
    }, 500),
    // 下拉框出现时，调用过滤方法
    visibleChange(flag) {
      if (flag) {
        this.filterMethod()
      }
    }
  },
  beforeMount() {
    this.num = this.rangeNumber
    this.getList()
  },
  directives: {
    'el-select-loadmore': (el, binding) => {
      // 获取element-ui定义好的scroll盒子
      const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
      if (SELECTWRAP_DOM) {
        SELECTWRAP_DOM.addEventListener('scroll', function() {
          /**
           * scrollHeight 获取元素内容高度(只读)
           * scrollTop 获取或者设置元素的偏移值,
           *  常用于:计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
           * clientHeight 读取元素的可见高度(只读)
           * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
           * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
           */
          const condition = this.scrollHeight - this.scrollTop <= this.clientHeight
          if (condition) binding.value()
        })
      }
    }
  }
}
</script>
