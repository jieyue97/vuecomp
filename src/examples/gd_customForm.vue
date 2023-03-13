
<template>
  <div style="height: 90vh; width: 100%">
    <div style="margin: 10px 0 0 10px">
      <el-button @click="searchBtn"> 搜索 </el-button>
      <el-button @click="restBtn"> 重置 </el-button>
    </div>
    <GdCustom :setting="setting" :dictionary="dictionary" ref="formCustom" v-model="queryForm">
      <template slot="headExtend">
        <el-col :span="11"> 1111 </el-col>
      </template>
      <template slot="footExtend">
        <el-col :span="11"> 2222 </el-col>
      </template>
    </GdCustom>
    <!-- <gd-custom-form :setting="setting" :dictionary="dictionary" ref="formCustom" v-model="queryForm" /> -->
  </div>
</template>
<script>
import GdCustom from '../components/gd_customForm'
export default {
  name: "gd_customForm_item",
  components: {
    GdCustom
  },
  data() {
    return {
      size: 'mini',
      queryForm: {},
      dictionary:
      {
        "hylx_basics": [
          {
            "name": "2",
            "sid": "测试2"
          },
          {
            "name": "1",
            "sid": "测试1"
          }
        ],

        "ytlx": [
          {
            "code": "2",
            "text": "现场议题"
          },
          {
            "code": "1",
            "text": "线上议题"
          }
        ],
      }
      ,
      setting: [
        {
          key: 'kssj',
          width: '250px',
          label: '会议时间:',
          col: 11,
          textAlignLeft: true, // label左对齐，默认右对齐
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
          textAlignLeft: true, // label左对齐，默认右对齐
          props: {
            placeholder: '请输入',

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
          props: {

          },
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
          showAll: true,  //设置是否有全部这个选项
          col: 11,
          props: {},
          rules: [{ required: true, message: '请选择会议类型', trigger: 'blur' }],
          component: 'select',
          dictionary: 'hylx_basics',
          options: {
            label: 'name',
            value: 'sid'
          }
        },
        {

          key: 'zqsj',
          label: '周期时间:',
          col: 11,
          offset: 2,
          component: 'date-picker',
          'form-item-props': {
            'label-width': 140
          },
        },
        {
          key: 'formId',
          label: '议题内容:',
          textAlignLeft: true, // label左对齐，默认右对齐
          col: 24,
          component: 'input',
        },
        {
          key: 'date',
          label: '时间:',
          textAlignLeft: true, // label左对齐，默认右对齐
          col: 24,
          component: 'date-time',
        }
      ]
    }
  },
  methods: {
    searchBtn() {
      console.log(this.queryForm);
    },
    restBtn() {
      this.$refs.formCustom.reset()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
