const arr = [
  {
    title: '属性',
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
        name: 'selectAll',
        desc: '多选的时候提供全选',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'fasle'
      },
      {
        name: 'data',
        desc: '树结构数据',
        paramsType: 'Array',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'render-content',
        desc: '树节点的内容区的渲染 Function',
        paramsType: 'Function(h, { node, data, store }',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'obj',
        desc: '配置选项，具体看下表',
        paramsType: 'object',
        value: '--',
        defaultValue: '{ id: "", pid: "",label: "", children: ""}'
      },
      {
        name: 'filterable',
        desc: '配置是否可以搜索',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'placeholder',
        desc: '输入框占位值',
        paramsType: 'string',
        value: '--',
        defaultValue: '请选择'
      },
      {
        name: 'multiple',
        desc: '配置是否可多选还是单选',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'clearable',
        desc: '配置是否可清空选择',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'fasle'
      },
      {
        name: 'collapseTags',
        desc: '配置多选时是否将选中值按文字的形式展示',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'checkStrictly',
        desc: '显示复选框情况下，是否严格遵循父子不互相关联',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'checkClickNode',
        desc: '多选是设置点击节点是否可以选中',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'expandClickNode',
        desc: '多选时：点击节点展开还是点三角标',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'defaulexpand',
        desc: '默认展开全部节点',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'defaultKey',
        desc: '默认选中的节点key',
        paramsType: 'number, string, array, object',
        value: '--',
        defaultValue: '[]'
      },
      {
        name: 'size',
        desc: '下拉框大小',
        paramsType: 'string',
        value: 'medium ,mini ,small',
        defaultValue: 'small'
      },
      {
        name: 'width',
        desc: '宽度',
        paramsType: 'string',
        value: '--',
        defaultValue: '100%'
      },
      {
        name: 'height',
        desc: '高度',
        paramsType: 'string',
        value: '--',
        defaultValue: '300px'
      },
      {
        name: 'curValue',
        desc: '回显展示',
        paramsType: 'string',
        value: '--',
        defaultValue: ''
      },
      {
        name: 'disable',
        desc: '禁用',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      }
    ]
  },
  {
    title: 'obj 配置',
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
        name: 'label',
        desc: '指定节点标签为节点对象的某个属性值',
        paramsType: 'string',
        value: '',
        defaultValue: '--'
      },
      {
        name: 'children',
        desc: '指定子树为节点对象的某个属性值',
        paramsType: 'string',
        value: '',
        defaultValue: '--'
      },
      {
        name: 'id',
        desc: '指定子树为节点对象的绑定id',
        paramsType: 'string',
        value: '',
        defaultValue: '--'
      },
      {
        name: 'pid',
        desc: '指定子树为节点对象的对应的父级id',
        paramsType: 'string',
        value: '',
        defaultValue: '--'
      }
    ]
  }
]

module.exports = arr
