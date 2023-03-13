const arr = [
  {
    title: '画布常用的方法',
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
        name: '获取当前画布的json',
        desc: 'myDiagram.model.toJson()',
      },
      {
        name: '加载json刷新画布',
        desc: 'myDiagram.model = go.Model.fromJson(model)',
      },
      {
        name: '删除选中节点或线',
        desc: 'myDiagram.commandHandler.deleteSelection()',
      },
      {
        descRow: 10,
        name: '获取选中的节点或线javascript（myDiagram.selectionht）',
        desc: `
        //用例获取选中的节点或线
        var nodeOrLinkList=myDiagram.selection
        nodeOrLinkList.each(function(nodeOrLink) {
          console.log(nodeOrLink.data)app
        })
        //获取第一个选中的节点或线函数
        var nodeOrLink=myDiagram.selection.first()
        `,
      },
      {
        descRow: 6,
        name: '获取画布全部节点对象设（myDiagram.nodes）',
        desc: `
        var nodes=myDiagram.nodes
        //遍历输出节点对象     
        nodes.each(function (node) {      
          console.log(node.data.text)   
        })`,
      },
    ],
  },
]

module.exports = arr
