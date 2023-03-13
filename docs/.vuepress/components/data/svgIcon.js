const arr = [
  {
    title: '属性',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明' },
      { prop: 'paramsType', label: '类型', width: '150px' },
      { prop: 'value', label: '可选值', width: '150px' },
      { prop: 'defaultValue', label: '默认值', width: '150px' }
    ],
    //内容
    tableData: [
      {
        name: 'iconClass',
        desc: '图标名称，直接在 iconfont 模块复制就可有',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'showType',
        desc: 'show-type 需要的展示形式，iconfont 的话值为 iconfont，svg 的话值为 svg',
        paramsType: 'string',
        value: 'iconfont,svg',
        defaultValue: 'iconfont'
      },
      {
        name: 'iconStyle',
        desc: '图标样式，是个对象',
        paramsType: 'Object',
        value: '',
        defaultValue: '{ width: "2em", height: "2em", color: "" }'
      }
    ]
  }
]

module.exports = arr
