const arr = [
  {
    title: '树常用的方法',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '功能' },
      { prop: 'desc', label: '用例', align: 'left' },
    ],
    //内容
    tableData: [
      {
        name: '根据甲，找甲的第一个上级',
        desc: 'var pNode=node.findTreeParentNode()',
      },
      {
        descRow: 6,
        name: '根据甲，找甲的所有上级（包括甲）',
        desc: `
      node.findTreeParentChain().each(function(link) { 
        removeLinks.push(link.data)
      }`,
      },
      {
        descRow: 8,
        name: '根据甲，找甲的所有下级（包括甲）',
        desc: `
        node.findTreeParentChain().each(function(link) { 
          removeLinks.push(link.data)
        }`,
      },
      {
        descRow: 5,
        name: '根据甲，找甲的所有第一个下级',
        desc: `
        node.findTreeChildrenNodes().each(function(link) { 
          removeLinks.push(link.data)
        }`,
      },
    ],
  },
]
module.exports = arr
