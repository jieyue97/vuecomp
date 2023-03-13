<template>
  <div class="el-excel-table">
    <div style="margin-bottom: 10px">
      <div style="padding-left: 10px">
        <template v-for="(item, index) in btnList">
          <el-button
            v-if="item.label !== '|' && isShowBtn(btnShowList, item.showName)"
            :key="item.label + index"
            :title="item.label"
            type="text"
            @click="item.onClick()">
            <i :class="item.icon"/>
          </el-button>
          <span v-if="item.label === '|'" :key="item.label + index" style="color: #c6c6c6">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        </template>
      </div>
    </div>
    <el-table
      :data="tableData"
      :cell-class-name="setCellClassName"
      :key="JSON.stringify(tableData)"
      v-bind="tableBind"
      v-on="tableOn"
      @cell-click="onCellClick"
      style="width: 100%">
      <el-table-column v-if="isIndex" v-bind="indexBind" type="index"/>
      <template v-for="(item, index) in tableColumns">
        <el-table-column v-if="!item['isTailorMadeHeader']" :key="index" v-bind="item">
          <template slot="header" slot-scope="scope">
            <span><span v-if="isRulesHeader(scope.column, tableColumns)" style="color: #e83838">*</span>&nbsp;&nbsp;{{ scope.column.label }}</span>
          </template>
          <div slot-scope="scope">
            <div v-if="!isScopeKey(scope, locationSpan)">
              <div style="padding:0 5px" :style="{paddingTop: !isScopeKey(scope, locationSpan) ? Number(allCellHeight) / 2 + 'px' : '',paddingBottom: !isScopeKey(scope, locationSpan) ? Number(allCellHeight) / 2 + 'px' : ''}">
                <textBr :textarea-name="scope.row[item.prop]" :isShowRulesMessage="isShowRulesMessage" :item="item" :scopeObj="scope.row"></textBr>
              </div>
            </div>
            <el-input
              v-clickoutside="onClickPasterText"
              v-if="isScopeKey(scope, locSpan) && inputShow"
              ref="pasterText"
              v-model="pasterText"
              :type="textType(item)"
              size="mini"
              autosize
              class="paster-text"
              @focus="onClickColumn(scope, tableColumns[item])"/>
            <columnType
              v-if="isScopeKey(scope, locationSpan) && !inputShow"
              :prop-name="scope.row[item.prop]"
              :item-row="item"
              :selectProp="setProp(item)"
              @onCloseOpenInput="onCloseOpenInput"
              @onSetColumnVal="onSetColumnVal"/>
          </div>
        </el-table-column>
        <!--是否自定义表头与内容-->
        <el-table-column v-if="item['isTailorMadeHeader']" :key="index">
          <template slot="header" slot-scope="scope">
            <slot :name="setName(item, 'tailorMadeHeader', '_header')" :row="scope.row" />
          </template>
          <template slot-scope="scope">
            <slot :name="setName(item, 'tailorMadeContent', '_content')" :row="scope.row" />
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import columnType from './columnType'
import textBr from './textBr'
import Clickoutside from 'element-ui/src/utils/clickoutside'
const validatePass = (data) => {
  return { message: '不能为空', required: false, trigger: 'blur' }
}
export default {
  name: 'gdOnlineExcel',
  directives: { Clickoutside },
  components: { columnType, textBr },
  props: {
    // 序号是否展示， 默认展示
    isIndex: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    // el-table表格属性
    tableBind: {
      type: Object,
      default: () => {
        return {
          border: true,
          stripe: true,
          'header-cell-style': { background: '#eef1f6', color: '#606266' },
          height: window.innerHeight - 192
        }
      }
    },
    // el-table表格事件属性
    tableOn: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // el-table表格的index属性列
    indexProp: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // el-table，撤销/恢复最多保存几条数据
    tableAllMax: {
      type: Number,
      default: () => {
        return 10
      }
    },
    // 全表只读
    readyTable: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    // 增加一行
    autoAddCol: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    // 表头数据
    columnsList: {
      type: [Array],
      default: () => {
        return []
      }
    },
    // 表格数据
    dataTable: {
      type: [Array],
      default: () => {
        return []
      }
    },
    // 只读样式
    readyClass: {
      type: String,
      default: () => {
        return ''
      }
    },
    // 校验样式
    rulesClass: {
      type: String,
      default: () => {
        return ''
      }
    },
    // 按钮隐藏/启动参数
    btnShowList: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 自定义按钮
    autoBtnList: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 自定义单元格展示高度
    allCellHeight: {
      type: [Number, String],
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      cellHeight: '',
      inputShow: false,
      isShowRulesMessage: false, // 校验展示不符合条件的单元格
      withdraw: -1, // 回退参数
      btnList: [
        {
          label: '保存',
          state: true,
          icon: 'el-icon-folder',
          showName: 'save',
          falseIcon: '',
          onClick: () => {
            this.$emit('onSaveFold', this.tableData, this)
          }
        },
        {
          label: '下载',
          state: true,
          icon: 'el-icon-bottom',
          showName: 'update',
          falseIcon: '',
          onClick: () => {
            this.$emit('onUpdateload')
          }
        },
        {
          label: '撤回(ctrl+z)',
          state: true,
          icon: 'el-icon-refresh-left',
          showName: 'withdraw',
          falseIcon: '',
          onClick: () => {
            this.onSetWithdraw(-1)
          }
        },
        {
          label: '恢复(ctrl+z)',
          state: true,
          icon: 'el-icon-refresh-right',
          showName: 'recover',
          falseIcon: '',
          onClick: () => {
            this.onSetWithdraw(1)
          }
        },
        {
          label: '增加一行',
          state: true,
          icon: 'el-icon-circle-plus-outline',
          showName: 'add',
          falseIcon: '',
          onClick: () => {
            this.setAutoAddTableData()
          }
        },
        {
          label: '删除最后一行',
          state: true,
          icon: 'el-icon-remove-outline',
          showName: 'del',
          falseIcon: '',
          onClick: () => {
            this.setAutoDelTableData()
          }
        }
      ], // 内置按钮控件
      pasterText: '',
      locationSpan: {
        rowIndex: -1,
        columnIndex: -1
      },
      locSpan: {
        rowIndex: -1,
        columnIndex: -1
      },
      indexBind: {
        label: '序号',
        align: 'center',
        width: '80px'
      },
      tableWithdrawDataAll: [],
      tableData: [],
      tableColumns: [],
      tableColumn: [],
      keyPressed: {
        17: false,
        89: false,
        90: false
      } // 键盘按下参数存取
    }
  },
  computed: {
    isRulesHeader() {
      return (row, list) => {
        const arr = list.filter(item => item.prop === row.property)
        if (arr.length) {
          if (arr[0]['rules'] || arr[0]['validate']) {
            return true
          }
        }
        return false
      }
    },
    textType() {
      return (row) => {
        if (row['editorValue'] && row['editorValue']['bind'] && row['editorValue']['bind']['type']) {
          return row['editorValue']['bind']['type']
        }
        return 'text'
      }
    },
    setProp() {
      return row => {
        if (row['editorValue']) {
          if (row['editorValue']['selectProp']) {
            return row['editorValue']['selectProp']
          }
        }
        return {}
      }
    },
    isShowBtn() {
      return (list, row) => {
        if (!list.length){
          return true
        } else {
          if (list.includes(row)) {
            return true
          }
          return false
        }
      }
    },
    setName() {
      return (row, res, type) => {
        return row[res] ? row[res] : (row.prop + type)
      }
    },
    // 是否显示控件
    isScopeKey() {
      return (row, res) => {
        if (row.row.index === res.rowIndex && row.column.index === res.columnIndex) {
          return true
        }
        return false
      }
    }
  },
  watch: {
    'keyPressed': {
      handler(nv, ov) {
        if (nv) {
          // 撤回
          if (nv['17'] === true && nv['90'] === true) {
            this.onSetWithdraw(-1)
          }
          // 恢复
          if (nv['17'] && nv['89']) {
            this.onSetWithdraw(1)
          }
        }
      },
      deep: true,
      immediate: true
    },
    'tableData': {
      handler(nv, ov) {
        if (nv) {
          const obj = nv[nv.length - 1]
          let isFalse = false
          for (const i in obj) {
            const item = obj[i]
            if (item && i !== 'index') {
              isFalse = true
              break
            }
          }
          if (isFalse && this.autoAddCol) {
            this.setAutoAddTableData()
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    if (!this.columnsList.length) {
      this.tableColumns = [
          {
          prop: 'name',
          label: '用户名称',
          ready: true,
          tailorMadeContent: 'datet',
          editorType: 'date'
        },
          {
            prop: 'email',
            label: '邮箱'
          },
          {
            prop: 'phone',
            label: '手机号码'
          },
          {
            prop: 'unitName',
            label: '所属单位名称'
          },
          {
            prop: 'departmentName',
            label: '部门名称'
          },
          {
            prop: 'roleName',
            label: '角色名称',
            editorType: 'select',
            // ready: true,
            rules: {
              // check: { message: '不能为空', required: true },
              validate: validatePass
            },
            editorValue: {
              optionList: [
                {
                  label: 'hct',
                  value: 'hctHtml'
                },
                {
                  label: 'hbx',
                  value: 'hbxHtml'
                }
              ]
            }
          },
          {
            prop: 'jobName',
            label: '岗位名称'
          }
        ]
    } else {
      this.tableColumns = this.columnsList
    }
    this.tableData = this.dataTable.length ?  JSON.parse(JSON.stringify(this.dataTable)) : []
    this.indexBind = { ...this.indexBind, ...this.indexProp }
    this.btnList = [...this.btnList, ...this.autoBtnList]
    this.tableColumn = []
    this.tableColumns.forEach(item => {
      this.tableColumn.push(item.prop)
    })
  },
  mounted() {
    const that = this
    // 监听粘贴事件
    document.addEventListener('paste', function(event) {
      that.pasteToTable()
    })
    this.listenerEvent()
  },
  methods: {
    // 自动增加一行数据
    setAutoAddTableData() {
      const obj = {}
      this.tableColumns.forEach(item => {
        obj[item.prop] = ''
      })
      // 添加一行空白数据
      this.tableData.push(obj)
      // 添加一行空白数据初始化所有表格数据
      this.tableWithdrawDataAll.push(JSON.stringify(this.tableData))
    },
    setAutoDelTableData() {
      this.tableData.pop()
      // 添加一行空白数据初始化所有表格数据
      this.tableWithdrawDataAll.push(JSON.stringify(this.tableData))
    },
    // 设置回退值, 初始值最大为10
    onSetWithdraw(row) {
      if (row === -1) {
        if (this.tableWithdrawDataAll.length) {
          if (this.withdraw === -1) {
            this.withdraw = this.tableWithdrawDataAll.length - 2
          } else if (this.withdraw === 0) {
            this.withdraw = 0
          } else {
            this.withdraw += row
          }
        }
      }
      if (row === 1) {
        if (this.withdraw === -1) {
          this.withdraw = this.tableWithdrawDataAll - 1
        } else if (this.withdraw >= (this.tableWithdrawDataAll.length - 1)) {
          this.withdraw = this.tableWithdrawDataAll.length - 1
        } else {
          this.withdraw += row
        }
      }
      if (this.withdraw >= 0) {
        this.tableData = JSON.parse(this.tableWithdrawDataAll[this.withdraw])
      }
    },
    // 监听键盘按下与松开事件
    listenerEvent() {
      const that = this
      document.addEventListener('keydown', function(e) {
        that.keyPressed[e.keyCode] = true
      })
      document.addEventListener('keyup', function(e) {
        that.keyPressed[e.keyCode] = false
      })
    },
    // el-table的例子属性
    setCellClassName({ row, column, rowIndex, columnIndex }) {
      row['index'] = JSON.stringify(rowIndex)
      column['index'] = JSON.stringify(columnIndex)
      // 判断首列序列是否存在
      const index = this.isIndex ? columnIndex - 1 : columnIndex
      if ((columnIndex && this.isIndex) || !this.isIndex) {
        // 监测校验
        // const rulesClass =
        this.setCheckRules(row[column.property], this.tableColumns[index], { row, column, rowIndex, columnIndex })
        let readyClass = ''
        // 全表/单列只读
        if (this.readyTable || this.tableColumns[index]['ready']) {
          readyClass = this.readyClass || 'warning-row'
        }
        return readyClass
      }
    },
    setCheckRules(row, res, data) {
      // 判断是否有检验规则
      if (res['rules']) {
        // 启动
        if (!res.rules['message']) {
          res.rules['message'] = []
        }
        // 判断检验规则check, 值不能为空
        if (res['rules']['check']) {
          if (!row) {
            res['rules']['check']['required'] = true
            const someV = res.rules.message.some(item => {return item.row === data.rowIndex})
            if (someV) {
              res.rules.message.forEach(item => {
                if (item.row === data.rowIndex) {
                  item.check = res.rules['check']
                }
              })
            } else {
              res.rules.message.push({
                row: data.rowIndex,
                check: res.rules['check']
              })
            }
            return this.rulesClass || 'rules-table'
          } else {
            res['rules']['check']['required'] = false
            const someV = res.rules.message.some(item => {return item.row === data.rowIndex})
            if (someV) {
              res.rules.message.forEach(item => {
                if (item.row === data.rowIndex) {
                  item.check = res.rules['check']
                }
              })
            } else {
              res.rules.message.push({
                row: data.rowIndex,
                check: res.rules['check']
              })
            }
            return ''
          }
        }
        // 判断检验规则validatePass, 自定义校验返回格式{ message: '不能为空', required: true }
        if (typeof res['rules']['validate'] === 'function') {
          const check = res['rules']['validate'](data)
          const someV = res.rules.message.some(item => {return item.row === data.rowIndex})
          if (someV) {
            res.rules.message.forEach(item => {
              if (item.row === data.rowIndex) {
                item.check = check
              }
            })
          } else {
            res.rules.message.push({
              row: data.rowIndex,
              check: check
            })
          }
          // 判断required为true则不通过
          if (check.required) {
            return this.rulesClass || 'rules-table'
          }
        }
        return ''
      }
    },
    // 调起copy粘贴方法
    pasteToTable() {
      if (this.locSpan.rowIndex !== -1 && this.inputShow === true) {
        if (event.clipboardData || event.originalEvent) {
          const clipboardData = (event.clipboardData || event.originalEvent.clipboardData)
          const content = clipboardData.getData('Text')
          if (content) {
            // 初始化表格
            this.checkTableData(content)
          }
        }
      }
    },
    // copy excel数据拆分行
    setSplitRow(content) {
      const rows = content.split('\r\n') // 拆成很多行
      this.setSplitCol(rows)
    },
    // 将行数据拆分成行
    setSplitCol(rows) {
      // 判断在第几行
      let rowIndex = Number(this.locationSpan.rowIndex)
      for (const index in rows) {
        const item = rows[index]
        // 判断
        if (item) {
          const columns = item.split('\t')
          const obj = {}
          // 判断列是否存在
          let columnIndex = Number(this.locationSpan.columnIndex) - 1
          for (const i in this.tableColumn) {
            // 初始化单个数据
            obj[this.tableColumn[columnIndex]] = ''
            if (columnIndex <= (this.tableColumn.length - 1)) {
              if (this.tableData[rowIndex]) {
                this.tableData[rowIndex][this.tableColumn[columnIndex]] = columns[i] || this.tableData[rowIndex][this.tableColumn[columnIndex]]
              } else {
                obj[this.tableColumn[columnIndex]] = columns[i]
              }
            }
            columnIndex++
          }
          // 判断是否有数据有就直接插入
          if (!this.tableData[rowIndex]) {
            this.tableData.push(obj)
          }
          rowIndex++
        }
      }
      this.addTableAll()
      this.resetSpan()
    },
    // 监测数组是否有数据
    checkTableData(content) {
      this.setSplitRow(content)
    },
    // 展开组件
    onClickColumn(row) {
      this.locationSpan = {
        rowIndex: row.row.index,
        columnIndex: row.column.index
      }
      this.inputShow = false
      this.$nextTick(() => {
        const itemList = {
          inputItem: document.getElementsByClassName('input-item'),
          selectItem: document.getElementsByClassName('select-item'),
          dateItem: document.getElementsByClassName('date-item'),
        }
        for (let i in itemList) {
          const item = itemList[i]
          if (item.length) {
            if (i === 'inputItem') {
              const inputItem = item[0].getElementsByClassName('el-input__inner')
              if (inputItem.length) {
                inputItem[0].style.height = this.cellHeight
                break
              } else {
                item[0].getElementsByClassName('el-textarea__inner')[0].style.height = this.cellHeight
                break
              }
            } else {
              item[0].getElementsByClassName('el-input__inner')[0].style.height = this.cellHeight
              break
            }
          }
        }
      }, 50)
    },
    onCellClick(row, column, cell, event) {
      this.cellHeight = cell.offsetHeight + 'px'
      const arr = this.tableColumns.filter(item => item.prop === column.property)
      if (this.readyTable || arr[0]['ready']) {
        return
      }
      this.locSpan = {
        rowIndex: row.index,
        columnIndex: column.index
      }
      this.locationSpan = {
        rowIndex: row.index,
        columnIndex: column.index
      }
      this.pasterText = row[column.property]
      this.inputShow = true
      this.$nextTick(() => {
        const paster = document.getElementsByClassName('paster-text')[0]
        const textarea = paster.getElementsByClassName('el-textarea__inner')
        const input = paster.getElementsByClassName('el-input__inner')[0]
        if (textarea.length) {
          textarea[0].style.height = this.cellHeight
        }
        if (input) {
          input.style.height = this.cellHeight
        }
      })
    },
    // 重置组件选择
    resetSpan() {
      this.locationSpan = {
        rowIndex: -1,
        columnIndex: -1
      }
      this.locSpan = {
        rowIndex: -1,
        columnIndex: -1
      }
    },
    // 加入tableData
    addTableAll() {
      // 当回退参数是初始化-1时
      if (this.withdraw === -1) {
        this.tableWithdrawDataAll.push(JSON.stringify(this.tableData))
        // 如果回退参数集合大于最大值，自动前推一位（删掉第一位）
        if (this.tableWithdrawDataAll.length >= this.tableAllMax) {
          this.tableWithdrawDataAll.shift()
        }
      } else {
        // 当已操作回退到第N位时，再操作表格，删掉回退位置到最末尾一位
        this.tableWithdrawDataAll.splice(this.withdraw + 1, this.tableWithdrawDataAll.length - 1)
        this.tableWithdrawDataAll.push(JSON.stringify(this.tableData))
      }
      this.withdraw = -1
    },
    // 组件完成之后
    onSetColumnVal(row, newVal, oldVal, type) {
      this.tableData[Number(this.locationSpan.rowIndex)][row.prop] = newVal
      this.addTableAll()
      this.$emit('onSaveTable', this.tableData)
      // this.resetSpan()
    },
    onCloseOpenInput() {
      this.resetSpan()
    },
    // 点击隐藏
    onClickPasterText() {
      if (this.inputShow) {
        this.resetSpan()
      }
    },
    // 校验弹窗
    validateTable(callback) {
      if (typeof callback === 'function') {
        let valid = true
        this.isShowRulesMessage = false
        const tableColumns = this.tableColumns.filter(item => item['rules'])
        for (let i in tableColumns) {
          const item = tableColumns[i]
          if (item.rules?.message) {
            const message = item.rules.message.some(res => {
              return res.check.required
            })
            if (message) {
              this.isShowRulesMessage = true
              valid = false
              break
            }
          }
        }
        return callback(valid)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/
.el-table .el-table__row{
  .warning-row {
    background: #fdf7e6 !important;
  }
  .rules-table{
    border: 1px solid red;
  }
}
.el-excel-table {
  /deep/
  .el-table .el-table__row{
    .el-table__cell{
      padding: 0px!important;
    }
    td{
      padding: 0px!important;
    }
  }
  /deep/
  .el-table .el-table__row .cell{
    padding: 0px!important;
  }
}
/deep/
.paster-text{
  .el-input__inner, .el-textarea__inner{
    border:1px dashed #409EFF!important;
    outline: 0;
  }
}
</style>
