# 智能在线编辑表格 gd-online-excel

特征：

能快速成型具有可操作性的表格,可复制 office 表格内容至 gd-online-excel 内进行操作，操作习惯与 office 部分简单功能基本一至。

粘贴单元格、粘贴行/列、撤销（ctrl+z）/恢复(ctrl+y)等功能。并且还具有设置全表只读、列只读、校验列或者单元格等功能。可用于定制上传文件预览。

### 基本用法

--普通用法:可编辑表格，单元格类型有三种，将 editorType 赋值（默认为 input 对应 el-input/date 对应 el-pick-date/select 对应 el-select），当将 editorType 值为 select 时

--editorValue 的 optionList 需要传选择参数，具体用法如下。tableBind：初始化值。

--默认

::: demo

```html
<template>
  <div>
    <gd-online-excel :data-table="tableData" :columns-list="tableColumns" :table-bind="tableBind"></gd-online-excel>
  </div>
</template>

<script>
  export default {
    name: 'gd_title_in',
    data() {
      return {
        tableBind: {
          border: true,
          stripe: true,
          'header-cell-style': { background: '#eef1f6', color: '#606266' },
          height: 300
        },
        tableData: [
          {
            date: '2022-01-17',
            email: '888888@163.com',
            phone: '13688888888',
            unitName: '研发一部',
            departmentName: '基础研发部',
            roleName: '超级管理员',
            jobName: '技术员'
          }
        ],
        tableColumns: [
          {
            prop: 'date',
            label: '日期',
            editorType: 'date'
          },
          {
            prop: 'email',
            label: '邮箱'
          },
          {
            prop: 'phone',
            label: '手机号码'
          },
          {
            prop: 'unitName',
            label: '所属单位名称'
          },
          {
            prop: 'departmentName',
            label: '部门名称'
          },
          {
            prop: 'roleName',
            label: '角色名称',
            editorType: 'select',
            editorValue: {
              optionList: [
                {
                  label: '超级管理员',
                  value: 'admin1'
                },
                {
                  label: '管理员',
                  value: 'admin2'
                }
              ]
            }
          },
          {
            prop: 'jobName',
            label: '岗位名称'
          }
        ]
      }
    }
  }
</script>
```

:::

### 进阶用法-全表只读，单列只读

--全表只读，底色为浅黄色(可通过 readyClass 修改具体用法,请看下面例子),单列只读-在 tableColumns 属性值里面 ready: true 则这一列为只读状态不可编辑。

::: demo

```html
<template>
  <div>
    <div>
      <el-checkbox v-model="readyTable">全表只读</el-checkbox>
    </div>
    <gd-online-excel :table-bind="tableBind" :data-table="tableData" :columns-list="tableColumns" :isIndex="isIndex" :readyTable="readyTable" :readyClass="readyClass">
    </gd-online-excel>
  </div>
</template>

<script>
  export default {
    name: 'gd_title_in',
    data() {
      return {
        tableBind: {
          border: true,
          stripe: true,
          'header-cell-style': { background: '#eef1f6', color: '#606266' },
          height: 300
        },
        isIndex: true,
        readyTable: false,
        readyClass: 'bg-color',
        readyRow: [],
        tableData: [
          {
            date: '2022-01-17',
            email: '888888@163.com',
            phone: '13688888888',
            unitName: '研发一部',
            departmentName: '基础研发部',
            roleName: '超级管理员',
            jobName: '技术员'
          }
        ],
        tableColumns: [
          {
            prop: 'date',
            label: '日期',
            editorType: 'date'
          },
          {
            prop: 'email',
            label: '邮箱'
          },
          {
            prop: 'phone',
            label: '手机号码'
          },
          {
            prop: 'unitName',
            label: '所属单位名称'
          },
          {
            prop: 'departmentName',
            ready: true,
            label: '部门名称'
          },
          {
            prop: 'roleName',
            label: '角色名称',
            editorType: 'select',
            editorValue: {
              optionList: [
                {
                  label: '超级管理员',
                  value: 'admin1'
                },
                {
                  label: '管理员',
                  value: 'admin2'
                }
              ]
            }
          },
          {
            prop: 'jobName',
            label: '岗位名称'
          }
        ]
      }
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  /deep/ .el-table .el-table__row {
    .bg-color {
      background: #1de5eeff !important;
    }
  }
</style>
```

:::

### 进阶用法-editorType 值 input

-- editorValue 的初始值如下例子，bind 表示 el-input 全部的属性值，on 表示 el-input 全部的事件。如需增加属性在 bind 增加或者需覆盖直接覆盖原属性值。

-- blur 做过处理，非必要最好不要直接覆盖。

::: demo

```html
<template>
  <div>
    <gd-online-excel ref="onlineExcel" :table-bind="tableBind" :data-table="tableData" :columns-list="tableColumns"> </gd-online-excel>
  </div>
</template>

<script>
  export default {
    name: 'gd_title_in',
    data() {
      return {
        tableBind: {
          border: true,
          stripe: true,
          'header-cell-style': { background: '#eef1f6', color: '#606266' },
          height: 300
        },
        tableData: [
          {
            date: '2022-01-17',
            email: '888888@163.com',
            phone: '13688888888',
            unitName: '研发一部',
            departmentName: '基础研发部',
            roleName: '超级管理员',
            jobName: '技术员'
          }
        ],
        tableColumns: [
          {
            prop: 'date',
            label: '日期',
            editorType: 'date'
          },
          {
            prop: 'email',
            editorValue: {
              bind: {
                type: 'text',
                size: 'mini'
              },
              on: {
                blur: () => {}
              }
            },
            label: '邮箱'
          },
          {
            prop: 'phone',
            label: '手机号码'
          },
          {
            prop: 'unitName',
            label: '所属单位名称'
          },
          {
            prop: 'departmentName',
            label: '部门名称'
          },
          {
            prop: 'roleName',
            label: '角色名称',
            editorType: 'select',
            editorValue: {
              optionList: [
                {
                  label: '超级管理员',
                  value: 'admin1'
                },
                {
                  label: '管理员',
                  value: 'admin2'
                }
              ]
            }
          },
          {
            prop: 'jobName',
            label: '岗位名称'
          }
        ]
      }
    },
    methods: {}
  }
</script>
```

:::

### 进阶用法-editorType 值 date

-- editorValue 的初始值如下例子，bind 表示 el-pick-date 全部的属性值，on 表示 el-pick-date 全部的事件。如需增加属性在 bind 增加或者需覆盖直接覆盖原属性值。

-- blur/change 做过处理，非必要最好不要直接覆盖。

::: demo

```html
<template>
  <div>
    <gd-online-excel ref="onlineExcel" :data-table="tableData" :table-bind="tableBind" :columns-list="tableColumns"> </gd-online-excel>
  </div>
</template>

<script>
  export default {
    name: 'gd_title_in',
    data() {
      return {
        tableBind: {
          border: true,
          stripe: true,
          'header-cell-style': { background: '#eef1f6', color: '#606266' },
          height: 300
        },
        tableData: [
          {
            date: '2022-01-17',
            email: '888888@163.com',
            phone: '13688888888',
            unitName: '研发一部',
            departmentName: '基础研发部',
            roleName: '超级管理员',
            jobName: '技术员'
          }
        ],
        tableColumns: [
          {
            prop: 'date',
            label: '日期',
            editorType: 'date',
            editorValue: {
              bind: {
                type: 'date',
                placeholder: '选择日期',
                align: 'right',
                size: 'mini',
                'value-format': 'yyyy-MM-dd',
                clearable: true
              },
              on: {
                change: () => {},
                blur: () => {}
              }
            }
          },
          {
            prop: 'email',
            label: '邮箱'
          },
          {
            prop: 'phone',
            label: '手机号码'
          },
          {
            prop: 'unitName',
            label: '所属单位名称'
          },
          {
            prop: 'departmentName',
            label: '部门名称'
          },
          {
            prop: 'roleName',
            label: '角色名称',
            editorType: 'select',
            editorValue: {
              optionList: [
                {
                  label: '超级管理员',
                  value: 'admin1'
                },
                {
                  label: '管理员',
                  value: 'admin2'
                }
              ]
            }
          },
          {
            prop: 'jobName',
            label: '岗位名称'
          }
        ]
      }
    },
    methods: {}
  }
</script>
```

:::

### 进阶用法-editorType 值 select

-- editorValue 的初始值如下例子，bind 表示 el-select 全部的属性值，on 表示 el-select 全部的事件。如需增加属性在 bind 增加或者需覆盖直接覆盖原属性值。

-- blur/change 做过处理，非必要最好不要直接覆盖。除此之外还可需传入一个参数 optionList 作为选择框的选择值，可改变赋值类型 selectProp： {value: 'value', label: 'label'},具体请看下面例子,

--selectProp 的 label、value 的值一定要与 optionLis 的 key 值一样，否则会报错。

::: demo

```html
<template>
  <div>
    <gd-online-excel ref="onlineExcel" :data-table="tableData" :table-bind="tableBind" :columns-list="tableColumns"> </gd-online-excel>
  </div>
</template>

<script>
  export default {
    name: 'gd_title_in',
    data() {
      return {
        tableBind: {
          border: true,
          stripe: true,
          'header-cell-style': { background: '#eef1f6', color: '#606266' },
          height: 300
        },
        tableData: [
          {
            date: '2022-01-17',
            email: '888888@163.com',
            phone: '13688888888',
            unitName: '研发一部',
            departmentName: '基础研发部',
            roleName: '超级管理员',
            jobName: '技术员'
          }
        ],
        tableColumns: [
          {
            prop: 'date',
            label: '日期',
            editorType: 'date'
          },
          {
            prop: 'email',
            label: '邮箱'
          },
          {
            prop: 'phone',
            label: '手机号码'
          },
          {
            prop: 'unitName',
            label: '所属单位名称'
          },
          {
            prop: 'departmentName',
            label: '部门名称'
          },
          {
            prop: 'roleName',
            label: '角色名称',
            editorType: 'select',
            editorValue: {
              selectProp: {
                value: 'value',
                label: 'label'
              },
              optionList: [
                {
                  label: '超级管理员',
                  value: 'admin1'
                },
                {
                  label: '管理员',
                  value: 'admin2'
                }
              ],
              bind: {
                placeholder: '请选择',
                size: 'mini',
                clearable: true,
                filterable: true
              },
              on: {
                blur: () => {
                  setTimeout(() => {}, 300)
                },
                change: () => {}
              }
            }
          },
          {
            prop: 'jobName',
            label: '岗位名称'
          }
        ]
      }
    },
    methods: {}
  }
</script>
```

:::

### 进阶用法-表格校验

-- rules：校验属性如果有 check: {},则优先提取 check 作为校验准则。如果想自行校验提供 validatePass 方法进行校验，返回格式要按照 check 格式返回,

-- 默认不符合条件的单元格边框为红色，可自行根据 rulesClass 进行设置

::: demo

```html
<template>
  <div>
    <gd-online-excel ref="onlineExcel" :tableBind="tableBind" :rulesClass="rulesClass" :data-table="tableData" :columns-list="tableColumns"> </gd-online-excel>
  </div>
</template>

<script>
  const validatePass = (data) => {
    return { message: '不能为空', required: false, trigger: 'blur' }
  }
  export default {
    name: 'gd_title_in',
    data() {
      return {
        isIndex: true,
        rulesClass: '',
        tableBind: {
          border: true,
          stripe: true,
          'header-cell-style': { background: '#eef1f6', color: '#606266' },
          height: 300
        },
        tableData: [
          {
            date: '2022-01-17',
            email: '888888@163.com',
            phone: '13688888888',
            unitName: '研发一部',
            departmentName: '基础研发部',
            roleName: '超级管理员',
            jobName: '技术员'
          }
        ],
        tableColumns: [
          {
            prop: 'date',
            label: '日期',
            editorType: 'date'
          },
          {
            prop: 'email',
            label: '邮箱'
          },
          {
            prop: 'phone',
            label: '手机号码'
          },
          {
            prop: 'unitName',
            rules: {
              check: { message: '不能为空', required: true }
            },
            label: '所属单位名称'
          },
          {
            prop: 'departmentName',
            rules: {
              check: { message: '不能为空', required: true },
              validatePass: validatePass
            },
            label: '部门名称'
          },
          {
            prop: 'roleName',
            label: '角色名称',
            editorType: 'select',
            editorValue: {
              optionList: [
                {
                  label: '超级管理员',
                  value: 'admin1'
                },
                {
                  label: '管理员',
                  value: 'admin2'
                }
              ]
            }
          },
          {
            prop: 'jobName',
            label: '岗位名称'
          }
        ]
      }
    },
    methods: {
      
    }
  }
</script>
<style lang="scss" scoped>
/deep/.el-excel-table {
 .el-table .el-table__row {
      .rules-table1 {
      background-color: #d83552!important;
    }
  }
}
</style>
```

:::

:::

### 进阶用法-添加按钮

-- autoBtnList, 新增加一个操作按钮，可自由新增。显示与隐藏按钮btnShowList属性, allCellHeight可设置单元格固定最低高度，默认为44

-- 可自由操作

::: demo

```html
<template>
  <div>
    <gd-online-excel
      ref="tabExcel"
      class="important-excel"
      :data-table="tableData"
      :columns-list="tableColumns"
      @onSaveFold="onSaveFold"
      :autoBtnList="autoBtnList"
      :rulesClass="rulesClass"
      :allCellHeight="88">
    </gd-online-excel>
  </div>
</template>
<script>
  // 测试本地组件
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
            rules: {
              check: { message: '不能为空', required: true }
            },
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
              check: { message: '不能为空', required: true }
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
      this.tableData = [
        {
          deptName: "",
          jobContent: "",
          manager: "",
          nextJobContent: "",
          progress: '',
          projectGroupUser: "",
          projectId: "",
          projectName: "",
          remark: "",
          reportId: "",
          reportType: ''
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
  /deep/.el-excel-table {
    .el-table .el-table__row{
      .rules-table1{
        background-color: #d83552!important;
      }
    }
  }

</style>

```
:::
<mdtable mdname='onlineExcel'></mdtable>