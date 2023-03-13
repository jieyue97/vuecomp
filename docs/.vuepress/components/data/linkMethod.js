const arr = [
  {
    title: '线常用的方法',
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
        name: '添加线',
        desc: 'myDiagram.model.addLinkData(linkData)',
      },
      {
        name: '删除线',
        desc: 'myDiagram.model.removeNodeData(nodeData)',
      },
      {
        name: '更改属性值',
        desc: 'myDiagram.model.setDataProperty(linkData, "from", "-2")',
      },
      {
        descRow: 10,
        name: '批量删除线',
        desc: `
      var removeLinks=[]
      //首先拿到这个节点的对象
      var node = myDiagram.findNodeForKey('key')
      //获取节点全部线
      node.findLinksConnected().each(function(link) { 
        removeLinks.push(link.data)
      }
      myDiagram.model.removeLinkDataCollection(removeLinks)`,
      },
      {
        descRow: 8,
        name: '模糊获取线',
        desc: `
      //注意值类型，字符串和数值
      //若是json中是from:1.1，写成from:"1.1"就会查询不到
      var links=myDiagram.findLinksByExample({from:1.1, to:2.1})
      links.iterator.each(function (link) {
        console.log(link.data)
      })`,
      },
      {
        descRow: 5,
        name: '获取节点的线',
        desc: `
      var node=myDiagram.findNodeForKey('key')
      node.findLinksConnected().each(function(link) {
        console.log(link.data)
      })`,
      },
      {
        descRow: 5,
        name: '获取进入节点的线',
        desc: `
      var node=myDiagram.findNodeForKey('key')
      node.findLinksInto().each(function(link) {
        console.log(link.data)
      })`,
      },
      {
        descRow: 5,
        name: '获取从节点出来的线',
        desc: `
      var node=myDiagram.findNodeForKey('key')
      node.findLinksOutOf().each(function(link) {
        console.log(link.data)
      })`,
      },
      {
        descRow: 8,
        name: '获取A-B节点之间的线',
        desc: `
      var nodeA=myDiagram.findNodeForKey('key')
      var nodeB=myDiagram.findNodeForKey('key')
      nodeA.findLinksTo(nodeB).each(function(link) {
        console.log(link.data)
      })`,
      },
    ],
  },
]
module.exports = arr
