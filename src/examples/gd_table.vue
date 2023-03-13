<template>
  <div class="searchPage">
    <div class="demo-form-inline">
      <el-form :inline="true" :model="ruleForm">
        <el-form-item label="活动名称：" prop="name" placeholder="活动名称">
          <el-input v-model="ruleForm.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="活动区域：" prop="region" size="small">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动性质：" prop="type" v-show="expand">
          <el-checkbox-group v-model="ruleForm.type" size="small">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源：" prop="resource" v-show="expand">
          <el-radio-group v-model="ruleForm.resource" size="small">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
          <el-button @click="reset" size="small">重置</el-button>
          <el-button type="primary" @click="reset" size="small">新增</el-button>
          <el-button v-if="expand" type="text" @click="expandBtn">收起<i class="el-icon-arrow-up"></i></el-button>
          <el-button v-else type="text" @click="expandBtn">展开<i class="el-icon-arrow-down"></i></el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="demo_tables">
      <gd-table-test
        ref="gdtable"
        :columns="tableColumn"
        :data="tableData"
        :border="border"
        :total="total"
        :bottom-offset="80"
        :fix-bottom="true"
        :pageParams="pageParams"
        @pagination="setpagination"
        :row-sortable="true"
        :pageSizes="pageSizes"
      >
        <!-- 特殊的字段处理 -->
        <template slot="dataServiceType" slot-scope="scope">
          <span :style="{ color: scope.row.dataServiceType === 1 ? 'red' : 'blue' }">
            <i :class="scope.row.dataServiceType === 1 ? 'el-icon-eleme' : 'el-icon-star-off'" />
            {{ scope.row.dataServiceType === 1 ? '测试' : '车市2' }}
          </span>
        </template>
        <template slot="districtName">
          <el-tag>123</el-tag>
        </template>
        <template slot="caozuo" slot-scope="scope">
          <el-button size="small" @click="btn(scope)"> 查看 </el-button>
        </template>
      </gd-table-test>
    </div>
  </div>
</template>

<script>
import { tableDatas } from './table'
import GdTableTest from '../components/gd_table'
export default {
  name: 'gd_tables',
  data() {
    return {
      expand: false,
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
      border: true,
      //表头数据
      tableColumn: [
        {
          type: 'selection',
          width: '50px',
          align: 'center'
        },
        {
          label: '字典名称',
          prop: 'dictValue',
          align: 'center'
        },
        {
          label: '字典编号',
          prop: 'dictKey',
          align: 'center'
        },
        {
          label: '字典类型',
          prop: 'type',
          width: '100px',
          align: 'center'
        },
        {
          label: '状态',
          prop: 'status',
          width: '100px',
          align: 'center'
        },
        {
          label: '字典排序',
          prop: 'sort',
          width: '100px',
          align: 'center'
        },
        {
          label: '操作',
          prop: 'caozuo',
          width: '300px',
          align: 'center',
          fixed: 'right'
        }
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
      ],
      total: 5,
      pageParams: {
        size: 3,
        current: 1
      },
      pageSizes: [2, 4, 5, 8, 10]
    }
  },
  components: {
    GdTableTest
  },
  mounted() {
    window.demo = this
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    expandBtn() {
      this.expand = !this.expand
    },
    setpagination(val) {
      console.log(val)
    },
    btn(val) {
      console.log(val, this.$refs.gdtable.$refs.table)
    },
    reset() {
      this.ruleForm = {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>
