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
        name: 'title',
        desc: '标题文字',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'isRight',
        desc: '右边是否有内容',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'bgColor',
        desc: '背景色',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'colSpan',
        desc: '右边内容宽度分配',
        paramsType: 'number',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'leftType',
        desc: '左边内容边框展示',
        paramsType: 'string',
        value: 'primary/success/info/warning/danger',
        defaultValue: '--'
      },
      {
        name: 'isPadding',
        desc: '是否关掉 padding',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'true'
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
      { prop: 'desc', label: '说明' }
      // { prop: 'paramsType', label: '类型' },
      // { prop: 'value', label: '可选值' },
      // { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'name',
        desc: '说明'
        // paramsType: 'string',
        // value: '--',
        // defaultValue: '--'
      },
      {
        name: 'label',
        desc: '定义标题内容，内容可为 el-input,、el-select、el-button 等组件或文字，参数 title 将无效'
        // paramsType: 'string',
        // value: '--',
        // defaultValue: '--'
      },
      {
        name: 'isRight',
        desc: '定义标题内容，内容可为 el-input、el-select、el-button 等组件或文字'
        // paramsType: 'string',
        // value: '--',
        // defaultValue: '--'
      }
      // {
      //   name: 'footer',
      //   desc: '定义底部内容',
      //   paramsType: 'string',
      //   value: '--',
      //   defaultValue: '--'
      // }
    ]
  }
]

module.exports = arr
// **插槽**

// | name | 说明 |
// | label | 定义标题内容，内容可为 el-input,、el-select、el-button 等组件或文字，参数 title 将无效 |
// | isRight| 定义标题内容，内容可为 el-input、el-select、el-button 等组件或文字 |
