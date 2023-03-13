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
        name: 'size',
        desc: '按键大小',
        paramsType: 'string',
        value: '--',
        defaultValue: 'small'
      },
      {
        name: 'btnName',
        desc: '按键名称以及弹窗名称',
        paramsType: 'string',
        value: '--',
        defaultValue: '分片上传'
      },
      {
        name: 'uploadIp',
        desc: '上传的miniio ip地址',
        paramsType: 'string',
        value: '--',
        defaultValue: 'http://10.3.1.60:9000'
      },
      {
        name: 'actionUrl',
        desc: '分片上传的url地址',
        paramsType: 'string',
        value: '--',
        defaultValue: 'http://10.3.1.60/sys-system/minio/multipart/init-chunk-upload'
      },
      {
        name: 'composeUrl',
        desc: '请求后端合并文件地址',
        paramsType: 'string',
        value: '--',
        defaultValue: 'http://10.3.1.60/sys-system/minio/multipart/compose-file'
      },
      {
        name: 'chunkSize',
        desc: '分片大小 用于判断是否大文件可以分片(单位:kb)',
        paramsType: 'number',
        value: '--',
        defaultValue: '10 * 1024 * 1024'
      },
      {
        name: 'token',
        desc: '分片上传接口需要传的token,默认空',
        paramsType: 'boolean',
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
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'uploadComplete',
        desc: '返回合并上传后的数据,可自行处理业务逻辑',
        paramsType: 'function',
        value: '',
        defaultValue: '--'
      }
    ]
  }
]

module.exports = arr
