const arr = [
  {
    title: '属性',
    subtitle: '兼容 el-form 的所有参数, 若不设置 label-width 则会通过 label 长度自动计算宽度',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'setting',
        desc: '传入表单数组,详细请看 setting 属性配置',
        paramsType: 'array',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'dictionary',
        desc: '表单内嵌的字典数据,对应 dictionary 的字段',
        paramsType: 'object',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'showLabel',
        desc: '是否显示表单 label ',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'size',
        desc: '用于控制该表单内组件的尺寸',
        paramsType: 'string',
        value: 'medium、small、mini ',
        defaultValue: 'medium'
      }
    ]
  },
  {
    title: 'setting 参数配置',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'key',
        desc: '组件对应的结果 code, 必填 ',
        paramsType: 'string',
        value: '',
        defaultValue: '--'
      },
      {
        name: 'label',
        desc: '组件需要展示的 label',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'default',
        desc: '初始值',
        paramsType: 'string',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'col',
        desc: '组件需要配置的布局大小，0~24, 若 0 则把每个组件平均分',
        paramsType: 'number',
        value: '0~24',
        defaultValue: '0'
      },
      {
        name: 'component',
        desc: '组件需要展示的内容， 可传入 String 或 Vue 对象,Vue 模式直接赋予引用的 Vue 组件, 必填',
        paramsType: 'string/vue',
        value: 'input, select, date-picker, el-input, el-select, el-date-picker,data-single,date-time ',
        defaultValue: '--'
      },
      {
        name: 'props',
        desc: '需要传递给组件 component 的参数，即 ele 组件的属性',
        paramsType: 'object',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'showAll',
        desc: '当组件为 select 时，是否有全部这个选项',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'dictionary',
        desc: '当组件为 select 时，选项所对应的字典项值,对应匹配属性 dictionary 的 key',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'options',
        desc: '当组件为 select 时，选项自定义，[{ code, text }]',
        paramsType: 'array',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'events',
        desc: '为组件绑定的事件, key:func 形式, 必须使用 function 方法非=>, 可调用 this, this 指向 FormCutsom',
        paramsType: 'key: function() {}',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'rules',
        desc: '组件的校验规则，参考 el-form 的检验规则 ',
        paramsType: 'array',
        value: '--',
        defaultValue: '--'
      },
      {
        name: '"form-item-props"',
        desc: '组件对应的 form-item 的参数',
        paramsType: 'object',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'textAlignLeft',
        desc: 'label 是否左对齐',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'width',
        desc: '表单选项宽度',
        paramsType: 'string',
        value: '--',
        defaultValue: '100%'
      }
    ]
  },
  {
    title: '插槽',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      //序号 index  复选框 selection
      // { type: 'selection' },
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明' }
      // { prop: 'paramsType', label: '类型' },
      // { prop: 'value', label: '可选值' },
      // { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'headExtend',
        desc: '头部额外补充的插槽',
        paramsType: '--',
        value: '-',
        defaultValue: '-'
      },
      {
        name: 'footExtend',
        desc: '尾部额外补充的插槽',
        paramsType: '--',
        value: '-',
        defaultValue: '-'
      }
    ]
  },
  {
    title: '方法',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      //序号 index  复选框 selection
      // { type: 'selection' },
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明' }
      // { prop: 'paramsType', label: '类型' },
      // { prop: 'value', label: '可选值' },
      // { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'eleActiveFunc',
        desc: '可提供给自定义 vue 的 component 统一执行某个方法',
        paramsType: '--',
        value: '-',
        defaultValue: '-'
      },
      {
        name: 'setFormVal',
        desc: '可设置返回的对象参数内容',
        paramsType: '--',
        value: '-',
        defaultValue: '-'
      },
      {
        name: 'reset',
        desc: '可重置返回的对象为空',
        paramsType: '--',
        value: '-',
        defaultValue: '-'
      }
    ]
  }
]

module.exports = arr
