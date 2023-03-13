<template>
  <div>
    <div class="demo_tables">
      <gd-table-test
        ref="gdtable"
        :columns="tableColumn"
        :align="align"
        :data="tableData"
        :border="border"
        :stripe="stripe"
        :row-style="{ background: 'red' }"
        :header-row-style="headerFun"
        :cell-style="{ paddingTop: '10px', paddingBottom: '10px' }"
      >
        <template slot="dataServiceType">
          <el-button type="primary" size="small">查看 </el-button>
        </template>
        <template slot="districtName">
          <el-button type="primary" size="small">查看 </el-button>
        </template>
        <template slot="district1" slot-scope="scope">
          <el-button type="text" size="small">district1{{ scope.row }} </el-button>
        </template>
        <template slot="timeDimension" slot-scope="scope">
          <el-button type="text" size="small">多级表头22 {{ scope.row }}</el-button>
        </template>
      </gd-table-test>
    </div>
  </div>
</template>

<script>
import GdTableTest from '../components/gd_table'
export default {
  name: 'gd_tables',
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
                  align: 'left',
                  slotFlag: true,
                },
                {
                  label: '三级表头2',
                  prop: 'timeDimension2',
                  align: 'right',
                },
              ],
            },
            {
              label: '二级表头2',
              prop: 'timeDimension',
              align: 'center',
              slotFlag: true,
            },
          ],
        },
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
          district: 12,
          district1: 12,
          timeDimension: 13,
          timeDimension2: 20,
          districtName: '湛江市/廉江市',
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
          timeDimension2: 22,
          servicePublishParamVOList: [],
        },
      ],
    }
  },
  components: { GdTableTest },
  mounted() {},
  methods: {
    headerFun(row) {},
  },
}
</script>
