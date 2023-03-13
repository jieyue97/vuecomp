<template>
  <div>
    <div v-clickoutside="onSetColumnVal">
      <!--input输入框选择器-->
      <el-input
        v-if="setType(itemRow) === 1"
        ref="elInput"
        v-model="columnVal"
        v-bind="valBind"
        class="input-item"
        v-on="valOn"/>
      <!--select选择器-->
      <el-select
        v-if="setType(itemRow) === 2"
        ref="elInput"
        v-model="columnVal"
        v-bind="valBind"
        class="select-item"
        style="width: 100%"
        @clear="onchange"
        v-on="valOn">
        <el-option
          v-for="item in optionList"
          :key="item[selectOption.value]"
          :label="item[selectOption.label]"
          :value="item[selectOption.value]"/>
      </el-select>
      <!--日期选择器-->
      <el-date-picker
        v-if="setType(itemRow) === 3"
        ref="elInput"
        class="date-item"
        v-model="columnVal"
        v-bind="valBind"
        style="width: 100%"
        v-on="valOn"/>
    </div>
  </div>

</template>

<script>
import Clickoutside from 'element-ui/src/utils/clickoutside'
export default {
  name: 'ColumnType',
  directives: { Clickoutside },
  props: {
    propName: {
      type: [Number, String, Object, Boolean],
      default: () => {
        return null
      }
    },
    itemRow: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 更改select传参
    selectProp: {
      type: Object,
      default: () => {
        return {
          value: 'value',
          label: 'label'
        }
      }
    }
  },
  data() {
    return {
      columnVal: null,
      selectOption: {
        value: 'value',
        label: 'label'
      },
      valueType: 'input',
      editorData: {
        input: {
          bind: {
            type: 'text',
            size: 'mini'
          },
          on: {
            blur: () => {
              this.onSetColumnVal()
            }
          }
        },
        select: {
          optionList: [],
          bind: {
            placeholder: '请选择',
            size: 'mini',
            clearable: true,
            filterable: true
          },
          on: {
            blur: () => {
              setTimeout(() => {
                this.onCloseOpenInput()
              }, 300)
            },
            change: () => {
              this.onchange()
            }
          }
        },
        date: {
          bind: {
            type: 'date',
            placeholder: '选择日期',
            align: 'right',
            size: 'mini',
            'value-format': 'yyyy-MM-dd',
            clearable: true
          },
          on: {
            change: () => {
              this.onchangeDate()
            },
            blur: () => {
              this.onCloseOpenInput()
            }
          }
        }
      },
      valBind: {},
      valOn: {},
      optionList: [],
      dateFilterDate: [/^((?:19|20)\d\d)\.([1-9]|0[1-9]|1[012])\.([1-9]|0[1-9]|[12][0-9]|3[01])$/, /^((?:19|20)\d\d)\/([1-9]|0[1-9]|1[012])\/([1-9]|0[1-9]|[12][0-9]|3[01])$/, /^((?:19|20)\d\d)-([1-9]|0[1-9]|1[012])-([1-9]|0[1-9]|[12][0-9]|3[01])$/]
    }
  },
  computed: {
    setType() {
      return (row) => {
        if (!row['editorType'] || row['editorType'] === 'input') {
          return 1
        }
        if (row['editorType'] === 'select') {
          return 2
        }
        if (row['editorType'] === 'date') {
          return 3
        }
        return 1
      }
    },
    setSelect() {
      return (name, data, prop, valType) => {
        const list = data.filter(item => item[prop.label] === name)
        if (list.length) {
          return list[0][prop.value]
        }
        return ''
      }
    },
    setServeSelect() {
      return (value, data, prop, valType) => {
        if (value) {
          return data.filter(item => item[prop.value] === value)[0][prop.label]
        }
        return ''
      }
    },
    setDateFilter() {
      return (name, typeList) => {
        let val = ''
        for (const i in typeList) {
          const item = typeList[i]
          if (item.test(name)) {
            val = Number(i) === 0 ? name.replace(/\./g, '-') : Number(i) === 2 ? name : name.replace(/\//g, '-')
            break
          }
        }
        if (val) {
          const list = val.split('-')
          // 补零
          for (let i in list) {
            if (list[i].length === 1) {
              list[i] = '0' + list[i]
            }
          }
          val = list.join('-')
        }
        return val
      }
    }
  },
  created() {
    this.selectOption = { ...this.selectOption, ...this.selectProp }
    // 初始化选择类型
    this.valueType = this.itemRow['editorType'] || 'input'
    // v-bind  v-on 初始化
    this.valBind = this.editorData[this.valueType].bind
    this.valOn = this.editorData[this.valueType].on
    if (this.itemRow['editorValue']) {
      // v-bind  v-on 初始化
      this.valBind = Object.assign(this.valBind, this.itemRow['editorValue']['bind'] || {})
      this.valOn = Object.assign(this.valOn, this.itemRow['editorValue']['on'] || {})
      // select选择器初始化
      this.optionList = this.itemRow['editorValue']['optionList'] || []
    }
    this.columnVal = this.propName
    if (this.propName && this.valueType === 'select') {
      this.columnVal = this.setSelect(this.propName, this.optionList, this.selectOption, this.selectProp)
    }
    if (this.propName && this.valueType === 'date') {
      this.columnVal = this.setDateFilter(this.propName, this.dateFilterDate)

    }
  },
  mounted() {
    this.inputAutoFocus()
  },
  methods: {
    inputAutoFocus() {
      this.$nextTick(() => {
        this.$refs.elInput.focus()
      })
    },
    onchangeDate() {
      this.$emit('onSetColumnVal', this.itemRow, this.columnVal, this.propName, this.valueType)
    },
    onCloseOpenInput() {
      this.$emit('onCloseOpenInput', this.itemRow, this.columnVal, this.propName, this.valueType)
    },
    onchange() {
      const columnVal = this.setServeSelect(this.columnVal, this.optionList, this.selectOption, this.itemRow)
      this.$emit('onSetColumnVal', this.itemRow, columnVal, this.propName, this.valueType)
    },
    /*
    * itemRow 表头参数
    * columnVal 改变的值
    * propName 改变前的值
    * valueType 类型
    * */
    onSetColumnVal() {
      if (this.valueType === 'input') {
        this.$emit('onSetColumnVal', this.itemRow, this.columnVal, this.propName, this.valueType)
        this.onCloseOpenInput()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
