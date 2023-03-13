const arr = [
  {
    title: '节点常用的方法',
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
        name: '添加节点',
        desc: 'myDiagram.model.addNodeData(nodeData)',
      },
      {
        name: '删除节点',
        desc: 'myDiagram.model.removeNodeData(nodeData)',
      },
      {
        name: '选中单个节点（不能批量选中）',
        desc: 'myDiagram.select(node)',
      },
      {
        name: '获取节点对象',
        desc: 'var node=myDiagram.findNodeForKey("key")',
      },
      {
        name: '获取节点data',
        desc: 'var nodeData=myDiagram.model.findNodeDataForKey("key")',
      },
      {
        name: '更改属性值',
        desc: `
        myDiagram.model.setDataProperty(nodeData, 'color', "#ededed")
        `,
      },
      {
        descRow: 6,
        name: '根据节点数据对象更改节点属性',
        desc: `
        var nodeData = myDiagram.model.findNodeDataForKey('4.1')
        nodeData.text = "2333"     
        nodeData.color = "#000000"      
        myDiagram.model.updateTargetBindings(nodeData)`,
      },
      {
        descRow: 8,
        name: '批量删除节点',
        desc: `
        var removeNodes = []
        var aNodeData = myDiagram.model.findNodeDataForKey('Akey')
        var bNodeData = myDiagram.model.findNodeDataForKey('Bkey')   
        removeNodes.push(aNodeData )   
        removeNodes.push(bNodeData)   
        myDiagram.model.removeNodeDataCollection(removeNodes)`,
      },
      {
        descRow: 15,
        name: '模糊获取节点',
        desc: `
        //注意值类型，字符串和数值，
        //若是json中是1.1，写成"1.1"就会查询不到
        var data={}
        data.text="设计"
        // data.text=/设计/
        // data.text=/设计/i
        // data.text=/^设计/
        // data.text=/设计$/
        // data.text=/(勘|察)设计/
        var nodes = myDiagram.findNodesByExample(data)
            nodes.iterator.each(function (node) {
            console.log(node.data)
        })`,
      },
    ],
  },
]

module.exports = arr
