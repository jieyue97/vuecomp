const arr = [
  {
    title: '属性',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数', width: '150px' },
      { prop: 'desc', label: '说明' },
      { prop: 'paramsType', label: '类型', width: '150px' },
      { prop: 'value', label: '可选值', width: '150px' },
      { prop: 'defaultValue', label: '默认值', width: '100px' }
    ],
    //内容
    tableData: [
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
        defaultValue: '100%'
      },
      {
        name: 'option',
        desc: 'echarts 配置项,当 option 数据发生改变时无需手动刷新 echart,已经内置刷新数据具体可浏览 echart 官网:https://echarts.apache.org/zh/index.html',
        paramsType: 'object,function',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'loading',
        desc: '是否显示 loading 效果',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'map',
        desc: '注册 echart 地图',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'specialAreas',
        desc: 'GeoJson 格式的数据,具体格式见 https://geojson.org/。可以是 JSON 字符串，也可以是解析得到的对象。这个参数也可以写为 geoJson，效果相同',
        paramsType: 'object',
        value: '--',
        defaultValue: '--'
      }
    ]
  },
  {
    title: '方法',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数', width: '150px' },
      { prop: 'desc', label: '说明' }
      // { prop: 'paramsType', label: '类型' },
      // { prop: 'value', label: '可选值' },
      // { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'clear',
        desc: '清空当前实例，会移除实例中所有的组件和图表。清空后调用 getOption 方法返回一个{}空对象'
        // paramsType: 'string',
        // value: '--',
        // defaultValue: '--'
      },
      {
        name: 'dispatchAction',
        desc: '触发图表行为，例如图例开关 legendToggleSelect, 数据区域缩放 dataZoom，显示提示框 showTip 等等，更多见 action 和 events 的文档'
        // paramsType: 'string',
        // value: '--',
        // defaultValue: '--'
      },
      {
        name: 'click, dbclick, mousedown, mouseup, ...',
        desc: '请参考 echart 方法事件'
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
