<!-- 自定义表单 -->
<template>
  <el-form ref="formEle" v-bind="$attrs" :model="formVal" :rules="formRules" :validate-on-rule-change="false" class="gd_form-col" :size="size">
    <el-row>
      <!-- 额外补充插槽 -->
      <slot name="headExtend"></slot>
      <template v-for="(item, index) in formSetting">
        <el-col :key="index" :span="colList[index]" :offset="item['offset']">
          <el-form-item v-bind="{ ...item['form-item-props'] }">
            <!-- el-form-item的title插槽 -->
            <template #label>
              <div style="display: flex">
                <div :title="item.label" class="form-item-label" :class="{ textAlignLeft: item.textAlignLeft }">
                  <span v-if="isRequired(item.key)" style="color: #f56c6c; margin-right: 4px">*</span>
                  <span>{{ showLabel ? item.label : '' }}</span>
                </div>
                <span v-if="$attrs['label-suffix'] && item['form-item-props']['label-width'] !== '0px'">{{ $attrs['label-suffix'] }}</span>
              </div>
            </template>
            <!-- 插槽 -->
            <slot v-if="item.formslot" :name="item['form-item-props']['prop']"></slot>
            <!-- component是String类型 -->
            <template v-else-if="typeof item.renderType === 'string'">
              <!-- component是select类型 -->
              <template v-if="item.renderType === 'select'">
                <el-select
                  v-model="formVal[item.key]"
                  :style="{ width: item.width }"
                  v-bind="{
                    placeholder: showLabel ? '请选择...' : item.label,
                    clearable: item.clearable,
                    ...(item.props || {}),
                  }"
                  v-on="item.events"
                >
                  <!-- select option的全部选项 -->
                  <el-option v-if="item.showAll" label="全部" value="%all%"></el-option>
                  <!-- select option的字典选项 -->
                  <template v-if="item.dictionary">
                    <template v-if="dictionary[item.dictionary]">
                      <el-option
                        v-for="it in dictionary[item.dictionary]"
                        :key="it.code"
                        v-bind="{
                          label: it.text,
                          value: it.code,
                          [item.props.optsDisable ? 'disabled' : 'xxdisabledxx']: (item.props.optsDisable || []).includes(it.code),
                        }"
                      ></el-option>
                    </template>
                    <el-option v-else value="%error%" :label="`还未配置字典项${item.dictionary}`"></el-option>
                  </template>
                  <!-- select option的自定义选项 -->
                  <template v-if="item.options">
                    <el-option
                      v-for="it in item.options"
                      :key="it.code"
                      v-bind="{
                        label: it.text,
                        value: it.code,
                        [item.props.optsDisable ? 'disabled' : 'xxdisabledxx']: (item.props.optsDisable || []).includes(it.code),
                      }"
                    ></el-option>
                  </template>
                </el-select>
              </template>

              <!-- component是date-picker类型 -->
              <template v-else-if="item.renderType === 'date-picker'">
                <el-date-picker
                  :style="{ width: item.width }"
                  v-model="formVal[item.key]"
                  v-bind="{
                    type: 'daterange',
                    'value-format': 'yyyy-MM-dd',
                    'range-separator': '至',
                    'start-placeholder': '开始日期',
                    'end-placeholder': '结束日期',
                    align: 'right',
                    clearable: item.clearable,
                    ...(item.props || {}),
                  }"
                  v-on="item.events"
                ></el-date-picker>
              </template>
              <template v-else-if="item.renderType === 'date-time'">
                <el-date-picker
                  :style="{ width: item.width }"
                  v-model="formVal[item.key]"
                  type="datetime"
                  placeholder="选择日期时间"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-bind="{
                    clearable: item.clearable,
                    ...(item.props || {}),
                  }"
                  v-on="item.events"
                ></el-date-picker>
              </template>

              <!-- component是date-single类型 -->
              <template v-else-if="item.renderType === 'date-single'">
                <el-date-picker
                  :style="{ width: item.width }"
                  v-model="formVal[item.key]"
                  v-bind="{
                    type: 'date',
                    'value-format': 'yyyy-MM-dd',
                    'range-separator': '至',
                    placeholder: '开始时间',
                    align: 'right',
                    clearable: item.clearable,
                    ...(item.props || {}),
                  }"
                  v-on="item.events"
                ></el-date-picker>
              </template>
              <!-- component是date-single类型 -->
              <template v-else-if="item.renderType === 'datetimerange'">
                <el-date-picker
                  :style="{ width: item.width }"
                  v-model="formVal[item.key]"
                  v-bind="{
                    type: 'datetimerange',
                    'value-format': 'yyyy-MM-dd HH:mm:ss',
                    'range-separator': '至',
                    'start-placeholder': '开始日期',
                    'end-placeholder': '结束日期',
                    align: 'right',
                    clearable: item.clearable,
                    ...(item.props || {}),
                  }"
                  v-on="item.events"
                ></el-date-picker>
              </template>
              <template v-else-if="item.renderType === 'input-number'">
                <el-input-number
                  :style="{ width: item.width }"
                  v-model.trim="formVal[item.key]"
                  v-bind="{
                    placeholder: showLabel ? '请输入...' : item.label,
                    clearable: item.clearable,
                    ...(item.props || {}),
                  }"
                  v-on="item.events"
                ></el-input-number>
              </template>
              <template v-else>
                <el-input
                  :style="{ width: item.width }"
                  v-model.trim="formVal[item.key]"
                  v-bind="{
                    placeholder: showLabel ? '请输入...' : item.label,
                    clearable: item.clearable,
                    ...(item.props || {}),
                  }"
                  v-on="item.events"
                >
                  <i v-if="item.slotSuffix" slot="suffix" :class="[item.class]">{{ item.slotSuffixLabel }}</i
                  ><template slot="append" v-if="item.slotAppend">{{ item.slotAppend }}</template></el-input
                >
              </template>
            </template>

            <!-- component是Vue类型 -->
            <template v-else>
              <!-- {{ formVal[item.key] }} -->
              <component :is="item.component" :ref="item.key" v-model="formVal[item.key]" v-bind="item.props || {}" v-on="item.events"></component>
            </template>
          </el-form-item>
        </el-col>
      </template>

      <!-- 额外补充插槽 -->
      <slot name="footExtend"></slot>
    </el-row>
  </el-form>
</template>

<script>
/**
 * @description 配置生成Form
 * @prop setting, Array, formEle的配置数组，配置细节看demo.js
 * @prop showLabel, Boolean, form每项是否显示label
 * @tip
 * 1. 方法eleActiveFunc可提供给自定义vue的component统一执行某个方法
 * 2. 方法setFormVal可设置返回的对象参数内容
 * 3. 方法reset可重置返回的对象为空
 */

export default {
  props: {
    dictionary: {
      type: Object,
      default: () => {},
    },
    setting: {
      type: Array,
      default: () => [],
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  name: 'GdCustomForm',
  data: () => ({
    formVal: {},
    nullKeyList: ['%all%', '%error%'],
    defaultFormVal: {},
  }),
  computed: {
    formSetting() {
      return this.setting
        .filter((item) => item.key && item.component)
        .map((item) => ({
          ...item,
          renderType: this.getComponentType(item.component),
          props: {
            disabled: (this.$attrs && this.$attrs.disabled) || item.disabled || false,
            ...item.props,
          },
          'form-item-props': {
            ...(item['form-item-props'] || {}),
            class: this.getFormItemClass(item),
            'label-width': `${this.getLabelWidth(item)}px`,
            prop: item.key,
          },
          events: {
            ...this.funcBindThis(item.events),
            input: (val) => {
              if (item && item.events && item.events.input) {
                const baseInputFunc = item.events.input.bind(this)
                baseInputFunc()
              }
              this.callUpdateFormVal(item && item.key, val)
            },
          },
        }))
    },
    formRules() {
      return this.formSetting.reduce((total, current) => {
        const { key, rules } = current
        if (rules && rules.length) {
          total[key] = rules
        }
        return total
      }, {})
    },
    colList() {
      const cols = this.formSetting.map((item) => item.col || 0).map((num) => parseInt(num, 10))
      const notZeroList = cols.filter((num) => num)
      if (cols.length === notZeroList.length) {
        return notZeroList
      }
      const notZero = notZeroList.reduce((total, current) => {
        return total + current
      }, 0)
      const mean = (24 - notZero) / (cols.length - notZeroList.length)
      return cols.map((num) => num || mean)
    },
  },
  watch: {
    formVal: {
      handler(newName, oldName) {
        if (Object.keys(newName).length !== 0) {
          Object.keys(newName).forEach((key) => {
            this.$emit('updateKey', key, newName[key])
          })
        }
      },
      deep: true,
    },
    '$attrs.value': function (newVal) {
      const nullObj = Object.keys(this.formVal).reduce((total, key) => {
        if (this.nullKeyList.includes(this.formVal[key])) {
          total[key] = this.formVal[key]
        }
        return total
      }, {})
      if (typeof newVal === 'string') {
        newVal = {
          formId: newVal,
        }
      }
      this.formVal = {
        ...this.defaultFormVal,
        ...nullObj,
        ...(newVal || {}),
      }
    },
  },
  created() {
    this.setDefaultVal()
  },
  methods: {
    // 获取表单ref
    getFormRef() {
      return this.$refs.formEle
    },
    // 动态获取label字段长度
    getLabelWidth({ label, ...other }) {
      // 不显示label
      if (!this.showLabel) {
        return 0
      }
      // 子项有设置label-width
      if (Object.prototype.hasOwnProperty.call(other, 'form-item-props') && Object.prototype.hasOwnProperty.call(other['form-item-props'], 'label-width')) {
        return other['form-item-props']['label-width'].toString().replace(/[^0-9]/g, '')
      }
      // el-form有设置label-width
      if (this.$attrs['label-width']) {
        return this.$attrs['label-width'].toString().replace(/[^0-9]/g, '')
      }
      // 自动生成label-width
      const length = label.length
      return length * 20
    },
    // 获取样式
    getFormItemClass({ label, ...other }) {
      const isLabelWidthEquO =
        Object.prototype.hasOwnProperty.call(other, 'form-item-props') &&
        Object.prototype.hasOwnProperty.call(other['form-item-props'], 'label-width') &&
        parseInt(other['form-item-props']['label-width'], 10) === 0
      return {
        'empty-label-form-item': !this.showLabel || isLabelWidthEquO,
      }
    },
    // 获取component类型
    getComponentType(comp) {
      if (typeof comp === 'string') {
        const strList = ['input', 'select', 'date-picker', 'date-time']
        const startStr = 'el-'
        if (strList.some((str) => [str, `${startStr}${str}`].includes(comp.toLowerCase()))) {
          return comp.replace(startStr, '').toLowerCase()
        }
      }

      return comp
    },
    // 格式化结果
    getFormVal(data) {
      const queryForm = Object.keys(data).reduce((total, current) => {
        if (!this.nullKeyList.includes(data[current])) {
          total[current] = data[current]
        }
        return total
      }, {})
      return queryForm
    },
    // 事件绑定this
    funcBindThis(obj) {
      const funcObj = obj || {}
      const keys = Object.keys(funcObj)
      return keys.reduce((total, current) => {
        total[current] = funcObj[current].bind(this)
        return total
      }, {})
    },
    // 设置formVal的key，val
    setFormVal(key, val) {
      this.formVal[key] = val
      this.$emit('input', this.getFormVal(this.formVal))
    },
    // 获取类型
    getPrototypeType(val) {
      return /^\[object ([a-zA-Z]+)\]$/.test(Object.prototype.toString.call(val)) && RegExp.$1
    },
    // 为vue组件执行方法
    eleActiveFunc(funcName) {
      // eslint-disable-next-line
      const { formEle, ...otherRefs } = this.$refs
      Object.values(otherRefs).forEach((ele) => {
        if (Array.isArray(ele)) {
          ele.forEach((el) => {
            if (this.getPrototypeType(el[funcName]) === 'Function') {
              el[funcName]()
            }
          })
        } else {
          if (this.getPrototypeType(ele[funcName]) === 'Function') {
            ele[funcName]()
          }
        }
      })
    },
    // 重置结果
    reset() {
      this.eleActiveFunc('reset')
      this.getFormRef().resetFields()
      const defaultVal = this.getFormVal(this.defaultFormVal)
      this.$emit('input', defaultVal)
    },
    // 设置初始值
    setDefaultVal() {
      const defaultFormVal = this.formSetting
        .filter((item) => {
          return item.key && item.component && (item.default || this.$attrs.value[item.key])
        })
        .reduce((total, current) => {
          const { key, default: defaultVal } = current
          total[key] = defaultVal || this.$attrs.value[key]
          return total
        }, {})
      this.formVal = defaultFormVal
      this.defaultFormVal = JSON.parse(JSON.stringify(defaultFormVal))
    },
    // 子更新值时提醒更新
    callUpdateFormVal(key, val) {
      this.setFormVal(key, val)
      this.$emit('updateKey', key, val)
    },
    // 表单校验
    validate(cbFunc) {
      if (cbFunc) {
        return this.getFormRef().validate(cbFunc)
      }
      return this.getFormRef().validate()
    },
    // 判断是否是必填项
    isRequired(key) {
      const rule = this.formRules[key]
      if (rule && rule.find((it) => it.required === true)) {
        return true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.gd_form-col {
  padding: 20px 10px 0;
  .el-col {
    & > * {
      width: 100%;
    }
    span {
      font-size: 14px;
    }
  }

  & > .el-button:first-of-type {
    margin-left: 20px;
  }

  .empty-label-form-item {
    padding-left: 30px;
    /deep/ .el-form-item__content {
      width: 100% !important;
      padding-left: 30px;
    }
  }
  /deep/ .el-form-item__label {
    .textAlignLeft {
      text-align: left;
    }
    &::before {
      display: none;
    }
  }

  /deep/ .form-item-label {
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
  }

  /deep/ .el-form-item__content {
    & > :first-child {
      width: 100%;
    }
  }
}
</style>
