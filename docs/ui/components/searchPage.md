# 列表增删改查

### 增删改查

-- 支持表格高度自适应 参数 bottom-offset:80 距离顶部的距离 fix-bottom:false 是否将表格固定在底部

::: demo

```html
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
        <el-button v-if="expand" type="text" @click="expandBtn">收起<i class="el-icon-arrow-up"></i></el-button>
        <el-button v-else type="text" @click="expandBtn">展开<i class="el-icon-arrow-down"></i></el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="add-button"><el-button type="primary" @click="add('')" size="small">新增</el-button></div>
  <div class="demo_tables">
    <gd-table
      ref="gdtable"
      :columns="tableColumn"
      :bottom-offset="80"
      :data="tableData"
      :border="border"
      :total="total"
      :pageParams="pageParams"
      @pagination="setpagination"
      :pageSizes="pageSizes"
    >
      <!-- 特殊的字段处理 -->
      <template slot="dataServiceType" slot-scope="scope">
        <span :style="{ color: scope.row.dataServiceType === 1 ? 'red' : 'blue' }">
          <i :class="scope.row.dataServiceType === 1 ? 'el-icon-eleme' : 'el-icon-star-off'" />
          {{ scope.row.dataServiceType === 1 ? '测试' : '车市2' }}
        </span>
      </template>
      <template slot="caozuo" slot-scope="scope">
        <el-button size="small" @click="add(scope)"> 查看 </el-button>
      </template>
    </gd-table>
  </div>
  <gd-dialog :title="title" :z-index="201" :closed.sync="addDialog" :append-to-body="true" width="880px" height="500px" draggable maximizable :maximized.sync="maximized">
    我支持拖拽，放大缩小
  </gd-dialog>
</div>
<script>
  export default {
    data() {
      return {
        addDialog: false,
        maximized: false,
        title: '新增',
        expand: false,
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        border: true,
        //表头数据
        tableColumn: [
          //序号 index  复选框 selection
          { type: 'selection' },
          { prop: 'name', label: '名称' },
          { prop: 'districtName', label: '城市' },
          { prop: 'dataServiceType', label: 'icon' },
          { prop: 'caozuo', label: '操作' },
        ],
        //内容
        tableData: [
          {
            id: '1413080704593432577',
            name: 'sdfgsdfgssdf',
            dataServiceType: 1,
            secretGrade: -1,
            districtName: '湛江市/廉江市',
          },
          {
            id: '1413023861319323650',
            name: '0708-test-1',
            alias: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            servicePublishParamVOList: [],
          },
          {
            id: '1413023370535370753',
            name: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            servicePublishParamVOList: [],
            subSourceUrl: '',
            siteAddress: '',
          },
          {
            id: '1413022989289930753',
            name: '0708-test-1',
            dataServiceType: 1,
            districtName: '湛江市',
            siteAddress: '',
          },
          {
            id: '1413022167978098689',
            name: '0708-test-1',
            dataServiceType: 2,
            districtName: '湛江市',
          },
        ],
        total: 5,
        pageParams: {
          size: 3,
          current: 1,
        },
        pageSizes: [2, 4, 5, 8, 10],
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
      add(type = '') {
        this.addDialog = true
        this.title = type === '' ? '新增' : '查看'
        console.log('add!')
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
          desc: '',
        }
      },
    },
  }
</script>
<style>
  .searchPage {
    height: 600px;
  }
  .add-button {
    text-align: right;
    padding-bottom: 10px;
  }
</style>
```

:::

### 效果查看

**高度随着页面自动变化，超出表格显示滚动条**
![An image](/vuepressblog/gif/table_auto.gif)

**高度固定在底部，超出表格显示滚动条**
![An image](/vuepressblog/gif/table-_fix.gif)
