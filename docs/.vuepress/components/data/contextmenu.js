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
        name: 'data',
        desc: '树形数组',
        paramsType: 'Array',
        value: '[]',
        defaultValue: '[]'
      },
      {
        name: 'target',
        desc: '触发右键的范围',
        paramsType: '--',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'click',
        desc: '点击事件',
        paramsType: '--',
        value: 'item, vm',
        defaultValue: 'item, vm'
      },
      {
        name: 'topPenetration',
        desc: '击穿顶部',
        paramsType: 'Boolean',
        value: 'false',
        defaultValue: 'false'
      }
    ]
  }
]

module.exports = arr
