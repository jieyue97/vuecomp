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
        name: 'showIframe',
        desc: '是否显示 iframe',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'src',
        desc: '嵌套iframe地址,自带中文转义',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'token',
        desc: 'iframetoken 需要传入的话直接传即可自动拼接',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'iframeStyle',
        desc: 'ifarme 组件样式',
        paramsType: 'object',
        value: '--',
        defaultValue: "{border: 'none',width: '100px',height: '100px'}"
      }
    ]
  }
]

module.exports = arr
