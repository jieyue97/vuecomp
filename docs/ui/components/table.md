# 表格组件 gd-table

支持分页以及不分页显示,直接传入表头数组和表格数据以及分页数据即可

特征：

-- 对比传统的表格不需要写表头代码,传入表头参数即可实现,监听分页所有数据,自己只需处理逻辑部分即可  
-- 支持远 elementui 的所有表格属性以及事件  
-- 支持表格高度自适应 参数 bottom-offset:80 距离顶部的距离 fix-bottom:false 是否将表格固定在底部

### 基础类型

-- 表格样式从大类分类全边框、无边框的两类

::: demo

```html
<template>
  <div>
    <div style="padding-bottom: 10px">
      <el-radio-group size="small" v-model="border">
        <el-radio-button :label="true">有边框</el-radio-button>
        <el-radio-button :label="false">无边框</el-radio-button>
      </el-radio-group>
      <el-checkbox :label="0" @change="onTotal" style="margin-left: 20px">分页器</el-checkbox>
      <el-checkbox :label="0" @change="onStripe" style="margin-left: 10px">斑马效果</el-checkbox>
    </div>
    <div class="demo_tables">
      <gd-table
        ref="gdtable"
        :columns="tableColumn"
        :data="tableData"
        :hiddenPage="false"
        :border="border"
        :total="total"
        :stripe="stripe"
        :pageParams="pageParams"
        @pagination="setpagination"
        :pageSizes="pageSizes"
        :cell-style="{ paddingTop: '4px',paddingBottom: '4px' }"
      >
        <!-- 特殊的字段处理 -->
        <template slot="dataServiceType" slot-scope="scope">
          <span :style="{ color: scope.row.dataServiceType === 1 ? 'red' : 'blue' }">
            <i :class="scope.row.dataServiceType === 1 ? 'el-icon-eleme' : 'el-icon-star-off'" />
            {{ scope.row.dataServiceType === 1 ? '测试' : '车市2' }}
          </span>
        </template>
        <template slot="caozuo" slot-scope="scope">
          <div>
            <el-button type="text" size="small"><i style="font-size:16px;padding-right:4px" class="el-icon-view"></i>查看</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" size="small"><i style="font-size:16px;padding-right:4px" class="el-icon-edit"></i>编辑</el-button>
          </div>
        </template>
      </gd-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gd_tabless',
    data() {
      return {
        border: true,
        stripe: false,
        cellStyle: { padding: '0px' },
        //表头数据
        tableColumn: [
          //序号 index  复选框 selection
          { type: 'selection' },
          { prop: 'name', label: '名称' },
          { prop: 'districtName', label: '城市' },
          { prop: 'dataServiceType', label: 'icon' },
          { prop: 'caozuo', label: '操作' }
        ],
        //内容
        tableData: [
          {
            id: '1413080704593432577',
            name: 'sdfgsdfgssdf',
            dataServiceType: 1,
            secretGrade: -1,
            districtName: '湛江市/廉江市'
          },
          {
            id: '1413023861319323650',
            name: '0708-test-1',
            alias: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            servicePublishParamVOList: []
          },
          {
            id: '1413023370535370753',
            name: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            servicePublishParamVOList: [],
            subSourceUrl: '',
            siteAddress: ''
          },
          {
            id: '1413022989289930753',
            name: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            siteAddress: ''
          },
          {
            id: '1413022167978098689',
            name: '0708-test-1',
            dataServiceType: 2,
            districtName: '湛江市'
          }
        ],
        total: 25,
        pageParams: {
          size: 5,
          current: 1
        },
        pageSizes: [2, 4, 5, 8, 10]
      }
    },
    components: {},
    mounted() {},
    methods: {
      setpagination(val) {
        console.log(val)
      },
      btn(val) {
        console.log(val, this.$refs.gdtable.$refs.table)
      },
      onTotal(row) {
        this.total = 5
        if (!row) {
          this.total = 0
        }
      },
      onStripe(row) {
        this.stripe = row
      }
    }
  }
</script>
```

:::

### 对齐方式

--具体属性请看 Element-UI 的 table 属性

::: demo

```html
<template>
  <div>
    <div style="padding-bottom: 10px">
      <el-radio-group size="small" v-model="align" @change="onAlign">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="center">居中对齐</el-radio-button>
        <el-radio-button label="mixed">混合对齐</el-radio-button>
      </el-radio-group>
    </div>
    <div class="demo_tables">
      <gd-table
        ref="gdtable"
        :columns="tableColumn"
        :align="align"
        :data="tableData"
        :border="border"
        :total="total"
        :stripe="stripe"
        :pageParams="pageParams"
        @pagination="setpagination"
        :pageSizes="pageSizes"
        :cell-style="{ paddingTop: '10px',paddingBottom: '10px' }"
      >
        <!-- 特殊的字段处理 -->
        <template slot="dataServiceType" slot-scope="scope">
          <span :style="{ color: scope.row.dataServiceType === 1 ? 'red' : 'blue' }">
            <i :class="scope.row.dataServiceType === 1 ? 'el-icon-eleme' : 'el-icon-star-off'" />
            {{ scope.row.dataServiceType === 1 ? '测试' : '车市2' }}
          </span>
        </template>
      </gd-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gd_tabless',
    data() {
      return {
        border: true,
        stripe: false,
        align: 'left',
        //表头数据
        tableColumn: [
          //序号 index  复选框 selection
          { type: 'selection', align: 'left' },
          { prop: 'name', label: '名称', align: 'left' },
          { prop: 'districtName', label: '城市', align: 'left' },
          { prop: 'dataServiceType', label: 'icon', align: 'left' }
        ],
        //内容
        tableData: [
          {
            id: '1413080704593432577',
            name: 'sdfgsdfgssdf',
            dataServiceType: 1,
            secretGrade: -1,
            districtName: '湛江市/廉江市'
          },
          {
            id: '1413023861319323650',
            name: '0708-test-1',
            alias: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            servicePublishParamVOList: []
          },
          {
            id: '1413023370535370753',
            name: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            servicePublishParamVOList: [],
            subSourceUrl: '',
            siteAddress: ''
          },
          {
            id: '1413022989289930753',
            name: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            siteAddress: ''
          },
          {
            id: '1413022167978098689',
            name: '0708-test-1',
            dataServiceType: 2,
            districtName: '湛江市'
          }
        ],
        total: 0,
        pageParams: {
          size: 5,
          current: 1
        },
        pageSizes: [2, 4, 5, 8, 10]
      }
    },
    components: {},
    mounted() {},
    methods: {
      setpagination(val) {
        console.log(val)
      },
      btn(val) {
        console.log(val, this.$refs.gdtable.$refs.table)
      },
      onAlign(row) {
        this.tableColumn = this.tableColumn.map((item, index) => {
          if (row !== 'mixed') {
            item['align'] = row
          }
          return item
        })
        if (row === 'mixed') {
          this.tableColumn[1].align = this.tableColumn[1].align === 'center' ? 'left' : 'center'
        }
      }
    }
  }
</script>
```

:::

### 特殊表格

--【固定表头】，主要给 gd-table 添加 height 属性。  
--【批量选择】，给 tableColumn 加入 { type: 'selection'}。  
--【树状表格】，给 gd-table 标签添加 tree-props、row-key(tableData 的主键，一般为'id')、tableData 每个数据加上 children。  
--【排序】，给 tableColumn 需要排序的数据加入 sortable: true，示例'[{ prop: 'date', label: '时间',sortable: true },]'。  
--【带操作栏表格】，给 tableColumn 加入 { prop: 'operate', label: '操作', width: '200' }， gd-table 里面的 template 的 slot 插槽插入 tableColumn 的 prop 值即可。

::: demo

```html
<template>
  <div>
    <div style="padding-bottom: 10px">
      <el-radio-group size="small" v-model="radio1" @change="onChangeTable">
        <el-radio-button label="height">固定表头</el-radio-button>
        <el-radio-button label="select">批量选择</el-radio-button>
        <el-radio-button label="treeTable">树状表格</el-radio-button>
        <el-radio-button label="sort">排序</el-radio-button>
        <!--        <el-radio-button label="numHeader">多级表头</el-radio-button>-->
        <el-radio-button label="operate">带操作栏表格</el-radio-button>
      </el-radio-group>
    </div>
    <div style="height: 300px;overflow: hidden">
      <gd-table
        ref="gdtable"
        :columns="tableColumn"
        :data="tableData1"
        :border="border"
        :total="total"
        :bottom-offset="80"
        :key="JSON.stringify(tableColumn) + radio1"
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        :fix-bottom="true"
        :pageParams="pageParams"
        :pageSizes="pageSizes"
        v-bind="bindIn"
        :cell-style="{ paddingTop: '10px',paddingBottom: '10px' }"
      >
      </gd-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gd_table',
    data() {
      return {
        radio1: 'height',
        expand: false,
        bindIn: {},
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData1: [
          {
            id: 21,
            date: '2016-05-02',
            name: '王小虎',
            children: [
              {
                id: 43211,
                pid: 1,
                date: '2016-05-02',
                name: '王小虎',
                children: [],
                address: '上海市普陀区金沙江路 1518 弄'
              }
            ],
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            id: 22222,
            date: '2016-05-02',
            name: '王小虎',
            children: [
              {
                id: 155551,
                pid: 75,
                date: '2016-05-02',
                name: '王小虎',
                children: [],
                address: '上海市普陀区金沙江路 1518 弄'
              }
            ],
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            id: 17889,
            date: '2016-05-02',
            name: '王小虎',
            children: [
              {
                id: 99999,
                pid: 1,
                date: '2016-05-02',
                name: '王小虎',
                children: [],
                address: '上海市普陀区金沙江路 1518 弄'
              }
            ],
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            id: 29999,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            id: 7886766,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            children: [
              {
                id: 387686781,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              },
              {
                id: 342342,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }
            ]
          },
          {
            id: 423424,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        border: true,
        //表头数据
        tableColumn: [
          //序号 index  复选框 selection
          { prop: 'name', label: '名称' },
          { prop: 'date', label: '时间' },
          { prop: 'address', label: '地点' }
        ],
        total: 25,
        pageParams: {
          size: 3,
          current: 1
        },
        pageSizes: [2, 4, 5, 8, 10]
      }
    },
    components: {},
    created() {
      this.bindIn = { height: '250' }
    },
    methods: {
      onChangeTable(row) {
        this.bindIn = {}
        this.tableColumn = [
          //序号 index  复选框 selection
          { prop: 'name', label: '名称' },
          { prop: 'date', label: '时间' },
          { prop: 'address', label: '地点' }
        ]
        // 固定表头，超出高度表头固定
        if (row === 'height') {
          this.bindIn = { height: '250' }
        }
        // 表格选择
        if (row === 'select') {
          this.tableColumn.unshift({ type: 'selection' })
        }
        // 是否有children
        if (row === 'treeTable') {
          this.bindIn = { 'row-key': 'id' }
        }
        // 排序
        if (row === 'sort') {
          this.tableColumn = this.tableColumn.map(item => {
            item['sortable'] = true
            return item
          })
        }

        if (row === 'numHeader') {
          this.tableColumn = this.tableColumn.map(item => {
            item['children'] = [{ prop: 'name', label: '名称1' }]
            return item
          })
        }
        // 是否有操作列
        if (row === 'operate') {
          this.tableColumn.push({ prop: 'operate', label: '操作', width: '200' })
        }
      }
    }
  }
</script>
```

:::

### 动态表头

-- 可以动态改变表格的头部

::: demo

```html
<template>
  <div>
    <div style="padding-bottom: 10px">
      <el-radio-group size="small" v-model="align">
        <el-radio-button label="left">表格一</el-radio-button>
        <el-radio-button label="center">表格二</el-radio-button>
      </el-radio-group>
    </div>
    <div class="demo_tables">
      <gd-table
        ref="gdtable"
        :columns="align === 'left' ? tableColumn:tableColumn1"
        :align="align"
        :data="tableData"
        :border="border"
        :stripe="stripe"
        :cell-style="{ paddingTop: '10px',paddingBottom: '10px' }"
      >
      </gd-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gd_tabless',
    data() {
      return {
        border: true,
        stripe: false,
        align: 'left',
        //表头数据
        tableColumn: [
          //序号 index  复选框 selection
          { type: 'selection', align: 'left' },
          { prop: 'name', label: '名称', align: 'left' },
          { prop: 'districtName', label: '城市', align: 'left' },
          { prop: 'dataServiceType', label: 'icon', align: 'left' },
          { prop: 'caozuo', label: '操作', align: 'left' }
        ],
        tableColumn1: [
          //序号 index  复选框 selection
          { type: 'selection', align: 'left' },
          { prop: 'name', label: '名称1', align: 'left' },
          { prop: 'districtName', label: '城市1', align: 'left' },
          { prop: 'dataServiceType', label: 'icon1', align: 'left' },
          { prop: 'caozuo', label: '操作1', align: 'left' }
        ],
        //内容
        tableData: [
          {
            id: '1413080704593432577',
            name: 'sdfgsdfgssdf',
            dataServiceType: 1,
            secretGrade: -1,
            districtName: '湛江市/廉江市'
          },
          {
            id: '1413023861319323650',
            name: '0708-test-1',
            alias: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            servicePublishParamVOList: []
          }
        ]
      }
    },
    components: {},
    mounted() {},
    methods: {
      setpagination(val) {
        console.log(val)
      }
    }
  }
</script>
```

:::

### 多级表头

--只要在对应的列加上 children 属性即可实现多级表头

::: demo

```html
<template>
  <div>
    <div class="demo_tables">
      <gd-table ref="gdtable" :columns="tableColumn" :align="align" :data="tableData" :border="border" :stripe="stripe" :cell-style="{ paddingTop: '10px',paddingBottom: '10px' }">
      </gd-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gd_tabless',
    data() {
      return {
        border: true,
        stripe: false,
        align: 'left',
        //表头数据
        tableColumn: [
          //序号 index  复选框 selection
          { type: 'selection' },
          {
            prop: 'name',
            label: '名称',
            children: [
              {
                label: '二级表头1',
                prop: 'district',
                align: 'center',
                children: [
                  {
                    label: '三级表头1',
                    prop: 'district1',
                    align: 'left'
                  },
                  {
                    label: '三级表头2',
                    prop: 'timeDimension2',
                    align: 'right'
                  }
                ]
              },
              {
                label: '二级表头2',
                prop: 'timeDimension',
                align: 'center'
              }
            ]
          },
          { prop: 'districtName', label: '城市' },
          { prop: 'dataServiceType', label: 'icon' },
          { prop: 'caozuo', label: '操作' }
        ],
        //内容
        tableData: [
          {
            id: '1413080704593432577',
            name: 'sdfgsdfgssdf',
            dataServiceType: 1,
            secretGrade: -1,
            district: 12,
            district1: 12,
            timeDimension: 13,
            timeDimension2: 20,
            districtName: '湛江市/廉江市'
          },
          {
            id: '1413023861319323650',
            name: 'test-1',
            alias: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            district: 12,
            district1: 12,
            timeDimension: 13,
            timeDimension2: 20,
            servicePublishParamVOList: []
          }
        ]
      }
    },
    components: {},
    mounted() {},
    methods: {}
  }
</script>
```

:::

### 自定义表头样式

--只需要在列属性加上 isHeader:true 即可，默认为 false

::: demo

```html
<template>
  <div>
    <div class="demo_tables">
      <gd-table ref="gdtable" :columns="tableColumn" :align="align" :data="tableData" :border="border" :stripe="stripe" :cell-style="{ paddingTop: '10px',paddingBottom: '10px' }">
        <template slot="districtName">
          <el-tag>123</el-tag>
        </template>
      </gd-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gd_tabless',
    data() {
      return {
        border: true,
        stripe: false,
        align: 'left',
        //表头数据
        tableColumn: [
          //序号 index  复选框 selection
          { type: 'selection' },
          {
            prop: 'name',
            label: '名称'
          },
          { prop: 'districtName', label: '城市', isHeader: true },
          { prop: 'dataServiceType', label: 'icon' },
          { prop: 'caozuo', label: '操作' }
        ],
        //内容
        tableData: [
          {
            id: '1413080704593432577',
            name: 'sdfgsdfgssdf',
            dataServiceType: 1,
            secretGrade: -1,
            district: 12,
            district1: 12,
            timeDimension: 13,
            timeDimension2: 20,
            districtName: '湛江市/廉江市'
          },
          {
            id: '1413023861319323650',
            name: 'test-1',
            alias: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            district: 12,
            district1: 12,
            timeDimension: 13,
            timeDimension2: 20,
            servicePublishParamVOList: []
          }
        ]
      }
    },
    components: {},
    mounted() {},
    methods: {}
  }
</script>
```

:::

### 表格可拖拽行列

--设置 rowSortable:true 可拖拽行，设置 columnSortable:true 可拖拽列

::: demo

```html
<template>
  <div>
    <div class="demo_tables">
      <gd-table
        ref="gdtable"
        :columns="tableColumn"
        :align="align"
        :data="tableData"
        :border="border"
        :stripe="stripe"
        :row-sortable="true"
        :column-sortable="true"
        :cell-style="{ paddingTop: '10px',paddingBottom: '10px' }"
      >
        <template slot="districtName">
          <el-tag>123</el-tag>
        </template>
      </gd-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gd_tabless',
    data() {
      return {
        border: true,
        stripe: false,
        align: 'left',
        //表头数据
        tableColumn: [
          //序号 index  复选框 selection
          { type: 'selection' },
          {
            prop: 'name',
            label: '名称'
          },
          { prop: 'districtName', label: '城市', isHeader: true },
          { prop: 'dataServiceType', label: 'icon' },
          { prop: 'caozuo', label: '操作' }
        ],
        //内容
        tableData: [
          {
            id: '1413080704593432577',
            name: 'sdfgsdfgssdf',
            dataServiceType: 1,
            secretGrade: -1,
            district: 12,
            district1: 12,
            timeDimension: 13,
            timeDimension2: 20,
            districtName: '湛江市/廉江市'
          },
          {
            id: '1413023861319323650',
            name: 'test-1',
            alias: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            district: 12,
            district1: 12,
            timeDimension: 13,
            timeDimension2: 20,
            servicePublishParamVOList: []
          }
        ]
      }
    },
    components: {},
    mounted() {},
    methods: {}
  }
</script>
```

:::

### checkbox 表格 gd-check-table

-- checkTreeSelect 是否启动表格树选择框，这个与 tableColumn：{type: 'selection'}冲突,如果出现 tableColumn：{type: 'selection'}，则 checkTreeSelect 无效。  
-- checkStrictly 是否严格遵循父子关联。  
-- indeterminate 半选状态字段可以定义默认：indeterminate。  
-- checkedRow 选中状态字段可以定义默认：checkedRow。  
-- checkRow 在第几列展示默认：1。

::: demo

```html
<template>
  <div>
    <div style="padding-bottom: 10px">
      <el-row :gutter="10">
        <el-col :span="5">
          <el-select v-model="checkRow" placeholder="请选择">
            <el-option :value="1" label="checkRow: 1"></el-option>
            <el-option :value="2" label="checkRow: 2"></el-option>
            <el-option :value="3" label="checkRow: 3"></el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-checkbox-group v-model="checkStrictly" style="line-height: 36px">
            <el-checkbox :label="true">严格遵循父子关联模式</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <div style="margin-top: 10px">
        <el-button type="primary" @click="setCheckedKeys">设置初始值</el-button>
        <el-button type="primary" @click="onGetSelectTable">获取选中元素</el-button>
      </div>
    </div>
    <!-- <gd-check-table
      ref="gdtable"
      row-key="id"
      :columns="tableColumn"
      :data="tableData"
      :hiddenPage="false"
      :border="border"
      :total="total"
      :stripe="stripe"
      default-expand-all
      :checkRow="checkRow"
      :checkTreeSelect="true"
      :checkStrictly="checkStrictly"
      :pageParams="pageParams"
      @pagination="onPagination"
      @onChangeTreeTable="onChangeTreeTable"
      :pageSizes="pageSizes"
    >
      <template slot="date" slot-scope="scope">
        {{scope.row.date}}
      </template>
    </gd-check-table> -->
  </div>
</template>
<script>
  export default {
    name: 'gd_check_table',
    data() {
      return {
        checkStrictly: true,
        checkRow: 1,
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
    mounted() {},
    methods: {
      onPagination(val) {
        console.log(val)
      },
      // 获取选中值
      onChangeTreeTable(row, res, row1, res1, data) {
        console.log(row, res, row1, res1, data)
      },
      onGetSelectTable() {
        const { arrAllSelect, arrHalfSelect, allSelect, halfSelect } = this.$refs.gdtable.getCheckedData()
        console.log(arrAllSelect, arrHalfSelect, allSelect, halfSelect)
      },
      setCheckedKeys() {
        // this.$refs.gdtable.setCheckedKeys([{
        //   id: 32000,
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }])
        // 或者
        this.$refs.gdtable.setCheckedKeys([4, 32000])
      }
    }
  }
</script>
```

:::

<mdtable mdname='table'></mdtable>
