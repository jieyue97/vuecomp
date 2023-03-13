const arr = [
  {
    title: '属性',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      //序号 index  复选框 selection
      // { type: 'selection' },
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'iconRadiuColor',
        desc: '当前步骤的圆环背景颜色',
        paramsType: 'string',
        value: '--',
        defaultValue: 'rgba(230, 162, 60, 0.1)'
      },
      {
        name: 'iconBgColor',
        desc: '当前步骤的 icon 背景颜色',
        paramsType: 'string',
        value: '--',
        defaultValue: '#e6a23c'
      },
      {
        name: 'actvieColor',
        desc: 'iframe当前选中的icon背景颜色以及字体颜色',
        paramsType: 'string',
        value: '--',
        defaultValue: '#007af5'
      },
      {
        name: 'data',
        desc: '传入的数组,配置选项，具体看下表',
        paramsType: 'array',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'current',
        desc: '设置当前激活步骤',
        paramsType: 'number',
        value: '--',
        defaultValue: '0'
      }
    ]
  },
  {
    title: 'data 数组说明',
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
        name: 'icon',
        desc: '图标'
        // paramsType: 'string',
        // value: '--',
        // defaultValue: '--'
      },
      {
        name: 'label',
        desc: '当前步骤描述'
        // paramsType: 'string',
        // value: '--',
        // defaultValue: '--'
      }
    ]
  }
]

module.exports = arr
