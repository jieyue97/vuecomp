import Demo from './index.vue'

// 使用样例, 兼容el-form的所有参数, 若不设置label-width则会通过label长度自动计算宽度
// <Demo :setting="props" :show-label="true"></Demo>

const props = [
  {
    // 组件对应的结果code, 必填
    key: '',
    // 组件需要展示的label
    label: '',
    // 初始值,
    default: '',
    // 组件需要配置的布局大小，0~24, 若0则把每个组件平均分
    col: 0,
    // 组件需要展示的内容， 可传入String或Vue对象, 必填
    // String模式支持input, select, date-picker, el-input, el-select, el-date-picker
    // Vue模式直接赋予引用的Vue组件
    component: '',
    // 需要传递给组件component的参数，即ele组件的属性
    props: {},
    // 当组件为select时，是否有全部这个选项
    showAll: false,
    // 当组件为select时，选项所对应的字典项值
    dictionary: '',
    // 当组件为select时，选项自定义，[{ code, text }]
    options: [],
    // 为组件绑定的事件, key:func形式, 必须使用function方法非=>, 可调用this, this指向FormCutsom
    events: {
      key: function() {}
    },
    // 组件的校验规则，参考el-form的检验规则
    rules: [],
    // 组件对应的form-item的参数
    'form-item-props': {}
  },
  // 例子
  {
    key: 'demoInput',
    label: 'inputName',
    col: 0,
    component: 'input',
    props: {}
  },
  {
    key: 'demoVue',
    label: 'vueName',
    component: Demo
  },
  {
    key: 'demoSelect',
    label: 'selectName',
    component: 'select',
    dictionary: 'xxx',
    props: {}
  },
  {
    key: 'demoSelect',
    label: 'selectName',
    component: 'select',
    dictionary: 'xxx',
    props: {},
    options: [{ code: '1', text: '1' }]
  },
  {
    key: 'demoDate',
    label: 'dateName',
    col: 0,
    component: 'date-picker',
    props: {}
  }
]

export default props
