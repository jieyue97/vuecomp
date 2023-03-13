<template>
  <div>
    <div>
      <el-button type="info" @click="setCheckedKeys">设置初始值</el-button>
      <el-button type="info" @click="onGetSelectTable">获取选中元素</el-button>
    </div>
    <gdCheckTable
      ref="gdtable"
      row-key="id"
      :columns="tableColumn"
      :data="tableData"
      :hiddenPage="false"
      :border="border"
      :total="total"
      :stripe="stripe"
      default-expand-all
      :checkRow="1"
      :checkTreeSelect="true"
      :checkStrictly="false"
      :pageParams="pageParams"
      @pagination="onPagination"
      @onChangeTreeTable="onChangeTreeTable"
      :pageSizes="pageSizes"
    >
      <template slot="date" slot-scope="scope">
        {{ scope.row.date }}
      </template>
    </gdCheckTable>
  </div>
</template>
<script>
import gdCheckTable from '../../docs/.vuepress/components/gd-check-table'
export default {
  name: 'gd_check_table_item',
  data() {
    return {
      tableColumn: [
        //序号 index  复选框 selection
        // { type: 'selection'},
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '名称' },
        { prop: 'address', label: '地址' },
        { prop: 'caozuo', label: '操作' }
      ],
      tableData: [
        {
          id: 1,
          level: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 2,
          level: 1,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          id: 3,
          level: 1,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              id: 31,
              level: 2,
              date: '2016-05-01',
              children: [
                {
                  id: 311,
                  date: '2016-05-01',
                  level: 3,
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄',
                  children: [
                    {
                      id: 31111,
                      date: '2016-05-01',
                      level: 4,
                      children: [
                        {
                          id: 31222,
                          level: 5,
                          date: '2016-05-01',
                          name: '王小虎',
                          address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                          id: 32222,
                          level: 5,
                          date: '2016-05-01',
                          name: '王小虎',
                          address: '上海市普陀区金沙江路 1519 弄'
                        }
                      ],
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1519 弄'
                    },
                    {
                      id: 322222,
                      date: '2016-05-01',
                      name: '王小虎',
                      level: 4,
                      address: '上海市普陀区金沙江路 1519 弄',
                      children: [
                        {
                          id: 333431,
                          date: '2016-05-01',
                          level: 5,
                          children: [
                            {
                              id: 3432421,
                              level: 6,
                              date: '2016-05-01',
                              name: '王小虎',
                              address: '上海市普陀区金沙江路 1519 弄'
                            },
                            {
                              id: 312662,
                              date: '2016-05-01',
                              name: '王小虎',
                              level: 6,
                              address: '上海市普陀区金沙江路 1519 弄'
                            }
                          ],
                          name: '王小虎',
                          address: '上海市普陀区金沙江路 1519 弄'
                        },
                        {
                          id: 3299,
                          level: 5,
                          date: '2016-05-01',
                          name: '王小虎',
                          address: '上海市普陀区金沙江路 1519 弄'
                        }
                      ]
                    }
                  ]
                },
                {
                  id: 3772,
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1519 弄'
                }
              ],
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            },
            {
              id: 32000,
              level: 2,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ]
        },
        {
          id: 4,
          level: 1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      border: true,
      stripe: false,
      total: 25,
      pageParams: {
        size: 5,
        current: 1
      },
      pageSizes: [2, 4, 5, 8, 10]
    }
  },
  components: {
    gdCheckTable
  },
  mounted() {},
  methods: {
    onPagination(val) {
      console.log(val)
    },
    // 获取选中值
    onChangeTreeTable(row, res, row1, res1, data) {
      console.log(row, res, row1, res1, data)
      // this.$refs.gdtable.onChangeTreeTable()
    },
    onGetSelectTable() {
      const a = this.$refs.gdtable.getCheckedData()
      console.log(a)
    },
    setCheckedKeys() {
      this.$refs.gdtable.setCheckedKeys([4, 32000])
    }
  }
}
</script>
<style lang="scss" scoped></style>
