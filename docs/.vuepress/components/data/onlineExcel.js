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
        name: 'isIndex',
        desc: '序号',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'tableBind',
        desc: 'el-table表格属性',
        paramsType: 'Object',
        value: '--',
        defaultValue: ` {
          border: true,
          stripe: true,
          'header-cell-style': { background: '#eef1f6', color: '#606266' },
          height: window.innerHeight - 192
        }`
      },
      {
        name: 'tableOn',
        desc: 'el-table表格事件属性',
        paramsType: 'Object',
        value: '--',
        defaultValue: '{}'
      },
      {
        name: 'indexProp',
        desc: 'el-table表格的index属性列',
        paramsType: 'Object',
        value: '--',
        defaultValue: '{}'
      },
      {
        name: 'tableAllMax',
        desc: '// el-table，撤销/恢复最多保存几条数据',
        paramsType: 'Number',
        value: '--',
        defaultValue: 10
      },
      {
        name: 'readyTable',
        desc: '全表只读',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'autoAddCol',
        desc: '增加一行',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'columnsList',
        desc: '表头数据',
        paramsType: 'array',
        value: '--',
        defaultValue: '[]'
      },
      {
        name: 'dataTable',
        desc: '表格数据',
        paramsType: 'array',
        value: '--',
        defaultValue: '[]'
      },
      {
        name: 'readyClass',
        desc: '只读样式',
        paramsType: 'String',
        value: '--',
        defaultValue: ``
      },
      {
        name: 'rulesClass',
        desc: '校验样式',
        paramsType: 'string',
        value: '--',
        defaultValue: ""
      },
      {
        name: 'btnShowList',
        desc: '按钮隐藏/启动参数, 如果列表内含有某个按钮值，某个按钮就是隐藏值',
        paramsType: 'Array',
        value: `['save', 'update', 'withdraw', 'recover', 'add', 'del']`,
        defaultValue: "[]"
      },
      {
        name: 'autoBtnList',
        desc: '自定义按钮',
        paramsType: 'Array',
        value: `[{
          label: '按钮',
          state: true,
          icon: 'el-icon-refresh-right',
          showName: 'recover',
          falseIcon: '',
          onClick: () => {

          }
        }]`,
        defaultValue: "[]"
      },
      {
        name: 'allCellHeight',
        desc: '自定义单元格展示高度',
        paramsType: 'string',
        value: '--',
        defaultValue: ""
      }
    ]
  },
  {
    title: '插槽',
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
        name: 'button',
        desc: '自定义按钮',
        paramsType: 'string',
        value: ``,
        defaultValue: ''
      },
      {
        name: '动态表头',
        desc: `表头prop 值 + _header,示例： this.tableColumns = [{prop: 'date', name: '日期',isTailorMadeHeader: true, tailorMadeHeader: 'datet'}]，此时其中一个自定义表头的<div slot="data_header"></div>,
                tailorMadeHeader, 则是<div slot="datet" ></div>， isTailorMadeHeader是否自定义`,
        paramsType: 'string',
        value: ``,
        defaultValue: '--'
      },
      {
        name: '动态表内容',
        desc: `表头prop 值 + _content,示例： this.tableColumns = [{prop: 'date', name: '日期',isTailorMadeHeader: true, tailorMadeContent: 'datet'}]，此时其中一个自定义表头的<div slot="data_content"></div>,
                如果设置了tailorMadeContent, 则是<div slot="datet" ></div>， isTailorMadeHeader是否自定义`,
        paramsType: 'string',
        value: ``,
        defaultValue: '--'
      }
    ]
  },
  {
    title: '事件',
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
        name: 'onSaveFold',
        desc: '保存节点参数,返回表格的参数tableData, 当前的this',
        paramsType: 'Even',
        value: ``,
        defaultValue: ''
      },
      {
        name: 'onUpdateload/onUpdateLoad',
        desc: '下载当前表格excel',
        paramsType: 'Even',
        value: ``,
        defaultValue: '--'
      },
      {
        name: 'onSaveTable',
        desc: 'date单元格/select单元格选择完成后',
        paramsType: 'Even',
        value: ``,
        defaultValue: '--'
      }
    ]
  }
]

module.exports = arr
