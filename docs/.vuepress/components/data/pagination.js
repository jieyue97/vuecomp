const arr = [
  {
    title: '属性',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'small',
        desc: '是否使用小型分页样式',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'fasle'
      },
      {
        name: 'background',
        desc: '是否为分页按钮添加背景色',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'page',
        desc: '当前页数',
        paramsType: 'number',
        value: '--',
        defaultValue: '1'
      },
      {
        name: 'limit',
        desc: '每页显示条目个数',
        paramsType: 'number',
        value: '--',
        defaultValue: '10'
      },
      {
        name: 'pageSizes',
        desc: '每页显示个数选择器的选项设置',
        paramsType: 'array',
        value: '--',
        defaultValue: '[5, 10, 20, 30, 50]'
      },
      {
        name: 'layout',
        desc: '组件布局，子组件名用逗号分隔',
        paramsType: 'string',
        value: 'total, prev, pager, next, sizes, jumper',
        defaultValue: 'total, prev, pager, next, sizes, jumper'
      },
      {
        name: 'hidden',
        desc: '是否显示分页',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'textAlight',
        desc: '组件位置,左,中,右',
        paramsType: 'string',
        value: 'left,center,right',
        defaultValue: 'right'
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
      { prop: 'desc', label: '说明' },
      { prop: 'paramsType', label: '回调参数' }
      // { prop: 'value', label: '可选值' },
      // { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'pagination',
        desc: '当前页数以及条数发生改变会触发',
        paramsType: '页数,条数,target:done/wait,done 则是页数发生变化,wait 是条数发生变化'
        // value: '--',
        // defaultValue: '--'
      }
      // {
      //   name: 'label',
      //   desc: '当前步骤描述',
      //   paramsType: 'string',
      //   // value: '--',
      //   // defaultValue: '--'
      // }
    ]
  }
]

module.exports = arr
