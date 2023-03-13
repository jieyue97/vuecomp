<template>
  <div>
    <div class="demo_tables">
      <gd-header
        ref="gdtable"
        :columns="tableColumn"
        :align="align"
        :data="tableData"
        :border="border"
        :stripe="stripe"
        :cell-style="{ paddingTop: '10px', paddingBottom: '10px' }"
      >
        <template slot="districtName">
          <el-tag>123</el-tag>
        </template>
      </gd-header>
    </div>
  </div>
</template>

<script>
import GdHeader from '../components/gd_table'
export default {
  name: 'gd_tabless_o',
  components: { GdHeader },
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
        },
        { prop: 'districtName', label: '城市' },
        { prop: 'dataServiceType', label: 'icon' },
        { prop: 'caozuo', label: '操作' }
      ],
      //内容
      tableData: [
        {
          id: '1413080704593432577',
          name: 'sdfgsd阿打发打开了sfkaksdfgssd【拉夫罗夫：核战争风险真实存在 其危险性不可低估】财联社4月26日电，俄罗斯外长拉夫罗夫当地时间25日接受俄罗斯媒体采访时说，核战争风险真实存在，其危险性不可低估。拉夫罗夫同时强调，核战争是不可接受的，这是俄罗斯的原则立场。f',
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
  mounted() { },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>