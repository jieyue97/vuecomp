<template>
  <div>
    <el-table
      :row-style="rowHeightStyle"
      :cell-style="cellHeightStyle"
      ref="elTable"
      v-bind="tableOptions"
      v-on="$listeners"
      :data="tableData"
      class="xdh-table"
      :header-cell-style="headerStyle"
      :class="rowSortable ? 'gd_sort_table' : ''"
      v-tableHeight="{ bottomOffset: bottomOffset, fixBottom: fixBottom }"
    >
      <template>
        <template v-for="(col, index) in tableColumns">
          <table-column v-if="col.children && col.children.length" :coloumn-header="col" :key="index + col.prop" :scopedSlots="Object.keys($scopedSlots)">
            <!-- <template v-for="slot in Object.keys($scopedSlots)">
              <slot :name="slot" :slot="slot" />
            </template> -->
            <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope"><slot :name="slot" v-bind="scope" /></template>
          </table-column>
          <!-- 定义 index、selection 类型的列-->
          <el-table-column v-if="col.type === 'index' || col.type === 'selection'" :key="index" v-bind="col" :reserve-selection="col.reserveSelection"></el-table-column>

          <!-- 定义 expand 类型的列-->
          <el-table-column v-else-if="col.type === 'expand'" :key="index" v-bind="col" label="折叠">
            <template slot-scope="scope">
              <slot name="expand" :row="scope.row" :$index="scope.$index" :column="tableColumns[index]" :columnIndex="index"> </slot>
            </template>
          </el-table-column>
          <!-- 判断如果有show-overflow-tooltip -->
          <el-table-column
            v-if="col.prop && !col.children"
            v-bind="col"
            :key="index"
            :show-overflow-tooltip="
              (col.hasOwnProperty('show-overflow-tooltip') || col.hasOwnProperty('showOverflowTooltip') ? col['show-overflow-tooltip'] || col.showOverflowTooltip : true) &&
              col.prop !== 'operate'
            "
          >
            <template v-if="col.isHeader" v-slot:header="scope">
              <slot :name="`${col.prop}_handle` || '_handle'" v-bind="scope" :column="col"></slot>
            </template>
            <template v-slot="scope">
              <span v-if="$scopedSlots[col.prop]">
                <slot :name="col.prop || '_handle'" v-bind="scope" :column="col"></slot>
              </span>
              <span v-else>{{ scope.row[col.prop] }} </span>
            </template>
          </el-table-column>
          <!-- <el-table-column v-if="$scopedSlots[`${col.prop}.header`]" v-bind="col" :key="index">
            <template v-slot:header="scope">
              <slot :name="col.prop || '_handle'" v-bind="scope" :column="col"></slot>
            </template>
            <template slot="header" slot-scope="scope">
              {{ scope.row }}
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
            </template>
          </el-table-column> -->
        </template>
      </template>

      <template v-slot:append>
        <!-- 表格底部内容 插槽-->
        <slot name="append"></slot>
      </template>

      <!-- 自动无数据提示 插槽-->
      <slot name="empty" slot="empty"></slot>
    </el-table>
    <gd-pagination
      ref="pagination"
      :total="total"
      :page.sync="pageParam.current"
      :limit.sync="pageParam.size"
      @pagination="initTable"
      :pageSizes="isTableAuto ? initPageSize : pageSizes"
      :layout="layout"
      :background="background"
      :autoScroll="autoScroll"
      :hidden="hiddenPage"
    />
  </div>
</template>

<script>
// import { Table, TableColumn } from 'element-ui'
import { tableMethod } from './table'
import { extendColMethod, realPageChange } from './colauto'
import ElProps from 'element-ui/lib/table'
import Sortable from 'sortablejs'
import tableHeight from './directive/tableHeight'
import TableColumn from './tableColumn'
import openImg from './image/checked.png'
import closeImg from './image/unexpend.png'
/**
 * NsTable 表格组件
 * @module /ns-table
 */
export default {
  name: 'GdTable',
  directives: {
    tableHeight: tableHeight,
  },
  components: { TableColumn },
  /**
   * 属性参数，完全继承 el-table参数，并有以下扩展参数
   * @property {Array} [data = []] 表格行数据
   * @property {Object | Boolean} [columnSortable = false] 是否启用列拖拽排序, 可以配置Sortable个性化参数
   * @property {Object | Boolean} [rowSortable = false] 是否启用行拖拽排序, 可以配置Sortable个性化参数
   * @property {Array} [columns = []]  表格列定义，对象属性参数完全继承 el-table-column
   */
  props: {
    cellStyle: {
      type: Object,
      default() {
        return {}
      },
    },
    headerStyle: {
      type: Object || Function,
      default() {
        return {
          background: '#f2f6f7',
        }
      },
    },
    openImg: {
      type: String,
      default: openImg,
    },
    closeImg: {
      type: String,
      default: closeImg,
    },
    ...ElProps.props,
    columns: {
      type: Array,
      default() {
        return []
      },
    },
    data: {
      type: Array,
      default() {
        return []
      },
    },
    paginationType: {
      type: String,
      default: '',
    },
    rowHeight: {
      type: String,
      default: '',
    },
    defalutBg: {
      type: String,
      default: '#f2f6f7',
    },
    rowStyle: {
      type: Object,
      default() {
        return {
          background: this.defalutBg,
        }
      },
    },
    total: {
      type: Number,
      default: 0,
    },
    fixBottom: {
      type: Boolean,
      default: false,
    },
    isTableAuto: {
      type: Boolean,
      default: false,
    },
    // 列拖拽自动设置最小宽度
    isColAuto: {
      type: Boolean,
      default: false,
    },
    tablePaddingOffset: {
      type: Number,
      default: 16,
    },
    listenScreen: {
      type: Boolean,
      default: false,
    },
    bottomOffset: {
      type: Number,
      default: 0,
    },
    pageParams: {
      type: Object,
      default() {
        return { current: 1, size: 10 }
      },
    },
    fileType: {
      type: Object,
      default: function () {
        return { current: 'current', size: 'size' }
      },
    },
    pageSizes: {
      type: Array,
      default() {
        return [5, 10, 20, 30, 50]
      },
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next, sizes, jumper',
    },
    background: {
      type: Boolean,
      default: true,
    },
    autoScroll: {
      type: Boolean,
      default: true,
    },
    hiddenPage: {
      type: Boolean,
      default: false,
    },
    columnSortable: {
      type: [Object, Boolean],
      default: false,
    },
    rowSortable: {
      type: [Object, Boolean],
      default: false,
    },
  },
  data() {
    return {
      initPageSize: [],
      // 表格列定义数组
      /**
       * show-overflow-tooltip 新添加的参数 如果前端传了这个参数,则已这个参数为准
       * 否则则默认给此属性true
       */
      tableColumns: this.columns,
      // 列拖拽Sortable实例
      columnSortableInstance: null,
      // 行拖拽Sortable实例
      rowSortableInstance: null,
      // 表格行数据
      tableData: this.data,
    }
  },
  computed: {
    rowHeightStyle() {
      return this.isTableAuto ? { height: this.rowHeight === '' ? '44px' : this.rowHeight } : this.rowStyle
    },
    cellHeightStyle() {
      return this.isTableAuto ? { padding: '0px' } : this.cellStyle
    },
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
  },
  watch: {
    data(val) {
      this.tableData = val
      // 动态计算表格高度数据
      // tableMethod(this)
    },
    columns(val) {
      this.tableColumns = val
      const data = this.tableData
      this.tableData = []
      this.$nextTick(() => {
        this.tableData = data
        // 动态计算表格高度数据
        // tableMethod(this)
      })
    },
  },
  mounted() {
    this.columnSortable && this.initColumnSortable()
    this.rowSortable && this.initRowSortable()
    this.$el.style.setProperty('--openImg', 'url(' + this.openImg + ')')
    this.$el.style.setProperty('--closeImg', 'url(' + this.closeImg + ')')
    // 动态计算表格高度数据
    tableMethod(this)
    extendColMethod(this)
    if (this.listenScreen) {
      window.addEventListener('resize', this.handleResize)
    }
  },
  destroyed() {
    if (this.listenScreen) {
      window.addEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      let that = this
      //监听屏幕的改变
      tableMethod(that)
      extendColMethod(that)
    },
    /**
     * 在元素前插入元素
     * @param {HTMLElement} newEl 新DOM元素
     * @param {HTMLElement} targetEl 在指定目标DOM元素前插入
     */
    insertAfter(newEl, targetEl) {
      const parentEl = targetEl.parentNode
      if (parentEl.lastChild === targetEl) {
        parentEl.appendChild(newEl)
      } else {
        parentEl.insertBefore(newEl, targetEl.nextSibling)
      }
    },
    /**
     * 内部调用排序方法，还原由Sortable拖拽改变的DOM顺序，然后修改数据，再由数据驱动改变DOM
     * @function
     * @private
     * @param {String} type 排序类型，row 或 column
     * @param {HTMLElement} container 容器元素DOM
     * @param {Array} data 数据数组
     * @param {Object} e Sortable事件对象
     */
    sort(type, container, data, e) {
      const tempData = [...data]
      const newIndex = e.newIndex
      const oldIndex = e.oldIndex
      const temp = tempData[oldIndex]
      container.removeChild(e.item)
      const children = container.children
      if (children.length > 0) {
        oldIndex > 0 ? this.insertAfter(e.item, children[oldIndex - 1]) : container.insertBefore(e.item, children[0])
      } else {
        container.appendChild(e.item)
      }

      // 固定类型的列不运行拖拽和放置
      if (type === 'column' && data[newIndex] && data[newIndex].type) {
        return
      }
      tempData.splice(oldIndex, 1)
      tempData.splice(newIndex, 0, temp)

      // 修复ele中重新设置表格配置时要重新描绘表格
      if (type === 'column') {
        this.tableColumns = []
        this.$nextTick(() => {
          this.tableColumns = tempData
        })
      } else {
        this.tableData = []
        this.$nextTick(() => {
          this.tableData = tempData
        })
      }
    },
    /**
     * 实例化列Sortable
     */
    initColumnSortable() {
      const tr = this.$refs.elTable.$refs.tableHeader.$el.getElementsByTagName('tr')[0]
      if (!tr) return

      const options = Object.assign(
        {
          forceFallback: false,
          animation: 150,
        },
        this.columnSortable,
        {
          handle: '.cell',
          filter: '.xdh-table--not-drag',
          onSort: (e) => {
            this.sort('column', tr, this.tableColumns, e)
            /**
             * 列拖拽排序完成时触发
             * @event on-column-sort
             * @param {object} e Sortable事件对象
             * @param {Array} columns 列定义数组
             */
            this.$emit('on-column-sort', e, this.tableColumns)
          },
        }
      )

      this.columnSortableInstance = new Sortable(tr, options)
    },
    /**
     * 实例化行Sortable
     */
    initRowSortable() {
      const tbody = this.$refs.elTable.$refs.bodyWrapper.getElementsByTagName('tbody')[0]
      if (!tbody) return

      const options = Object.assign(
        {
          forceFallback: false,
          animation: 150,
        },
        this.rowSortable,
        {
          onSort: (e) => {
            this.sort('row', tbody, this.tableData, e)
            /**
             * 行拖拽排序完成时触发
             * @event on-row-sort
             * @param {object} e Sortable事件对象
             * @param {Array} data 行数据
             */
            this.$emit('on-row-sort', e, this.tableData)
          },
        }
      )

      this.rowSortableInstance = new Sortable(tbody, options)
    },
    initTable(val) {
      this.$emit('pagination', { ...val, paginationType: this.paginationType })
      if (this.isColAuto) {
        realPageChange(this, val.limit)
      }
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
  },
}
</script>
<style>
.xdh-table .el-table__expand-icon .el-icon-arrow-right:before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  background: var(--openImg) no-repeat;
  background-size: cover;
}
.xdh-table .el-table__expand-icon--expanded .el-icon-arrow-right:before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  background: var(--closeImg) no-repeat;
  background-size: cover;
}
.gd_sort_table .el-table__row {
  cursor: move;
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
  // /deep/.el-table__expanded-cell {
  //   padding: 0 !important;
  // }
  // transition: 0;
  // /deep/ .el-table__expand-icon {
  //   transition: 0;
  //   transform: rotate(0);
  // }
  /deep/ .el-table__expand-icon .el-icon-arrow-right:before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: var(--openImg) no-repeat;
    // background-image: var(--openImg);
    background-size: cover;
  }
  /deep/.el-table__expand-icon--expanded .el-icon-arrow-right:before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: var(--closeImg) no-repeat;
    background-size: cover;
  }
}
</style>
