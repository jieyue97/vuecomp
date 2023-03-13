<template>
  <div>
    <gdOnlineExcel
      ref="tabExcel"
      :data-table="tableData"
      :columns-list="tableColumns"
      @onSaveFold="onSaveFold"
      :autoBtnList="autoBtnList"
      :allCellHeight="88">
    </gdOnlineExcel>
  </div>
</template>

<script>
// 测试本地组件
import gdOnlineExcel from '../components/gd_online_excel' // gd-online-excel
const validatePass = (data) => {
  if (data.row.nextJobContent) {
    if (Number(data.row.nextJobContent) === 1) {
      return { message: '不能为1', required: true }
    }
    if (data.row.nextJobContent === '2') {
      return { message: '不能为2', required: true }
    }
    return { message: '不能为4', required: false }
  } else {
    return { message: '不能为空3', required: true }
  }
}
export default {
  name: "gd_online_excel",
  components: { gdOnlineExcel }, // 测试本地组件
  data() {
    return {
      rulesClass: 'rules-table1',
      tableData: [],
      autoBtnList: [
        {
          label: '导入上一篇',
          state: true,
          icon: 'el-icon-document-add',
          showName: 'updatePrevious',
          falseIcon: '',
          onClick: () => {
            this.setUpdatePrevious()
          }
        }
      ],
      tableColumns: [
        {
          prop: 'deptName',
          label: '部门'
        },
        {
          prop: 'projectName',
          label: '项目/产品/事项名称'
        },
        {
          prop: 'manager',
          label: '负责人'
        },
        {
          prop: 'projectGroupUser',
          label: '项目组成员'
        },
        {
          prop: 'progress',
          label: '整体进度(%)'
        },
        {
          prop: 'jobContent',
          label: '完成工作内容',
          editorType: 'date'
        },
        {
          prop: 'nextJobContent',
          label: '工作计划',
          rules: {
            validate: validatePass
          },
          editorValue: {
            bind: {
              type: 'textarea',
              autosize: true
            },
            selectProp: {
              value: 'value',
              label: 'label'
            }
          }
        },
        {
          prop: 'remark',
          label: '问题及需要协调事项',
          editorType: 'select',
          editorValue: {
            optionList: [
              {
                label: 'hct',
                value: 'hctHtml'
              },
              {
                label: 'hbx',
                value: 'hbxHtml'
              }
            ]
          }
        }
      ]
    }
  },
  created() {
    this.tableData = [
      {
        deptName: "基础研发部",
        jobContent: "周报1",
        manager: "管理员",
        nextJobContent: "下周周报1dasd\ndljkadklas",
        progress: 2,
        projectGroupUser: "管理员,曾令令,吴灿,郝明才",
        projectId: "1481197981918138369",
        projectName: "郝测试",
        remark: "待办事项1",
        reportId: 1,
        reportType: 0
      },
      {
        deptName: "基础研发部",
        jobContent: "周报1",
        manager: "管理员",
        nextJobContent: "下周周报1dasd\ndljkadklas",
        progress: 2,
        projectGroupUser: "管理员,曾令令,吴灿,郝明才",
        projectId: "1481197981918138369",
        projectName: "郝测试",
        remark: "待办事项1",
        reportId: 1,
        reportType: 0
      }
    ]
  },
  mounted() {},
  methods: {
    setUpdatePrevious() {
    },
    validateTable() {
      this.$refs.tabExcel.validateTable((valid) => {})
    },
    onSaveFold(row, that) {
      this.validateTable()
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/
  .el-table .el-table__row {
    .rules-table1 {
      border: 1px solid #8503fb;
    }
  }
</style>
