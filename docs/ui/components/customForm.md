# 自定义表单组件 gd-customForm

自定义表单组件,简单常用的表单组件  
特征：对于常见表单,可以通过简单的 setting 数据传参即可使用,解决代码量多的问题

### 基本用法

:::demo

```html
<template>
  <div style="width: 100%">
    <div style="margin: 10px 0 0 10px">
      <el-button @click="searchBtn"> 搜索 </el-button>
      <el-button @click="restBtn"> 重置 </el-button>
    </div>
    <gd-customForm :setting="setting" :dictionary="dictionary" ref="formCustom" v-model="queryForm" />
    <!-- <gd-custom-form :setting="setting" :dictionary="dictionary" ref="formCustom" v-model="queryForm" /> -->
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        queryForm: {},
        dictionary: {
          hylx_basics: [
            {
              code: '2',
              text: '测试2'
            },
            {
              code: '1',
              text: '测试1'
            }
          ],

          ytlx: [
            {
              code: '2',
              text: '现场议题'
            },
            {
              code: '1',
              text: '线上议题'
            }
          ]
        },
        setting: [
          {
            key: 'kssj',
            label: '会议时间:',
            col: 11,
            textAlignLeft: false, // label左对齐，默认右对齐
            props: {},
            component: 'data-single'
          },
          {
            key: 'hybh',
            label: '年度召开次数:',
            col: 11,
            offset: 2,
            component: 'input',
            textAlignLeft: false, // label左对齐，默认右对齐
            props: {
              placeholder: '(系统自动生成)',
              disabled: true,
              clearable: false
            },
            'form-item-props': {
              'label-width': 140
            }
          },
          {
            key: 'ytmc',
            label: '议题名称:',
            col: 11,
            component: 'input',
            textAlignLeft: false, // label左对齐，默认右对齐
            props: {
              placeholder: '请输入'
            },
            rules: [{ required: true, message: '请输入议题名称', trigger: 'blur' }]
          },
          {
            key: 'ytlx',
            label: '议题类型:',
            col: 11,
            offset: 2,
            component: 'select',
            dictionary: 'ytlx',
            props: {},
            'form-item-props': {
              'label-width': 140
            },
            rules: [{ required: true, message: '请选择议题类型', trigger: 'blur' }]
            // showAll: true,
            // default: '%all%'
          },
          {
            key: 'hylx',
            label: '会议类型:',
            textAlignLeft: false, // label左对齐，默认右对齐
            showAll: true, //设置是否有全部这个选项
            col: 11,
            props: {},
            rules: [{ required: true, message: '请选择会议类型', trigger: 'blur' }],
            component: 'select',
            dictionary: 'hylx_basics'
          },
          {
            key: 'zqsj',
            label: '周期时间:',
            col: 11,
            offset: 2,
            component: 'date-picker',
            'form-item-props': {
              'label-width': 140
            }
          },
          {
            key: 'formId',
            label: '议题内容:',
            textAlignLeft: false, // label左对齐，默认右对齐
            col: 24,
            component: 'input',
            'form-item-props': {
              'label-width': 100
            }
          },
          {
            key: 'date',
            label: '时间:',
            textAlignLeft: false, // label左对齐，默认右对齐
            col: 24,
            component: 'date-time',
            'form-item-props': {
              'label-width': 100
            }
          }
        ]
      }
    },
    methods: {
      searchBtn() {
        console.log(this.queryForm)
      },
      restBtn() {
        this.$refs.formCustom.reset()
      }
    }
  }
</script>
```

:::

**表单和表格结合**
:::demo

```html
<template>
  <div style="width: 100%">
    <gd-customForm style="padding-left:0" :setting="setting" :dictionary="dictionary" ref="formCustom" v-model="queryForm">
      <!-- <template slot="extend">
        <el-col :span="3">
          <el-form-item style="float:right;">
            <el-button @click="searchBtn" type="primary"> 搜索 </el-button>
          </el-form-item>
        </el-col>
      </template> -->
    </gd-customForm>
    <div class="demo_tables" style="margin-left:20px">
      <gd-table
        ref="gdtable"
        :columns="tableColumn"
        :data="tableData"
        :border="border"
        :total="total"
        :pageParams="pageParams"
        @pagination="setpagination"
        :pageSizes="pageSizes"
        :cell-style="{ paddingTop: '6px',paddingBottom: '6px' }"
      >
        <!-- 特殊的字段处理 -->
        <template slot="dataServiceType" slot-scope="scope">
          <span :style="{ color: scope.row.dataServiceType === 1 ? 'red' : 'blue' }">
            <i :class="scope.row.dataServiceType === 1 ? 'el-icon-eleme' : 'el-icon-star-off'" />
            {{ scope.row.dataServiceType === 1 ? '测试' : '车市2' }}
          </span>
        </template>
        <template slot="caozuo" slot-scope="scope">
          <el-button size="small" @click="btn(scope)"> 查看 </el-button>
        </template>
      </gd-table>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        border: true,
        //表头数据
        tableColumn: [
          //序号 index  复选框 selection
          { type: 'selection' },
          { prop: 'name', label: '名称' },
          { prop: 'districtName', label: '城市' },
          { prop: 'dataServiceType', label: '议题类型' },
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
        total: 5,
        pageParams: {
          size: 5,
          current: 1
        },
        pageSizes: [2, 4, 5, 8, 10],
        queryForm: {},
        dictionary: {
          ytlx: [
            {
              code: '2',
              text: '测试'
            },
            {
              code: '1',
              text: '车市'
            }
          ]
        },
        setting: [
          {
            key: 'ytmc',
            label: '名称:',
            col: 6,
            component: 'input',
            textAlignLeft: false, // label左对齐，默认右对齐
            props: {
              placeholder: '请输入'
            }
          },
          {
            key: 'ytlx',
            label: '议题类型:',
            col: 7,
            component: 'select',
            dictionary: 'ytlx'
          },

          {
            key: 'date',
            label: '上线时间:',
            textAlignLeft: false, // label左对齐，默认右对齐
            col: 7,
            component: 'data-single'
          }
        ]
      }
    },
    methods: {
      searchBtn() {
        console.log(this.queryForm)
      },
      restBtn() {
        this.$refs.formCustom.reset()
      },
      setpagination(val) {
        console.log(val)
      },
      btn(val) {
        console.log(val, this.$refs.gdtable.$refs.table)
      }
    }
  }
</script>
```

:::

<mdtable mdname='customForm'></mdtable>
