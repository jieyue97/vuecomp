<template>
  <div style="padding: 10px">
    <!-- <vxe-table border resizable :align="allAlign" :merge-cells="mergeCells" :data="tableData" :show-header="false">
      <vxe-column v-for="(item, index) in tableColmns" :key="index" :field="item.field" :title="item.title">
        <template #default="{ rowIndex,row  }">
          <div class="cellClass" @click="cellDBLClickEvent(index, rowIndex, row)" @contextmenu.prevent="openMenu($event, index, rowIndex)">
            <el-input v-if="item.showInput" v-model="formRowCell[`inputValue${index}${rowIndex}`]"></el-input>
            {{ row }}
           </div>
        </template>
      </vxe-column>
    </vxe-table>
    <RightMenu ref="RightMenuRef" /> -->
  </div>
</template>
<script>
// import Vue from 'vue'
// import XEUtils from 'xe-utils'
// import RightMenu from '../../components/vueComponents/rightMenu'
// import 'vxe-table/lib/style.css'
// import { VXETable, Header, Column, Table } from 'vxe-table'

// 表格功能
// Vue.use(Header)
//   // 可选组件
//   .use(Column)
//   // 安装表格
//   .use(Table)

export default {
  // name: 'gd_form_design_item',
  // components: { RightMenu },
  // props: ['parseNum', 'parseMod'],
  data() {
    return {
      allAlign: null,
      tableColmns: [],
      formRowCell: {},
      // 输入框类型
      valType: '',
      tableData: [
        // { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
        // { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
        // { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        // { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'vxe-table 从入门到放弃' },
        // { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        // { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'vxe-table 从入门到放弃' },
        // { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'vxe-table 从入门到放弃' },
        // { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'vxe-table 从入门到放弃' }
      ],
      mergeCells: [
        // { row: 1, col: 1, rowspan: 3, colspan: 3 },
        // { row: 5, col: 0, rowspan: 2, colspan: 2 }
      ]
    }
  },
  methods: {
    GenNonDuplicateID() {
      return Math.random()
        .toString(36)
        .substr(3)
    },
    openMenu($event, index, rowIndex) {
      this.$refs.RightMenuRef.openMenu($event)
    },
    // 单元格双击
    cellDBLClickEvent(index, rowIndex, item) {
      item.showInput = true
      console.log(index, rowIndex)
      this.tableData.forEach(res => {})
    }
  },

  mounted() {
    this.tableColmns = []
    for (let i = 0; i < this.parseNum; i++) {
      this.tableColmns.push({
        field: 'name' + i,
        title: 'name' + i
      })
    }
    for (let i = 0; i < this.parseNum; i++) {
      for (let j = 0; j < this.parseMod; j++) {
        this.$set(this.formRowCell, `inputVal${i}${j}`, '')
      }
    }
    for (let j = 0; j < this.parseMod; j++) {
      this.tableData.push({
        [`name${j}`]: 'Test' + this.GenNonDuplicateID(),
        showInput: false
      })
    }
  }
}
</script>
<style>
.vxe-table--render-default .vxe-body--column:not(.col--ellipsis),
.vxe-table--render-default .vxe-footer--column:not(.col--ellipsis),
.vxe-table--render-default .vxe-header--column:not(.col--ellipsis) {
  padding: 0;
}
.vxe-table--render-default .vxe-cell {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
<style lang="scss" scoped>
.cellClass {
  cursor: pointer;
}
</style>
