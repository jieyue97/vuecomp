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
              validatePass: this.validatePass
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
      validatePass(data) {
        // 写判断逻辑
        return { message: '不能为空', required: true }
      }
    }
  }
</script>
<style lang="scss" scoped>
  /deep/ .el-table .el-table__row {
    .rules-table1 {
      border: 1px solid #8503fb !important;
    }
  }
</style>
```

:::
