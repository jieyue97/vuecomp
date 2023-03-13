<template>
  <div>
    <el-table ref="elTable" v-bind="tableOptions" v-on="$listeners" :data="tableData" class="xdh-table" v-tableHeight="{ bottomOffset: bottomOffset, fixBottom: fixBottom }">
      <el-table-column v-for="(col, index) in tableColumns" :key="index" v-bind="col">
        <template v-if="col.type === 'handle' || (col.prop && $scopedSlots[col.prop])" v-slot="scope">
          <!-- checkbox treeTable选择框-->
          <el-checkbox
            v-if="checkTreeSelect && index + 1 === checkRow"
            :key="key"
            :indeterminate="scope.row[indeterminate]"
            v-model="scope.row[checkedRow]"
            @change="onChangeCheckbox($event, scope.row)"
          ></el-checkbox>
          <!-- 自定义字段 插槽-->
          <slot :name="col.prop || '_handle'" v-bind="scope" :column="col">11</slot>
        </template>

        <!-- 用原来字段 -->
        <template v-if="col['type'] !== 'selection' && (col.type !== 'handle' || !(col.prop && $scopedSlots[col.prop]))" v-slot="scope">
          <el-checkbox
            v-if="checkTreeSelect && index + 1 === checkRow"
            :key="key"
            :indeterminate="scope.row[indeterminate]"
            v-model="scope.row[checkedRow]"
            @change="onChangeCheckbox($event, scope.row)"
          ></el-checkbox>
          <slot :name="col.prop || '_handle'" v-bind="scope" :column="col">{{ scope.row[col.prop] }}</slot>
        </template>

        <template v-if="col.type === 'handle' || (col.prop && $scopedSlots[`${col.prop}.header`])" v-slot:header="scope">
          <!-- 自定义字段表头 插槽-->
          <slot :name="`${col.prop || '_handle'}.header`" v-bind="{ column: col, $index: index, ...scope }"></slot>
        </template>
      </el-table-column>

      <template v-slot:append>
        <!-- 表格底部内容 插槽-->
        <slot name="append"></slot>
      </template>

      <!-- 自动无数据提示 插槽-->
      <slot name="empty" slot="empty"></slot>
    </el-table>
    <gd-pagination
      :total="total"
      :page.sync="pageParam.current"
      :limit.sync="pageParam.size"
      @pagination="initTable"
      :pageSizes="pageSizes"
      :layout="layout"
      :background="background"
      :autoScroll="autoScroll"
      :hidden="hiddenPage"
    />
  </div>
</template>

<script>
// import { Table, TableColumn } from 'element-ui'
import ElProps from 'element-ui/lib/table'
import tableHeight from './directive/tableHeight'
import Sortable from 'sortablejs'
/**
 * NsTable 表格组件
 * @module /ns-table
 */
export default {
  name: 'GdCheckTable',
  directives: {
    tableHeight: tableHeight
  },
  components: { Sortable },
  /**
   * 属性参数，完全继承 el-table参数，并有以下扩展参数
   * @property {Array} [data = []] 表格行数据
   * @property {Array} [columns = []]  表格列定义，对象属性参数完全继承 el-table-column
   */
  props: {
    ...ElProps.props,
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },
    paginationType: {
      type: String,
      default: ''
    },
    total: {
      type: Number,
      default: 0
    },
    fixBottom: {
      type: Boolean,
      default: false
    },
    bottomOffset: {
      type: Number,
      default: 0
    },
    pageParams: {
      type: Object,
      default() {
        return { current: 1, size: 10 }
      }
    },
    fileType: {
      type: Object,
      default: function() {
        return { current: 'current', size: 'size' }
      }
    },
    pageSizes: {
      type: Array,
      default() {
        return [5, 10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next, sizes, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hiddenPage: {
      type: Boolean,
      default: false
    },
    // 是否开启树形结构表格选择
    checkTreeSelect: {
      type: Boolean,
      default: false
    },
    // checkbox在第几列，默认在第一列
    checkRow: {
      type: [String, Number],
      default: () => {
        return 1
      }
    },
    // 是否严格模式遵循父子关联关系
    checkStrictly: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    // 半选中的checkbox字段
    indeterminate: {
      type: String,
      default: () => {
        return 'indeterminate'
      }
    },
    // 选中的checkbox字段
    checkedRow: {
      type: String,
      default: () => {
        return 'checkedRow'
      }
    }
  },
  data() {
    return {
      // 表格列定义数组
      tableColumns: this.columns,
      dropCol: JSON.parse(JSON.stringify(this.columns)),
      // 表格行数据
      tableData: this.data,
      key: 1,
      rowKeyName: this.$props.rowKey,
      childrenName: this.$props.treeProps.children
    }
  },
  computed: {
    // el-table 参数
    tableOptions() {
      const options = { ...this.$props }
      delete options.columns
      delete options.data
      delete options.columnSortable
      delete options.rowSortable
      delete options.distanceToButton
      delete options.openFilter
      return options
    },
    pageParam() {
      return this._dataTransform(this.pageParams)
    },
    hasChildrenLength() {
      return arr => {
        if (arr[this.childrenName] && arr[this.childrenName].length) {
          return true
        }
        return false
      }
    }
  },
  watch: {
    data(val) {
      this.tableData = val
    },
    columns(val) {
      this.tableColumns = val
      const data = this.tableData
      this.tableData = []
      this.$nextTick(() => {
        this.tableData = data
      })
    }
  },
  mounted() {},
  methods: {
    initTable(val) {
      this.$emit('pagination', { ...val, paginationType: this.paginationType })
    },
    refresh() {
      this.$refs.table.doLayout()
    },
    // 转换传过来的fileType，定义为current/size格式
    _dataTransform(data) {
      const _data = {}
      _data.current = data[this.fileType.current]
      _data.size = data[this.fileType.size]
      // const _data = []
      // for (let i = 0; i < data.length; i++) {
      //   _data[i] = {}
      //   _data[i].label = data[i][this.fileType.label]
      //   _data[i].value = data[i][this.fileType.value]
      // }
      return _data
    },
    onChangeCheckbox(e, row) {
      row[this.checkedRow] = e
      row[this.indeterminate] = false
      // 是否遵循严格父子关联模式
      if (this.checkStrictly) {
        // 处理children子集选中
        if (this.hasChildrenLength(row)) {
          row[this.childrenName] = this.rowChildren(e, row[this.childrenName])
        }
        // 平铺树形数组
        const allData = this.treeFlat(this.tableData, '-1')
        // 处理父级选中
        this.doWithPId(row, allData)
      }
      this.key += 1
      /*
       * arrAllSelect 所有选中状态的数据, [{id: 1, name: 'aa'},{id: 2, name: 'bb'}]，
       * arrAllSelect 所有半选中状态的数据, [{id: 3, name: 'cc'},{id: 4, name: 'dd'}]，
       * allSelect 所有选中状态的数据只有rowKey值, [1,2,3]，
       * halfSelect 所有半选中状态的数据只有rowKey值, [4,5,6]，
       * this.tableData 所有选中状态的treeTable数据，
       * */
      const { arrAllSelect, arrHalfSelect, allSelect, halfSelect } = this.getCheckedData()
      this.$emit('onChangeTreeTable', arrAllSelect, arrHalfSelect, allSelect, halfSelect, this.tableData)
    },
    getCheckedData() {
      // 平铺树形数组
      const tableData = this.treeFlat(this.tableData, '-1')
      // 所有选中状态的数据
      const arrAllSelect = tableData.filter(item => item[this.checkedRow] === true)
      // 所有半选中状态的数据
      const arrHalfSelect = tableData.filter(item => item[this.indeterminate] === true)
      // 所有选中状态的数据只有rowKey值
      const allSelect = arrAllSelect.map(item => {
        return item[this.rowKeyName]
      })
      // 所有半选中状态的数据只有rowKey值
      const halfSelect = arrHalfSelect.map(item => {
        return item[this.rowKeyName]
      })
      return {
        arrAllSelect: arrAllSelect,
        arrHalfSelect: arrHalfSelect,
        allSelect: allSelect,
        halfSelect: halfSelect,
        tableData: this.tableData
      }
    },
    // 深层父寻找子函数赋值
    rowChildren(e, row) {
      row.forEach(item => {
        item[this.checkedRow] = e
        item[this.indeterminate] = false
        if (this.hasChildrenLength(item)) {
          item[this.childrenName] = this.rowChildren(e, item[this.childrenName])
        }
      })
      return row
    },
    // 树形数组扁平化，带children
    treeFlat(data, top) {
      let list = [...data]
      data.forEach(item => {
        item['rowPId'] = top
        if (!item[this.checkedRow]) {
          item[this.checkedRow] = false
        }
        if (!item[this.indeterminate]) {
          item[this.indeterminate] = false
        }
        if (this.hasChildrenLength(item)) {
          list = [...list, ...this.treeFlat(item[this.childrenName], item[this.rowKeyName])]
        }
      })
      return list
    },
    // 处里父级元素选中状态: 半选、选中状态
    doWithPId(row, arr) {
      // 查找父级元素
      const obj = arr.filter(item => item[this.rowKeyName] === row.rowPId)
      if (obj.length) {
        if (this.hasChildrenLength(obj[0])) {
          // 查看父元素下子元素状态
          const allArr = obj[0][this.childrenName].filter(item => item[this.checkedRow] === true)
          const allArr1 = obj[0][this.childrenName].filter(item => item[this.indeterminate] === true)
          // 判断子元素是否全选状态，如果全选，父元素呈现选中状态。
          if (allArr.length === obj[0][this.childrenName].length) {
            obj[0][this.indeterminate] = false
            obj[0][this.checkedRow] = true
          } else {
            // 如果不为全选，有的选中状态或者半选状态，则父元素呈现半选中状态
            obj[0][this.checkedRow] = false
            obj[0][this.indeterminate] = true
            // 如果全不选，则父元素呈现不选状态
            if (!allArr.length && !allArr1.length) {
              obj[0][this.indeterminate] = false
            }
          }
          // 给tableData赋值
          this.setDeepTree(obj[0])
        }
        // 递归此元素是否有父级
        this.doWithPId(obj[0], arr)
      }
    },
    // 深层查找treeData,找到命中元素，并且赋值
    setDeepTree(obj, isFalse) {
      const that = this
      const fn = function(data) {
        for (let i = 0; i < data.length; i++) {
          const item = data[i]
          if (item[that.rowKeyName] === obj[that.rowKeyName]) {
            data[i][that.indeterminate] = obj[that.indeterminate]
            data[i][that.checkedRow] = obj[that.checkedRow]
            if (isFalse && that.hasChildrenLength(item)) {
              data[i][this.childrenName] = that.rowChildren(data[i][this.checkedRow], data[i][this.childrenName])
            }
            // 是否开启深层递归处理
            break
          }
          if (that.hasChildrenLength(item)) {
            data[i][that.childrenName] = fn(data[i][that.childrenName])
          }
        }
        return data
      }
      this.tableData = fn(this.tableData)
    },
    // 动态赋值
    /*
     * data 数组 [1,2,3] || [{id: 1,name: 'aa'}],
     * dataType: keys, nodes。keys对应数组[1,2,3], nodes对应数组[{id: 1,name: 'aa'}]
     * */
    setCheckedKeys(data) {
      const arr = []
      data.forEach(item => {
        if (Object.prototype.toString.call(item) === '[object Object]') {
          arr.push(item[this.rowKeyName])
        } else {
          arr.push(item)
        }
      })
      // 平铺树形数组
      const allData = this.treeFlat(this.tableData, '-1')
      allData.forEach(item => {
        // 是否有key值
        if (arr.includes(item[this.rowKeyName])) {
          const obj = { ...item }
          obj[this.indeterminate] = false
          obj[this.checkedRow] = true
          // 是否处于父子严格关联模式中
          if (this.checkStrictly) {
            // 处理父级选中
            this.doWithPId(obj, allData)
          }
          // 处理当前级选中与子集选中
          this.setDeepTree(obj, this.checkStrictly)
        }
      })
      this.key += 1
    }
  }
}
</script>
<style>
.xdh-table .el-table__expand-icon .el-icon-arrow-right:before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url('./image/+.png') no-repeat;
  background-size: cover;
}
.xdh-table .el-table__expand-icon--expanded .el-icon-arrow-right:before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url('./image/unexpend.png') no-repeat;
  background-size: cover;
}
</style>
<style lang="scss">
.xdh-table {
  /deep/.noChildren,
  .noChildren .el-table__expand-icon {
    &:hover {
      cursor: not-allowed;
    }
  }
  /deep/.el-table__fixed-right::before,
  .el-table__fixed::before {
    background-color: #d2dce4;
  }
  /deep/.ns-table-btns > * {
    padding-left: 0;
  }
  /deep/.el-table__expanded-cell {
    padding: 0 !important;
  }
  transition: 0;
  /deep/ .el-table__expand-icon {
    transition: 0;
    transform: rotate(0);
  }
  /deep/ .el-table__expand-icon .el-icon-arrow-right:before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('./image/+.png') no-repeat;
    background-size: cover;
  }
  /deep/.el-table__expand-icon--expanded .el-icon-arrow-right:before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('./image/unexpend.png') no-repeat;
    background-size: cover;
  }
}
</style>
