<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      ref="multipleTable"
      @select="rowSelect"
      @select-all="selectAll"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable>
        <template slot-scope="scope">
          <el-checkbox :indeterminate="true" v-model="scope.row.checked"></el-checkbox>
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "gd_table_o",
  data() {
    return {
      tableData: [
        {
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
          name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        children: [
          {
          id: 31,
          date: '2016-05-01',
          children: [{
            id: 311,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            children: [
              {
                id: 31111,
                date: '2016-05-01',
                children: [{
                  id: 31222,
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }, {
                  id: 32222,
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }],
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              },
              {
                id: 322222,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                children: [
                  {
                    id: 333431,
                    date: '2016-05-01',
                    children: [{
                      id: 3432421,
                      date: '2016-05-01',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                      id: 312662,
                      date: '2016-05-01',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1519 弄'
                    }],
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                  },
                  {
                    id: 3299,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                  }
                ]
              }
            ]
          }, {
            id: 3772,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }],
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }
      ]
    }
  },
  components: {
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
