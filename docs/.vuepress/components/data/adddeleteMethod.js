const arr = [
  {
    title: '增删改查常用的方法',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '功能' },
      { prop: 'api', label: 'API' },
      { prop: 'desc', label: '用例', align: 'left' },
    ],
    //内容
    tableData: [
      {
        descRow: 8,
        name: '增',
        api: 'addNodeData(节点对象)addLinkData(线对象)',
        desc: `
        var node = {}
        node["key"] = "节点Key"   
        node["loc"] = "0 0"//节点坐标        
        node["text"] = "节点名称"      
        myDiagram.model.addNodeData(node)
        `,
      },
      {
        descRow: 8,
        name: '删',
        api: 'removeNodeData(节点对象)removeLinkData(线对象)',
        desc: `
        //首先拿到这个节点的对象,这里直接经过节点的Key获取，
        //也能够经过各类事件的返回的对象中获取        
        var nodeData = myDiagram.model.findNodeDataForKey('key')       
        //删除单个节点       
        myDiagram.model.removeNodeData(nodeData)`,
      },
      {
        descRow: 8,
        name: '改',
        api: 'setDataProperty(data, propname, val)',
        desc: `
        //首先拿到这个节点的data对象
        var nodeData = myDiagram.model.findNodeDataForKey('key')       
        //而后对这个对象的属性进行更改，若是没有则新增这个属性       
        myDiagram.model.setDataProperty(nodeData, 'color', "#ededed")`,
      },
      {
        descRow: 15,
        name: '查',
        api: 'findLinksByExample(linkData)',
        desc: `
        //根据Key获取节点数据对象
        var nodeData = myDiagram.model.findNodeDataForKey('key')       
        //根据linkData，模糊匹配线集合,linkData能够为部分属性组成 
        //如from:-1或to:-1,或者from:-1,to:-1   
        var links=myDiagram.findLinksByExample({"from":-1, "to":-2})  
        while (links.next()) {    
        //遍历输出全部线数据对象  
        console.log(links.value.data)
        }`,
      },
    ],
  },
]

module.exports = arr
