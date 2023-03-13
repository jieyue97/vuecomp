<template>
  <div>
    <!-- 123 -->
    <gd-tree-table :data="data" :show-checkbox="true" border>
      <gd-tree-table-column prop="name" label="姓名"></gd-tree-table-column>
      <gd-tree-table-column prop="title" label="标题" width="200px"></gd-tree-table-column>
      <gd-tree-table-column prop="email" label="邮箱" width="200px"></gd-tree-table-column>
      <gd-tree-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button size="mini" type="primary">编辑</el-button>
          <el-button size="mini" type="warning">删除({{ scope.id }})</el-button>
        </template>
      </gd-tree-table-column>
    </gd-tree-table>
  </div>
</template>
<script>
import Mock from 'mockjs'
import GdTreeTable from '../components_others/gd-tree-table/index'
import GdTreeTableColumn from '../components_others/gd-tree-table/gd-tree-table-column'
function listToTree(list, parentId, level = 0, map) {
  const prop = {
    id: 'id',
    parentId: 'parentId',
    children: 'children',
    level: 'level',
    order: 'order',
    path: 'path',
    ...map
  }

  // 判断是否需要排序
  if (list.length > 0 && list[0][prop.order]) {
    list.sort((a, b) => {
      return a[prop.order] - b[prop.order]
    })
  }

  let temp = Object.create(null),
    tree = []
  list.forEach(item => {
    temp[item[prop.id]] = item
  })

  for (let key in temp) {
    const item = temp[key]
    const pId = item[prop.parentId]
    if (pId === parentId) {
      item[prop.level] = level
      item[prop.path] = [item[prop.id]]
      tree.push(item)
    } else {
      const parent = temp[pId]
      if (parent) {
        if (!parent[prop.children]) {
          parent[prop.children] = []
        }
        const path = (parent[prop.path] || []).concat(item[prop.id])

        item[prop.level] = parent[prop.level] + 1
        item[prop.path] = path
        parent[prop.children].push(item)
      }
    }
  }

  return tree
}
function createTree(Mock, url, query) {
  let root = Mock.mock({
    'list|10': [
      {
        'id|+1': 1,
        name: '@cname',
        title: '@ctitle',
        email: '@email',
        parentId: null
      }
    ]
  })
  let data = Mock.mock({
    'list|50': [
      {
        'id|+1': 11,
        name: '@cname',
        title: '@ctitle',
        email: '@email',
        parentId: function () {
          return Math.floor(Math.random() * 20)
        }
      }
    ]
  })
  return listToTree(root.list.concat(data.list), null)
}

export default {
  components: {
    GdTreeTable,
    GdTreeTableColumn
  },
  name: 'gd_table_tree',
  data() {
    return {
      data: createTree(Mock)
    }
  },
  methods: {}
}
</script>
