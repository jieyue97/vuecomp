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
        name: 'handle',
        desc: '拖拽句柄元素，默认组件根元素，支持选择器、元素对象和函数，函数必须返回元素对象',
        paramsType: 'String|HTMLElement|Function',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'axis',
        desc: '限制拖拽方向可选: v 垂直、h 水平，默认不限制',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'delay',
        desc: '延时开始拖拽',
        paramsType: 'number',
        value: '100',
        defaultValue: '100'
      },
      {
        name: 'range',
        desc: '限制拖拽范围, 默认不限制, 对象属性包含(left,top,width,height)，函数必须返回这个对象',
        paramsType: 'Object|Function',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'clone',
        desc: '是否克隆拖拽元素, 函数可自定义克隆元素',
        paramsType: 'Boolean|Function',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'revert',
        desc: '拖拽放置后动画返回原来位置，clone为true时才有效',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'disabled',
        desc: '是否禁用拖拽',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: "{border: 'none',width: '100px',height: '100px'}"
      },
      {
        name: 'start',
        desc: '开始拖拽时触发',
        paramsType: '事件',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'move',
        desc: '拖拽中触发',
        paramsType: '事件',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'stop',
        desc: '结束拖拽时触发',
        paramsType: '事件',
        value: '--',
        defaultValue: ''
      }
    ]
  }
]

module.exports = arr
